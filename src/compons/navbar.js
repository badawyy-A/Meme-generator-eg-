import Logo from "../imgs/Troll Face.png"

function NavBar(){
    return(
        <nav>
            <img src={Logo} alt="" />
            <h1>Meme Generator</h1>
        </nav>
    )
}


export default NavBar;