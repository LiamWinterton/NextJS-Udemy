import { getAllEvents } from '../../dummy-data'

import { useRouter } from 'next/router'

import EventsList from '../../components/events/EventsList'
import EventsSearch from '../../components/events/EventsSearch'

function EventsArchive() {
	const router = useRouter()
	const events = getAllEvents()

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`
		
		router.push(fullPath)
	}

	return (
		<div>
			<h1>All Events</h1>
			<EventsSearch onSearch={findEventsHandler} />
			<EventsList events={events} />
		</div>
	)
}

export default EventsArchive