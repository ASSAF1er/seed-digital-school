import '../styles/EspaceAdmin.css'
import UpperBar from '../components/upperBar'
import { accounts } from '../data/comptes'
import photo from '../assets/profile.png'

function EspaceAdmin(){
    const title="Espace Admin"
    return(
        <div className="espace-admin">
            <UpperBar title={title}/>
            <h2>Comptes</h2>
            <div className="table-container">
                
                <table>
                    
                    <thead>
                        <tr>
                            <th>Actions</th>
                            <th>Photo</th>
                            <th>Nom</th>
                            <th>Password</th>
                            <th>Statut</th>
                            <th>Depuis</th>
                            <th>Email</th>
                            
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                         accounts.map((acc)=>(
                        <tr key={acc.id}>
                            <td>
                                <span className={`${"material-icons"} ${"delete"}`}>delete_outline</span>
                                <span className={`${"material-icons"} ${"edit"}`}>edit</span>
                                <span class={`${"material-icons"} ${"mail"}`}>mail_outline</span>
                            </td>
                            <td> <img src={acc.profile ? acc.profile: photo} alt="" className="apercu-photo"/></td>
                            <td>{acc.name}</td>
                            <td>{acc.password}</td>
                            <td>{acc.status}</td>
                            <td>{acc.date}</td>
                            <td>{acc.email}</td>
                            
                            
                           
                            
                        </tr>))
                    }
                    </tbody>
                </table>
            </div>
            <div className="add-account-btn">
            <span className="material-icons">add_circle</span>
            </div>
        </div>
    )
}
export default EspaceAdmin