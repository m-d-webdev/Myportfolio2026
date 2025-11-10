"use client"
import { useContext, createContext } from "react"
const MainContextE = createContext();
  

const MainContext = ({ children }) => {
    const ManOnScoterDuration = 2.5;
    return (
        <MainContextE.Provider
            value={{
                ManOnScoterDuration
            }}
        >
            {children}
        </MainContextE.Provider>
    )
}
export const useMainContext = () => {
    const {
        ManOnScoterDuration
    }
        = useContext(MainContextE)
    return {
        ManOnScoterDuration

    }
}

export default MainContext
