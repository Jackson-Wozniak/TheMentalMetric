import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import GridRecallPage from "./components/GridRecall/GridRecallPage";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme, LightTheme } from "./themes/Theme";
import Page from "./components/Shared/Page";

const AppInitializer: React.FC = () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const [displayType, setDisplayType] = useState<'desktop' | 'mobile'>('desktop');

    useEffect(() => {
        const handleResize = () => {
            setDisplayType(window.innerWidth < 750 ? 'mobile' : 'desktop');
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

	return (
		<ThemeProvider theme={mode === 'light' ? LightTheme(displayType) : DarkTheme(displayType)}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Page setMode={setMode} component={<HomePage/>} />} />
                    <Route path="GridRecall" element={<Page setMode={setMode} component={<GridRecallPage/>} />}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
	)
}

export default AppInitializer;