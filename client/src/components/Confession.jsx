import Styles from "../styles/Confession.module.css"
import { Link } from "react-router-dom"

export default function Confession({ title, content, time, linkId }) {
    const date = new Date(time)
    const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'short', timeStyle: 'short'}).format(date)

    return( 
        <div className={Styles.confession}>
            {linkId ? <Link to={`/confession/${linkId}`}>{title}</Link> : <h1>{title}</h1>}
            <p>{content}</p>
            {time && <h2>{formattedDate}</h2>}
        </div>
    )
}