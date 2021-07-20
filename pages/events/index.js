import { getAllEvents } from '../../dummy-data'

import EventsList from '../../components/events/EventsList'
import EventsSearch from '../../components/events/EventsSearch'

function EventsArchive() {
	const events = getAllEvents()

	return (
		<div>
			<h1>All Events</h1>
			<EventsSearch />
			<EventsList events={events} />
		</div>
	)
}

export default EventsArchive