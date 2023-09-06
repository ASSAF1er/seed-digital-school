import UpperBar from "../components/upperBar"
import '../styles/InfosPerso.css'
import { useState ,useContext} from "react"
import { Link } from "react-router-dom"
import { NewStudent } from "../utils/NewStudentContext"
import { StudentList } from "../utils/StudentListContext"


function InfosPerso(){
   const title='Nouvel Élève'

   const {students}=useContext(StudentList)
   const {newStudent,setNewStudent}=useContext(NewStudent)

   

   const [name,setName]=useState('')
   const [surname,setSurname]=useState('')
   const [sexe,setSexe]=useState('')
   const [birthDate,setBirthDate]=useState('')


   const [file, setFile]=useState()
   const handleChange= (e)=>{
       setFile(URL.createObjectURL(e.target.files[0]))
   }

   const handleClick=()=>{
    setNewStudent(
        {...newStudent,
            id:students.length===0?1:students.length+5000,
            name:name,
            surname:surname,
            sexe:sexe,
            birthday:birthDate,
            photo:file,

        })
   }

    return(
        <div className="ajout-eleve">
            <UpperBar title={title}/>

            <div className="form-container">
                    <form action="" className="infos-perso">
                        <h2>Informations personnelles</h2>

                        <div className="first-line">
                            <label for="nom-enfant"> <span>Nom <span className="star">*</span></span>
                            <input type="text" name="nom-enfant" value={name} onChange={(e)=>setName(e.target.value)} /></label><br/>

                            <label for="nom-enfant"> <span> Prénom <span className="star">*</span></span>
                            <input type="text" name="nom-enfant" value={surname} onChange={(e)=>setSurname(e.target.value)}  /></label><br/>
                        </div>

                        <label for="nom-enfant"> <span> Sexe<span className="star">*</span></span> </label><br/>
                        
                            <select name="sexe" id="sexe" onChange={(e)=>setSexe(e.target.value)}>
                                <option value="" disabled selected></option>
                                <option value="F">Féminin</option>
                                <option value="M">Masculin</option>
                            </select>
                            <br/>

                        <label for="nom-enfant"><span>Date de Naissance <span className="star">*</span></span></label><br/>
                        <input type="date" name="nom-enfant" value={birthDate}  onChange={(e)=>setBirthDate(e.target.value)}/><br/>

                        <label>Photo 4X4<br />
            <div  className={`${'img-previewer'} `}>
                <input type="file" className='img-input' accept='image/*'   onChange={handleChange}/><br />
                <img src={file} alt="" className='img-preview'/><br />
            </div></label>
                   
                    </form>
                    <section className="buttons">
                        
                        <button className="btn-next" onClick={handleClick}><Link to='/NouvelEleve/InfosContact'>
                            Suivant <span className="material-icons">navigate_next</span>
                        </Link></button>
                    </section>
                     

                
            </div>
        </div>
    )
}
export default InfosPerso