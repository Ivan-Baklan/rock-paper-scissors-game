import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BonusRulesPortal, ChoiceButton, DelayedComponent, GameSwitcher } from "../index";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { clearChoices, makeComputerChoiceAsync, selectBonusGameChoice } from "../../store/features/bonusGameSlice";



export default function BonusGameContent() {

    const { playerChoice, computerChoice, winner } = useAppSelector(selectBonusGameChoice);

    const dispatch = useAppDispatch()




    const roundResult = () => {
        if (playerChoice && computerChoice) {
            switch (winner) {
                case "player2":
                    return "YOU LOSE"

                case "draw":
                    return "ITS A DRAW"

                case "player1":
                    return "YOU WIN"
                default:
                    return ""
            }
        }
        return undefined
    }

    const result = roundResult()

    return (
        <>
            <div className="md:flex gap-10 w-4/6 h-4/6 md:justify-center md:items-center xs:grid xs:grid-cols-2 xs:grid-rows-2">
                <div className="flex md:flex-col xs:flex-col-reverse gap-10 items-center justify-between xs:row-span-1 xs:col-span-1">
                    <h4 className="text-center text-white font-semibold md:text-2xl xs:text-md ">YOU PICKED</h4>
                    <div className={`rounded-full transition-shadow delay-700 ${winner === "player1" ? "md:shadow-big-winner-shadow xs:shadow-small-winner-shadow" : ""}`}>
                        <ChoiceButton variant={playerChoice} size="big" buttonClass="" />
                    </div>

                </div>
                {result && <DelayedComponent animation="animate-extend-width  w-auto overflow-hidden xs:col-span-2 xs:justify-self-center" delay={100}>
                    <div className={`flex flex-col justify-center items-center gap-4 w-max`}>
                        <h4 className="text-4xl  text-white text-center">{result}</h4>
                        <Link
                            to='..'
                            className="text-center text-dark-text text-xl px-10 py-4 bg-white rounded-lg hover:text-red"
                            onClick={() => { dispatch(clearChoices()) }}
                        >PLAY AGAIN</Link>
                    </div>
                </DelayedComponent>}
                <div className="flex md:flex-col xs:flex-col-reverse gap-10 items-center justify-between   xs:row-start-1 xs:col-start-2">
                    <h4 className="text-center text-white font-semibold md:text-2xl xs:text-md whitespace-nowrap">THE HOUSE PICKED</h4>
                    <div className={`rounded-full transition-shadow delay-700 ${winner === "player2" ? "md:shadow-big-winner-shadow xs:shadow-small-winner-shadow" : ""}`}>
                        <ChoiceButton variant={computerChoice} size="big" buttonClass="" />
                    </div>

                </div>

            </div>
            <BonusRulesPortal />
            <GameSwitcher to={'/'} title="MAIN GAME" />
        </>
    )
}