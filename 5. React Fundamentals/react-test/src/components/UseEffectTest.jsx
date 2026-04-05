import { useState, useEffect } from 'react'

/* UseEffectTest
    - Displays message when component mount/dismounted
    - Fetches JSON file on button click
    - Displays contents of JSON beneath button
*/

export function UseEffectTest(){
    const [posts, setPosts] = useState([])

    //Mount/Dismount messages
    useEffect(() => {
        console.log("UseEffectTest mounted.")               //Displayed at mount
        return () =>{
            console.log("UseEffectTest unmounted.") }       //Displayed at dismount
    },[])                                                   //Blank params mean this will only occur once

    
    //Retrieve JSON
    const getJSON = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response =>{
                console.log(response)
                response.json().then(data => setPosts(data))
            }
        )
    }


    //Display Component
    return (
    <div class="center">
         <button 
            class="bg-blue-900 hover:bg-blue-300 active:bg-blue-600 w-100"
            onClick={getJSON}
            >
            Test UseEffect
        </button>

        {posts.map(post => (<p>{post.title}</p>))}
    </div>
    )
}