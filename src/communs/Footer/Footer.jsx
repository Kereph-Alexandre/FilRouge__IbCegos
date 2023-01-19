import "./Footer.css";
import { LiensFooter } from "../../composants/LiensFooter/LiensFooter";

export const Footer = () => {
  return (
    <footer className="footer">
      <container className="containerFooter">
        <LiensFooter href="" text="Centre d'aide" />
        <LiensFooter href="" text="FAQ" />
        <LiensFooter href="" text="Nous contacter" />
      </container>
      <container className="containerFooter">
        <LiensFooter href="" text="UMC" />
        <LiensFooter href="" text="Présentation UMC" />
        <LiensFooter href="" text="Nos services" />
      </container>
      <container className="containerFooter">
        <LiensFooter href="" text="Informations légales" />
        <LiensFooter href="" text="Mentions légales" />
        <LiensFooter href="" text="Politique de confidentialité" />
      </container>
    </footer>
  );
};
