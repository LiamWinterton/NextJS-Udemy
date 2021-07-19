import { useRouter } from 'next/router'

export default function blogPage() {
	const router = useRouter()

	console.log(router.query.slug)
	
	return (
		<div>
			<h1>Blog - Catch All</h1>
			<p></p>
		</div>
	)
}