import "../AjoutPrestation/AjoutPrestation.css";

const AjoutPrestation = (props) => {
  return (
    <>
    <h2>NOUVELLE PRESTATION</h2>
      <label for="nom">nom
        <input type="text" name="nom" />
      </label>

      <label for="localisation">localisation
        <input type="text" name="name" />
      </label>

      <label for="taux horaires" >taux d'horaires
        <input type="text" name="name" />
      </label>

      <label for= "description">description
        <input type="text" name="name" />
      </label>

      <label for="categorie">categorie
        <input type="text" name="name" />
      </label>

      <button>Ajouter une prestation</button>

    </>
  );
};

export default AjoutPrestation;
