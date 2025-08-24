import { useEffect, useState } from "react";
import type { GridRecallPerformance, GridButtonAccuracy, GridLevelPerformance } from "../../types/GridRecall/GridRecall";
import { Box, Typography, Button } from "@mui/material";
import { CenteredFullWindow } from "../../styles/Shared";
import { GRID_RECALL_ALLOWED_MISSES } from "../../utils/GridRecall/GridRecallProperties";
import type { GridRecallPerformanceReport } from "../../types/GridRecall/GridRecallDto";
import { fetchEvalulateGridPerformance } from "../../api/GridRecallClient";


const GridGameSummary: React.FC<{
    gameResults: GridRecallPerformance
}> = ({gameResults}) => {
    const [showLandingPage, setShowLandingPage] = useState<boolean>(true);
    const [performanceReport, setPerformanceReport] = useState<GridRecallPerformanceReport | undefined>();

    useEffect(() => {
        fetchEvalulateGridPerformance(gameResults).then((report: GridRecallPerformanceReport) => {
            setPerformanceReport(report);
        });
    }, [gameResults])

    if(showLandingPage || performanceReport == null){
        return (
            <Box sx={CenteredFullWindow()}>
                <Typography variant="h3" color="textPrimary">Level {gameResults.completedLevels}</Typography>
                <br/>
                <Button onClick={() => setShowLandingPage(false)} variant="contained">Show My Performance</Button>
            </Box>
        )
    }

    return (
        <div>

        </div>
    )
}

export default GridGameSummary;