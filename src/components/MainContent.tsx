import PlayerChoice from "./PlayerChoice";

export default function MainContent() {
    return (
        <div className="flex relative w-full h-full items-center justify-center ">
            <PlayerChoice />
            <button className=" absolute bottom-0 right-0 text-white px-8 py-4 border-2 rounded-xl border-white tracking-widest">RULES</button>
        </div>
    )
} 