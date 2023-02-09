import React from "react";
import "./Banniere.css";
import image from "../../assets/illustrationBanniere.jpg";

const Banner = () => {
  return (
    <div className="conteneurBanniere">
      <p className="descriptionBanniere">
        Besoin d'accompagnement dans le choix de vos matériaux ? De câbler une armoire électrique ? Ou tout simplement repeindre votre salon ? UltraMotionCorp sera le partenaire dans votre recherche de prestations de services. <br />
        Grandes entreprises ou indépendants mettent à votre disposition leur savoir-faire en matière de bricolage, afin de vous accompagner au mieux dans tous les travaux que vous entreprenez.
      </p>
      <img className="imageBanniere" src={image} alt="illustration" />
    </div>
  );
};

export default Banner;
