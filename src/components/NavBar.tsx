import { NavBarDiv } from "../style";
import NavCard from "../components/NavCard";
import lucroIMG from "../images/lucro.jpg";
function NavBar() {
  return (
    <NavBarDiv>
      <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
      <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
      <NavCard titulo="Calculadora de Lucro" img={lucroIMG}/>
    </NavBarDiv>
  );
}

export default NavBar;
