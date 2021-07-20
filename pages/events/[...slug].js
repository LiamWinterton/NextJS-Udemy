import { Fragment } from 'react'
import { useRouter } from 'next/router'

import { getFilteredEvents } from '../../dummy-data'

import EventsList from '../../components/events/EventsList'
import ResultsTitle from '../../components/results-title/results-title'
import Button from '../../components/ui/Button'

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
		return (
			<Fragment>
				<p>No Events Found!</p>
				<div className="center"><Button href="/events">Show all Events</Button></div>
			</Fragment>
		)
	}

	const date = new Date(numYear, numMonth - 1)

	return (
		<Fragment>
			<h1>Filtered Events:</h1>
			<ResultsTitle date={date} />
			<EventsList events={filteredEvents} />
		</Fragment>
	)
}

export default EventsArchiveFiltered