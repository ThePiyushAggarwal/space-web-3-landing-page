function KeyFeatures() {
	return (
		<section className="mb-24 text-secondary">
			<h5 className="mb-4 text-center text-xl font-bold uppercase text-heading">
				Key Features
			</h5>
			<h3 className="mb-16 text-center text-5xl font-bold uppercase">
				Access The Future
			</h3>
			{/* Cards */}
			<div className="grid gap-4 md:grid-cols-3">
				<div className="rounded-3xl bg-gradient-to-r from-[rgb(255,255,255,0.1)] p-8">
					<img src="./coin.webp" className="mb-4 h-32" />
					<h3 className="mb-4 text-2xl font-bold uppercase">
						Fueling The Metaverse
					</h3>
					<p className="text-lg text-ternary">
						The Metaverse is the next generation of the internet. As one of its
						earliest explorers, you will help fuel its expansion.
					</p>
				</div>
				<div className="rounded-3xl bg-gradient-to-r from-[rgb(255,255,255,0.1)] p-8">
					<img src="./coin2.webp" className="mb-4 h-32" />
					<h3 className="mb-4 text-2xl font-bold uppercase">
						Initial Metaverse Offering
					</h3>
					<p className="text-lg text-ternary">
						The Metaverse is the next generation of the internet. As one of its
						earliest explorers, you will help fuel its expansion.
					</p>
				</div>
				<div className="rounded-3xl bg-gradient-to-r from-[rgb(255,255,255,0.1)] p-8">
					<img src="./coin3.webp" className="mb-4 h-32" />
					<h3 className="mb-4 text-2xl font-bold uppercase">Incubation</h3>
					<p className="text-lg text-ternary">
						The Metaverse is the next generation of the internet. As one of its
						earliest explorers, you will help fuel its expansion.
					</p>
				</div>
			</div>
		</section>
	)
}

export { KeyFeatures }
