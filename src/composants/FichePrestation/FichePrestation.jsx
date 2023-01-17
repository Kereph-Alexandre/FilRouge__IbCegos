import "./FichePrestation.css";

export const FichePrestation = (props) => {
  return (
    <main>
      <article className="presentationPrestation">
        <section className="imagePrestation">
          <h2>{props.titre}</h2>
          <img src={props.img} alt={props.titre} />
        </section>
        <aside className="informationPrestation">
          <h2>Information Principales</h2>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Prestataire :</span>
            <span className="information">{props.prestataire},</span>
          </div>
          <div className="sectionInformation">
            {props.nombrePrestations} prestations jusqu'à présent
          </div>
          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Note Moyenne</span>
            <span className="information">{props.note}/5</span>
            {/* Note */}
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Taux Horaire : </span>
            <span className="information">{props.tauxHoraire}€/h</span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Localisation : </span>
            <span className="information">{props.localisation}</span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Publication :</span>
            <span className="information">{props.datePublication}</span>
          </div>
        </aside>
      </article>
      <article className="descriptionPrestation">
        <h2>Description de la Prestation</h2>
        <p>{props.description}</p>
      </article>
      <article className="secondairePrestation">
        <h2>Informations secondaires</h2>
        <p>...</p>
      </article>
    </main>
  );
};
