import Box from "@mui/material/Box";
import { Games, type Game } from "../../types/GameInfo";
import ContentContainer from "../Shared/ContentContainer";
import GameCard from "./GameCard";

const HomePage: React.FC = () => {
    return (
        <ContentContainer>
            <Box width="100%" display="flex" justifyContent="center">
                <Box display="flex" flexDirection="column" width="5%" marginTop="35px">

                </Box>
                <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", 
                    gap: "40px", width: "65%", marginTop: "35px"}}>
                    {Games.map((game: Game, index: number) => {
                        return <GameCard key={index} game={game} timesPlayed={0}/>
                    })}
                </Box>
                <Box display="flex" flexDirection="column" width="30%" marginTop="35px">

                </Box>
            </Box>
        </ContentContainer>
    )
}

export default HomePage;