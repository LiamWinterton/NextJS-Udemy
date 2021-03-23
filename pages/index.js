import Link from 'next/link'

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<ul>
				<li><Link href="/">Home</Link></li>
				<li><Link href="/clients">Clients</Link></li>
				<li><Link href="/portfolio">Portfolio</Link></li>
			</ul>
		</div>
	)
}

export default Home