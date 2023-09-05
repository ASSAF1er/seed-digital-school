import UpperBar from "../components/upperBar"
import '../styles/Formations.css'
import { useState } from "react"
import { trainings } from "../data/trainings"

function Formations(){
    
    const title='Formations'
    const [trainingList,setTrainingList]=useState(trainings)
    return(
        <div className="page-formations">
            <UpperBar title={title}/>
            <div className="grid-container">
                <div className="presentation">
                <span className="material-icons">bar_chart</span> Statistiques <br />
                    <span className="eff-forme"><span class="material-icons">trending_up</span>250</span>
                    <span className="en-formation"><span class="material-icons">loop</span>50</span>
                </div>
                {
                    trainingList.map((training)=>(
                        <div className="presentation">
                    {training.name} <br />
                    <span className="eff-forme"><span class="material-icons">trending_up</span>{training.formed}</span>
                    <span className="en-formation"><span class="material-icons">loop</span>{training.forming}</span>
                </div>
                    ))
                }
              
                
            </div>

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Formations</th>
                            <th>Formés</th>
                            <th>En formation</th>
                            <th>Durée</th>
                            <th>Cout Min</th>
                            <th>Cout max</th>
                            <th>Formateur1</th>
                            <th>Formateur2</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                         trainingList.map((training)=>(
                        <tr key={training.name}>
                            <td><span className={`${"material-icons"} ${"edit"}`}>edit</span></td>
                            <td>{training.name}</td>
                            <td>{training.formed}</td>
                            <td>{training.forming}</td>
                            <td>{training.duration}</td>
                            <td>{training.mincost}</td>
                            <td>{training.maxcost}</td>
                            <td>{training.trainer1}</td>
                            <td>{training.trainer2}</td>
                           
                            
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>


        </div>

    )
}
export default Formations