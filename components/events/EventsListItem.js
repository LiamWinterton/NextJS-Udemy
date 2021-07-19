import Link from 'next/link'

function EventsListItem(props) {
	const { event } = props

	const readableDate = new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
	const readableAddress = event.location.replace(', ', '\n')
	
	return (
		<div>
			<img src={event.image} alt="" />
			<div>
				<div><h2>{event.title}</h2></div>
				<div>
					<time>{readableDate}</time>
				</div>
				<div>
					<address>{readableAddress}</address>
				</div>
			</div>
			<div>
				<Link href={`/events/${event.id}`}>Explore event</Link>
			</div>
		</div>
	)
}

export default EventsListItem