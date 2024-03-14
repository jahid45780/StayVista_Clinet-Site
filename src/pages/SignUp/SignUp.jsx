import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
// import axios from 'axios'
import { imageUpload } from '../../api/utils'
import useAuth from '../../hooks/useAuth'
import { getToken, saveUser } from '../../api/auth'
import {toast} from 'react-hot-toast'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from 'react'
import { TbFidgetSpinner } from "react-icons/tb";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {createUser,updateUserProfile,signInWithGoogle, loading} = useAuth()
  const navigate = useNavigate()
   
  // form submit handler
  const handleSubmit = async event =>{

    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]
    
    try{
      // upload image
      const imageData = await imageUpload(image)
    //  user create
    const result = await createUser(email,password)
    // save user name and photo url
     await updateUserProfile(name,imageData?.data?.display_url)
    // server user data in database
    const dbResponse = await saveUser(result?.user)
    // console.log(dbResponse);
    // result.user.email
    // access token 
     await getToken(result?.user?.email)
     navigate('/')
     toast.success(' Sign Up Successfully ')
     } catch(err){
      toast.error(err?.message)
     }
  

 
    // const formData = new FormData()
    // formData.append('image', image)

    // try {
    //   const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=
    //   5dc64f98413f37c1e0fe3c3107bb79e8`, formData)
    //   console.log(data);
    // }catch(err){
    //   console.log(err);
    // }
   
    }
    //handle google singIn
    const handleGoogleSingIn = async ()=>{
      try{
      
         const result = await signInWithGoogle()   
      
      // server user data in database
      const dbResponse = await saveUser(result?.user)
    
      // access token 
       await getToken(result?.user?.email)
       navigate('/')
       toast.success(' Sign Up Successfully ')
       } catch(err){
        toast.error(err?.message)
       }
    } 

     
  
 return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold animate-bounce'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to JB Booking</p>
        </div>
        <form
          onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input 
                type= {  showPassword ? "text" : "password"}
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border  rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
              <span className=' text-2xl absolute mt-3 -ml-7 ' 
              onClick={() => setShowPassword(!showPassword) } >
                {
                   
                    showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                   
                }
              </span>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading? <TbFidgetSpinner className=' animate-spin mx-auto text-2xl' /> : 'Continue' }
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSingIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
