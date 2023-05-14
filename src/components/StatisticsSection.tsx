import {
	CheckCircleOutlined,
	SecurityScanOutlined,
	WalletOutlined,
} from "@ant-design/icons"

function StatisticsSection() {
	return (
		<section className="mb-24 text-secondary">
			{/* Statistics */}
			<div className="grid grid-cols-1 rounded-t-3xl border-b-2 border-primary-bg bg-white bg-opacity-10 sm:grid-cols-2 md:grid-cols-3">
				{[
					{
						count: "1.5K+",
						unit: "Collections",
					},
					{
						count: "102K+",
						unit: "Artworks",
					},
					{
						count: "3.2K+",
						unit: "Artists",
					},
				].map((stat, key) => (
					<div className="flex justify-center py-8" key={key}>
						<div>
							<div className="text-7xl font-extrabold">{stat.count}</div>
							<div className="ps-1 text-2xl">{stat.unit}</div>
						</div>
					</div>
				))}
			</div>

			{/* Features Offered */}
			<div className="grid md:grid-cols-3">
				<div className="col-span-1 bg-white bg-opacity-10 p-8 md:rounded-bl-3xl">
					<SecurityScanOutlined className="mb-8 ms-4 text-6xl text-sky-300" />
					<h3 className="mb-4 text-2xl font-bold uppercase">Strong Security</h3>
					<p className="text-lg text-ternary">
						Secure transaction and record information with 2-factor
						authentication (2FA)
					</p>
				</div>
				<div className="col-span-1 border-y-2 border-primary-bg bg-white bg-opacity-10 p-8 md:border-x-2 md:border-y-0">
					<WalletOutlined className="mb-8 ms-4 text-6xl text-purple-400" />
					<h3 className="mb-4 text-2xl font-bold uppercase">Payment Options</h3>
					<p className="text-lg text-ternary">
						Flexible payment of methods with Visa, Mastercard, Paypal, bank
						transfer
					</p>
				</div>
				<div className="col-span-1 rounded-b-3xl bg-white bg-opacity-10 p-8 md:rounded-bl-none md:rounded-br-3xl">
					<CheckCircleOutlined className="mb-8 ms-4 text-6xl text-pink-400" />
					<h3 className="mb-4 text-2xl font-bold uppercase">Market Updated</h3>
					<p className="text-lg text-ternary">
						The most accurate and trusted source for market cap, valuation, and
						cryptocurrency information
					</p>
				</div>
			</div>
		</section>
	)
}

export { StatisticsSection }
