import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartePrestation } from "../cartePrestation/cartePrestation";
import "./AffichageCartesPrestation.css";

import PrestationService from "../../services/prestation.services";

export const AffichageCartePrestation = () => {
  const [listePrestations, setListePrestation] = useState([]);

  useEffect(() => {
    PrestationService.getPrestations().then((prestations) =>
      setListePrestation(prestations)
    );
  }, []);

  return (
    <div className="affichagePrestations">
      {listePrestations.map((prestation) => (
        <Link to={`/FichePrestation/${prestation.id}`}>
          <CartePrestation key={prestation.id} {...prestation} />
        </Link>
      ))}
    </div>
  );
};
