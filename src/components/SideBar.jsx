
import {Link} from 'react-router-dom' 
import logo from '../assets/digital-schhol-logo.png'
import '../styles/SideBar.css'



const SideBar = () => {
    return(
        <div className="side-bar">
            <div className="logo-wrapper">
                <img src={logo} alt="" />
            </div>

            <div className="menu">
                <ul>
                <li><Link to='/' >
                    <span className="material-icons">dashboard</span>
                    Tableau de bord</Link>
                 </li>
                 <li><Link to='/InfosPerso' className='active'>
                        <span className="material-icons">person_add</span>
                        Nouvel Élève
                        </Link>
                 </li>
                <li><Link to='/gestionEleves'>
                    <span  className="material-icons">school</span>
                    Gestion des Élèves</Link>
                </li>
                <li><Link to='/formations'>
                <span  className="material-icons">auto_stories</span>
                Formations</Link>
                </li>
                <li><Link to='/comptabilite' >
                <span className="material-icons">payments</span>
                Comptabilité</Link>
                </li>
                <li><Link to='/admin'>
                <span className="material-icons">admin_panel_settings</span>
                Espace Administrateur</Link>
                </li>
                <li><Link to='/profil'>
                <span className="material-icons">account_circle</span>
                Mon profil</Link>
                </li>
             </ul>
            </div>
            
        </div>
    )
}
export default SideBar