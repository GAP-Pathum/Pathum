// src/components/ThemeToggle.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'; // Ensure this path is correct
import { greenThemeLight, greenThemeDark } from '../../theme/theme'; // Correct import for themes
import { HiSun, HiMoon } from 'react-icons/hi';
import './ThemeToggle.css'; // Import the CSS file

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    // Toggle between greenThemeLight and greenThemeDark
    const toggleTheme = () => {
        const newTheme = theme === greenThemeDark ? greenThemeLight : greenThemeDark;
        setTheme(newTheme);
    };

    return (
        <div className="theme-toggle-container" onClick={toggleTheme}>
            {theme === greenThemeLight ? (
                <HiMoon className="theme-icon moon-icon" aria-label="Dark Theme" />
                
            ) : (
                <HiSun className="theme-icon sun-icon" aria-label="Light Theme" />
            )}
        </div>
    );
};

export default ThemeToggle;
