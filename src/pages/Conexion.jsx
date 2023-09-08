import '../styles/Connexion.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { accounts } from '../data/comptes'


const Connexion =()=>{

    const[id,setId]=useState('')
    const[pwd,setPwd]=useState('')
    const[clicked, setCliked]=useState(false)
    const[errorPopup,setErrorPopup]=useState(false)

    const [users,setUsers]=useState(accounts)
    const[user,setUser]=useState({})
    const [validPwd,setValidPwd]=useState(false)

    const isError = (value)=>{
        if( value === null || value.trim().length=== 0 ){
            return true
        }else{
            return false  
        }
    }
    const handleClick=()=>{
        setCliked(true) 
        if(isError(id) ||  isError(pwd)){
             setErrorPopup(true)
            setTimeout(()=>{setErrorPopup(false)},3000)
        }else{
        //vérificatin des informations de connexion 
        setUser(users.filter((acc)=>(acc.tel===id && acc.password===pwd)))

            if(user.length===1){
                setValidPwd(true)
                window.location.href='/Dashboard'
            console.log(user[0])}
       
        }

    }
    return(
        <section className="page-connexion">
            <div className="container"> 
                 <div className='titre'>SEED Digital School</div> 
                 <div className='sous-titre'>Tableau d'administration</div>
                 <div className='warning'> <span className="material-icons">warning</span>Seuls les admins ont accès à cette interface</div>
                 
                 <div className="inputs">
                    <input type="text"  placeholder='Identifiant' value={id} onChange={(e)=>setId(e.target.value)} style={{border: isError(id)&&clicked? "2px solid red":"none"}}/>
                    <input type="password" placeholder='Mot de passe'value={pwd} onChange={(e)=>setPwd(e.target.value)} style={{border: (isError(pwd)&&clicked)||(!validPwd&&clicked)? "2px solid red":"none"}}/>
                 </div>
                <Link  onClick={handleClick}> <div>Se connecter</div></Link>
                 
                 
            </div>
            <div className={`${"ajout-avec-succes error-popup"} ${errorPopup?"error-show":""}`}>
                <p>Ces champs sont obligatoires</p>
            </div>
           
        </section>
    )
}
export default Connexion