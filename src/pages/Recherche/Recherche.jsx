import { Searchbar } from "../../communs/Searchbar/Searchbar";
import { AffichageListe } from "../../composants/AffichageListe/AffichageListe";

import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import PrestationService from "../../services/prestation.services";

export const Recherche = () => {
  const { motClef } = useParams();

  const [motRecherche, setMotRecherche] = useState("");
  const [titreCroissant, setTitreCroissant] = useState(true);
  const [categorieCroissante, setCategorieCroissante] = useState(true);
  const [donnees, setDonnees] = useState([]);
  const [resultatRecherche, setResultatRecherche] = useState([]);

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
    setMotRecherche("");
    if (motClef) setMotRecherche(motClef);
  }, [motClef]);

  useEffect(() => {
    PrestationService.getPrestations().then((data) => setDonnees(data));
  }, []);

  useEffect(() => {
    console.log(donnees);
    if (donnees.length > 0) {
      const result = donnees.filter(
        (prestation) =>
          prestation.titre.toLowerCase().includes(motRecherche.toLowerCase()) ||
          prestation.description
            .toLowerCase()
            .includes(motRecherche.toLowerCase())
      );
      setResultatRecherche(result);
    }
  }, [motRecherche, donnees]);

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
