import logo from "../../assets/Logo.svg";
import "./styles.module.css"

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Empresa Júnior da UFF - IN" />
    </header>
  );
}

export default Header;