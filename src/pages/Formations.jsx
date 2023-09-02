import UpperBar from "../components/upperBar"
import '../styles/Formations.css'
import phone from'../assets/phone.png'
function Formations(){
    
    const title='Formations'

    return(
        <div className="page-formations">
            <UpperBar title={title}/>
            <div className="grid-container">
                <div className="presentation">
                    Présentation
                </div>
                <div className="first">
                    Développement web
                </div>
                <div className="second">
                    Marketing Digital
                </div>
                <div className="third">
                    Sécrétariat Bureautique
                </div>
                <div className="forth">
                    Design Graphique
                </div>
                <div className="fith">
                    
                    Développement Mobile
                </div>
                
            </div>

        </div>

    )
}
export default Formations