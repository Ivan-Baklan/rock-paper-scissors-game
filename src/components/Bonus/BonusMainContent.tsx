import { useEffect } from "react"
import { BonusPlayerChoice, BonusRulesPortal, GameSwitcher } from ".."
import { useAppDispatch } from "../../hooks"
import { clearChoices } from "../../store/features/bonusGameSlice"


export default function BonusMainContent() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(clearChoices())
    }, [])
    return (
        <div className="flex relative w-full h-full items-center justify-center ">
            <BonusPlayerChoice />


            <GameSwitcher to={"/"} title="MAIN GAME" />
            <BonusRulesPortal />
        </div>
    )
} 