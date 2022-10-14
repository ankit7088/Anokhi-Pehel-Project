import React from 'react'
import Image from 'next/image'
import { useRef,useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const [loading, setLoading] = useState(false);

  // const router = useRouter();
  const submitHandler = async (event) => {
    event.preventDefault();
    // setLoading(true);

    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    const enteredSubject = subjectRef.current.value;
    const enteredMessage = messageRef.current.value;

    if(!enteredName || !enteredEmail || !enteredSubject || !enteredMessage){
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
    if(enteredName.length<2 || enteredSubject.length<2 || enteredMessage.length<2 ){
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

    const response = await fetch('/api/info/contactInfo', {
      method: 'POST',
      body: JSON.stringify({
          name: enteredName,
          email: enteredEmail,
          subject: enteredSubject,
          message: enteredMessage,
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
  subjectRef.current.value='';
  messageRef.current.value='';
  return data;

  }
  return (
    <>
    <Toaster />
    {/* <div className='mt-24'> */}
    {/* <div className="lg:ml-4">
  <h2 className='title-font text-center text-4xl italic text-gray-900  font-medium'>Contact Us</h2>
  <div className="flex mt-4 mb-8 justify-center">
        <div className="w-16 h-1 rounded-full bg-teal-500 inline-flex"></div>
      </div>
  </div> */}
    <section className="text-gray-600 body-font relative mx-6">
  <div className=" px-5 py-6 mt-8 md:mx-4 lg:mx-auto flex sm:flex-nowrap flex-wrap ">
    <div className=" md:w-3/5 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 lg:mr-20 p-10 flex items-end justify-start relative ">
      <iframe width="100%" height="100%" className="absolute inset-0 contrast-125 grayscale-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.3299657967036!2d81.86060641433372!3d25.49403972585083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acb7c105ade1f%3A0x4315585e623f5cb8!2sAnokhi%20Pehel!5e0!3m2!1sen!2sin!4v1579453709929!5m2!1sen!2sin" ></iframe>
      <div className="bg-white hover:bg-gray-50  relative flex flex-wrap py-6 rounded shadow-lg">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font text-base font-semibold text-gray-900 tracking-widest">ADDRESS</h2>
          <p className="mt-1">Near Academic Building MNNIT Allahabad, Prayagraj, Uttar Pradesh, India</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base">EMAIL</h2>
          <a className="text-teal-600 leading-relaxed">anokhipehel@mnnit.ac.in</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-base mt-4">PHONE</h2>
          <p className="leading-relaxed">9580259378</p>
        </div>
      </div>
    </div>
    <div className=" md:w-2/5 bg-white flex flex-col  w-full  md:mt-0 ">
      <h2 className="text-gray-900 text-2xl mb-1 mt-6 md:mt-0 font-medium title-font">FeedBack</h2>
      <p className="leading-relaxed mb-5 text-gray-600">We all need people who will give us feedback</p>
      <form onSubmit={submitHandler}>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600 ">Name</label>
        <input ref={nameRef} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input ref={emailRef} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-gray-600">Subject</label>
        <input ref={subjectRef} type="text" id="subject" name="subject" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
        <textarea ref={messageRef} id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button className="text-white bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-700 rounded text-lg">Submit</button>
      </form>
      {/* <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
    </div>
  </div>
</section>
{/* <div className="accordion flex flex-col items-center justify-center h-screen">
  <div className="w-1/2">
    <input type="checkbox" name="panel" id="panel-1" className="hidden"/>
    <label for="panel-1" className="relative block bg-black text-white p-4 shadow border-b border-grey">Panel 1</label>
    <div className="accordion__content overflow-hidden bg-grey-lighter">
      <h2 className="accordion__header pt-4 pl-4">Header</h2>
      <p className="accordion__body p-4" id="panel1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto possimus at a cum saepe molestias modi illo facere ducimus voluptatibus praesentium deleniti fugiat ab error quia sit perspiciatis velit necessitatibus.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div> */}
    {/* </div> */}
    
    
    </>
    
  )
}
