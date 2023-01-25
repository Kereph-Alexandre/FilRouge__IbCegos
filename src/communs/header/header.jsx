import { Link } from "react-router-dom";
import { Bouton } from "../../composants/Bouton/Bouton";
import { Logo } from "../../composants/logo/logo";

import "./header.css";

export const Header = () => {
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
          <Link className="lienHeader" to="/">
            <li>Mes Prestations</li>
          </Link>
          <Link className="lienHeader" to="/AjoutPrestation">
            <li>Ajouter une prestation</li>
          </Link>
        </nav>
        <Bouton id="boutonCTAHeader" text="Rejoindre" Click="" />
      </div>
    </header>
  );
};
