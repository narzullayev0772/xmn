import { CloudUpload} from "@material-ui/icons";
import Topbar from "../../components/topbar/topbar";
import "./upload.css"
const Upload = () => {
    return ( 
        
        <>
        <Topbar/>
        <div className="uploadPage">
            <h2 className="header">Yuborish:</h2>
            <form className="uploadForm" action="/" method="post" encType="multipart/form-data">
                <div className="uploadIcon">
                <input type="file" name="subject" id="file" multiple="multiple" accept=".pdf, .docx, .doc, .ppt, .pptx, .xls, .xlsx, .zip, .rar"/>
                <CloudUpload  className="fileIcon"/>
                <p className="filename" id="filename">Filename</p>
                </div>
                <textarea name="text" id="desc" required cols="30" rows="10" placeholder="Izoh:"></textarea>
                <button className="submitBtn" type="submit">Yuborish</button>
            </form>
        </div>
        </>
     );
}
 
export default Upload;