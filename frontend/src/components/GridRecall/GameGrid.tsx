import { Box, Button, Typography, useTheme } from '@mui/material';
import { useEffect, useReducer, useState } from 'react';
import { findGridLevelProperties, type GridLevelProperties } from '../../utils/GridRecall/GridRecallProperties';
import { GridRecallReducer, inititalGridRecallState } from './GridDispatch';
import React from 'react';
import { ButtonState } from '../../types/GridRecall/GridEnums';
import type { GridButtonState } from '../../types/GridRecall/GridRecall';
import GridLevelStart from './GridLevelStart';
import { CenteredFullWindow } from '../../styles/Shared';

/*
Stats to gather:
    - time between correct guesses
        starts after the first correct guess of round
    - time until first correct guess (count at each level)
    - recall speed (total time from end of time to completed level)
    - error rate (per level: wrong / total flashed buttons)
    - grid performance
        * count the error rate by the exact location of the button
        * count each time a button was chosen, and when each button was guessed
*/

const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

function getBackgroundColor(state: ButtonState, isTimerRunning: boolean){
    if(state == 1 && isTimerRunning) return "#ffffffff";
    if(state == 2) return "#285523ff";
    if(state == 3) return "#d34a4aff";
    return "#4559cbff";
}

/*
IMPORTANT NOTE: this is just testing, the actual approach has to be cleaner
*/
const GameGrid: React.FC = () => {
    const theme = useTheme();

    const [gameState, gameDispatch] = useReducer(GridRecallReducer, inititalGridRecallState);

    const [levelCompleted, setLevelCompleted] = useState<boolean>(true);

    const [correctLeft, setCorrectLeft] = useState<number>(0);

    const [timerRunning, setTimerRunning] = useState<boolean>(false);

    const [buttons, setButtons] = useState<GridButtonState[]>(generateLevelButtons(findGridLevelProperties(1)));

    function beginLevelTimer(){
        setLevelCompleted(false);
        //display the random button color changes for X amount of time
        const properties: GridLevelProperties = findGridLevelProperties(gameState.level);
        setButtons(generateLevelButtons(properties));
        setCorrectLeft(properties.buttonFlashCount);

        setTimerRunning(true);

        const timer = setTimeout(() => {
            setTimerRunning(false);
            gameDispatch({ type: "StartLevel" })
        }, properties.buttonFlashTime);

        return () => clearTimeout(timer);
    }

    function generateLevelButtons(properties: GridLevelProperties){
        const flashesLeft = properties.buttonFlashCount;
        let flashedButtons: number[] = [];
        for(let i = 0; i < flashesLeft; i++){
            let rand = getRandomNumber(0, properties.gridWidth * properties.gridWidth);
            if(flashedButtons.includes(rand)){
                i--;
                continue;
            }
            flashedButtons.push(rand);
        }

        let created: GridButtonState[] = [];
        for(let i = 0; i < properties.gridWidth * properties.gridWidth; i++){
            created.push({index: i, state: flashedButtons.includes(i) 
                ? ButtonState.FLASHED : ButtonState.NONE});
        }
        return created;
    }

    function handleGridButtonClick(index: number){
        const timestamp = Date.now();
        if(timerRunning) return;
        let array = [...buttons];
        const buttonIndex = array.map(b => b.index).indexOf(index);
        if(buttonIndex == -1) return;

        if(array[buttonIndex].state == ButtonState.GUESSED_CORRECT) return;

        if(array[buttonIndex].state == ButtonState.FLASHED){
            array[buttonIndex].state = ButtonState.GUESSED_CORRECT;
            gameDispatch({ type: "CorrectGuess", payload: { timestamp: timestamp, index: index }})

            if(correctLeft - 1 == 0){
                gameDispatch({type: "IncrementLevel"})
                setLevelCompleted(true);
                setCorrectLeft(0);
            }else{
                setCorrectLeft(correctLeft - 1);
            }
        }else{
            array[buttonIndex].state = ButtonState.GUESSES_INCORRECT;
        }
        setButtons(array);
    }

    function toTimestamps(times: number[]){
        let intitialGuess = times[0];
        const durations = [];
        for(let i = 1; i < times.length; i++){
            durations.push(times[i] - intitialGuess);
            intitialGuess = times[i];
        }
        return durations;
    }

    function average(times: number[]){
        return times.reduce((acc, curr) => acc + curr, 0) / times.length;
    }

    if(levelCompleted){
        return (
            <GridLevelStart level={gameState.level} startLevel={beginLevelTimer} 
                missesLeft={gameState.missesLeft}/>
        )
    }

    return (
        <Box sx={{height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
            
            <Box
                sx={{
                    aspectRatio: "1 / 1",
                    display: "grid",
                    gridTemplateColumns: `repeat(${findGridLevelProperties(gameState.level).gridWidth}, 1fr)`,
                    width: Math.min(theme.width, theme.height) * .8, 
                    height: Math.min(theme.width, theme.height) * .8
                }}
            >
            {buttons.map((b: GridButtonState) => {
                return (
                    <Button key={b.index} onClick={() => handleGridButtonClick(b.index)}
                        sx={{height: "100%", aspectRatio: "1 / 1", border: "1px solid black", background: 
                        getBackgroundColor(b.state, timerRunning), color: "white"}}>
                    </Button>
                )
            })}
            </Box>
        </Box>
    )
}

export default GameGrid;