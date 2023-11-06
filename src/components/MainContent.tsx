import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlayerChoice } from ".";
import { clearChoices } from "../store/features/simpleGameSlice";

import RulesPortal from "./RulesModal/RulesPortal";

export default function MainContent() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearChoices())
    }, [])
    return (
        <div className="flex relative w-full h-full items-center justify-center ">
            <PlayerChoice />

            <RulesPortal />
        </div>
    )
} 