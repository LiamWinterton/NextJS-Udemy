import EventsListItem from './EventsListItem'

import styles from './EventsList.module.css'

function EventsList(props) {
	const { events } = props

	const renderEvents = events.map(event => {
		return <EventsListItem key={event.id} event={event} />
	})

	return (
		<ul className={styles.list}>
			{renderEvents}
		</ul>
	)
}

export default EventsList