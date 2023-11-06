import { createBrowserRouter } from "react-router-dom";
import { GameContent, MainContent, RootLayout } from "./components";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <MainContent />
            },
            {
                path: "singleplayer",
                element: <GameContent />
            }
        ]
    },
])

export default routes