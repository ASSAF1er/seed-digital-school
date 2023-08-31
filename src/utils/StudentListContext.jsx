import { createContext,useState } from "react";
import { studentList } from "../data/studentList.js";

export const StudentList = createContext('')

const StudentListProvider =({children})=>{
    const [students,setStudents]=useState(studentList)
    return(
        <StudentList.Provider value={{students,setStudents}}>
        {children}
        </StudentList.Provider>
    )
}
export default StudentListProvider