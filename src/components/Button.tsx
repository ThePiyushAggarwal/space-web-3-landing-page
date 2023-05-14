import clsx from "clsx"
import React from "react"

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant: "primary" | "secondary"
}

const commonStyles =
	"rounded-full px-8 py-3 text-secondary font-semibold hover:scale-95 hover:opacity-90"

function Button({ variant, ...props }: ButtonProps) {
	switch (variant) {
		case "primary":
			return (
				<button
					className={clsx(commonStyles, "border-2 border-primary bg-primary")}
					{...props}
				/>
			)
		case "secondary":
			return (
				<button
					className={clsx(commonStyles, "border-2 border-secondary")}
					{...props}
				/>
			)
		default:
			return <></>
	}
}

export { Button }
