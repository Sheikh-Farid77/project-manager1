import { createContext, useContext, useReducer } from "react";
import { projectReducer } from "../reducer/projectReducer";

const projectContext = createContext(null);
export default function ProjectProvider({children}){

    const[projects, dispatch] = useReducer(projectReducer, [])

    const state = {

    }
    return (
        <projectContext.Provider value={state}>{children}</projectContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProjects = ()=>{
    return useContext(projectContext)
}