import { Bouton } from "../../composants/Bouton/Bouton";
import { LienHeader } from "../../composants/lien_header/lienHeader";
import { Logo } from "../../composants/logo/logo";

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logoHeader">
        <Logo />
      </div>
      <div className="lienEtBouton">
        <div className="barreDeNavigation">
          <LienHeader texte="Mon Entreprise" href="" />
          <LienHeader texte="Mes Prestation" href="" />
          <LienHeader texte="Ajouter une Prestation" href="" />
        </div>
        <Bouton className="boutonAction" text="Rejoindre" Click="" />
      </div>
    </header>
  );
};
