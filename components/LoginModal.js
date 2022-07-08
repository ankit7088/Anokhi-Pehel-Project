import React, { useEffect, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

const LoginModal = ({ compType }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const login = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      setIsLoading(false);
      compType === 'page' && router.push('/');
    }
    else {
      toast.error(result.error, {
        duration: 4000,
        position: 'top-right',
        style: {
          background: '#f25f4c',
          color: '#fff',
          fontWeight: 'bold'
        },
        // Aria
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      setIsLoading(false);
    }

  }

  const mainComponent = <div className="flex relative w-[80%] h-[80%] mx-auto overflow-hidden rounded-lg bg-slate-800 lg:max-w-lg">

    <div className="w-full px-4 py-8 md:px-8 justify-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 dark:text-white">
        Login
      </h2>

      <div onClick={() => signIn('google')} className="flex items-center justify-center my-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer">
        <div className="px-4 py-2">
          <FcGoogle className='w-6 h-6' />
        </div>
        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with Google</span>
      </div>

      <div className=' text-stone-400 mt-6 text-[12px]'>OR LOGIN WITH EMAIL</div>

      <form onSubmit={login}>
        <div className="mt-2">
          <label className="text-base text-white font-semibold"
            htmlFor="LoggingEmailAddress">
            Email Address</label>
          <input ref={emailRef} id="LoggingEmailAddress"
            className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-2" type="email" />

        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="text-base text-white font-semibold"
              htmlFor="loggingPassword">Password</label>
            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
          </div>

          <input ref={passwordRef} id="loggingPassword"
            className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-2" type="password" />
        </div>


        {!isLoading && <button className='font-semibold mt-8 rounded border-slate-700 bg-teal-500 hover:bg-teal-600 p-2 text-xl text-stone-100 w-full'>
          Login
        </button>}
        {isLoading && <button className='mt-8 btn btn-info loading w-full'>

        </button>}
      </form>

      <h1 className='text-sm text-white mt-4 px-1'>Don&lsquo;t have an account ?
        <span className='text-sky-500 font-semibold cursor-pointer'>
          <Link href='/authentication'><a className='px-2 text-teal-300 hover:text-teal-500'>Register</a>
          </Link>
        </span>
      </h1>

    </div>
  </div>;

  return (
    <>
      {
        compType === 'page' && <div className='flex items-center h-[90vh]'>
          <Toaster />
          {mainComponent}
        </div>
      }

    </>
  )
}

export default LoginModal