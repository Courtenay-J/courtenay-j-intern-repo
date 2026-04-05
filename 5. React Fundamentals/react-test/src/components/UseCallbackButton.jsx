import {memo} from 'react'

/*
    UseCallbackButton
    Prints a button for UseCallbackParent.

    - handleClick: function to be run when clicked
    - children: anything that goes between the button tags (in this case, the text)
*/
export const UseCallbackButton = memo(function UseCallbackButton({handleClick,children}){
    console.log("Button rerendered.")
    return(
        <button
            class="bg-green-700 px-2 py-2 rounded-2xl w-70 active:bg-green-900 hover:bg-green-800"
            onClick={handleClick}>{children}</button>
    )
});