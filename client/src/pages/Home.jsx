import Styles from "../styles/Home.module.css"

import Confession from "../components/Confession"

export default function HomePage() {
    return(
        <div className={Styles.home}>
            <h1>View the latest confessions</h1>
            <h2>Want to make a confession? Click the plus at the top of the screen and post an anonymous confession.</h2>
            <div className={Styles.container}>
                <Confession title="Hello world" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio ullam voluptas accusantium vel libero qui totam ex, architecto quas in molestias quibusdam asperiores 
                blanditiis minus nemo. Et optio blanditiis voluptatem dignissimos, odit totam explicabo nam illum 
                cupiditate itaque voluptas nemo ducimus, quibusdam modi sequi cum iure id possimus dolores. Totam."
                time="10th Dec 2022"/>
                <Confession title="Hello world" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio ullam voluptas accusantium vel libero qui totam ex, architecto quas in molestias quibusdam asperiores 
                blanditiis minus nemo. Et optio blanditiis voluptatem dignissimos, odit totam explicabo nam illum 
                cupiditate itaque voluptas nemo ducimus, quibusdam modi sequi cum iure id possimus dolores. Totam."
                time="10th Dec 2022"/>
                <Confession title="Hello world" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Odio ullam voluptas accusantium vel libero qui totam ex, architecto quas in molestias quibusdam asperiores 
                blanditiis minus nemo. Et optio blanditiis voluptatem dignissimos, odit totam explicabo nam illum 
                cupiditate itaque voluptas nemo ducimus, quibusdam modi sequi cum iure id possimus dolores. Totam."
                time="10th Dec 2022"/>
            </div>

        </div>
    )
}

