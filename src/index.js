import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./Components/About";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import RestMenu from "./Components/RestMenu";
import Cart from "./Components/Cart";

//lazyLoading

const GroceryBusiness = lazy(() => import("./Components/GroceryBusiness"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <GroceryBusiness />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
