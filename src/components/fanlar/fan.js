import "./fan.css"
import { Link } from "react-router-dom";
const Fan = (props) => {
    const fanlar = props.Fanlar;
   
    return (
        <>
        {fanlar.map((fan)=>
        <div className="fan" key={fan.fan}>
       <div className="fanHeader">
       <h2>{fan.fan}</h2>
        </div>
        <div className="fanMain">
            <div className="upload">
               <Link to="/upload">Upload</Link>
               <span className="counter">0</span>
            </div>
            <div className="download">
                <Link to="/download">Downlaod</Link>
                <span className="counter">0</span>
            </div>
        </div>
    </div>  )}
    </>)
}
 
export default Fan;