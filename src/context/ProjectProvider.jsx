import { createContext, useContext, useReducer, useState } from "react";
import { projectReducer } from "../reducer/projectReducer";
import { data } from "../data/data";

// create a context for easy state management
const projectContext = createContext(null);
export default function ProjectProvider({children}){
    const initialProjects = data;
// reducer function for clean controller section
    const[projects, dispatch] = useReducer(projectReducer, initialProjects);
    const [searchValue, setSearchValue] = useState('');
    const [showModal, setShowModal] = useState(false); //visibility flag for open modal 
    const [currentTask, setCurrentTask] = useState(null);


//define handlers for action
    const handleSearchValue = (e)=> setSearchValue(e.target.value);
    const handleShowModal = (action)=> setShowModal(action);
    const handleCurrentTask = (task)=> setCurrentTask(task);

    const state = {
        projects,
        dispatch,
        handleSearchValue,
        searchValue,
        showModal,
        handleShowModal,
        currentTask,
        handleCurrentTask

    }
    return (
        <projectContext.Provider value={state}>{children}</projectContext.Provider>
    );
}

// create a custom hook to write less code
// eslint-disable-next-line react-refresh/only-export-components
export const useProjects = ()=>{
    return useContext(projectContext)
}