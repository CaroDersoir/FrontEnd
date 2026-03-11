import { useState, createContext } from "react";

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
    const [mode, setMode] = useState("ocean");

    return (
        <PreferencesContext.Provider value={{ mode, setMode }}>
            {children}
        </PreferencesContext.Provider>
    )
}