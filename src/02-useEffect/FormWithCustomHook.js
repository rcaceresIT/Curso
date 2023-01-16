import React from 'react'
import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

  // const [formState, setFormState] = useState({
  //   username: 'Rodrigo',
  //   email: 'Rodrigo@gmail.com',
  //   password:''
  // });

  // const { username, email, password } = formState

  // const handleChange = ({ target: { name, value } }) => {
  //   setFormState({ ...formState, [name]: value })
  // }


  // useEffect(() => {

  //   console.log(username);
  // }, [username])

  const { formState, handleChange, resetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formState


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
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder='Password'
            id='password'
            name='password'
            value={password}
            onChange={handleChange} />
        </div>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        <button className='btn btn-primary' onClick={() => resetForm}>Borrar</button>
      </form>


    </>
  )
}
