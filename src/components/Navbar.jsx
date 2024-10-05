import logo from "../assets/logo.png";

const Navbar = () => {
    return(
        <div className="navContainer">
            <div className="logoContainer">
                <img src={logo}></img>
                <p>STYLENCE</p>
            </div>
            <div className="optionsContainer">
                <a href="#catalogue">CATALOGUE</a>
                <a href="#fashion">FASHION</a>
                <a href="#favourite">FAVOURITE</a>
                <a href="#lifestyle">LIFESTYLE</a>
                <button>SIGN UP</button>
            </div>
        </div>
    )
}

export default Navbar;