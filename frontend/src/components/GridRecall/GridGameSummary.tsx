import { useState } from "react";
import { toGridRecallPerformance, type GridRecallPerformance } from "../../types/GridRecall/GridRecall";
import type { GridRecallState, GridLevelStats } from "./GridDispatch";


const GridGameSummary: React.FC<{
    endingState: GridRecallState
}> = ({endingState}) => {
    const [gamePerformance, setGamePerformance] = useState<GridRecallPerformance>(toGridRecallPerformance(endingState));

    return (
        <div>

        </div>
    )
}

export default GridGameSummary;