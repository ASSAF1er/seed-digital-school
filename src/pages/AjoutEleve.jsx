import UpperBar from "../components/upperBar"
import '../styles/AjoutEleve.css'
import { useState } from "react"


function AjoutEleve(){
   const title='Nouvel Élève'

   const [file, setFile]=useState()
   const handleChange= (e)=>{
       setFile(URL.createObjectURL(e.target.files[0]))
      
   }
    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations personnelles</h2>

                        <div className="first-line">
                            <label for="nom-enfant">Nom <br/>
                            <input type="text" name="nom-enfant"  /></label><br/>

                            <label for="nom-enfant">Prénom <br/>
                            <input type="text" name="nom-enfant"  /></label><br/>
                        </div>

                        <label for="nom-enfant">Sexe </label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

                        <label for="nom-enfant">Date de Naissance </label><br/>
                        <input type="date" name="nom-enfant"  /><br/>

                        <label>Image de couverture<br />
            <div  className={`${'img-previewer'} `}>
                <input type="file" className='img-input' accept='image/*'   onChange={handleChange}/><br />
                <img src={file} alt="" className='img-preview'/><br />
            </div></label>
                   
                    </form>
                    <section className="buttons">
                        <button className="btn-back">
                            <span className="material-icons">arrow_back</span>Précédent
                            </button>
                        <button className="btn-next">
                            Suivant <span className="material-icons">navigate_next</span>
                        </button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default AjoutEleve