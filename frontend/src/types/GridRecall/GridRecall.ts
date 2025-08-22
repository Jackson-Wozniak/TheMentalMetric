import type { GridRecallState } from "../../components/GridRecall/GridDispatch";
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

export function fromGridRecallDispatchState(state: GridRecallState){
    return {
        completedLevels: 0,
        levelPerformance: [],
        buttonAccuracy: []
    }
}
