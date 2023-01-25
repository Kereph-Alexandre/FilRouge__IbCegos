import "../AjoutPrestation/AjoutPrestation.css";

const AjoutPrestation = (props) => {
  return (
    <>
    <h2 className="h2ajoutprestation">NOUVELLE PRESTATION</h2>

      <label for="nom" className="nomajoutprestation">nom
        <input className="input1" type="text" name="nom" />
      </label>

      <label for="localisation"  className="localisationajoutprestation">localisation
        <input className="input1" type="text" name="name" />
      </label>

      <label for="taux horaire" className="tauxhoraireajoutprestation" >taux horaire
        <input className="input1" type="text" name="name" />
      </label>

      <label for= "description" className="descriptionajoutprestation">description
        <input className= "input2" type="text" name="name" />
      </label>

      <label for="categorie" className="categorieajoutprestation">categorie
        <input className="input1" type="text" name="name" />
      </label>

      <button className= "boutonajoutprestation" onClick={props.onClick}>Ajouter une prestation{props.text}</button>

    </>
  );
};

export default AjoutPrestation;
