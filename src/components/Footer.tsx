import {
	GithubOutlined,
	LinkedinOutlined,
	TwitterOutlined,
} from "@ant-design/icons"

function Footer() {
	return (
		<div className="mb-28 text-secondary">
			<div className="grid grid-cols-6">
				{/* Social Links */}
				<div className="col-span-3 grid grid-rows-6">
					<div className="row-span-2">
						<h5 className="text-3xl font-bold">SPACE.</h5>
					</div>
					<div className="row-span-3 flex gap-4">
						<div>
							<a href="#">
								<TwitterOutlined className="text-3xl" />
							</a>
						</div>
						<div>
							<a href="#">
								<GithubOutlined className="text-3xl" />
							</a>
						</div>
						<div>
							<a href="#">
								<LinkedinOutlined className="text-3xl" />
							</a>
						</div>
					</div>
					<div className="row-span-1 text-lg text-ternary">
						All rights reserved &copy; 2023.
					</div>
				</div>

				{/* Other Links */}
				{[
					{
						heading: "Marketplace",
						links: [
							"About us",
							"Our team",
							"Team details",
							"Error 404",
							"Cart page",
						],
					},
					{
						heading: "Company",
						links: [
							"Wallet",
							"Create page",
							"Login page",
							"Registration",
							"Checkout",
						],
					},
					{
						heading: "Services",
						links: ["Contact us", "Shop page", "Shop details", "Collectors"],
					},
				].map((item, key) => (
					<div className="col-span-1" key={key}>
						<h6 className="mb-2 font-semibold uppercase">{item.heading}</h6>
						{item.links.map((link, key) => (
							<a
								href="#"
								key={key}
								className="mb-2 block text-lg text-ternary hover:text-secondary"
							>
								{link}
							</a>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export { Footer }
