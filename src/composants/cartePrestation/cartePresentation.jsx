import "./cartePresentation.css";

export const CartePresentation = ({
  urlImagePrestation,
  lienPrestation,
  titrePrestation,
}) => {
  return (
    <div className="carte">
      <img
        src={urlImagePrestation}
        alt="carte de Prestation"
        className="imageCarte"
      />
      <div className="corpsCarte">
        <h3>{titrePrestation}</h3>
        <div className="lienCarte">
          <a href={lienPrestation}>Voir Plus</a>
        </div>
      </div>
    </div>
  );
};
