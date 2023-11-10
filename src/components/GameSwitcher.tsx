
import { Link, LinkProps } from "react-router-dom";

interface IGameSwitcherProps extends LinkProps {
    title: string
}

export default function GameSwitcher({ to, title }: IGameSwitcherProps) {
    return (
        <Link to={to} className=" absolute md:bottom-6 md:left-6 md:px-8 md:py-4 md:tracking-widest xs:tracking-widest xs:bottom-6 xs:left-3 xs:py-3 xs:px-6 text-white  border-2 rounded-xl border-white">{title}</Link>
    )
}