import { Link } from "react-router-dom";
import { NavBarDiv } from "../style";
import NavCard from "../components/NavCard";
import lucroIMG from "../images/lucro.jpg";
function NavBar() {
  return (
    <NavBarDiv>
      <Link to="/lucro">
        <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
      </Link>
      <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
      <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
    </NavBarDiv>
  );
}

export default NavBar;
