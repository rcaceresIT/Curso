import React, { useState, useEffect } from 'react'
import { Messege } from './Messege';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Rodrigo',
        email: 'Rodrigo@gmail.com',
    });

    const { username, email } = formState

    const handleChange = ({ target: { name, value } }) => {
        setFormState({ ...formState, [name]: value })
    }

    useEffect(() => {

        console.log(username);
    }, [username])

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <form className='w-50'>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Username'
                        id='username'
                        name='username'
                        value={username}
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder='Rodrigo@gmail.com'
                        id='email'
                        name='email'
                        value={email}
                        onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {
                (username === 'Rodrigo') && <Messege />

            }
        </>
    )
}
