import { Searchbar } from "../communs/Searchbar/Searchbar";
import { AffichageCartePrestation } from "../composants/AffichageCartes/AffichageCartesPrestation";
import Banner from "../composants/Banniere/Banniere";

export const Accueil = () => {
  return (
    <>
      <Searchbar />
      <Banner />
      <AffichageCartePrestation />
    </>
  );
};
