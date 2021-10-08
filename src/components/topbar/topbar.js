import { AccountBox } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./topbar.css";
const Topbar = () => {
    return ( 
        <div className="topbar">
            <div className="topbarLeft">
            <Link to="/" className="a">
            <div className="logo">
                <h2 className="logoText">iProblem</h2>
            </div>
            </Link>
            </div>
            <div className="topbarRight">
                <Link to='/profile'>
                <div className="account">
                    <AccountBox
                    fontSize="large"/>
                    <div className="accountInfo">
                    <p className="accountName">Username</p>
                    <p className="accountKurs">2-kurs</p>
                    </div>
               </div>
               </Link>
            </div>
        </div>
     );
}
 
export default Topbar;
