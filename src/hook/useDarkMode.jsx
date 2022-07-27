import { useEffect, useState } from "react";

const useDarkeMode = () => {
    const [theme,setTheme] = useState('light');
    const colorTheme = theme === "dark" ? "light" : "dark";
        useEffect(() => {
            const root = window.document.documentElement;
            root.classList.remove(colorTheme);
            root.classList.add(theme);
        },[theme,colorTheme]);

    return [colorTheme,setTheme];
}
 
export default useDarkeMode;