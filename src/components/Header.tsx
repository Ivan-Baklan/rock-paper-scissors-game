import { useAppSelector } from "../hooks"
import { selectGameChoice } from "../store/features/simpleGameSlice"
import logoSVG from '../assets/img/logo.svg'

export default function Header() {
    const { score } = useAppSelector(selectGameChoice)
    return (
        <div className=' md:w-1/2 xs:w-3/4 flex items-center justify-between  m-2 mt-6 pl-6 p-5 border-4 rounded-xl border-pale-sky'>
            <img src={logoSVG} alt="Rock Paper Scissors" className=" xs:h-16  md:w-auto md:h-auto" />
            <div className='flex flex-col bg-white p-4 md:px-11 xs:px-5 rounded-xl'>
                <p className=' md:text-md xs:text-sm font-semibold tracking-widest self-center text-text-score'>SCORE</p>
                <p className=' md:text-6xl xs:text-4xl font-bold text-dark-text text-center'>{score}</p>
            </div>
        </div>
    )
}