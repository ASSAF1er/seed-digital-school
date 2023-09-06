import { useState,createContext } from "react";

export const NewStudent =createContext()

function NewStudentProvider({children}){
    const[newStudent, setNewStudent]=useState({})
    return(
        <NewStudent.Provider value={{newStudent, setNewStudent}}>
            {children}
        </NewStudent.Provider>
    )
}
export default NewStudentProvider