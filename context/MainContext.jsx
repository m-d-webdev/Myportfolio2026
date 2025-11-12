"use client"
import { useContext, createContext, useState, useEffect } from "react"
const MainContextE = createContext();

const MainContext = ({ children }) => {
    const ManOnScoterDuration = 2.5;
    const [theme, settheme] = useState("light");
    const [hash, setHash] = useState("#home");

    useEffect(() => {
        if (window && typeof (window) != "undefined") {
            setHash(window.location.hash != "" ? window.location.hash : "#home");
        }
    }, []);

    useEffect(() => {
        if (document && typeof (document) != "undefined") {

            theme == "dark"
                ? document.documentElement.classList.add("dark")
                : document.documentElement.classList.remove("dark")
        }
    }, [theme]);


    return (
        <MainContextE.Provider
            value={{
                theme,
                settheme,
                ManOnScoterDuration,
                hash,
                setHash
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
        ManOnScoterDuration,
        hash,
        setHash
    }
        = useContext(MainContextE)
    return {
        theme,
        settheme,
        ManOnScoterDuration,
        hash,
        setHash

    }
}

export default MainContext
