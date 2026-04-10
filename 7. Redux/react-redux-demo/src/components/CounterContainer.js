import {useSelector,useDispatch} from 'react-redux'
import {addCount,subtractCount,multiplyCount} from '../redux'

export function CounterContainer(){
    const numCount = useSelector(state => state.counter.numCount)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number: {numCount}</h2>
            <button onClick={()=>dispatch(addCount())}>Add</button>
            <button onClick={()=>dispatch(subtractCount())}>Subtract</button>
            <button onClick={()=>dispatch(multiplyCount(2))}>Double</button>
        </div>
    )
}

