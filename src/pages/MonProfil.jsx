import UpperBar from "../components/upperBar"
import '../styles/MonProfil.css'
import { useState } from "react"
import { Link } from "react-router-dom"

function MonProfil(){
    const title="Mon profil"

    const [file, setFile]=useState()
   const handleChange= (e)=>{
       setFile(URL.createObjectURL(e.target.files[0]))
      
   }
    return(
        <div className="mon-profil">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                
                                 <label>Photo <br />
                    <div  className={`${'img-previewer'} `}>
                        <input type="file" className='img-input' accept='image/*'   onChange={handleChange}/><br />
                        <img src={file} alt="" className='img-preview'/><br />
                    </div></label>
            
           
                            

                            <label for="nom-enfant"> <span>Nom utilisateur <span className="star">*</span></span>
                            <input type="text" name="nom-enfant"  /></label><br/>
                        

                        <label for="nom-enfant"> <span> Mot de passe<span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant"  /><br/>
                    
                    <div className="first-line">

                        <label for="nom-enfant"><span>statut<span className="star">*</span></span>

                        <input type="text" name="nom-enfant"  /></label>

                        <label for="nom-enfant"><span>Admin depuis <span className="star">*</span></span>
                        <input type="date" name="nom-enfant"  /></label>

                    </div>
                        

                        <label for="nom-enfant"><span>Email <span className="star">*</span></span></label><br/>
                        <input type="text" name="nom-enfant"  /><br/>

                    </form>
                    <section className="buttons">
                        
                        <button className="btn-next"><Link >
                            Valider
                        </Link></button>
                    </section>
                    
                     

                
            </div>
        </div>
       
    )
}
export default MonProfil