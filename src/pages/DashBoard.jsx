import '../styles/DashBoard.css'
import ChartContainer from '../components/ChartContainer'
import UpperBar from '../components/upperBar'
import { useState } from 'react'


function DashBoard(){

    const title='Tableau de bord'
    const [hidden, setHidden]=useState(false)
    setTimeout(()=>{setHidden(true)},1990)

    return(
        <div className="dashboard">
            <UpperBar title={title}/>
            <div className="effectif-section">

                <section className={`${"hide"} ${hidden? 'hidden':''}` }></section>

                <div className="total">
                <span className="material-icons">trending_up</span> 
                Étudiants formés <br /> 
                <span className='numbers'>250</span> </div>
                <div className="en-cours">
                <span className="material-icons">autorenew</span>
                    En cours de formation <br />
                    <span className='numbers'>15 </span></div>
                <div className="formations">
                <span className="material-icons">school</span>
                Formations <br />
                <span className='numbers'>05</span> </div>

                <div className="formateurs">
                <span class="material-icons">history_edu</span>
                Formateurs <br />
                <span className='numbers'>04</span> </div>

            </div>
            <ChartContainer/>
        </div>
    )
}
export default DashBoard