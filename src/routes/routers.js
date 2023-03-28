import { createBrowserRouter } from "react-router-dom";
import Coach from "../components/Coach";
import Home from "../components/Home";
import Main from "../components/layouts/Main";
import Page404 from "../components/Page404";
import PlayerContract from "../components/PlayerContract";
import PlayerProfile from "../components/PlayerProfile";
import PlayerRelease from "../components/PlayerRelease";
import Players from "../components/Players";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/players',
                element: <Players></Players>
            },
            {
                path: '/coach-info',
                element: <Coach></Coach>
            },
            {
                path: '/player-release',
                element: <PlayerRelease></PlayerRelease>
            },
            {
                path: '/player-contract',
                element: <PlayerContract></PlayerContract>
            },
            {
                path: 'players/:id',
                element: <PlayerProfile></PlayerProfile>
            }
        ]
    },
    {
        path: '*',
        element: <Page404></Page404>
    }
]);