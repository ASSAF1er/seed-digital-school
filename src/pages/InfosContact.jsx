import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
import { useContext,useState } from "react"
//import { useState } from "react"
import { Link } from "react-router-dom"
import { NewStudent } from "../utils/NewStudentContext"


function InfosContact(){
   const title='Nouvel Élève'

   const {newStudent, setNewStudent}=useContext(NewStudent)

   const [tel1,setTel1]=useState('')
   const [tel2,setTel2]=useState('')
   const [email,setEmail]=useState('')
   const [quater,setQuater]=useState('')

   const [clicked, setClicked]=useState(false)
    const [valide, setValide]=useState(false)
    const [errorPopup, setErrorPopup]=useState(false)
   
    const handleClickContact=()=>{
 
        setClicked(true)

        if(!isError(tel1) && !isError(email) && !isError(quater)){
            setNewStudent({
            ...newStudent,
            tel1:tel1,
            tel2:tel2,
            email:email,
            quater:quater,
            })
        setValide(true)
        }else{
            setErrorPopup(true)
            setTimeout(()=>setErrorPopup(false),3000)
        }
   }
   // validation
   const isError = (value)=>{
    if( value === null || value.trim().length=== 0 ){
        return true
    }else{
        return false  
    }
}
    
    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations de Contact</h2>

                        
                            <label for="nom-enfant"> <span> Numéro de téléphone 1<span className="star">*</span></span>
                            <input type="text" name="nom-enfant" value={tel1} onChange={(e)=>setTel1(e.target.value)} style={{border: isError(tel1)&&clicked? "2px solid red":"none"}} /></label><br/>

                            <label for="nom-enfant">Numéro de téléphone 2 <br/>
                            <input type="text" name="nom-enfant" value={tel2} onChange={(e)=>setTel2(e.target.value)} /></label><br/>
                        

                        <label for="nom-enfant"> <span> E-mail <span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant" value={email} onChange={(e)=>setEmail(e.target.value)} style={{border: isError(email)&&clicked? "2px solid red":"none"}}/><br/>

                        <label for="nom-enfant"> <span> Quartier <span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant" value={quater} onChange={(e)=>setQuater(e.target.value)} style={{border: isError(quater)&&clicked? "2px solid red":"none"}}/><br/>

              
                   
                    </form>
                    <section className="buttons">
                        <button className="btn-back"><Link to='/NouvelEleve/InfosPerso'>
                            <span className="material-icons">arrow_back</span>Précédent
                           </Link> </button>
                        <button className="btn-next" onClick={handleClickContact}><Link to={valide?'/NouvelEleve/InfosFormation':''}>
                            Suivant <span className="material-icons">navigate_next</span></Link>
                        </button>
                    </section>

             
                     

                
            </div>
            <div className={`${"ajout-avec-succes error-popup"} ${errorPopup?"error-show":""}`}>
                <p>Ces champs sont obligatoires</p>
            </div>
        </div>
    )
}
export default InfosContact