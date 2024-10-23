import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contacto from "./Pages/Contacto.jsx";
import Productos from "./Pages/Productos.jsx";

import Error from "./components/Error.jsx";
import Home from "./Pages/Home.jsx";
import Galeria from "./Pages/Galeria.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error/>,
  },
  {
    path: "/galeria",
    element: <Galeria/>,
  },
  {
    path: "/productos",
    element: <Productos/>,
  },
  {
    path: "/contacto",
    element: <Contacto/>,
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
