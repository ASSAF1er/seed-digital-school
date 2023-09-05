import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
//import { useState } from "react"
import { Link } from "react-router-dom"


function InfosContact(){
   const title='Nouvel Élève'

    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations de Contact</h2>

                        
                            <label for="nom-enfant"> <span> Numéro de téléphone 1<span className="star">*</span></span>
                            <input type="text" name="nom-enfant"  /></label><br/>

                            <label for="nom-enfant">Numéro de téléphone 2 <br/>
                            <input type="text" name="nom-enfant"  /></label><br/>
                        

                        <label for="nom-enfant"> <span> E-mail <span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

                        <label for="nom-enfant"> <span> Quartier <span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

              
                   
                    </form>
                    <section className="buttons">
                        <button className="btn-back"><Link to='/NouvelEleve/InfosPerso'>
                            <span className="material-icons">arrow_back</span>Précédent
                           </Link> </button>
                        <button className="btn-next"><Link to='/NouvelEleve/InfosFormation'>
                            Suivant <span className="material-icons">navigate_next</span></Link>
                        </button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default InfosContact