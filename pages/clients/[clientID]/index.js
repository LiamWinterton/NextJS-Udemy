import { useRouter } from 'next/router'

export default function ClientSingle() {
	const router = useRouter()

	return (
		<div>
			<h1>{router.query.clientID}</h1>
		</div>
	)
}