import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
import { useState } from "react"
import { Link } from "react-router-dom"


function InfosPerso(){
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
                            <label for="nom-enfant"> <span>Nom <span className="star">*</span></span>
                            <input type="text" name="nom-enfant"  /></label><br/>

                            <label for="nom-enfant"> <span> Prénom <span className="star">*</span></span>
                            <input type="text" name="nom-enfant"  /></label><br/>
                        </div>

                        <label for="nom-enfant"> <span> Sexe<span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

                        <label for="nom-enfant"><span>Date de Naissance <span className="star">*</span></span></label><br/>
                        <input type="date" name="nom-enfant"  /><br/>

                        <label>Photo 4X4<br />
            <div  className={`${'img-previewer'} `}>
                <input type="file" className='img-input' accept='image/*'   onChange={handleChange}/><br />
                <img src={file} alt="" className='img-preview'/><br />
            </div></label>
                   
                    </form>
                    <section className="buttons">
                        
                        <button className="btn-next"><Link to='/NouvelEleve/InfosContact'>
                            Suivant <span className="material-icons">navigate_next</span>
                        </Link></button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default InfosPerso