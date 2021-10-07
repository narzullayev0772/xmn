import Fan from "../../components/fanlar/fan";
import Topbar from "../../components/topbar/topbar";
import "./home.css"
const Home = () => {
    return ( 
        <>
        <Topbar/>
        <div className="fanlar">
            <Fan/>
            <Fan/>
            <Fan/>
            <Fan/>
            <Fan/>
            
        </div>
        </>
     );
}
 
export default Home;