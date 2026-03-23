import { useState } from 'react'

/*
    Counter(props): Displays how many times a button has been clicked.
    - props.text: the text to display before the count number

    Note: this is based on Vite React template code.
*/

export function Counter(props){
    const [count, setCount] = useState(0)
    
    return(
        <button
            className="counter"
            onClick={() => setCount((count) => count + 1)}
        >
            {props.text} {count}
        </button>
    );
}