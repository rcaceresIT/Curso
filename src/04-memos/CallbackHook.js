import React, { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'


// revisar nuevas versiones porque version del curso no funciona 
export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const IncrementFather = useCallback(
        () => {
            setCounter((value) => value + 1);
        },
        [],
    )



    //   const Increment = () => {
    //     setcounter(counter + 1)
    //   }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement Increment={IncrementFather} />
        </>
    )
}
