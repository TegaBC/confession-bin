import Styles from "../styles/ViewPost.module.css"
import Confession from "../components/Confession"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

async function fetchPostFromID(id) {
    const link = `http://localhost:8080/posts/${id}`
  
    try {
        const response = await fetch(link)
        const post = await response.json()

        if (response.status == 200) return post
   } catch(err) {
        console.log(err)
   }
}

export default function ViewPost() {
 
    const { id } = useParams() // get id from the page
    const [post, setPost] = useState({}) // page will be empty first, so we use state
   
    useEffect(() => { // useEffect hook to run code on load
       async function fetchData() {
            try {
                const post = await fetchPostFromID(id)
                console.log(post)

                if (post) {
                    setPost({title: post.title, content: post.content}) // set state so that DOM renders the new info
                }
            } catch(err) {
                console.log(err) 
            }
       }
       fetchData()
    }, [])

    return (
      <div className={Styles.post}>
        {post.title ? <Confession title={post.title} content={post.content} time="2023"/> : <h1>Confession not fount...</h1>}
        {post.title && <button>Copy link to clipboard</button>}
      </div>
    )
}