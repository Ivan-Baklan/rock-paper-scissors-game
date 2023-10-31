import { useAppDispatch } from "../hooks"
import { makeChoice } from "../store/features/simpleGameSlice"

export default function PlayerChoice() {
    const dispatch = useAppDispatch()
    return (
        <div className="relative bg-choice-triangle bg-no-repeat bg-[length:250px_250px] w-[250px] h-[250px]">
            <a
                type="button"
                onClick={() => { dispatch(makeChoice("paper")) }}
                className="absolute -top-20 -left-20 p-6 bg-paper-border-gradient rounded-full shadow-paper-shadow-outer"
            >
                <button className="bg-icon-paper bg-no-repeat bg-center bg-buttons-bg  rounded-full p-16 shadow-paper-shadow-inner" />
            </a>

            <a
                type="button"
                onClick={() => { dispatch(makeChoice("scissors")) }}
                className="absolute -top-20 -right-20 p-6 bg-scissors-border-gradient rounded-full shadow-scissors-shadow-outer">
                <button className=" bg-icon-scissors bg-no-repeat bg-center bg-buttons-bg  rounded-full p-16 shadow-paper-shadow-inner" />
            </a>
            <a
                type="button"
                onClick={() => { dispatch(makeChoice("rock")) }}
                className="absolute -bottom-20 right-[2.25rem] p-6 bg-rock-border-gradient rounded-full shadow-rock-shadow-outer">
                <button className=" bg-icon-rock bg-no-repeat bg-center bg-buttons-bg  rounded-full p-16 shadow-rock-shadow-inner" />
            </a>
        </div>
    )
}