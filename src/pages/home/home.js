import Fan from "../../components/fanlar/fan";
import Footer from "../../components/footer/footer";
import Topbar from "../../components/topbar/topbar";
import { Fanlar } from "../../data";
import "./home.css"
const Home = () => {
    return ( 
        <div className="home">
        <Topbar/>
        <div className="fanlar">
        <Fan Fanlar = {Fanlar}/>
        </div>
        <Footer/>
        </div>
     );
}
 
export default Home;