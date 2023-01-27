import { Link } from "react-router-dom";
import "./logo.css";

export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img
          className="logo"
          src="https://dummyimage.com/100x100/000/fff"
          alt="logo de l'entreprise UMC"
        />
      </Link>
    </>
  );
};
