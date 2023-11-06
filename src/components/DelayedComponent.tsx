import { useEffect, useState } from "react"

interface IDelayedFunction {
    children: JSX.Element
    delay: number
    animation: string
}

export default function DelayedFunction({ children, animation, delay }: IDelayedFunction) {
    const [renderComponent, setRenderComponent] = useState(false)

    useEffect(() => {

        const delayedRender = setTimeout(() => { setRenderComponent(true) }, delay)

        return () => {
            clearTimeout(delayedRender)
        }
    }, [delay])

    return (
        renderComponent ? <div className={animation}>{children}</div> : <></>
    )
}