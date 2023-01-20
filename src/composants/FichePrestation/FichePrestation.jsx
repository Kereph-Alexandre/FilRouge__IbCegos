import "./FichePrestation.css";
import { useParams } from "react-router-dom";

import prestations from "../../donnees/donnesPrestation.json";

export const FichePrestation = () => {
  const { id } = useParams();
  let presta = {};

  presta = prestations.find((presta) => presta.id === +id);

  return (
    <main className="fichePrestation">
      <article className="presentationPrestation">
        <section className="imagePrestation">
          <h2>{presta.titre}</h2>
          <img src={presta.img} alt={presta.titre} />
        </section>
        <aside className="informationPrestation">
          <h2>Information Principales</h2>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Prestataire :</span>
            <span className="information">{presta.prestataire},</span>
          </div>
          <div className="sectionInformation">
            {presta.nombrePrestations} prestations jusqu'à présent
          </div>
          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Note Moyenne</span>
            <span className="information">{presta.note}/5</span>
            {/* Note */}
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Taux Horaire : </span>
            <span className="information">{presta.tauxHoraire}€/h</span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Localisation : </span>
            <span className="information">{presta.localisation}</span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Publication :</span>
            <span className="information">{presta.datePublication}</span>
          </div>
        </aside>
      </article>
      <article className="descriptionPrestation">
        <h2>Description de la Prestation</h2>
        <p>{presta.description}</p>
      </article>
      <article className="secondairePrestation">
        <h2>Informations secondaires</h2>
        <p>...</p>
      </article>
    </main>
  );
};
