import "./FichePrestation.css";

export const FichePrestation = (props) => {
  return (
    <main>
      <section className="imagePrestation">
        <h2>{props.titre}</h2>
        <img src={props.img} alt={props.titre} />
      </section>
      <aside className="informationPrestation">
        <p>
          {props.prestataire}, {props.nombrePrestations} prestations jusqu'à
          présent
        </p>
        {/* Note */}
        <p>{props.tauxHoraire}€/h</p>
        <p>{props.localisation}</p>
        <p>{props.datePublication}</p>
      </aside>
      <article className="descriptionPrestation"></article>
      <article className="secondairePrestation"></article>
    </main>
  );
};
