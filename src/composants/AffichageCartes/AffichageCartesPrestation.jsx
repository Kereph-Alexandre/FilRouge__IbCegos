import { CartePrestation } from "../cartePrestation/cartePrestation";

export const AffichageCartePrestation = (props) => {
  return (
    <div className="conteneur">
      {props.listePrestations.map((prestation, index) => (
        <CartePrestation key={index} {...prestation} />
      ))}
    </div>
  );
};
