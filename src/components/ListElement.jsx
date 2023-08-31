function ListElement(props){
    return(
       
        <tr>
            <td>{`${props.name.toUpperCase()}`}</td>
            <td>{props.surname.toUpperCase()}</td>
            <td>{props.sexe}</td>
            <td>{props.start}</td>
            <td>{props.end}</td>
            <td>{props.rest}</td>
            <td>{props.training}</td>
        </tr>
       
    )
}
export default ListElement