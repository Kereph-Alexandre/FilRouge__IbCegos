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
          <label htmlFor="logoEntreprise">Logo de l'entreprise</label>
          <input
            type="text"
            placeholder="Ajouter une url d'image"
            name="logoEntreprise"
          />
        </div>
        <div className="encartDescriptionEntreprise">
          <label htmlFor="descriptionEntreprise">
            Dévrivez votre entreprise
          </label>
          <input
            type="text"
            placeholder="description..."
            name="descriptionEntreprise"
          />
        </div>
        <div className="informationsEntreprise">
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
        <button type="submit">Modifier</button>
      </form>
    </main>
  );
};
