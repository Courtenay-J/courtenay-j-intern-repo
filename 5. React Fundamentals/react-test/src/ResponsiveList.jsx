import { useState } from 'react'
let nextId = 0;

/*  ResponsiveList:
    Accepts text from user via input, stores in array, and displays array as list.
*/
export function ResponsiveList(){
    const [text, setText] = useState('');   //For the input in the text box
    const [entries, setEntry] = useState([]); //For the stored array
    

    function handleSubmit(e){
        e.preventDefault(); //Prevents page refresh
        setEntry([...entries, {id: nextId++, text}]);   //Add input to array
        setText(''); //Clears the text box after submission
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label for="input">Enter some text:   </label>
            <input type="text" 
                value={text}
                onChange={e=>setText(e.target.value)}
                class="border-2 rounded-2xl"></input>
            <button type="submit" class="font-bold border-2 rounded px-2 hover:opacity-50"> Add</button>
        </form>


        <p><strong>Entries:</strong></p>
        <ul>
            {entries.map(text=> (<li key={text.id}>{text.text}</li>))}
        </ul>
    </>
    );
}