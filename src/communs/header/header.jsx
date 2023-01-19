import { Bouton } from "../../composants/Bouton/bouton";
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
          <LienHeader texte="Ajouter une Prestation" href="/AjoutPrestation" />
        </div>
        <Bouton className="boutonAction" text="Rejoindre" Click="" />
      </div>
    </header>
  );
};
