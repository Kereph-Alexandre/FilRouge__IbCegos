// import { useParams } from "react-router-dom";
import { useState } from "react";
import "./FormulaireEntreprise.css";

export const FormulaireEntreprise = () => {
  const Entreprise = {
    id: 1,
    nom: "Lapeyre",
    img: "https://dummyimage.com/100x100/000/fff",
    presentation: "y'en a pas deux !",
    siret: 12345678901234,
    effectif: 22,
    domaineActivite: "Aménagement et ameublement",
    zoneGeo: "France",
  };
  const [presentation, setPresentation] = useState(Entreprise.presentation);
  const [siret, setSiret] = useState(Entreprise.siret);
  const [effectif, setEffectif] = useState(Entreprise.effectif);
  const [domaine, setDomaine] = useState(Entreprise.domaineActivite);
  const [zoneGeo, setZoneGeo] = useState(Entreprise.zoneGeo);
  //   const { id } = useParams();

  //If Id null/undef alors c'est un formulaire de création
  //Else, c'est un formulaire de mise à jour

  const mettreAJour = (event) => {
    event.preventDefault();
    Entreprise.domaineActivite = domaine;
    Entreprise.effectif = effectif;
    Entreprise.zoneGeo = zoneGeo;
    Entreprise.siret = siret;
    Entreprise.presentation = presentation;

    console.log(Entreprise);
  };

  return (
    <main className="espaceEntreprise">
      <form className="formulaireEntreprise" onSubmit={mettreAJour}>
        <div className="imageEntreprise">
          <img src={Entreprise.img} alt={Entreprise.nom} />
          <div className="choixImage">
            <h2>Logo de l'entreprise</h2>
            <label htmlFor="logoEntreprise">
              Modifier votre logo
              <input
                type="file"
                placeholder="Ajouter une url d'image"
                name="logoEntreprise"
              />
            </label>
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
            value={presentation}
            onChange={(event) => setPresentation(event.target.value)}
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
              value={siret}
              onChange={(event) => setSiret(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="effectifEntreprise">Effectif</label>
            <input
              type="text"
              placeholder="taille de l'effectif"
              name="effectifEntreprise"
              value={effectif}
              onChange={(event) => setEffectif(event.target.value)}
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
              value={domaine}
              onChange={(event) => setDomaine(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="zoneGeoEntreprise">Zone Géograpique</label>
            <input
              type="text"
              placeholder="zone d'intervention géographique"
              name="zoneGeoEntreprise"
              value={zoneGeo}
              onChange={(event) => setZoneGeo(event.target.value)}
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
