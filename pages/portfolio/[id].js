import { useRouter } from 'next/router'

export default function PortfolioSingle() {
	const router = useRouter()

	console.group("test")
	console.log(router.pathname)
	console.log(router.query)
	console.groupEnd("test")

	return (
		<div>
			<h1>Portfolio Single</h1>
			<p>Project: {router.query.id}</p>
		</div>
	)
}