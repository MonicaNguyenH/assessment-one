import styles from './Card.module.css'

export default function Card({
    title = "title",
    description = "description",
    bgColor,
    borderColor
}) {
    return(
        <>
        <div className={styles.card} 
            style={{
                backgroundColor: bgColor, 
                borderColor: borderColor
            }}>
            <title className={styles.title}>{title}</title>
            <div className={styles.description}>{description}</div>
        </div>
        </>
    )
}
