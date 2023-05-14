import { Button } from "./Button"

function HeroSection() {
	return (
		<section className="grid py-24 text-secondary md:grid-cols-2">
			<div className="mb-24 md:mb-0">
				<h1 className="mb-8 text-7xl font-extrabold uppercase md:text-8xl">
					Discover Collect Sell Digital NFT.
				</h1>
				<h3 className="mb-8 text-2xl text-ternary md:text-3xl">
					Generate 10,000+ NFT Collection Only by uploading the layers, and get
					ready to sell your collection.
				</h3>
				<div className="flex justify-evenly gap-4 md:justify-normal">
					<Button variant="primary">Get Started</Button>
					<Button variant="secondary">Join Discord</Button>
				</div>
			</div>
			<div className="relative flex items-center justify-center">
				<img src="./image.webp" className="z-20" />
				<div className="absolute bottom-20 z-10 rounded-full bg-black p-40 opacity-80 md:p-48" />
				<div className="absolute bottom-20 z-0 rounded-full bg-black p-56 opacity-10 md:p-64" />
			</div>
		</section>
	)
}

export { HeroSection }
