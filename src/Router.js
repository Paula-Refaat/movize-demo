
import {
    createBrowserRouter

  } from "react-router-dom";
import ProductList from "./Pages/product/ProductList";
import AboutPage from "./Pages/about/AboutPage";
import ContactPage from "./Pages/contact/ContactPage";
import App from "./App";
import NotFound from "./shared/NotFound";
import ProductInfoPage from "./Pages/product/ProductInfoPage";
export const router = createBrowserRouter([
    {
        path : '/',
        element: <App />,
        children : [
            {
                path: "/",
                element: <ProductList />,
              },
              {
                path: "/productinfo/:num",
                element: <ProductInfoPage />,
              },
              {
                  path: "/about",
                  element: <AboutPage />,
                },
                {
                  path: "/contact",
                  element: <ContactPage />,
                },
        ]
    },

    {
      //WILD CARD ROUTE
      path: '*',
      element: <NotFound />

    }

   
  ]);