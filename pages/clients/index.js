import Link from 'next/link'

export default function client() {
	const clients = [
		{ id: "google", url: "/clients/google", name: "Google" },
		{ id: "facebook", url: "/clients/facebook", name: "Facebook" },
	]

	return (
		<div>
			<h1>Clients</h1>
			<ul>
				{clients.map(client => {
					return <li key={client.id}><Link href={client.url}>{client.name}</Link></li>
				})}
			</ul>
		</div>
	)
}