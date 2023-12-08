import React, { useState } from "react";
 
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [resoSearch, setResoSearch] = useState(0);
 
    return (
        <Context.Provider value={{ resoSearch, setResoSearch }}>
            {children}
        </Context.Provider>
    );
};
