import UpperBar from "../components/upperBar"
import '../styles/GestionEleves.css'
import { useContext } from "react"
import {StudentList} from '../utils/StudentListContext'
import ListElement from "../components/ListElement"

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
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>sexe</th>
                            <th>Date début</th>
                            <th>Date fin</th>
                            <th>Reste</th>
                            <th>Formation</th>
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
                        />))
                    }
                    </tbody>
                </table>
            </div>
            
        </div>

    )
}
export default GestionEleves