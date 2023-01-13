import { useState } from 'react'

export const useCounter = (initialValue = 10) => {
    
    const [counter, setCounter] = useState(initialValue);
    // funcion que incrementa el valor del estado counter
    const Increment = () => {
        setCounter(counter + 1)
    }
    // funcion que Decrementa el valor del estado counter
    const Decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    // funcion que resetea el valor del estado inicial
    const Reset = () => {
        setCounter(initialValue)
    }
    return {
        counter,
        Increment,
        Decrement,
        Reset
    }
}
