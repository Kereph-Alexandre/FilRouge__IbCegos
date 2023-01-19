import { Accueil } from "../pages/Accueil";
import { useRoutes } from "react-router-dom";
import { FichePrestation } from "../composants/FichePrestation/FichePrestation";
import  AjoutPrestation  from "../composants/AjoutPrestation/AjoutPrestation";
export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "/FichePrestation/:id",
      element: <FichePrestation />,
    },
    {
      path: "/AjoutPrestation",
      element: <AjoutPrestation />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};
