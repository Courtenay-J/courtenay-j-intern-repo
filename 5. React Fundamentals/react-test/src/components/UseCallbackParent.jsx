import { useState, useEffect } from 'react'
import { UseCallbackTitle} from './UseCallbackTitle.jsx'
import { UseCallbackButton } from './UseCallbackButton.jsx'


/*
    UseCallbackParent

    Parent component for useCallback tests.
    Children: UseCallbackButton, UseCallbackTitle
*/
export function UseCallbackParent(){
    const [clicks,setClicks] = useState(0)

    useEffect(() => {
        console.log("CallbackParent mounted.")
        return () =>{console.log("CallbackParent unmounted.")}
    },[])


    const showAlert = () =>{
        alert("Clicked!")
    }

    const countClicks = () =>{
        setClicks(clicks + 1)
    }
    

    return(
        <div class="center">    
            <UseCallbackTitle />
            <p></p>
            <p><UseCallbackButton handleClick={countClicks}>Clicks: {clicks}</UseCallbackButton></p>
            <p><UseCallbackButton handleClick={countClicks}>Clicks: {clicks}</UseCallbackButton></p>
            <p><UseCallbackButton handleClick={showAlert}>Click me</UseCallbackButton></p>
            <p>If you're reading this, it means all children of this component have successfully loaded in. Neat!</p>
            <p>Anything below this is not part of the UseCallbackParent component, and shouldn't be affected by this component's logic or rendering.</p>
            <p><br></br></p>
        </div>
    )
}
