import { Accueil } from "../pages/Accueil";
import { useRoutes } from "react-router-dom";
import { FichePrestation } from "../composants/FichePrestation/FichePrestation";
import { FormulaireEntreprise } from "../composants/FormulaireEntreprise/FormulaireEntreprise";
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
      path: "/EspaceEntreprise/:id",
      element: <FichePrestation />,
    },
    {
      path: "/EspaceEntreprise/",
      element: <FormulaireEntreprise />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};
