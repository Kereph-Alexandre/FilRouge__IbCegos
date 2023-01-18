import { Accueil } from "../pages/Accueil";
import { useRoutes } from "react-router-dom";
export const Router = () => {
  const routes = [
    {
      path: "/",
      element: <Accueil />,
    },
  ];

  return <>{useRoutes(routes)}</>;
};
