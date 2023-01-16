import React from 'react'

export const ShowIncrement = ({ Increment }) => {
    console.log('Me volvi a generar :( ')

    return (
        <button
            className='btn btn-primary'
            onClick={() => { Increment() }}>
            Incrementar
        </button>
    )
}
