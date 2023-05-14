import { Tag } from "./Tag"

function AboutUs() {
	return (
		<section className="mb-24 grid text-secondary md:grid-cols-2">
			<div className="order-2 col-span-1 p-8 md:order-1">
				<img
					src="./robot.png"
					className="h-full w-full rounded-3xl object-cover"
					alt="Robot"
				/>
			</div>
			<div className="order-1 col-span-1 p-8 md:order-2">
				<h5 className="mb-4 text-xl font-bold uppercase text-heading">
					About Us
				</h5>
				<h3 className="mb-4 text-5xl font-bold uppercase">
					Discover More Collect and Sell Rate NFTS
				</h3>
				<p className="mb-4 text-lg text-ternary">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
					reprehenderit consectetur praesentium ea id maxime qui quibusdam
					numquam officiis laudantium ducimus eaque, magni ullam culpa!
				</p>
				<Tag>Wide range of platforms</Tag>
				<Tag>World class artists</Tag>
				<Tag>Any type of assets</Tag>
				<Tag>Fast payments</Tag>
			</div>
		</section>
	)
}

export { AboutUs }
