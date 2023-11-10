
import { useNavigate } from "react-router-dom"
import { ChoiceButton } from "../index"
import { useAppDispatch } from "../../hooks"
import { makeChoiceBonus, makeComputerChoiceAsync } from "../../store/features/bonusGameSlice";


export default function BonusPlayerChoice() {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    return (
        <div className="relative bg-choice-pentagon  bg-no-repeat  md:bg-[length:400px_400px] md:w-[400px] md:h-[400px] xs:bg-[length:200px_200px] xs:w-[200px] xs:h-[200px] xs:mb-10">




            <ChoiceButton
                variant="scissors"
                buttonClass="absolute -top-20 md:left-[25%] xs:left-[20%] md:scale-100 xs:scale-75"
                onClick={() => {
                    dispatch(makeChoiceBonus("scissors"))
                    dispatch(makeComputerChoiceAsync())
                    navigation('singleplayer')
                }}
                size="medium"
            />
            <ChoiceButton
                variant="paper"
                className=" "
                buttonClass="absolute md:top-16 md:right-[-5rem] xs:top-18 xs:right-[-4rem] md:scale-100 xs:scale-75"
                onClick={() => {
                    dispatch(makeChoiceBonus("paper"))
                    dispatch(makeComputerChoiceAsync())
                    navigation('singleplayer')
                }}
                size="medium"
            />
            <ChoiceButton
                variant="rock"
                buttonClass="absolute md:bottom-[-5rem] md:right-[-2rem] xs:bottom-[-4rem] xs:right-[-2.5rem] md:scale-100 xs:scale-75"
                onClick={() => {
                    dispatch(makeChoiceBonus("rock"))
                    dispatch(makeComputerChoiceAsync())
                    navigation("singleplayer")
                }}
                size="medium"

            />
            <ChoiceButton
                variant="lizard"
                buttonClass="absolute md:bottom-[-5rem] md:left-0 xs:bottom-[-4rem] xs:left-[-2.5rem] md:scale-100 xs:scale-75"
                onClick={() => {
                    dispatch(makeChoiceBonus("lizard"))
                    dispatch(makeComputerChoiceAsync())
                    navigation('singleplayer')
                }}
                size="medium"
            />
            <ChoiceButton
                variant="spock"
                buttonClass="absolute md:top-16 md:left-[-5rem] xs:top-18 xs:left-[-4rem] md:scale-100 xs:scale-75"
                onClick={() => {
                    dispatch(makeChoiceBonus("spock"))
                    dispatch(makeComputerChoiceAsync())
                    navigation('singleplayer')
                }}
                size="medium"
            />
        </div>
    )
}