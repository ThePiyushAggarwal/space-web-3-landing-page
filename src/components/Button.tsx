import clsx from "clsx"
import React from "react"

type ButtonProps = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant: "primary" | "secondary"
}

const commonStyles = "rounded-full px-4 py-3 text-secondary font-semibold"

function Button({ variant, ...props }: ButtonProps) {
	switch (variant) {
		case "primary":
			return <button className={clsx(commonStyles, "bg-primary")} {...props} />
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