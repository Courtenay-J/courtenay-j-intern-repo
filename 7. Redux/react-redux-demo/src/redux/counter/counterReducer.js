import {ADD_COUNT,SUBTRACT_COUNT,MULTIPLY_COUNT} from './counterTypes'

const initialState = {
    numCount: 10
}

export const counterReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_COUNT:
            return {
                ...state,
                numCount: state.numCount+action.payload
            }        
        case SUBTRACT_COUNT:
            return {
                ...state,
                numCount: state.numCount-action.payload
            }
        case MULTIPLY_COUNT:
            return {
                ...state,
                numCount: state.numCount*action.payload
            }      
        default:
            return state
    }
}

export default counterReducer