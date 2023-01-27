import "./FichePrestation.css";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import PrestationService from "../../services/prestation.services";
import { useState } from "react";

export const FichePrestation = () => {
  const { id } = useParams();
  const [focusPrestation, setFocusPrestation] = useState({});

  useEffect(() => {
    if (id) {
      PrestationService.getPrestation(id).then((prestation) =>
        setFocusPrestation(prestation)
      );
    }
  }, []);

  return (
    <main className="fichePrestation">
      <article className="presentationPrestation">
        <section className="imagePrestation">
          <h2>{focusPrestation.titre}</h2>
          <img src={focusPrestation.img} alt={focusPrestation.titre} />
        </section>
        <aside className="informationPrestation">
          <h2>Information Principales</h2>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Prestataire :</span>
            <span className="information">{focusPrestation.prestataire},</span>
          </div>
          <div className="sectionInformation">
            {focusPrestation.nombrePrestations} prestations jusqu'à présent
          </div>
          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Note Moyenne</span>
            <span className="information">{focusPrestation.note}/5</span>
            {/* Note */}
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Taux Horaire : </span>
            <span className="information">
              {focusPrestation.tauxHoraire}€/h
            </span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Localisation : </span>
            <span className="information">{focusPrestation.localisation}</span>
          </div>

          <div className="sectionInformation">
            <span className="labelInformationPrincipale">Publication :</span>
            <span className="information">
              {focusPrestation.datePublication}
            </span>
          </div>
        </aside>
      </article>
      <article className="descriptionPrestation">
        <h2>Description de la Prestation</h2>
        <p>{focusPrestation.description}</p>
      </article>
      <article className="secondairePrestation">
        <h2>Informations secondaires</h2>
        <p>...</p>
      </article>
    </main>
  );
};
