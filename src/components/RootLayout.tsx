import { Outlet } from "react-router-dom";
import { Header } from ".";
import { useAppDispatch, useAppSelector } from "../hooks";
import { closeRuleModule, selectUIState } from "../store/features/moduleUISlice";

export default function RootLayout() {
    const dispatch = useAppDispatch();
    const { isRuleOpen } = useAppSelector(selectUIState);
    return (
        <div className=" flex flex-col items-center w-full h-full bg-gradient-radial from-cello to-haiti bg-no-repeat">
            <Header />
            <Outlet />
            <div
                id="rules"
                className={`${isRuleOpen ? "" : "hidden"} absolute bg-black bg-opacity-50 w-full h-full flex items-center justify-center`}
                onClick={() => { dispatch(closeRuleModule()) }}
            />
        </div>
    )
}