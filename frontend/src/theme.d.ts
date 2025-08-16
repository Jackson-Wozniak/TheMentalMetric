import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypeBackground {
        primary?: string;
        secondary?: string;
        accent?: string;
        lighter?: string;
        darker?: string;
    }
    interface Theme {
        display: 'desktop' | 'mobile';
    }
    interface ThemeOptions {
        display?: 'desktop' | 'mobile'; 
    }
}