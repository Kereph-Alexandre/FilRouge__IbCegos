import "./ItemListePrestation.css";

export const ItemListePrestation = (props) => {
  const tropLong = props.description.length > 230;
  const description = props.description.slice(0, 229);

  return (
    <section className="itemListePrestation">
      <img
        className="illustrationListePrestation"
        src={props.img}
        alt={props.titre}
      />
      <div className="informationListePrestation">
        <div className="enteteItemListe">
          <span className="titreListePrestation">
            {props.titre} - {props.prestataire} -{props.localisation}
          </span>
          <span className="noteListePrestation">{props.note}/5</span>
        </div>
        <p className="descriptionListePrestation">
          {description}
          {tropLong ? <span>...</span> : <></>}
        </p>
      </div>
    </section>
  );
};
