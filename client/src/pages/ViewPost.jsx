import Styles from "../styles/ViewPost.module.css"
import Confession from "../components/Confession"
import { useLocation, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

async function fetchPostFromID(id) {
    const link = `http://localhost:8080/posts/${id}`
  
    try {
        const response = await fetch(link)
        const post = await response.json()

        return response.status == 200 ? post : false
   } catch(err) {
        console.log(err)
   }
}

export default function ViewPost() {
 
    const { id } = useParams() // get id from the page
    const [post, setPost] = useState({}) // page will be empty first, so we use state
    const [placeholderText, setPlaceholderText] = useState("Loading...")

    function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href)
    }

    useEffect(() => { // useEffect hook to run code on load
       async function fetchData() {
            try {
                const post = await fetchPostFromID(id)

                post ? setPost({title: post.title, content: post.content}) : setPlaceholderText("There was an error finding this post.") // set state so that DOM renders the new info or say its invalid
            } catch(err) {
                console.log(err) 
            }
       }
       fetchData()
    }, [])

    return (
      <div className={Styles.post}>
        {post.title ? <Confession title={post.title} content={post.content} time="2023"/> : <h1>{placeholderText}</h1>}
        {post.title && <button onClick={copyToClipboard} >Copy link to clipboard</button>}
      </div>
    )
}