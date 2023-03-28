import Styles from "../styles/ViewPost.module.css"
import Confession from "../components/Confession"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ip } from "../config"



async function fetchPostFromID(id) {
    const link = `${ip}/posts/${id}`
  
    // check cache before fetching
    const postCache = localStorage.getItem(id)
    if (postCache) {
        // console.log("Fount data in cache, not fetching server.")
        return JSON.parse(postCache)
    } 

    // fetch data
    try {
        const response = await fetch(link)
        const post = await response.json()

        if (response.status == 200) {
            // cache it for later use
            localStorage.setItem(id, JSON.stringify(post))
            // console.log("Returned data and cached for later use")
            return post
        } else {
            return false
        }
   } catch(err) {
        console.log(err)
   }
}

export default function ViewPost() {
 
    const { id } = useParams() // get id from the page
    const [post, setPost] = useState({}) // page will be empty first, so we use state
    const [copied, setCopied] = useState(false)
    const [placeholderText, setPlaceholderText] = useState("Loading...")

    function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
    }

    useEffect(() => { // useEffect hook to run code on load
       async function fetchData() {
            try {
                const post = await fetchPostFromID(id)
                post ? setPost({title: post.title, content: post.content, time: post.time}) : setPlaceholderText("There was an error finding this post.") // set state so that DOM renders the new info or say its invalid
            } catch(err) {
                console.log(err) 
            }
       }
       fetchData()
    }, [])

    return (
      <div className={Styles.post}>
        {post.title ? <Confession title={post.title} content={post.content} time={post.time}/> : <h1>{placeholderText}</h1>}
        {post.title && 
        <button onClick={copyToClipboard}>
        {copied ? "Copied!" : "Copy link to clipboard" } </button>}
      </div>
    )
}