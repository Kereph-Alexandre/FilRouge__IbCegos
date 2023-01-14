import "./cartePrestation.css";

export const CartePrestation = (props) => {
  return (
    <div className="cartePrestation">
      <img src={props.img} alt="Illustration de la prestation" />
      <div className="corpsDeCarte">
        <div className="descriptionCarte">
          <h2>{props.titre}</h2>
          <p>{props.description}</p>
        </div>
        <a href="#/">Voir Plus</a>
      </div>
    </div>
  );
};
