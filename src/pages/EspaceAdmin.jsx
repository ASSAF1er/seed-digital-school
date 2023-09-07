import '../styles/EspaceAdmin.css'
import UpperBar from '../components/upperBar'
import { useState } from 'react'
import { accounts } from '../data/comptes'
import photo from '../assets/profile.png'

function EspaceAdmin(){
    const title="Espace Admin"

    const [accountsList,setAccountsList]=useState(accounts)

    const [deleted, setDeleted]=useState(false)
    const handleDelete = (id)=>{
        setAccountsList(accountsList.filter((acc)=>acc.id !== id))
        setDeleted(true)
        setTimeout(()=>setDeleted(false), 3000)
    }

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
                         accountsList.map((acc)=>(
                        <tr key={acc.id}>
                            <td>
                                <span className={`${"material-icons"} ${"delete"}`} onClick={()=>handleDelete(acc.id)}>delete_outline</span>
                                <span className={`${"material-icons"} ${"edit"}`} >edit</span>
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

            <div className={`${"supprime-avec-succes"} ${deleted?"deleted-show":""}`}>
                <p>Compte supprimé avec succès</p>
            </div>

        </div>
    )
}
export default EspaceAdmin