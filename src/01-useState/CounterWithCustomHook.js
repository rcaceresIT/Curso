import React from 'react'
import {useCounter} from '../hooks/useCounter'

export const CounterWithCustomHook = () => {
    
    const {counter, Increment, Decrement, Reset} = useCounter();

    return (
        <>
            <h1>Counter with hook: {counter}</h1>

            <button className='btn btn-primary' onClick={ Increment}>+1</button>

            <button className='btn btn-primary' onClick={ Reset}>Reset</button>

            <button className='btn btn-primary' onClick={ Decrement} >-1</button>
        </>
    )
}
