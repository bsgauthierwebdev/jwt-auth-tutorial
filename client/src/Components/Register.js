import React, {Fragment, useState} from 'react'

const Register = ({setAuth}) => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    // checkPassword: ''
  })

  const {name, email, password} = inputs

  const onChange = e => {
    setInputs({...inputs, [e.target.name] : e.target.value})
    // console.log(inputs)
  }

  const onSubmitForm = async(e) => {
    e.preventDefault()

    try {
      // console.log('The form works!!')

      const body = {name, email, password}

      const response = await fetch(
        'http://localhost:8800/auth/register', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
        }
      )

      const parseRes = await response.json()

      // console.log(parseRes)

      localStorage.setItem('token', parseRes.token)

        setAuth(true)

    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
        <h1 className = 'text-center my-5'>Register</h1>
        <form onSubmit = {onSubmitForm}>
          <input 
            type = 'text'
            name = 'name'
            placeholder = 'name'
            className = 'form-control my-3'
            value = {name}
            onChange = {e => onChange(e)}
          />
          <input 
            type = 'email'
            name = 'email'
            placeholder = 'email address'
            className = 'form-control my-3'
            value = {email}
            onChange = {e => onChange(e)}
          />
          <input 
            type = 'password'
            name = 'password'
            placeholder = 'password'
            className = 'form-control my-3'
            value = {password}
            onChange = {e => onChange(e)}
          />
          {/* <input 
            type = 'password'
            name = 'checkPassword'
            placeholder = 'retype password'
            className = 'form-control my-3'
          /> */}
          <button className = 'btn btn-success btn-block'>
            Register
          </button>
        </form>
    </Fragment>
  )
}

export default Register