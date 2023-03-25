import Styles from "../styles/Confession.module.css"

export default function Confession({ title, content, time }) {
    return( 
        <div className={Styles.confession}>
            <h1>{title}</h1>
            <p>{content}</p>
            <h2>{time}</h2>
        </div>
    )
}