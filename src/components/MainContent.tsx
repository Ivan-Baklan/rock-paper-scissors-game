import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { GameSwitcher, PlayerChoice } from ".";
import { clearChoices } from "../store/features/simpleGameSlice";

import RulesPortal from "./RulesModal/RulesPortal";

export default function MainContent() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearChoices())
    }, [dispatch])
    return (
        <div className="flex relative w-full h-full items-center justify-center ">
            <PlayerChoice />


            <RulesPortal />
            <GameSwitcher to={"/bonus"} title="BONUS GAME" />
        </div>
    )
} 