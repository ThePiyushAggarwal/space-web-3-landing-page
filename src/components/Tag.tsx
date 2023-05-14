type TagProps = {
	children: React.ReactNode
}

function Tag({ children }: TagProps) {
	return (
		<div className="m-2 inline-block rounded-full bg-white bg-opacity-10 px-8 py-3 font-semibold text-secondary">
			{children}
		</div>
	)
}

export { Tag }
