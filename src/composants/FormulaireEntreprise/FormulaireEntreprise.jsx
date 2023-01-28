// import { useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import "./FormulaireEntreprise.css";

export const FormulaireEntreprise = () => {
  const [alerte, setAlerte] = useState(false);

  const [entreprise, setEntreprise] = useState({
    img: "http://dummyimage.com/165x250.png/5fa2dd/ffffff",
    presentation: "",
    siret: 0,
    effectif: 0,
    domaine: "",
    zoneGeo: "",
  });
  //   const { id } = useParams();

  //If Id null/undef alors c'est un formulaire de création
  //Else, c'est un formulaire de mise à jour

  useEffect(() => {
    fetch(`http://localhost:3004/Entreprise/1`).then((response) =>
      response.json().then((data) => setEntreprise(data))
    );
  }, []);

  const mettreAJour = (event) => {
    event.preventDefault();

    setEntreprise({
      ...entreprise,
      presentation: event.target.descriptionEntreprise.value,
      siret: event.target.siretEntreprise.value,
      effectif: event.target.effectifEntreprise.value,
      domaine: event.target.domaineActiviteEntreprise.value,
      zoneGeo: event.target.zoneGeoEntreprise.value,
    });

    fetch(`http://localhost:3004/Entreprise/1`, {
      method: "PUT",
      body: JSON.stringify(entreprise),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .then(setAlerte(true));
  };

  return (
    <main className="espaceEntreprise">
      <form className="formulaireEntreprise" onSubmit={mettreAJour}>
        <div className="imageEntreprise">
          <img src={entreprise.img} alt={entreprise.nom} />
          <div className="choixImage">
            <h2>Logo de l'entreprise</h2>
            <div className="imageLabelInput">
              <label htmlFor="logoEntreprise">
                Entrez l'url de votre image
              </label>
              <input
                type="url"
                name="logoEntreprise"
                value={entreprise.img}
                onChange={(event) =>
                  setEntreprise({ ...entreprise, img: event.target.value })
                }
              />
            </div>
          </div>
        </div>
        <div className="encartDescriptionEntreprise">
          <h2>Dévrivez votre entreprise :</h2>
          <label htmlFor="descriptionEntreprise"></label>
          <textarea
            cols={30}
            rows={5}
            name="descriptionEntreprise"
            id="descriptionEntreprise"
            value={entreprise.presentation}
            onChange={(event) =>
              setEntreprise({ ...entreprise, presentation: event.target.value })
            }
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
              value={entreprise.siret}
              onChange={(event) =>
                setEntreprise({ ...entreprise, siret: event.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="effectifEntreprise">Effectif</label>
            <input
              type="text"
              placeholder="taille de l'effectif"
              name="effectifEntreprise"
              value={entreprise.effectif}
              onChange={(event) =>
                setEntreprise({ ...entreprise, effectif: event.target.value })
              }
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
              value={entreprise.domaineActivite}
              onChange={(event) =>
                setEntreprise({
                  ...entreprise,
                  domaineActivite: event.target.value,
                })
              }
            />
          </div>
          <div>
            <label htmlFor="zoneGeoEntreprise">Zone Géograpique</label>
            <input
              type="text"
              placeholder="zone d'intervention géographique"
              name="zoneGeoEntreprise"
              value={entreprise.zoneGeo}
              onChange={(event) =>
                setEntreprise({ ...entreprise, zoneGeo: event.target.value })
              }
            />
          </div>
        </div>
        <div className="boutonConfirmer">
          <button type="submit">Modifier</button>
        </div>
        <Snackbar open={alerte} onClose={() => setAlerte(false)}>
          <Alert severity="success" sx={{ width: "100%" }}>
            Modifications effectuées
          </Alert>
        </Snackbar>
      </form>
    </main>
  );
};
