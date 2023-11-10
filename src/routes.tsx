import { createBrowserRouter } from "react-router-dom";
import { BonusGameContent, BonusMainContent, BonusRootLayout, GameContent, MainContent, RootLayout } from "./components";



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
            },
        ]
    },
    {
        path: '/bonus',
        element: <BonusRootLayout />,
        children: [
            {
                index: true,
                element: <BonusMainContent />
            },
            {
                path: "singleplayer",
                element: <BonusGameContent />
            }
        ]
    }
])

export default routes