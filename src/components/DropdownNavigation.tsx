import { Button } from "./Button"

function DropdownNavigation() {
	return (
		<div className="flex flex-col rounded-lg border-2 border-ternary bg-ternary p-4">
			<div className="mb-4">
				{["Home", "Marketplace", "Blog", "Road Map"].map((item, key) => (
					<button
						key={key}
						className="w-full flex-1 ps-3 text-left text-lg font-bold uppercase hover:bg-secondary"
					>
						{item}
					</button>
				))}
			</div>

			<div className="text-center">
				<Button variant="primary">Connect Wallet</Button>
			</div>
		</div>
	)
}

export { DropdownNavigation }
