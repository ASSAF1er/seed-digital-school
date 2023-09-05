import UpperBar from "../components/upperBar"
import '../styles/MonProfil.css'
import { useState } from "react"
import { Link } from "react-router-dom"
import { accounts } from "../data/comptes"

function MonProfil(){
    const title="Mon profil"

    const [accountsList,setAccountsList]=useState(accounts)

    const user = accountsList.filter((acc)=>acc.id==='1' )

    const [file, setFile]=useState()
    const handleChange= (e)=>{
       setFile(URL.createObjectURL(e.target.files[0]))
    }
    
    const [userName,setUserName]= useState(user[0].name)
    const [userPassword,setUserPassword]=useState(user[0].password) 
    const [userStatus,setUserStatus]=useState(user[0].status)
    const [userDate,setUserDate]=useState(user[0].date)
    const [userEmail,setUserEmail]=useState(user[0].email)

    const saveprofile=(e)=>{
        e.preventDefault()
        setAccountsList(accountsList.map((acc)=>acc.id==='1'?
        ({...acc, 
            name:userName, 
            password:userPassword,
            email:userEmail,
    }):acc))
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
                            <input type="text" name="nom-enfant" value={userName} onChange={(e)=>setUserName(e.target.value)} /></label><br/>
                        

                        <label for="nom-enfant"> <span> Mot de passe<span className="star">*</span></span> </label><br/>
                        <input type="text" name="nom-enfant" value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/><br/>
                    
                    <div className="first-line">

                        <label for="nom-enfant"><span>statut<span className="star">*</span></span>

                        <input type="text" name="nom-enfant" value={userStatus} onChange={(e)=>setUserStatus(e.target.value)} disabled /></label>

                        <label for="nom-enfant"><span>Admin depuis <span className="star">*</span></span>
                        <input type="text" name="nom-enfant" value={userDate} onChange={(e)=>setUserDate(e.target.value)} disabled/></label>

                    </div>


                        <label htmlFor="mon-email"><span>Email <span className="star">*</span></span></label><br/>
                        <input type="text" value={userEmail} onChange={(e)=>setUserEmail(e.target.value)} /><br/>

                    </form>
                    <section className="buttons">
                        
                        <button className="btn-next" onClick={saveprofile}><Link >
                            Valider
                        </Link></button>
                    </section>
                    
                     

                
            </div>
        </div>
       
    )
}
export default MonProfil