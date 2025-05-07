import React, { use, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
import { FaEye } from 'react-icons/fa6';
import { FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const { createUser, setUser, googleLogIn, updateUser } = use(AuthContext)
    const [pageTitle, setPageTitle] = useState('Globe Quest');
    
        useEffect(() => {
        const newTitle = 'Register';
            setPageTitle(newTitle);
            document.title = newTitle;
      
        }, [])
    const [error, setError] = useState('')
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate()
    const handleGoogleLogIn = () => {
        googleLogIn()
            .then((result) => {
                const user = result.user
                setUser(user)
                navigate('/')
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

    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photoURL.value
        const password = e.target.password.value

        // pass validation
        const passDigitExpresion = /^(?=.*\d)/
        const passLowerCaseExpresion = /(?=.*[a-z])/
        const passUpperCaseExpresion = /(?=.*[A-Z])/
        const passLongExpresion = /.{6,}$/
        const passSpecialExpresion = /(?=.*[!@#$%^&*])/
        if (passLongExpresion.test(password) === false) {
            setError('Password must have 6 digit long')
            return
        }
       else if (passDigitExpresion.test(password) === false) {
            setError('Password must have one Digit')
            return
        }
        else if (passLowerCaseExpresion.test(password) === false) {
            setError('Password must have one Lower Case Letter')
            return
        }
        else if (passUpperCaseExpresion.test(password) === false) {
            setError('Password must have one Upper Case Letter')
            return
        }
        else if (passSpecialExpresion.test(password) === false) {
            setError('Password must have one Special Character Letter')
            return
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        setError(error)
                        setUser(user)
                    });

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have been Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                // const errorMessage = error.message;
                setError(errorCode)

            });
    }
    return (
        <div className="w-full mb-5 max-w-lg mx-auto p-8 space-y-3 rounded-xl bg-gray-600 text-gray-100 shadow-2xl">
            <Helmet>
                <title>{pageTitle}</title>
            </Helmet>
            <h1 className="text-2xl font-bold text-center">Register Your Account</h1>
            <form onSubmit={handleRegister} className="space-y-2">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block text-gray-100">Name</label>
                    <input required type="text" name="name" id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="Photo URL" className="block text-gray-100">Photo URL</label>
                    <input required type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block text-gray-100">Email</label>
                    <input required type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                </div>
                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block text-gray-100">Password</label>
                    <input required
                        type={showPass?'text':'password'}
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="w-full mb-3 px-4 py-3 cursor-pointer rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600" />
                    <button onClick={() => setShowPass(!showPass)} className='text-gray-700 absolute  top-9 right-4'>{showPass?<FaEyeSlash size={16}></FaEyeSlash>:<FaEye size={16}></FaEye>}</button>
                    
                </div>

                {error && <p className='text-sm text-error'>{error}</p>}

                <button type='submit' className="block w-full p-3 text-center rounded-sm cursor-pointer text-gray-50 bg-amber-600">Register</button>
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

                <p className="text-xs text-center sm:px-6 text-gray-100">Already have an account ?
                    <Link to='/auth/login' rel="noopener noreferrer" className="underline text-lg font-medium text-amber-400">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;