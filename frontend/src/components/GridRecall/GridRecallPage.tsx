import { Box, Button } from "@mui/material";
import ContentContainer from "../Shared/ContentContainer"
import GameGrid from "./GameGrid";
import { useState } from "react";
import type { GridRecallState } from "./GridDispatch";
import GridGameSummary from "./GridGameSummary";

const GridRecallPage: React.FC = () => {
    const [gameEnded, setGameEnded] = useState<boolean>();
    const [gameState, setGameState] = useState<GridRecallState | undefined>();

    function handleGameOver(state: GridRecallState){
        setGameEnded(true);
        setGameState(state);
    }
    
    if(gameEnded && gameState != undefined){
        return <GridGameSummary endingState={gameState}/>
    }

    return (
        <ContentContainer>
            <Box sx={{display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center"}}>
                <GameGrid endGame={handleGameOver}/>
            </Box>
        </ContentContainer>
    )
}

export default GridRecallPage;