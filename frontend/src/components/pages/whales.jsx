import Navbar from "../common/Navbar";
import WhalesConfig from "../views/whales";
import Footer from "../views/footer";

function Whales() {
    return (
        <div id='whales'>
            <Navbar/>
            <WhalesConfig/>
            <Footer/>
        </div>
    );
}

export default Whales;