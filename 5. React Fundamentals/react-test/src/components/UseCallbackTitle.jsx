import {memo} from 'react'

/*
    UseCallbackTitle
    Prints a title for UseCallbackParent.

    About as simple as callbacks get. This is an example of how to wrap files via memo.
    (There's no reason to do it for a component this simple, but it's nice to have a reference.)
*/
export const UseCallbackTitle = memo(function UseCallbackTitle(){
    console.log("Title rerendered.")
    
    return(
        <h2>- useCallback Hook Tests -</h2>
    )
});