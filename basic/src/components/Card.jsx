import "./Card.css"
import rimage from "../assets/images/qrCode.jpg"
function Card(props){
        return(
            <>
            <div className="container">
            <div className="card">
               <img src=".\src\assets\images\qrCode.jpg" alt="qrCode"/> 
               {/* <img src={rimage} alt="qrCode" /> */}
               <h2>{props.heading}</h2>
               <p>{props.summary}</p>
            </div>
        </div>
        </>
        )
   
}   

export default Card