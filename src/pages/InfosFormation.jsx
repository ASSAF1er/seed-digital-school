import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
//import { useState } from "react"
import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import { NewStudent } from "../utils/NewStudentContext"
import { StudentList } from "../utils/StudentListContext"


function InfosFormation(){
   const title='Nouvel Élève'

   const {students,setStudents}=useContext(StudentList)
   const {newStudent,setNewStudent}=useContext(NewStudent)

   const [level,setLevel]=useState('')
   const [training, setTraining]=useState('')
   const [start,setStart]=useState('')
   const [end,setEnd]=useState('')
   const [amount, setAmount]=useState('')
   const [advance, setAdvance]=useState('')
   const [rest,setRest]=useState(0)

   const handleClick=()=>{
    handleClick1()
    handleClick2()
    alert("Nouvel Élève ajouté avec succès!")
   }
   
   const handleClick1=()=>{
     setNewStudent({
        ...newStudent,
        level:level,
        training:training,
        start:start,
        end:end,
        amount:amount,
        advance:advance,
        rest:rest,
    })
   }
   const handleClick2=()=>{setStudents([newStudent,...students])}

  
    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations de la Formation</h2>

                        
                            <label for="level"> <span> Niveau scolaire<span className="star">*</span></span>
                            <select name="level" id="level" onChange={(e)=>setLevel(e.target.value)}>
                            <option value="" selected disabled></option>
                                <option value="Master">CEP</option>
                                <option value="BEPC">BEPC</option>
                                <option value="Probatoire">Probatoire</option>
                                <option value="Bac">Bac</option>
                                <option value="Licence 1">Licence1</option>
                                <option value="Licence 2">Licence 2</option>
                                <option value="Licence 3">Licence 3</option>
                                <option value="Master">Master</option>
                                <option value="Autre">Autre</option>
                            </select>
                            </label><br/>

                            <label for="training"><span> Formation souhaitée  <span className="star">*</span></span><br/>
                                <select name="taining" id="training" onChange={(e)=>setTraining(e.target.value)}>
                                    <option value=""></option>
                                    <option value="Développement web">Développement web</option>
                                    <option value="Design Graphique">Design Graphique</option>
                                    <option value="Marketing Digital">Marketing Digital</option>
                                    <option value="Sécrétariat Bureautique">Sécrétariat Bureautique</option>
                                    <option value="Développement Mobile">Développement Mobile</option>
                                </select>
                            </label><br/>
                        
                            <div className="first-line">

                        <label for="nom-enfant"> <span> Date début <span className="star">*</span></span> 
                        <input type="date" name="nom-enfant" value={start} onChange={(e)=>setStart(e.target.value)} /></label>

                        <label for="nom-enfant"> <span> Date fin <span className="star">*</span></span>
                        <input type="date" name="nom-enfant" value={end} onChange={(e)=>setEnd(e.target.value)} /></label>

                        </div>

                        <label for="nom-enfant"> <span> Montant à payer <span className="star">*</span></span></label><br/>
                        <input type="text" name="nom-enfant" value={amount} onChange={(e)=>setAmount(e.target.value)}  /><br/>

                        <div className="first-line">

                        <label for="nom-enfant"> <span> Avance <span className="star">*</span></span> 
                        <input type="text" name="nom-enfant" value={advance} onChange={(e)=>setAdvance(e.target.value)} /></label>

                        <label for="nom-enfant"> <span> Reste <span className="star">*</span></span>
                        <input type="text" name="nom-enfant" value={rest} onChange={(e)=>setRest(rest)} /></label>

                        </div>
               
                   
                    </form>
                    <section className="buttons">
                        <button className="btn-back"><Link to='/NouvelEleve/InfosContact'>
                            <span className="material-icons">arrow_back</span>Précédent
                           </Link> </button>
                        <button className="btn-next" onClick={handleClick }><Link>
                            Terminé </Link>
                        </button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default InfosFormation