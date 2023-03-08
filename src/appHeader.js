import logo from "./images/logo.jpg";

function header () {
    return(
        <div>
            <img src={logo}/>
            <a href="/studentApplication">Apply Now</a>
        </div>

    );

}

export default header