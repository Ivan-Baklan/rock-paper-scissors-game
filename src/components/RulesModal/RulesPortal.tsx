import { createPortal } from 'react-dom'
import { useAppDispatch } from "../../hooks";
import { openRuleModule } from "../../store/features/moduleUISlice";
import { useAppSelector } from "../../hooks"
import { selectUIState } from "../../store/features/moduleUISlice"
import { RulesContent } from '../index';

export default function RulesPortal() {
    const { isRuleOpen } = useAppSelector(selectUIState)
    const dispatch = useAppDispatch();
    const rulesDiv = document.getElementById("rules") as HTMLElement
    return (
        <>
            <button
                type="button"
                onClick={() => { dispatch(openRuleModule()) }}
                className=" absolute md:bottom-6 md:right-6 md:px-8 md:py-4 md:tracking-widest xs:tracking-[0.3rem] xs:bottom-6 xs:py-3 xs:px-12 text-white  border-2 rounded-xl border-white ">RULES</button>

            {isRuleOpen ? createPortal(<RulesContent />, rulesDiv) : <></>}
        </>

    )
}