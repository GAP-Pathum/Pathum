// src/contexts/ThemeContext.js
import React, { createContext, useState } from 'react';
import { greenThemeLight, greenThemeDark } from '../theme/theme'; // Import themes

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(greenThemeLight); // Default to greenThemeLight
    const [drawerOpen, setDrawerOpen] = useState(false);

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const value = { theme, setTheme, drawerOpen, setHandleDrawer };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
