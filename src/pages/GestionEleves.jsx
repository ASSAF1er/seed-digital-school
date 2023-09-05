import UpperBar from "../components/upperBar"
import '../styles/GestionEleves.css'
import { useContext } from "react"
import {StudentList} from '../utils/StudentListContext'
import ListElement from "../components/ListElement"
import photo from '../assets/profile.png'
import { Link } from "react-router-dom"

function GestionEleves(){

    const title='Gestion Élèves'

    const {students,setStudents}=useContext(StudentList)
    

    const handleDelete=(id)=>{
        setStudents(students.filter((stud)=>stud.id!==id))

    }

    return(
        <div className="gestion-eleves">
            <UpperBar title={title}/>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Noms</th>
                            <th>Prénoms</th>
                            <th>sexe</th>
                            <th>Date début</th>
                            <th>Date fin</th>
                            <th>Reste</th>
                            <th>Formation</th>
                            <th>Montant</th>
                            <th>Avance</th>
                            <th>Niveau</th>
                            <th>Date Naissance</th>
                            <th>Contact</th>
                            <th>Quartier</th>
                            <th>Email</th>
                            <th>Photo</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                         students.map((stud)=>(
                        <ListElement
                            key={stud.id}
                            handleDelete={handleDelete}
                            id={stud.id}
                            name={stud.name}
                            surname={stud.surname}
                            sexe={stud.sexe}
                            start={stud.start}
                            end={stud.end}
                            rest={stud.rest}
                            training={stud.training}
                            birthday={stud.birthday}
                            level={stud.level}
                            tel1={stud.tel1}
                            amount={stud.amount}
                            advance={stud.advance}
                            quater={stud.quater}
                            email={stud.email}
                            photo={stud.photo ? stud.photo: photo}
                        />))
                    }
                    </tbody>
                </table>
            </div>

            <Link to='/InfosPerso'className="add-student-btn">
                <div >
                    <span class="material-icons">add_circle</span>
                </div>
            </Link>

        </div>

    )
}
export default GestionEleves