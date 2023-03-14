import logo from "./images/logo.jpg";
import "./appHeader.css"

function appHeader () {
    return(
        <div className="bg-black m-2 rounded-md">
            <div className="p-2">
                <img src={logo} className="w-300 h-100" alt="Comapny Logo"/><br/>
            </div>
            <button className="bg-red-400 p-3 hover:bg-red-200 m-1 rounded-md">
                    <a className="hover:underline" href="/studentApplication">Apply Now</a>
            </button>
        </div>

    );

}

export default appHeader