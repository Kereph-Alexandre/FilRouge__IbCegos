import { Link } from "react-router-dom";
import { Bouton } from "../../composants/Bouton/Bouton";
import { Logo } from "../../composants/logo/logo";
import { Icon } from "@iconify/react";

import "./header.css";

export const Header = (props) => {
  return (
    <header className="header">
      <div className="logoHeader">
        <Logo />
      </div>
      <div className="lienEtBouton">
        <nav className="barreDeNavigation">
          <Link className="lienHeader" to="/EspaceEntreprise">
            <li>Mon entreprise</li>
          </Link>
          {/* <Link className="lienHeader" to="/">
            <li>Mes Prestations</li>
          </Link> */}
          <Link className="lienHeader" to="/AjoutPrestation">
            <li>Ajouter une prestation</li>
          </Link>
        </nav>
        <div className="iconsHeader">
          {/* <a href="http://"><Icon icon="ph:shopping-cart-simple-fill" color="#f5cb02" width="30" /></a>
        <Icon icon="ph:bell-fill" color="#f5cb02" width="30" /> */}
          <a href="http://">
            <Icon icon="ph:user-fill" color="#f5cb02" width="30" />
          </a>
        </div>
        {/* <Bouton id="boutonCTAHeader" text="Rejoindre" Click="" /> */}
      </div>
    </header>
  );
};
