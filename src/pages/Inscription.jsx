import { Bouton } from "../composants/Bouton/Bouton";
import { ChampFormulaire } from "../composants/ChampFormulaire/ChampFormulaire";
import "./Inscription.css";

export const Inscription = () => {
  return (
    <>
      <container className="containerInscription">
        <h1>Inscription</h1>
        <ChampFormulaire
          class="utilisateur"
          type="text"
          nom="utilisateur"
          placeholder="Nom d'utilisateur"
        />
        <ChampFormulaire
          class="mail"
          type="text"
          nom="mail"
          placeholder="E-mail"
        />
        <ChampFormulaire
          class="motDePasse"
          type="text"
          nom="motDePasse"
          placeholder="Mot de passe"
        />
        <span>
          {" "}
          <input className="checkbox" type="checkbox" name="checkbox" />
          <label for="checkbox">
            J'accepte les
            <a href="http://"> conditions générales d'utilisation</a>
          </label>
        </span>

        <Bouton text="Créer mon compte" />
        <p>
          Déjà un compte ?<a href="http://"> Se connecter</a>
        </p>
      </container>
    </>
  );
};
