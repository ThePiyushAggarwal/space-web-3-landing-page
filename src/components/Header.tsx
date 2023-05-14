import { useSetAtom } from "jotai"
import { Button } from "./Button"
import { isMenuOpenAtom } from "./jotaiAtoms"

function onClick() {
	console.log("onButtonClick")
}

function Header() {
	const setIsMenuOpen = useSetAtom(isMenuOpenAtom)

	return (
		<header className="grid h-24 grid-cols-2 items-center gap-4 md:grid-cols-6">
			{/* Brand Logo */}
			<div className="col-span-1">
				<button
					onClick={onClick}
					className="text-3xl font-bold uppercase text-secondary"
				>
					SPACE
				</button>
			</div>

			{/* Navigation */}
			<div className="col-span-4 hidden gap-8 text-secondary md:flex">
				{["Home", "Marketplace", "Blog", "Road Map"].map((item, key) => (
					<button
						key={key}
						onClick={onClick}
						className="text-lg font-bold uppercase"
					>
						{item}
					</button>
				))}
			</div>

			{/* Connect Wallet Button */}
			<div className="col-span-1 hidden md:block">
				<Button variant="primary">Connect Wallet</Button>
			</div>

			{/* Hamburger - Visible on smaller screens */}
			<div className="col-span-1 text-end md:hidden">
				<Button variant="secondary" onClick={() => setIsMenuOpen((x) => !x)}>
					Menu
				</Button>
			</div>
		</header>
	)
}

export { Header }
