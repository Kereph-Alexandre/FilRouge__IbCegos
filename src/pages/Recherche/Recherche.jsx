import { Searchbar } from "../../communs/Searchbar/Searchbar";
import { AffichageListe } from "../../composants/AffichageListe/AffichageListe";

import { useState } from "react";
import données from "../../donnees/donnesPrestation.json";
import { useEffect } from "react";

export const Recherche = () => {
  const [motRecherche, setMotRecherche] = useState("ipsum");
  const [resultatRecherche, setResultatRecherche] = useState(données);

  useEffect(() => {
    const resultat = données.filter(
      (prestation) =>
        prestation.titre.toLowerCase().includes(motRecherche.toLowerCase()) ||
        prestation.description
          .toLowerCase()
          .includes(motRecherche.toLowerCase())
    );
    console.log(resultat);
    setResultatRecherche(resultat);
  }, [motRecherche]);

  console.log(resultatRecherche);

  return (
    <>
      <Searchbar />
      <AffichageListe motclef={motRecherche} prestations={resultatRecherche} />
    </>
  );
};
