import { useState } from 'react'
import { useEffect } from 'react'



function clickButton(){
    alert("Button clicked");
}


export function UseEffectTest(){
    return (
        <div class="center">
            <button 
                class="bg-blue-900 hover:bg-blue-300 active:bg-blue-600 w-100"
                onClick={clickButton}
                >
                    Test UseEffect
            </button>
        </div>
    )
}