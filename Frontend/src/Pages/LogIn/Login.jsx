import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import psyduckBg from '../../assets/psyduck-face.jpg'

function Login() {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(input)
  }

  if (loading)
    return (
      <span className="loading loading-dots loading-lg"></span>
    )

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto min-h-screen' style={{background: 'linear-gradient(-45deg, rgba(254,249,195,1) 0%, rgba(254,240,138,1) 50%, rgba(250,204,21,1) 100%)'}}>
      <img
        src={psyduckBg}
        alt="Psyduck"
        className='w-96 md:w-[28rem] h-80 md:h-96 object-cover relative z-0 -mb-24 rounded-t-3xl'
        style={{ objectPosition: 'center 35%' }}
      />
      <div className='relative z-10 w-full p-4 rounded-lg shadow-xl bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        <h1 className='text-3xl font-semibold text-center text-gray-800'>Login{" "}
          <span className='text-yellow-800'>
            Psyduck
          </span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="input input-bordered flex items-center gap-2 mt-5 bg-yellow-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="rgba(100,100,100,1)"
                className="h-4 w-4 opacity-100">
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input type="text" className="grow text-gray-700 placeholder:text-gray-700" placeholder="Username" value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} />
            </label>
            <label className="input mt-5 bg-yellow-50 input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill='rgba(100,100,100,1)'
                className="h-4 w-4 opacity-100">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type="password" className="grow text-gray-700 placeholder:text-gray-700"
                placeholder='*******' value={input.password} onChange={(e) => setInput({ ...input, password: e.target.value })} />
            </label>
          </div>
          <Link to='/signup' className='text-sm  text-gray-800 hover:underline hover:text-yellow-700 mt-5 inline-block' >Don't have an Account ?</Link>

          <button className="btn mt-2 btn-block text-white bg-yellow-700
        border-yellow-700 hover:bg-yellow-600 hover:text-white hover:border-2 hover:border-yellow-800" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login