import { Link } from "react-router-dom";
import { CartePrestation } from "../cartePrestation/cartePrestation";
import "./AffichageCartesPrestation.css";

export const AffichageCartePrestation = (props) => {
  return (
    <div className="affichagePrestations">
      {props.listePrestations.map((prestation, index) => (
        <Link to={`/FichePrestation/${props.id}`}>
          <CartePrestation key={index} {...prestation} />
        </Link>
      ))}
    </div>
  );
};
