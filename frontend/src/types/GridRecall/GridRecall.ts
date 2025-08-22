import type { GridLevelStats, GridRecallState } from "../../components/GridRecall/GridDispatch";
import type { ButtonState } from "./GridEnums";

export interface GridButtonState {
    index: number,
    state: ButtonState
}

//Allows for mapping between index on a 3x3, 4x4, 5x5 grid to a universal grid
function getScaledGridButtonIndex(index: number, gridWidth: number){

}

export interface GridLevelPerformance {
    level: number,
    averageTimeBetweenGuesses: number,
    totalTimeTaken: number,
}

export interface GridButtonAccuracy {
    index: number,
    correctGuesses: number,
    errorRate: number
}

export interface GridRecallPerformance {
    completedLevels: number,
    levelPerformance: GridLevelPerformance[]
    buttonAccuracy: GridButtonAccuracy[]
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

function toGridLevelPerformance(stats: GridLevelStats){
    console.log(toTimestamps(stats.timeOfGuesses));
    const levelPerformance: GridLevelPerformance = {
        level: stats.level,
        averageTimeBetweenGuesses: average(toTimestamps(stats.timeOfGuesses)),
        totalTimeTaken: stats.timeOfGuesses[stats.timeOfGuesses.length - 1] - stats.startTime
    }
    return levelPerformance;
}

function toGridButtonAccuracy(state: GridRecallState){

}

export function toGridRecallPerformance(state: GridRecallState){
    return {
        completedLevels: state.level,
        levelPerformance: Array.from(state.levelStats.values()).map(toGridLevelPerformance),
        buttonAccuracy: []
    }
}
