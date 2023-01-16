import React, { useState } from 'react'
import { Small } from './Small';
import { useCounter } from '../hooks/useCounter';

export const Memorize = () => {
    
    const {counter, Increment} = useCounter(10);
    const [show, setShow] = useState(true)
    
    return (
        <>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => Increment()}
                >
                +1
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
