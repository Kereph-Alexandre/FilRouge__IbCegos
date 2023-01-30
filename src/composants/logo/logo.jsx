import { Link } from "react-router-dom";
import "./logo.css";
import logo from "./LogoUMC.png";


export const Logo = () => {
  return (
    <>

      <a href="/">

        <img
          className="logo"
          src={logo}  
          alt="logo de l'entreprise UMC"
        />
        </a>
      
    </>
  );
};
