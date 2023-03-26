import Styles from "../styles/Home.module.css"
import Confession from "../components/Confession"
import { useState } from "react"
import { useEffect } from "react"
import { ip } from "../config"

async function fetchNewPosts() {
    const link = `${ip}/posts/` // this link gets max 30 new posts
  
    try {
        const response = await fetch(link)
        const posts = await response.json()

        if (response.status == 200) return posts.message
   } catch(err) {
        console.log(err)
   }
}

export default function HomePage() {
    const [confessions, setConfessions] =  useState([]) // store current confessions in state

    useEffect(() => { // grab confessions on page loads
        async function showPosts() {
            const posts = await fetchNewPosts()
            setConfessions(posts)
        }

        showPosts()
    } , [])

    return(
        <div className={Styles.home}>
            <h1>Latest confessions</h1>
            <h2>Want to make a confession? Click the plus at the top of the screen and post an anonymous confession.</h2>
            <div className={Styles.container}>
            {confessions.map((post) => <Confession key={post._id} title={post.title} content={post.content} time={post.timestamp} linkId={post._id} />)}
            </div>
        </div>
    )
}

