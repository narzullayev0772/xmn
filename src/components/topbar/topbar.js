import "./topbar.css";
const Topbar = () => {
    return ( 
        <div className="topbar">
            <div className="topbarLeft">
            <div className="logo">
                <h2 className="logoText">Logo</h2>
            </div>
            </div>
            <div className="topbarRight">
                <div className="account">
                    <img className="accountImg" src="/assets/profile/user.jpg" alt="" />
                    <div className="accountInfo">
                    <p className="accountName">Username</p>
                    <p className="accountKurs">2-kurs</p>
                    </div>
               </div>
            </div>
        </div>
     );
}
 
export default Topbar;
