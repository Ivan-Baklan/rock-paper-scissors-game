import { useAppDispatch } from "../../../hooks"
import { closeRuleModule } from "../../../store/features/moduleUISlice"
import ruleImage from "../../../assets/img/image-rules-bonus.svg"
import closeSVG from "../../../assets/img/icon-close.svg"

export default function RulesContent() {
    const dispatch = useAppDispatch()
    return (
        <div className="grid lg:grid-cols-2 lg:grid-rows-[100px_1fr] xs:grid-cols-1 xs:grid-rows-3 justify-between md:w-1/4 md:h-4/6 xs:w-full xs:h-full bg-white rounded-md p-10">

            <h2 className="lg:row-start-1 lg:col-start-1 lg:self-start lg:justify-self-start xs:self-center xs:justify-self-center text-4xl font-bold text-dark-text">RULES</h2>
            <button
                className=" lg:row-start-1 lg:col-start-2 lg:self-start lg:justify-self-end lg:m-4 xs:self-end xs:justify-self-center xs:row-start-3"
                type="button"
                onClick={() => { dispatch(closeRuleModule()) }}
            >
                <img src={closeSVG} alt="" />
            </button>

            <img src={ruleImage} alt="" className=" lg:col-span-2 lg:self-center lg:justify-self-center xs:self-center xs:justify-self-center" />
        </div>
    )
}