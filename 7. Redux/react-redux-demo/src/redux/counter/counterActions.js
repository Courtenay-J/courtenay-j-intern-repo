import {ADD_COUNT,SUBTRACT_COUNT,MULTIPLY_COUNT} from './counterTypes.js'

export const addCount = (number = 1) => {
    return{
        type: ADD_COUNT,
        payload: number,
        description: "Add number to count"
    }
}

export const subtractCount = (number = 1) => {
    return{
        type: SUBTRACT_COUNT,
        payload: number,
        description: "Subtract number from count"
    }
}

export const multiplyCount = (number = 1) => {
    return{
        type: MULTIPLY_COUNT,
        payload: number,
        description: "Multiply number from count"
    }
}