"use client"
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const MainContext = ({ children }) => {
    const ManOnScoterDuration = 2.5;
    const [theme, settheme] = useState("light");
    useEffect(() => {
        if (document && typeof (document) != "undefined") {

            theme == "dark"
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark")
        }
    }, [theme])
    return (
        <MainContextE.Provider
            value={{
                theme,
                settheme,
                ManOnScoterDuration
            }}
        >
            {children}
        </MainContextE.Provider>
    )
}
export const useMainContext = () => {
    const {
        theme,
        settheme,
        ManOnScoterDuration
    }
        = useContext(MainContextE)
    return {
        theme,
        settheme,
        ManOnScoterDuration

    }
}

export default MainContext
