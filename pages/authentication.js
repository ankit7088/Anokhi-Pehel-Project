import { useEffect, useRef, useState } from "react";
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import { FcGoogle } from 'react-icons/fc';

const Auth = () => {
    const userNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [loading, setLoading] = useState(false);

    const router = useRouter();


    const submitHandler = async (event) => {
        event.preventDefault();
        setLoading(true);

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const confirmedPassword = confirmPasswordRef.current.value;
        const enteredUserName = userNameRef.current.value;


        if (enteredPassword !== confirmedPassword) {
            toast.error('password did not match', {
                duration: 4000,
                position: 'top-right',
                // Styling
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
            // setAuthAlert({type:"error",message:"Password did not match!"})
            setLoading(false);
            return;
        }

        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                userName: enteredUserName,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();

        if (data.errorMessage) {
            setLoading(false);
            toast.error(data.errorMessage, {
                duration: 4000,
                position: 'top-right',
                // Styling
                style: {
                    background: '#f25f4c',
                    color: '#fff',
                    fontWeight: 'bold'
                },
                className: 'bg-red-200',

                // Aria
                ariaProps: {
                    role: 'status',
                    'aria-live': 'polite',
                },
            });
            // setAuthAlert({type:"error",message:data.errorMessage});
            setLoading(false);
            return;
        }

        if (data.successMessage) {
            toast.success(data.successMessage, {
                duration: 4000,
                position: 'top-right',
                // Styling
                style: {
                    background: '#2ecc71',
                    color: '#fff',
                    fontWeight: 'bold'
                },
                className: 'bg-red-200',

                // Aria
                ariaProps: {
                    role: 'status',
                    'aria-live': 'polite',
                },
            });
            // setAuthAlert({type:"success",message: data.successMessage});
            setLoading(false);
            const result = await signIn('credentials', {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });
            if (result.ok) {
                setLoading(false);
                router.replace("/");
            }
        }
        return data;
    }

    const googleSignup = () => {
        localStorage.setItem('authType', 'signup');
        signIn('google', 'http://localhost:3000/authentication');
    };

    return (
        <>
            <Toaster />
            <div className="bg-white ">
                <div className="flex justify-center ">
                    <div className="flex items-center w-full max-w-lg h-auto rounded-lg mt-2 px-6 mx-auto bg-slate-800">
                        <div className="flex-1">
                            <div className="text-center">
                                <h2 className="text-2xl md:text-3xl font-bold text-center pt-2 text-gray-700 dark:text-white">Sign Up</h2>

                                <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div className="mt-4">
                                <form onSubmit={submitHandler}>
                                    <div>
                                        <label htmlFor="email" className="block mb-1 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                        <input ref={emailRef} type="email" name="email" id="email" placeholder="example@example.com" className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-1" />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="password" className="block mb-1 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                        <input ref={passwordRef} type="password" name="password" id="password" placeholder="enter password" className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-1" />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="confirmPassword" className="block mb-1 text-sm text-gray-600 dark:text-gray-200">Confirm Password</label>
                                        <input ref={confirmPasswordRef} type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-1" />
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="userName" className="block mb-1 text-sm text-gray-600 dark:text-gray-200">User Name</label>
                                        <input ref={userNameRef} type="text" name="userName" id="userName" placeholder="Enter User Name" className="rounded p-2 w-full bg-slate-900 text-white border border-slate-700 mt-1" />
                                    </div>

                                    {!loading && <button
                                        className="font-semibold mt-2 rounded border-slate-700 bg-teal-500 hover:bg-teal-600 p-2 text-xl text-stone-100 w-full">
                                        Sign up
                                    </button>}
                                    {loading && <button
                                        className="font-semibold mt-6 rounded border-slate-700 bg-teal-500 hover:bg-teal-600 p-2 text-xl text-stone-100 w-full"></button>}

                                </form>
                                <div
                                    onClick={googleSignup}
                                    className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <div className="px-4 py-2">
                                        <FcGoogle className='w-6 h-6' />
                                    </div>

                                    <span className="w-5/6 px-4 py-3 font-bold text-center">
                                        Sign up with Google</span>
                                </div>

                                <div className="mb-4 mt-1 text-md text-center text-gray-400">Already have an account?
                                    <Link href='/login'>
                                        <a className="px-2 text-teal-300 hover:text-teal-500">Login</a>
                                    </Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Auth;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}