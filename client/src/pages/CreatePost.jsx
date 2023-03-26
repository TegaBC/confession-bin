import { useNavigate } from "react-router-dom"
import Styles from "../styles/CreatePost.module.css"

export default function CreatePost() {
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        
        const title = formData.get("title")
        const content = formData.get("content")
    
        const confessionPost = {
            title: title,
            content: content,
        }
    
        try {
            const submitToServer = await fetch('http://localhost:8080/posts/create', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(confessionPost)
            })
    
            const response = await submitToServer.json()
            
            if (submitToServer.status == 400) {
                alert(response.error)
            }
    
            if (submitToServer.ok) {
                navigate(`/confession/${response._id}`)
            }
        } catch(err) {
            console.log("CreatePost component had an error whilst submitting to server...", err)
            alert("There was an error trying to post your confession...")
        }
    }

    return(
        <div className={Styles.create}>
            <h1>Create a confession</h1>
            <p>We do not save any information about you, only your confession itself will be saved alongisde with the date.</p>

            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input name="title" id={Styles.title} type="text" required={true} maxLength={255}/>

                <label>Description: </label>
                <textarea name="content" id={Styles.content} type="text" required={true} minLength={100}/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}