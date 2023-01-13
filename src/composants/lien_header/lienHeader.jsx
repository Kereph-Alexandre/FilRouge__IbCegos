import "./lienHeader.css";

export const LienHeader = (props) => {
  return (
    <>
      <li className="lienHeader">
        <a href={props.href}>{props.texte}</a>
      </li>
    </>
  );
};
