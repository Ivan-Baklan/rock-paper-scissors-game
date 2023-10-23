

export default function Header() {
    return (
        <div className=' w-1/2 flex justify-between  m-2 pl-6 p-5 border-4 rounded-xl border-pale-sky'>
            <p className=' text-4xl font-bold text-white '>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
            </p>
            <div className='flex flex-col bg-white p-4 px-11 rounded-xl'>
                <p className=' text-md font-semibold tracking-widest self-center text-text-score'>SCORE</p>
                <p className=' text-6xl font-bold text-dark-text'>12</p>
            </div>
        </div>
    )
}