import { Searchbar } from "../../communs/Searchbar/Searchbar";
import { AffichageListe } from "../../composants/AffichageListe/AffichageListe";

import { useState } from "react";
import données from "../../donnees/donnesPrestation.json";
import { useEffect } from "react";

export const Recherche = () => {
  const [motRecherche, setMotRecherche] = useState("");
  const [titreCroissant, setTitreCroissant] = useState(true);
  const [categorieCroissante, setCategorieCroissante] = useState(true);
  const [resultatRecherche, setResultatRecherche] = useState(données);

  const triTitre = () => {
    setTitreCroissant(!titreCroissant);
    const resultatTri = [...resultatRecherche].sort((prestaA, prestaB) =>
      titreCroissant
        ? prestaA.titre.localeCompare(prestaB.titre)
        : prestaB.titre.localeCompare(prestaA.titre)
    );

    setResultatRecherche(resultatTri);
  };

  const triCategorie = () => {
    setCategorieCroissante(!categorieCroissante);
    const resultatTri = [...resultatRecherche].sort((prestaA, prestaB) =>
      categorieCroissante
        ? prestaA.categorie.localeCompare(prestaB.categorie)
        : prestaB.categorie.localeCompare(prestaA.categorie)
    );

    setResultatRecherche(resultatTri);
  };

  const changementMotClef = (nouveauMotClef) => {
    setMotRecherche(nouveauMotClef);
  };

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
      <Searchbar changementMotClef={changementMotClef} />
      <AffichageListe
        motclef={motRecherche}
        prestations={resultatRecherche}
        triTitre={triTitre}
        titreCroissant={titreCroissant}
        triCategorie={triCategorie}
        categorieCroissante={categorieCroissante}
      />
    </>
  );
};
