
import {Link} from 'react-router-dom' 
import logo from '../assets/digital-schhol-logo.png'
import '../styles/SideBar.css'
import { useLocation } from 'react-router-dom'



const SideBar = () => {

    const location=useLocation()

    return(
        <div className="side-bar">
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>

            <div className="menu">
                <ul>
                <li><Link to='/'className={`${location.pathname === '/Dashboard' ? 'active':''}`} >
                    <span className="material-icons">dashboard</span>
                    Tableau de bord</Link>
                 </li>
                 <li><Link to='/NouvelEleve/InfosPerso' className={`${location.pathname === '/NouvelEleve/InfosPerso'|| location.pathname === '/NouvelEleve/InfosContact'|| location.pathname === '/NouvelEleve/InfosFormation' ? 'active':''}`} >
                        <span className="material-icons">person_add</span>
                        Nouvel Élève
                        </Link>
                 </li>
                <li><Link to='/gestionEleves' className={`${location.pathname === '/gestionEleves' ? 'active':''}`} >
                    <span  className="material-icons">school</span>
                    Gestion des Élèves</Link>
                </li>
                <li><Link to='/formations' className={`${location.pathname === '/formations' ? 'active':''}`} >
                <span  className="material-icons">auto_stories</span>
                Formations</Link>
                </li>
                <li><Link to='/comptabilite' className={`${location.pathname === '/comptabilite' ? 'active':''}`} >
                <span className="material-icons">payments</span>
                Comptabilité</Link>
                </li>
                <li><Link to='/espaceAdmin' className={`${location.pathname === '/espaceAdmin' ? 'active':''}`} >
                <span className="material-icons">admin_panel_settings</span>
                Espace Super Administrateur</Link>
                </li>
                <li><Link to='/MonProfil' className={`${location.pathname === '/MonProfil' ? 'active':''}`} >
                <span className="material-icons">account_circle</span>
                Mon profil</Link>
                </li>
             </ul>
            </div>
            
        </div>
    )
}
export default SideBar