import { CartePrestation } from "../cartePrestation/cartePrestation";
import "./AffichageCartesPrestation.css";

export const AffichageCartePrestation = (props) => {
  return (
    <div className="affichagePrestations">
      {props.listePrestations.map((prestation, index) => (
        <CartePrestation key={index} {...prestation} />
      ))}
    </div>
  );
};
