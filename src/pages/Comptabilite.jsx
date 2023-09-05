import UpperBar from "../components/upperBar"
import '../styles/Comptabilite.css'
import { useState } from "react"
import { transactions } from "../data/transactions"

function Comptabilite(){
    const title="Comptabilité"
    const [show,setShow]=useState(true)
    const handleVisibility=()=>{
        setShow(!show)
    }
    return(
        <div className="comptabilite">
            <UpperBar title={title}/>
            <div className="comptabilite-container">
                <div className="solde"> 
                    <span className="text" >solde</span><br /><br />
                    <span className="montant">{show ? "2 475 250" : "**** **** "}  XAF</span>
                    {show? <span class="material-icons" onClick={handleVisibility}>visibility_off</span>:
                    <span class="material-icons" onClick={handleVisibility}>visibility</span>} 
                </div>
                <div className="historique-text"> 
                    <span class="material-icons">swap_vert</span>
                    Historique des transactions
                </div>
                <div className="historique-container">
                    
                        {transactions.map((trans)=>(
                                <div className="transaction">
                                    <div className="en-tete">
                            {trans.date} | {trans.time}
                            <span className={`${"montant"} ${trans.type==="entree"?"entree":"sortie"}`} >{trans.type==='entree'?'+':'-'}{trans.amount}XAF</span>
                        </div>
                        <div className="auteur">{trans.autor} ({trans.status})</div>
                            <div className="description">
                                Type: <span className={`${"type"} ${trans.type==="entree"?"":""}`} >{trans.type==='entree'?'Entrée':'Sortie'} 
                            
                                </span><br />
                                Description:{trans.description}
                            </div>
                        </div>
                            ))
                        }
           
                </div>
                
            </div>

            <div className="add-btn">
            <span class="material-icons">add_circle</span>
            </div>
        </div>
    )
}
export default Comptabilite