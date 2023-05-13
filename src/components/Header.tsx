import { Button } from "./Button"

function onClick() {
	console.log("onButtonClick")
}

function Header() {
	return (
		<header className="grid h-24 grid-cols-6 items-center gap-4">
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
			<div className="col-span-4 flex gap-8 text-secondary">
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
			<div className="col-span-1">
				<Button variant="primary">Connect Wallet</Button>
			</div>
		</header>
	)
}

export { Header }
