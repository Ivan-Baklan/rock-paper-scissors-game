import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components";
import MainPage from "./components/MainPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MainPage />
            }
        ]
    },
])

export default routes