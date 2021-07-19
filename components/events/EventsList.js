import EventsListItem from './EventsListItem'

function EventsList(props) {
	const { events } = props

	return (
		events.map(event => {
			return <EventsListItem key={event.id} event={event} />
		})
	)
}

export default EventsList