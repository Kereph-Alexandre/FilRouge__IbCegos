import { Bouton } from "../bouton/bouton";
import { LienHeader } from "../lien_header/lienHeader";
import { Logo } from "../logo/logo";

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
        <Bouton texte="Rejoindre" Click="" />
      </div>
    </header>
  );
};
