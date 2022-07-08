import React from 'react'
import { useState,useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';

const MemberShipForm = () => {
  const batchRef=useRef(false);
  const nameRef=useRef();
  const emailRef=useRef();
  const addressRef=useRef();
  const numberRef=useRef();
  const messageRef=useRef();
  const [check, setCheck] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    // setLoading(true);

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const enteredAddress = addressRef.current.value;
    const enteredNumber = numberRef.current.value;
    const enteredMessage = messageRef.current.value;

    const enteredBatch=batchRef.current.value;

    if(!enteredName || !enteredEmail || !enteredAddress || !enteredMessage || !enteredNumber){
      toast.error('Please Fill all Inputs Fields', {
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
    return ;
    }
    if(enteredName.length<2 || enteredAddress.length<2 || enteredMessage.length<2 ){
      toast.error('Length of all inputs fields must be more than 2 characters', {
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
    return ;
    }
    if(!enteredEmail ||
      !enteredEmail.includes('@') || !enteredEmail.includes('.') ){
      toast.error('Enterered email is not valid', {
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
    return ;
    }

    const response = await fetch('/api/info/memberShip', {
      method: 'POST',
      body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          address: enteredAddress,
          number: enteredNumber,
          message: enteredMessage,
          isAlumni:(check)?"Yes":"No",
          batch: (check)?enteredBatch:'',
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
      // setLoading(false);
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
      // setLoading(false);
      
  }
  nameRef.current.value='';
  emailRef.current.value='';
  numberRef.current.value='';
  addressRef.current.value='';
  (check)?batchRef.current.value='':false;
  messageRef.current.value='';
  return data;

  }

  return (
    <>
    <Toaster />
    
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 pb-12 pt-0 items-center justify-center flex-col">
    <img className=" md:w-4/6 lg:w-5/6 w-5/6  md:mb-2 lg:mb-6 object-cover object-center rounded" alt="hero" src="/connect.png"/>
    {/* <div className='mx-8 md:mx-2 lg:mx-0'>
    <Image src="/connect.png" className='lg:w-4/6  md:w-3/6 w-5/6 mb-10 object-fill object-center rounded' width={1100} height={250}></Image>
    </div> */}
    <div className="text-center px-8 lg:w-2/3 mt-4 w-full">
      <h1 className="title-font sm:text-xl text-lg lg:text-2xl mb-4 lg:font-medium text-gray-900">Connect with us to help the society and make this world a better place.Fill the membership form and get a Membership ID.</h1>
      
    </div>
  </div>
</section>
    </div>
    <div className="container m-auto md:my-12 p-2 lg:px-40">
    <div className='justify-center items-center text-center p-3  lg:text-4xl font-medium sm:text-3xl text-2xl'>Our Promise</div>
    <div className="flex mb-12 px-3 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
<div className="text-gray-600 body-font w-full">
<div className=" w-full p-1  hover:text-white">
        <div className="border border-gray-200 p-2 h-full rounded-2xl bg-stone-50 hover:bg-teal-400 shadow-inner ">
          <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900  title-font mb-2 text-center italic ">Zero funds organization</h1>
          {/* <div className='px-48 lg:visible invisible'><div className="h-1 w-20 bg-teal-600  rounded "></div></div> */}
          {/* <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </div> */}
          <p className="leading-relaxed p-4 md:p-8 lg:p-12 font-base md:font-medium text-center hover:text-stone-100 sm:text-xl text-lg">Anokhi Pehel is a decentralized, zero funds platform with no employees, office space, and insurance.</p>
        </div>
      </div>
 </div>
</div>
    <div>
    <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Membership Form</h1>
      <div className="flex mt-0 mb-2 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
      {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
    </div>
    <form onSubmit={submitHandler}>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input ref={nameRef} type="text" id="name" name="name" placeholder="Name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input ref={emailRef}  type="email" id="email" name="email" placeholder="E-mail" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <input ref={addressRef}  type="address" id="address" name="address" placeholder="eg- Allahabad" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="tel" className="leading-7 text-sm text-gray-600">Phone number</label>
            <input ref={numberRef} type="tel" id="tel" name="tel" placeholder="eg : 9835714697" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        {/* <div className="p-2 w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div> */}
        <div className="p-2 w-1/2">
            <span className="leading-7 text-sm text-gray-600">Alumni:</span>
            <div className="mt-2">
                <label className="inline-flex items-center ">
                <input  onChange={()=>setCheck(true)} type="radio" className="form-radio" name="accountType"/>
                <span className="ml-2 leading-7 text-sm text-gray-600">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                <input  onChange={()=>setCheck(false)} type="radio" className="form-radio" name="accountType" />
                <span className="ml-2 leading-7 text-sm text-gray-600">No</span>
                </label>
            </div>
        </div>
        {/* <div className="p-2 w-1/2">
            <span className="leading-7 text-sm text-gray-600">Alumni:</span>
            <div className="mt-2">
                <label className="inline-flex items-center ">
                <input ref={isAlumniRef} onChange={()=>setCheck(!check)} type="checkbox" className="form-radio" name="accountType" />
                </label>
            </div>
        </div> */}
        {check && <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">Batch</label>
            <input ref={batchRef} type="number" id="number" name="number" placeholder="eg :2022" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>}
        
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea ref={messageRef} id="message" name="message" placeholder="max-length: 300" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-teal-500 border-0 py-2 px-8 focus:outline-none hover:bg-teal-600 rounded text-lg">Request MemberShip</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>
    </div>

    </>
  )
}

export default MemberShipForm