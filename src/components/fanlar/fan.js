import "./fan.css"
const Fan = () => {
    return (
    <div className="fan">
        <div className="fanHeader">
            <h2 className="fanHeaderText">
                Dasturlash
            </h2>
        </div>
        <div className="fanMain">
            <div className="upload">
               <a href="/upload">Upload</a>
               <span className="counter">0</span>
            </div>
            <div className="download">
                <a href="/download">Downlaod</a>
                <span className="counter">0</span>
            </div>
        </div>
    </div> );
}
 
export default Fan;