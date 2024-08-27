import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider ({ children }){
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme);
    }, []);

    const toggleTheme = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            localStorage.setItem('darkMode', newMode);
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
