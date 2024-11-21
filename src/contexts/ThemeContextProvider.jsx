// src/context/ThemeContextProvider.js
import React, { createContext, useState } from 'react';
import { greenThemeLight, greenThemeDark } from '../theme/theme';
import { themeData } from '../data/themeData';

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState(themeData.theme);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleTheme = () => {
        const newTheme = theme === greenThemeLight ? greenThemeDark : greenThemeLight;
        setTheme(newTheme);
        themeData.theme = newTheme; // Update themeData globally
    };

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const value = { theme, toggleTheme, drawerOpen, setHandleDrawer };
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
