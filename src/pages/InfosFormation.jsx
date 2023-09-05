import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
//import { useState } from "react"
import { Link } from "react-router-dom"


function InfosFormation(){
   const title='Nouvel Élève'

  
    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations de la Formation</h2>

                        
                            <label for="nom-enfant"> <span> Niveau scolaire<span className="star">*</span></span>
                            <input type="text" name="nom-enfant"  /></label><br/>

                            <label for="nom-enfant"><span> Formation souhaitée  <span className="star">*</span></span><br/>
                            <input type="text" name="nom-enfant"  /></label><br/>
                        
                            <div className="first-line">

                        <label for="nom-enfant"> <span> Date début <span className="star">*</span></span> 
                        <input type="date" name="nom-enfant"  /></label>

                        <label for="nom-enfant"> <span> Date fin <span className="star">*</span></span>
                        <input type="date" name="nom-enfant"  /></label>

                        </div>

                        <label for="nom-enfant"> <span> Montant à payer <span className="star">*</span></span></label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

                        <div className="first-line">

                        <label for="nom-enfant"> <span> Avance <span className="star">*</span></span> 
                        <input type="text" name="nom-enfant"  /></label>

                        <label for="nom-enfant"> <span> Reste <span className="star">*</span></span>
                        <input type="text" name="nom-enfant"  /></label>

                        </div>
               
                   
                    </form>
                    <section className="buttons">
                        <button className="btn-back"><Link to='/NouvelEleve/InfosContact'>
                            <span className="material-icons">arrow_back</span>Précédent
                           </Link> </button>
                        <button className="btn-next"><Link>
                            Terminé </Link>
                        </button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default InfosFormation