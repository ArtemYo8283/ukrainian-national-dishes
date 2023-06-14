import { createBrowserRouter } from "react-router-dom";
import Pages from "../pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Pages.HomePage />,
        errorElement: <Pages.ErrorPage />
    }
]);

export default router;
