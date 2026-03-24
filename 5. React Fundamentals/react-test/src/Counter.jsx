import { useState } from 'react'

/*
    Counter(props): Displays how many times a button has been clicked.
    After first click, changes text.

    - count: Number of times clicked.
    - text: Text to display on button.

    Note: this is based on Vite React template code. I've added a little
    visual flare to practice state hooks.
*/



export function Counter(props){
    const [count, setCount] = useState(0)   //Track number of clicks
    const [text, setText] = useState(props.text)    //Track text to display

    return(
        <button
            className="counter"
            onClick={() => {
                setCount((count) => count + 1)
                setText("Click number ")
            }}
        >
            {text} {count}
        </button>
    );
}