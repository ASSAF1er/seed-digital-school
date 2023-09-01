import UpperBar from "../components/upperBar"
import '../styles/GestionEleves.css'
import { useContext } from "react"
import {StudentList} from '../utils/StudentListContext'
import ListElement from "../components/ListElement"
import photo from '../assets/profile.png'

function GestionEleves(){

    const title='Gestion Élèves'

    const {students}=useContext(StudentList)

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
                            key={stud.name}
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
            
        </div>

    )
}
export default GestionEleves