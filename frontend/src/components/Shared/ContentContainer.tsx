import type React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const ContentContainer: React.FC<{
    children?: React.ReactNode
}> = ({children}) => {
    const theme = useTheme();

    return (
        <Box width="100%" height="90%" marginBottom="20px" boxSizing="content-box" 
            sx={{backgroundColor: theme.palette.background.primary}} overflow="auto">
            <Box height="100%" sx={{ paddingBottom: "20px" }}>
                {children}
            </Box>
        </Box>
    )
}

export default ContentContainer;