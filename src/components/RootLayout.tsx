import { Outlet } from "react-router-dom";
import { Header } from ".";

export default function RootLayout() {
    return (
        <div className=" flex flex-col items-center p-5 w-full h-full bg-gradient-radial from-cello to-haiti bg-no-repeat">
            <Header />
            <Outlet />
            <div className="" id="rules" />
        </div>
    )
}