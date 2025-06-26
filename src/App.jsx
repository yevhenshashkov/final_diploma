import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hotels from "./pages/hotels";
import AboutUs from "./pages/about-us";
import Contacts from "./pages/contacts";
import Login from "./pages/login";
import SignUp from "./pages/sign-up";
import Layout from "./components/Layout";
import { hotelsLoader } from "./loaders/hotelsLoader.js";
import { store } from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "hotels",
                element: <Hotels />,
                loader: hotelsLoader(store),
            },
            { path: "about", element: <AboutUs /> },
            { path: "contacts", element: <Contacts /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <SignUp /> },
            { index: true, element: <Hotels /> },
        ],
    },
    {
        path: "*",
        element: <div>404 — Я вас не звав ідіть...</div>,
    },
]);

function App() {
    return (
        <RouterProvider
            router={router}
        />
    );
}

export default App;
