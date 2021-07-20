import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../dummy-data'

import EventsList from '../../components/events/EventsList'

function EventsArchiveFiltered() {
	const router = useRouter()

	const filteredData = router.query.slug

	if(!filteredData) {
		return <p className="center">Loading...</p>
	}

	// Have data, lets filter
	const [filteredYear, filteredMonth] = filteredData

	const numYear = parseInt(filteredYear)
	const numMonth = parseInt(filteredMonth)

	if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
		return <h2>Invalid filter, check URL</h2>
	}

	const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })

	if(!filteredEvents || filteredEvents.length === 0) {
		return <p>No Events Found!</p>
	}

	return (
		<div>
			<h1>Filtered Events:</h1>
			<EventsList events={filteredEvents} />
		</div>
	)
}

export default EventsArchiveFiltered