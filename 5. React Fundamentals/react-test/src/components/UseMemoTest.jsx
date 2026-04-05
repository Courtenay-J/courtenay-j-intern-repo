import { useState, useMemo } from 'react'
/*
    UseMemoTest
    Stores an excessive number of values in an array and then add them all up on button click, to
    showcase the benefits of useMemo caching.

    Do NOT make the array have more than five digits or your computer will explode.
*/
export function UseMemoTest(){
    //Stores the totals of each calculation
    const [sum, setSum] = useState(0)       
    const [complexTotal,setComplexTotal] = useState(0)
    
    //Stores if buttons have been clicked
    const [showList, setShowList] = useState(false)
    const [showTotal,setShowTotal] = useState(false)
    const [showComplexTotal,setShowComplexTotal]=useState(false)

    //Populate array with numbers
    const numbers = useMemo(() =>
        Array.from({ length: 12000 }, (_, i) => i + 1)
    ,[showList])

    //Add all numbers in the array together
    const addNumbers = useMemo(() => {
        setSum(0)
        let i=0
        let total=0
        while (i<numbers.length){
            total += numbers[i]
            i++
        }
        setSum(total)
        return sum
    },[numbers])

    //Run an excessively complicated calculation just to slow down the browser
    const unnecessaryCalculation = useMemo(() => {
        setComplexTotal(0)
        let i=0
        let j=0
        let total=0
        while (i<numbers.length){
            while (j<numbers.length){
                if (numbers[i] % 2 == 0)
                    total += numbers[i] / 2
                else
                    total+= numbers[i]
                j++
            }
            i++
            j=0
        }
        setComplexTotal(total)
        return complexTotal
    },[numbers])

    return (
    <div>
        <p>
            <button class="bg-green-900 rounded-2xl px-3 py-2" onClick={() => setShowList(!showList)}>Populate Number List</button>
            <button class="bg-amber-800 rounded-2xl px-3 py-2" onClick={() => setShowTotal(!showTotal)}>Add All Values in List</button>
            <button class="bg-violet-800 rounded-2xl px-3 py-2" onClick={()=> setShowComplexTotal(!showComplexTotal)}>Do Some Weird Math</button>
        </p>
        <p>
            {showTotal && (<p><strong> Total: </strong>{addNumbers}</p>)}
            <br></br>
            {showComplexTotal && (<p><strong>Weird Total:</strong>{unnecessaryCalculation}</p>)}
            {showList && (
                <ul>{numbers.map(num => <li key={num}>{num}</li>)}</ul>
            )}
        </p>        
    </div>
    )
}