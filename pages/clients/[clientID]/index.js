import { useRouter } from 'next/router'

export default function ClientSingle() {
	const router = useRouter()

	return (
		<div>
			<h1>Client Single</h1>
			<p>Client: {router.query.clientID}</p>
		</div>
	)
}