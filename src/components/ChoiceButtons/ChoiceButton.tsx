import { ButtonHTMLAttributes, ObjectHTMLAttributes } from "react";

type ButtonOrDivProps = ButtonHTMLAttributes<HTMLButtonElement> & ObjectHTMLAttributes<HTMLDivElement>

interface IChoiceButtonProps extends ButtonOrDivProps {
    buttonClass: string
    size: "small" | "medium" | "big"
    variant: "paper" | "rock" | "scissors" | "spock" | "lizard" | null
}

export default function ChoiceButton({ variant, buttonClass = "", size, onClick, ...props }: IChoiceButtonProps) {

    const imageBGVariant = {
        "paper": "bg-icon-paper",
        "rock": "bg-icon-rock",
        "scissors": "bg-icon-scissors",
        "spock": "bg-icon-spock",
        "lizard": "bg-icon-lizard",
        "null": ""
    }

    const buttonBGVariant = {
        "paper": "  bg-paper-border-gradient rounded-full shadow-paper-shadow-outer",
        "scissors": " bg-scissors-border-gradient rounded-full shadow-scissors-shadow-outer",
        "rock": " bg-rock-border-gradient rounded-full shadow-rock-shadow-outer",
        "spock": " bg-spoack-border-gradient rounded-full shadow-spock-shadow-outer",
        "lizard": " bg-lizard-border-gradient rounded-full shadow-lizard-shadow-outer",
        "null": ""
    }

    const imageSize = {
        "small": "p-14 shadow-paper-shadow-inner",
        "medium": "md:p-16 xs:p-12 shadow-paper-shadow-inner",
        "big": "md:p-24 xs:p-12  shadow-[inset_0_10px_#C1C1C1] md:bg-[length:70px] xs:bg-[length:40px]"
    }

    const buttonSize = {
        "small": "p-4",
        "medium": "md:p-6 xs:p-4",
        "big": "md:p-8 xs:p-4"
    }

    const checkedVariant = variant !== null ? variant : "null"
    const imageClasses = [imageSize[size], imageBGVariant[checkedVariant], "bg-no-repeat bg-center bg-buttons-bg  rounded-full"].filter(Boolean).join(" ")
    const buttonClasses = [buttonSize[size], buttonBGVariant[checkedVariant], buttonClass].filter(Boolean).join(" ")

    const intermediateResult = (): JSX.Element => {
        if (variant === null) {
            return (<div className="md:w-48 md:h-48 xs:w-32 xs:h-32 md:m-8 bg-black bg-opacity-50 rounded-full" />)
        } else {
            return (
                <div className={buttonClasses}>
                    <div className={imageClasses} />
                </div>
            )
        }
    }


    return !!onClick ? (
        <button
            type="button"
            onClick={onClick}
            className={buttonClasses}>
            <div className={imageClasses} />
        </button>
    ) : (
        intermediateResult()
    )
}