import logoIMG from "../images/logo.png";
import { HeaderDiv } from "../style";
function Header () {
    return(
        <HeaderDiv>
            <img src={logoIMG}/>
        </HeaderDiv>
    );
}
export default Header;