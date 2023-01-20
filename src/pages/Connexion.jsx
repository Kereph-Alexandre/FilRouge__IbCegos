import { Bouton } from "../composants/Bouton/Bouton";
import { ChampFormulaire } from "../composants/ChampFormulaire/ChampFormulaire";
import "./Connexion.css";

export const Connexion = () => {
  return (
    <>
      <container className="containerConnexion">
        <h1>Connexion</h1>
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
        <a href="http://">Mot de passe oublié ?</a>
        <Bouton text="Se connecter" />
        <p>
          Pas encore inscrit ?<a href="http://">Créer un compte</a>
        </p>
      </container>
    </>
  );
};
