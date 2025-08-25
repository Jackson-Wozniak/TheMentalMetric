import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { Game } from "../../types/GameInfo";
import { Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

const GameCard: React.FC<{
    game: Game,
    timesPlayed: number
}> = ({game, timesPlayed}) => {
    const theme = useTheme();

    return (
        <Box 
            sx={{
                display: "flex", flexDirection: "column", justifyContent: "flex-start", 
                backgroundColor: theme.palette.background.secondary, textAlign: "center", 
                minWidth: "20%", borderRadius: "10px", minHeight: "250px", alignItems: "center"
            }}>
            <Typography color="textPrimary">{game.name}</Typography>
            <Typography color="textSecondary">{timesPlayed} times played</Typography>
            <Button component={Link} to={game.link} color="primary" variant="contained" endIcon={<SendIcon/>}>
                Play
            </Button>
        </Box>
    )
}

export default GameCard;