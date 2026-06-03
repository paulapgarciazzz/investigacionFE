
import {  useRef  } from 'react'

import { AuthContext } from '../Context/AuthContext'
import { useContext } from 'react'

export default function Login() {

    // 3. Consumir el contexto
    const { login,loginLoading,loginError } = useContext(AuthContext)
    
    const emailRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(emailRef.current.value, passwordRef.current.value);
        }catch(error){
            console.error('Error during login:', error);
         }

    }


    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow">        
        <input
            ref={emailRef}
            placeholder="Email"
            className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
            type="password"
        ref={passwordRef}
        placeholder="Password"
        className="w-full px-3 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition disabled:opacity-50"
        >
            {loginLoading ? 'Logging in...' : 'Login'}
        </button>

        {loginError && (<p className="mt-2 text-sm text-red-600 ">Login failed. Please check your credentials.</p>)}
        </form>
    )
}