function ListElement(props){
    return(
       
        <tr>
            <td>
                <span className={`${"material-icons"} ${"delete"}`} onClick={()=>props.handleDelete(props.id)}>delete_outline</span>
                <span className={`${"material-icons"} ${"edit"}`}>edit</span>
            </td>
            <td>{props.name.toUpperCase()}</td>
            <td>{props.surname.toUpperCase()}</td>
            <td>{props.sexe}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td>{props.rest} XAF</td>
            <td>{props.training}</td>
            <td>{props.amount}</td>
            <td>{props.advance}</td>
            <td>{props.level}</td>
            <td>{props.birthday}</td>
            <td>{props.tel1}</td>
            <td>{props.quater}</td>
            <td>{props.email}</td>
            <td><img src={props.photo} alt="" className="apercu-photo"/> </td>
            
            
        </tr>
       
    )
}
export default ListElement