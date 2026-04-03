import { useState } from 'react'
import { useTranslation } from 'react-i18next';
/*
    Counter(props): Displays how many times a button has been clicked.
    After first click, changes text.

    - count: Number of times clicked.
    - text: Text to display on button.

    Note: this is based on Vite React template code. I've added a little
    visual flare to practice state hooks.
*/

export function Counter(){
    const [t] = useTranslation();
    const [count, setCount] = useState(0)            //Track number of clicks
    const [text, setText] = useState(t("counters.start"))    //Track text to display

    return(
        <button
            class=" text-gray-800 font-mono outline-4 outline-orange-900 bg-amber-200 hover:bg-amber-300 hover:outline-amber-200 active:bg-amber-600 active:outline-orange-950 py-2 px-7 rounded"
            onClick={() => {
                setCount((count) => count + 1)
                setText(t('counters.click',{count}))
            }}
        >
            {text}

        </button>
    );
}