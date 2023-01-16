import React, { useEffect, useState } from 'react'

export const Messege = () => {



    const [coords, setcoords] = useState({ z: 0, y: 0 });


useEffect(() => {

    const onMouseMove = ({ x, y }) => {
        const coords = { x, y }
        setcoords(coords)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
        window.removeEventListener('mousemove', onMouseMove) // limpieza
    }
}, [])

return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
)
}
