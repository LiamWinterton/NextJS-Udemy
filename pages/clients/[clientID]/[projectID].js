import { useRouter } from 'next/router'

export default function clientProject() {
	const router = useRouter()

	return (
		<div>
			<h1>{`${router.query.clientID}'s project: ${router.query.projectID}`}</h1>
			<p>About {router.query.projectID}</p>
		</div>
	)
}