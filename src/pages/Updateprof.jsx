import React, { use, useEffect, useState } from 'react';
import { IoFlowerOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';

const Updateprof = () => {
	const navigate = useNavigate()
	 const { user, setUser,  updateUser } = use(AuthContext)

	 const [pageTitle, setPageTitle] = useState('Globe Quest');
    
        useEffect(() => {
        const newTitle = 'Update Profile';
            setPageTitle(newTitle);
            document.title = newTitle;
      
        }, [])

	 const [error, setError] = useState('')
	const handleUpdate=(e)=>{
     e.preventDefault()
	 const name = e.target.name.value
	 const photo = e.target.photoURL.value
	 updateUser({ displayName: name, photoURL: photo })
                    .then(() => {

                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/myprofile')
                    })
                    .catch((error) => {
                        setError(error)
                        setUser(user)
                    });
	}
	return (
		<div className='grid  md:grid-cols-2 gap-8 w-11/12 mx-auto mb-10'>
			<Helmet>
				<title>{pageTitle}</title>
			</Helmet>
			<div className="w-full p-8 space-y-3 rounded-xl bg-base-100  text-gray-800">
				<h1 className="text-2xl font-bold text-center underline">Update Your Profile</h1>
				<form  onSubmit={handleUpdate} className="space-y-10">
					<div className="space-y-1 text-sm">
						<label htmlFor="username" className="block dark:text-gray-600">Name</label>
						<input required type="text" name="name" id="Name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					<div className="space-y-1 text-sm">
						<label htmlFor="Photo URL" className="block dark:text-gray-600">Photo URL</label>
						<input required type="text" name="photoURL" id="photoURL" placeholder="Photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
					</div>
					{error && <p className='text-sm text-error'>{error}</p>}
					<button className="block hover:bg-white hover:text-gray-700 hover:outline-1 w-full p-3 text-center rounded-sm text-gray-50 cursor-pointer bg-amber-600" type='submit'>Update Information</button>
					<Link to='/myprofile' className='flex items-center justify-center'><button className="block cursor-pointer hover:bg-white hover:text-gray-700 hover:outline-1 py-3 px-12 text-center rounded-lg text-gray-50 bg-gray-600">Back</button></Link>
				</form>
				<div className="flex items-center mt-6 pt-4 space-x-1">
					<div className="flex-1  h-px sm:w-16 bg-gray-300"></div>
					<p className="px-3 text-sm text-gray-600 flex"><IoFlowerOutline /><IoFlowerOutline /><IoFlowerOutline /><IoFlowerOutline /></p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
				</div>

			</div>



			<div>
				<img className='rounded-2xl' src="https://i.ibb.co.com/3mvRm4wc/Myprofile.gif" alt="gif" />
			</div>
		</div>
	);
};

export default Updateprof;