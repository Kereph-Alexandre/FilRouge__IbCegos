import { Accueil } from "../pages/Accueil";
import { useRoutes } from "react-router-dom";
import { FichePrestation } from "../composants/FichePrestation/FichePrestation";
import { FormulaireEntreprise } from "../composants/FormulaireEntreprise/FormulaireEntreprise";
import { Inscription } from "../pages/Inscription";
import { Connexion } from "../pages/Connexion";
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
      path: "/EspaceEntreprise/",
      element: <FormulaireEntreprise />,
    },
      path: "Inscription",
      element: <Inscription />,
    },
    {
      path: "/Connexion",
      element: <Connexion />,
    }
  ];

  return <>{useRoutes(routes)}</>;
};
