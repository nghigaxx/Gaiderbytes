import logo from "./images/logo.jpg";
import "./appHeader.css"

function appHeader () {
    return(
        <div>
            <img src={logo}/>
            <button className="studentApplyButton">
                <a href="/studentApplication">Apply Now</a>
            </button>
        </div>

    );

}

export default appHeader