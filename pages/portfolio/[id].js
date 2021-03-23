import { useRouter } from 'next/router'

export default function PortfolioSingle() {
	const router = useRouter()

	return (
		<div>
			<h1>Portfolio Single</h1>
			<p>Project: {router.query.id}</p>
		</div>
	)
}