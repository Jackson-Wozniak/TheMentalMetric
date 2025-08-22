import { useState } from "react";
import { fromGridRecallDispatchState, type GridRecallPerformance } from "../../types/GridRecall/GridRecall";
import type { GridRecallState } from "./GridDispatch";


const GridGameSummary: React.FC<{
    endingState: GridRecallState
}> = ({endingState}) => {
    const [gamePerformance, setGamePerformance] = useState<GridRecallPerformance>(fromGridRecallDispatchState(endingState));

    return (
        <div>

        </div>
    )
}

export default GridGameSummary;