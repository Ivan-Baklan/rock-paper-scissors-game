
import { useNavigate } from "react-router-dom"
import { ChoiceButton } from "."
import { useAppDispatch } from "../hooks"
import { makeChoice } from "../store/features/simpleGameSlice"

export default function PlayerChoice() {
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    return (
        <div className="relative bg-choice-triangle bg-no-repeat md:bg-[length:250px_250px] md:w-[250px] md:h-[250px] xs:bg-[length:150px_150px] xs:w-[150px] xs:h-[150px] xs:mb-10">


            <ChoiceButton
                variant="paper"
                buttonClass="absolute -top-20 -left-20 "
                onClick={() => {
                    dispatch(makeChoice("paper"))
                    navigation('singleplayer')
                }}
                size="medium"
            />

            <ChoiceButton
                variant="scissors"
                buttonClass="absolute -top-20 -right-20 "
                onClick={() => {
                    dispatch(makeChoice("scissors"))
                    navigation('singleplayer')
                }}
                size="medium"

            />

            <ChoiceButton
                variant="rock"
                buttonClass="absolute -bottom-20 md:right-[2.25rem] xs:right-[0.5rem]"
                onClick={() => {
                    dispatch(makeChoice("rock"))
                    navigation("singleplayer")
                }}
                size="medium"

            />


        </div>
    )
}