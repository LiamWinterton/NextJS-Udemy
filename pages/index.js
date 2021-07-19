import { getFeaturedEvents } from '../dummy-data'

import EventsList from '../components/events/EventsList'

function Homepage() {
	const featuredEvents = getFeaturedEvents()

	console.log(featuredEvents)

	return (
		<div>
			<h1>Homepage!</h1>
			<EventsList events={featuredEvents} />
		</div>
	)
}

export default Homepage