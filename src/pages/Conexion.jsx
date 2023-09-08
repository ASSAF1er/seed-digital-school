import '../styles/Connexion.css'
import { Link } from 'react-router-dom'
const Connexion =()=>{
    return(
        <section className="page-connexion">
            <div className="container"> 
                 <div className='titre'>SEED Digital School</div> 
                 <div className='sous-titre'>Tableau d'administration</div>
                 <div className='warning'> <span className="material-icons">warning</span>Seuls les admins ont accès à cette interface</div>
                 
                 <div className="inputs">
                    <input type="text"  placeholder='Identifiant'/>
                    <input type="password" placeholder='Mot de passe'/>
                 </div>
                <Link to='/Dashboard'> <div>Se connecter</div></Link>
                 
                 
            </div>
           
        </section>
    )
}
export default Connexion