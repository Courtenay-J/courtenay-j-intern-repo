import { useState, useEffect } from 'react'

/* UseEffectTest
    - Displays message when component mount/dismounted
    - Fetches JSON file on button click
*/

export function UseEffectTest(){
    const [posts, setPosts] = useState([])


    //Mount/Dismount
    useEffect(() => {
        console.log("UseEffectTest mounted.")

        return () =>{
            console.log("UseEffectTest unmounted.")
        }
    },[])


    //Component Body
    return (
    <>
    <div class="center">
         <button 
            class="bg-blue-900 hover:bg-blue-300 active:bg-blue-600 w-100"
            onClick={() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response =>{
                        console.log(response)
                    })
            }}
            >
            Test UseEffect
        </button>
    </div>
    </>
    )
}