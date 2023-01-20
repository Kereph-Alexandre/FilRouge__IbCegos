// import { useParams } from "react-router-dom";
import "./FormulaireEntreprise.css";

export const FormulaireEntreprise = () => {
  //   const { id } = useParams();

  //If Id null/undef alors c'est un formulaire de création
  //Else, c'est un formulaire de mise à jour

  return (
    <main className="espaceEntreprise">
      <form className="formulaireEntreprise">
        <div className="imageEntreprise">
          <img src="https://dummyimage.com/100x100/000/fff" alt="" />
          <div className="choixImage">
            <h2>Logo de l'entreprise</h2>
            <label htmlFor="logoEntreprise"></label>
            <input
              type="file"
              placeholder="Ajouter une url d'image"
              name="logoEntreprise"
            />
          </div>
        </div>
        <div className="encartDescriptionEntreprise">
          <h2>Dévrivez votre entreprise :</h2>
          <label htmlFor="descriptionEntreprise"></label>
          <textarea
            cols={30}
            rows={10}
            name="descriptionEntreprise"
            id="descriptionEntreprise"
          />
        </div>
        <div className="informationsEntreprise">
          <h2>Informations Principales de l'entreprise</h2>
          <div>
            <label htmlFor="siretEntreprise">Siret de l'entreprise</label>
            <input
              type="text"
              placeholder="numéro siret"
              name="siretEntreprise"
            />
          </div>
          <div>
            <label htmlFor="effectifEntreprise">Effectif</label>
            <input
              type="text"
              placeholder="taille de l'effectif"
              name="effectifEntreprise"
            />
          </div>
          <div>
            <label htmlFor="domaineActiviteEntreprise">
              Domaine d'Activité
            </label>
            <input
              type="text"
              placeholder="domaine d'activité"
              name="domaineActiviteEntreprise"
            />
          </div>
          <div>
            <label htmlFor="zoneGeoEntreprise">Zone Géograpique</label>
            <input
              type="text"
              placeholder="zone d'intervention géographique"
              name="zoneGeoEntreprise"
            />
          </div>
        </div>
        <div className="alacon">
          <button type="submit">Modifier</button>
        </div>
      </form>
    </main>
  );
};
