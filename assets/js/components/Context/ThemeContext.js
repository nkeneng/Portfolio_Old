import React from "react";

export const themes = {
    light: 'light-mode',
    dark: 'dark-mode'
};
export const ThemeContext = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? React.createContext(themes.dark): React.createContext(themes.light)


