import Link from 'next/link'

import styles from './EventsListItem.module.css'

console.log(styles)

function EventsListItem(props) {
	const { event } = props

	const readableDate = new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
	const readableAddress = event.location.replace(', ', '\n')
	
	return (
		<li className={styles.item}>
			<img src={event.image} alt="" />
			<div className={styles.content}>
				<div className={styles.summary}>
					<h2>{event.title}</h2>
					<div className={styles.date}>
						<time>{readableDate}</time>
					</div>
					<div className={styles.address}>
						<address>{readableAddress}</address>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Link href={`/events/${event.id}`}>Explore event</Link>
			</div>
		</li>
	)
}

export default EventsListItem