import { useState } from "react";
import PrestationModel from "../../models/prestation.model";
import PrestationService from "../../services/prestation.services";
import "../AjoutPrestation/AjoutPrestation.css";

const AjoutPrestation = (props) => {
  const [titre, setTitre] = useState("");
  const [tauxHoraire, setTauxHoraire] = useState("");
  const [categorie, setCategorie] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [description, setDescription] = useState("");

  const ajouterPrestation = () => {
    const nouvellePrestation = new PrestationModel(
      titre,
      tauxHoraire,
      categorie,
      localisation,
      description
    );

    PrestationService.creationPrestation(nouvellePrestation);
  };
  return (
    <section className="pageGlobale">
      <form className="formCreationPrestation" onSubmit={ajouterPrestation}>
        <h2 className="h2ajoutprestation">NOUVELLE PRESTATION</h2>
        <div className="inputsFormulaire">
          <div className="informationsEssentielles">
            <label for="titre" className="nomajoutprestation">
              nom
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="titre"
              onChange={(evenement) => setTitre(evenement.target.value)}
            />
            <label for="categorie" className="categorieajoutprestation">
              categorie
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="categorie"
              onChange={(evenement) => setCategorie(evenement.target.value)}
            />

            <label for="tauxHoraire" className="tauxhoraireajoutprestation">
              taux horaire
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="tauxHoraire"
              onChange={(evenement) => setTauxHoraire(evenement.target.value)}
            />
          </div>
          <div className="informationsSecondaires">
            <label for="localisation" className="localisationajoutprestation">
              localisation
            </label>
            <input
              className="inputAjoutPrestation"
              type="text"
              name="localisation"
              onChange={(evenement) => setLocalisation(evenement.target.value)}
            />

            <label for="description" className="descriptionajoutprestation">
              description
            </label>
            <textarea
              className="inputAjoutPrestation"
              name=""
              id=""
              cols="30"
              rows="10"
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
