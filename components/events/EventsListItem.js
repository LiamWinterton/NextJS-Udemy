import Button from '../ui/Button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

import styles from './EventsListItem.module.css'

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
						<DateIcon />
						<time>{readableDate}</time>
					</div>
					<div className={styles.address}>
						<AddressIcon />
						<address>{readableAddress}</address>
					</div>
				</div>
			</div>
			<div className={styles.actions}>
				<Button href={`/events/${event.id}`}>
					<span>Explore event</span>
					<span className={styles.icon}><ArrowRightIcon /></span>
				</Button>
			</div>
		</li>
	)
}

export default EventsListItem