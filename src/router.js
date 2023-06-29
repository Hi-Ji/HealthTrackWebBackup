import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div><HomePage /></div>,
    },
]);

export default router;

