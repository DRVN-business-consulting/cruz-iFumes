
import { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext(null);

export function MusicPlayerContextProvider({children}) {
    const [music, setMusic] = useState(null);
  
    return (
        <MusicPlayerContext.Provider value={{music, setMusic}}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export function useMusic() {
    return useContext(MusicPlayerContext);
}
