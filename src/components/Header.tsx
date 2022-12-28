import NavBar from '../components/NavBar';
import logoIMG from "../images/logo.png";
import { HeaderDiv } from "../style";
function Header () {
    return(
        <HeaderDiv>
            <img src={logoIMG}/>
            <NavBar />
        </HeaderDiv>
    );
}
export default Header;