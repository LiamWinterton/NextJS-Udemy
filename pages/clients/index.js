import Link from 'next/link'

export default function client() {
	const clients = [
		{ id: "google", url: "/clients/google", name: "Google" },
		{ id: "facebook", url: "/clients/facebook", name: "Facebook" },
	]

	function displayLinks() {
		return clients.map(client => {
			return <li key={client.id}><Link href={client.url}>{client.name}</Link></li>
		})
	}

	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{displayLinks()}
			</ul>
		</div>
	)
}