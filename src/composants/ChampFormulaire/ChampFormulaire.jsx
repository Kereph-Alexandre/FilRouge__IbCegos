/**
 * Champ de formulaire avec son type, un label (si nécessaire), un nom et un placeholder
 * @param {{type:string label:string, nom:string, placeholder:string}} props
 * @returns un champ de formulaire
 */
export const ChampFormulaire = (props) => {
  return (
    <>
      <label>
        {!props.label}
        <input
          className={props.class}
          type={props.type}
          name={props.nom}
          placeholder={props.placeholder}
        />
      </label>
    </>
  );
};
