import React, { use, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
const Login = () => {
    const { signIn, setUser, googleLogIn } = use(AuthContext)

    const [error, setError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user
                setUser(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have been LogIn with Google Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                //  const errorMessage = error.message;
                setError(errorCode)
            });
    }

    const handleLogIn = (e) => {
        e.preventDefault()
        const password = e.target.password.value
        const email = e.target.email.value
        signIn(email, password)
            .then((result) => {
                const user = result.user
                setUser(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have been LogIn Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setError(errorCode)

            });

    }

    return (
        <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100 shadow-2xl">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogIn} className="space-y-2">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input required type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    <div className="flex justify-end text-xs dark:text-gray-600">
                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                    </div>
                </div>

                 {error&&<p className='text-xs text-error'>{error}</p>}
               
                <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-50 bg-amber-600">Sign in</button>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-100" />
                    <p className="px-3 text-gray-100">OR</p>
                    <hr className="w-full text-gray-100" />
                </div>
                <div className="flex items-center justify-center pt-4 space-x-1">

                    <button onClick={handleGoogleLogIn} className="btn bg-white text-black border-[#e5e5e5]">
                        <FcGoogle size={20}></FcGoogle>
                        Login with Google
                    </button>

                </div>

                <p className="text-xs text-center sm:px-6 text-gray-100">Don't have an account ?
                    <Link to='/auth/register' rel="noopener noreferrer" className="underline text-lg font-medium text-amber-400"> Register </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
