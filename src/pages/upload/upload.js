import { CloudUpload} from "@material-ui/icons";
import axios from "axios";
import Topbar from "../../components/topbar/topbar";
import "./upload.css"
const Upload = () => {
    const filePick = (e)=>{
       const file = e.target.files[0];
       const form = new FormData();
       form.append(
           "file",file,file.name
       );
      document.getElementById('filename').innerText = "File: "+file.name;
      return form
    }
    const onSubmit = ()=>{
        axios.post('api/download',filePick)
    }
    return ( 
        <>
        <Topbar/>
        <div className="uploadPage">
            <h2 className="header">Yuborish:</h2>
            <form className="uploadForm" method="post" encType="multipart/form-data">
                <div className="uploadIcon">
                <input onChange={filePick} type="file" required name="subject" id="file" multiple="multiple" accept=".pdf, .docx, .doc, .ppt, .pptx, .xls, .xlsx, .zip, .rar"/>
                <CloudUpload  className="fileIcon" htmlColor="lime" fontSize='large'/>
                <p className="filename" id="filename"></p>
                </div>
                <textarea name="text" id="desc" required placeholder="Izoh:"></textarea>
                <button onClick={onSubmit} className="submitBtn" type="submit">Yuborish</button>
            </form>
        </div>
        </>
     );
}
 
export default Upload;