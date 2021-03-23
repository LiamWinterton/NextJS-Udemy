import { useRouter } from 'next/router'

function ClientSingle() {
	const router = useRouter()

	function handleLoadButtonPress() {
		// Do some logic
		// router.push(`/clients/${router.query.clientID}/projectA`)
		router.push({
			pathname: '/clients/[clientID]/[projectID]',
			query: {
				clientID: router.query.clientID,
				projectID: "project-1"
			}
		})
	}

	return (
		<div>
			<h1>Client: {router.query.clientID}</h1>
			<button onClick={handleLoadButtonPress}>Load Project 1</button>
		</div>
	)
}

export default ClientSingle