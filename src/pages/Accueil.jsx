import { Searchbar } from "../communs/Searchbar/Searchbar";
import { AffichageCartePrestation } from "../composants/AffichageCartes/AffichageCartesPrestation";

export const Accueil = () => {
  return (
    <>
      <Searchbar />
      <AffichageCartePrestation />
    </>
  );
};
