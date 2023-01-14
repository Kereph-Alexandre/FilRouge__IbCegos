import "./cartePrestation.css";

export const CartePrestation = (props) => {
  return (
    <div className="cartePrestation">
      <img src={props.img} alt="Illustration de la prestation" />
      <div className="corpsDeCarte">
        <div className="descriptionCarte">
          <h2>
            <a href="#/">{props.titre}</a>
          </h2>
        </div>
        <a href="#/">Voir Plus</a>
      </div>
    </div>
  );
};
