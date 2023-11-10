import { createPortal } from 'react-dom'
import { useAppDispatch } from "../../../hooks";
import { openRuleModule } from "../../../store/features/moduleUISlice";
import { useAppSelector } from "../../../hooks"
import { selectUIState } from "../../../store/features/moduleUISlice"
import { BonusRulesContent } from '../../index';

export default function RulesPortal() {
    const { isRuleOpen } = useAppSelector(selectUIState)
    const dispatch = useAppDispatch();
    const rulesDiv = document.getElementById("rules") as HTMLElement
    return (
        <>
            <button
                type="button"
                onClick={() => { dispatch(openRuleModule()) }}
                className=" absolute bottom-6 right-6 px-8 md:py-4 md:tracking-widest xs:tracking-[0.3rem]  xs:py-3  text-white  border-2 rounded-xl border-white ">RULES</button>

            {isRuleOpen ? createPortal(<BonusRulesContent />, rulesDiv) : <></>}
        </>

    )
}