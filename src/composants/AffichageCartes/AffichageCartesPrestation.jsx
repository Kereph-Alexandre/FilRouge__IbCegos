import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartePrestation } from "../cartePrestation/cartePrestation";
import "./AffichageCartesPrestation.css";

import prestations from "../../données/donnéesPrestations.json";

export const AffichageCartePrestation = () => {
  const [listePrestations, setListePrestation] = useState([]);

  useEffect(() => {
    setListePrestation(prestations);
  }, []);

  return (
    <div className="affichagePrestations">
      {listePrestations.map((prestation) => (
        // Rajouter <Link to={`/FichePrestation/${prestation.id}`}> une fois que les routes vers les pages d'accueils et de fiche Prestations seront faites
        <CartePrestation key={prestation.id} {...prestation} />
        // </Link>
      ))}
    </div>
  );
};
