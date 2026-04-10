import {useSelector} from 'react-redux'

export function DynamicMessage(){
    const numCount = useSelector(state => state.counter.numCount)
    return numCount == 10 ?(
        <p>The number {numCount} is at its starting value.</p>
    ) :
    numCount < 10 && numCount > 0 ? (
        <p>{numCount}? Hmm, that's getting a bit low.</p>
    ) :
    numCount < 0 ? (
        <p>{numCount} is in the negatives!</p>
    ) :
    numCount == 0 ? (
        <p>{numCount} -- or as I like to call it, ten minus ten.</p>
    ):
    (
        <p>{numCount} is over ten.</p>
    )
}

