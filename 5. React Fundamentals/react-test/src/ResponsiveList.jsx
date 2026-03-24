import { useState } from 'react'
let nextId = 0;

/*  ResponsiveList:
    Accepts text from user via input, stores in array, and displays array as list.

*/
export function ResponsiveList(){
    const [text, setText] = useState('');   //For the input in the text box
    const [entries, setEntry] = useState([]); //For the stored array
    
    //Add user input to array and prevent page refresh
    function handleSubmit(e){
        e.preventDefault(); //Prevents page refresh
        setEntry([...entries, {id: nextId++, text}]);
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label for="input">Enter some text:   </label>
            <input type="text" 
                value={text}
                onChange={e=>setText(e.target.value)}></input>
            <button type="submit" >Add</button>
        </form>


        <p><strong>Entries:</strong></p>
        <ul>
            {entries.map(text=> (<li key={text.id}>{text.text}</li>))}
        </ul>
    </>
    );
}