import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { GRID_RECALL_ALLOWED_MISSES } from "../../../utils/GridRecall/GridRecallProperties";
import { CenteredFullWindow } from "../../../styles/Shared";
import { Box } from "@mui/material";


const GridLevelStart: React.FC<{
    level: number,
    startLevel: () => void,
    missesLeft: number
}> = ({level, startLevel, missesLeft}) => {
    return (
        <Box sx={CenteredFullWindow()}>
            <Typography variant="h3" color="textPrimary">Next Level: {level}</Typography>
            <br/>
            <Typography variant="body1" color="textPrimary">Lives Left: {missesLeft} / {GRID_RECALL_ALLOWED_MISSES}</Typography>
            <br/>
            <Button onClick={startLevel} variant="contained">Start</Button>
        </Box>
    )
}

export default GridLevelStart;