import { useState } from "react";
import PrestationModel from "../../models/prestation.model";
import PrestationService from "../../services/prestation.services";
import "../AjoutPrestation/AjoutPrestation.css";

import { useNavigate } from "react-router";

const AjoutPrestation = (props) => {
  const [titre, setTitre] = useState("");
  const [tauxHoraire, setTauxHoraire] = useState("");
  const [categorie, setCategorie] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [description, setDescription] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const navigation = useNavigate();

  const ajouterPrestation = () => {
    const nouvellePrestation = new PrestationModel(
      titre,
      categorie,
      tauxHoraire,
      localisation,
      description,
      urlImage
    );

    PrestationService.creationPrestation(nouvellePrestation).then(
      (prestation) => navigation(`/fichePrestation/${prestation.id}`)
    );
  };

  const soumissionDonnees = (evenement) => {
    evenement.preventDefault();
    ajouterPrestation();

    //Redirect vers la prestation
  };

  return (
    <section className="pageGlobale">
      <form className="formCreationPrestation" onSubmit={soumissionDonnees}>
        <h2 className="h2ajoutprestation">NOUVELLE PRESTATION</h2>
        <div className="inputsFormulaire">
          <div className="informationsEssentielles">
            <label htmlFor="titre" className="nomajoutprestation">
              nom
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="titre"
              required
              placeholder="indiquez le titre de votre prestation"
              onChange={(evenement) => setTitre(evenement.target.value)}
            />
            <label htmlFor="categorie" className="categorieajoutprestation">
              categorie
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="categorie"
              placeholder="indiquez la catégorie concernée"
              required
              onChange={(evenement) => setCategorie(evenement.target.value)}
            />

            <label htmlFor="tauxHoraire" className="tauxhoraireajoutprestation">
              taux horaire
            </label>
            <input
              className="inputAjoutPrestation"
              type="number"
              name="tauxHoraire"
              placeholder="indiquez le taux horaire"
              required
              onChange={(evenement) => setTauxHoraire(evenement.target.value)}
            />
            <label htmlFor="urlImage" className="tauxhoraireajoutprestation">
              Image
            </label>
            <input
              className="inputAjoutPrestation"
              type="url"
              name="urlImage"
              placeholder="indiquez l'url de votre image"
              required
              onChange={(evenement) => setUrlImage(evenement.target.value)}
            />
          </div>
          <div className="informationsSecondaires">
            <label
              htmlFor="localisation"
              className="localisationajoutprestation">
              localisation
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="localisation"
              placeholder="indiquez la région d'intervention"
              required
              onChange={(evenement) => setLocalisation(evenement.target.value)}
            />

            <label htmlFor="description" className="descriptionajoutprestation">
              description
            </label>
            <textarea
              className="inputAjoutPrestation"
              name="description"
              id="description"
              placeholder="Mettez en avant votre prestation"
              cols="30"
              rows="10"
              required
              onChange={(evenement) =>
                setDescription(evenement.target.value)
              }></textarea>
          </div>
        </div>

        <div className="boutonFormulaire">
          <button className="boutonAjoutPrestation" onClick={props.onClick}>
            Ajouter une prestation{props.text}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AjoutPrestation;
