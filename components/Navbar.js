import Image from 'next/image';
// import onClickOutside from "react-onclickoutside";
import {React, useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import toast, { Toaster } from 'react-hot-toast';
import { AiFillCaretDown } from "react-icons/ai";

 const Navbar = () => {
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [active, setActive] = useState(false);
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const router = useRouter();

    // useEffect((event)=>{
    //   if(event?.target?.id===undefined){
    //     setDropdown(false);
    //   };
    // },[event?.target?.id])

  useEffect(() => {
    if(session?.user?.id)
    {
      if (localStorage.getItem('authType') === 'signup') {
        if (session?.user) {
          
          fetch('/api/auth/googleSignup', {
              method: 'POST',
              body: JSON.stringify({
                  email: session.user.email,
                  userName: session.user.name,
                  id:session.user.id
              }),
              headers: {
                  'Content-Type': 'application/json',
              },
          }).then((response) => response.json())
              .then(data => {
                  if (data.errorMessage) {
                      toast.error(data.errorMessage,{
                          duration: 4000,
                          position: 'top-right',
                          // Styling
                          style: {
                              background: '#f25f4c',
                              color: '#fff',
                              fontWeight:'bold'
                            },
                          className: 'bg-red-200',
                       
                          // Aria
                          ariaProps: {
                            role: 'status',
                            'aria-live': 'polite',
                          },
                        });  
                        
            signOut({redirect:false});  
                  return;
                  }
                  if (data.successMessage.length>0)
                  {
                    setUserData(data.userData);
                    setChange(true);
                    // console.log(userData);
                      toast.success(data.successMessage,{
                          duration: 4000,
                          position: 'top-right',
                          // Styling
                          style: {
                              background: '#2ecc71',
                              color: '#fff',
                              fontWeight:'bold'
                              },
                          className: 'bg-red-200',
                          
                          // Aria
                          ariaProps: {
                              role: 'status',
                              'aria-live': 'polite',
                          },
                          });
                  }
              });
              
        }
        localStorage.clear();
      }
      else
      fetch(`/api/data/user/${session.user.id}`)
        .then(response => response.json())
        .then(data => {
          if (!data.sanityData)
          {
            signOut({redirect:false,});
            toast.error("You don't have any account please signup.",{
                          duration: 4000,
                          position: 'top-right',
                          // Styling
                          style: {
                              background: '#f25f4c',
                              color: '#fff',
                              fontWeight:'bold'
                            },
                          className: 'bg-red-200',
                       
                          // Aria
                          ariaProps: {
                            role: 'status',
                            'aria-live': 'polite',
                          },
                        }); 
            router.push('/authentication');
          }
          setUserData(data.sanityData)
          // setChange(true);
          // console.log(userData);
        });
    } 
}, [session,router]);

  const handleClick = () => {
    setActive(!active);
  };
  const handleDropdown1=(event)=>{
    // console.log(event.target.id);
    setDropdown1(prev=>!prev);
    if(dropdown2){
      setDropdown2(!dropdown2)
    }
    if(dropdown3){
      setDropdown3(!dropdown3)
    }
  }
  const handleDropdown2=(event)=>{
    // console.log(event.target.id);
    setDropdown2(prev=>!prev);
    if(dropdown3){
      setDropdown3(!dropdown3)
    }
    if(dropdown1){
      setDropdown1(!dropdown1)
    }
  }
  const handleDropdown3=(event)=>{
    // console.log(event.target.id);
    setDropdown3(prev=>!prev);
    if(dropdown2){
      setDropdown2(!dropdown2)
    }
    if(dropdown1){
      setDropdown1(!dropdown1)
    }
  }
  
  Navbar.handleClickOutside = () => {
    // setDropdown(false);
  };

  return (
    <>
    <Toaster/>
      <nav className='shadow-lg sticky top-0 z-50 w-full flex items-center flex-wrap bg-white p-0'>
        <Link href='/'>
          <a className='inline-flex items-center p-0 xl:ml-2  '>
            <Image alt='logo' src="/imagelogo.png" width={150} height={110}></Image>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-slate-100 rounded xl:hidden text-slate-800 ml-auto  outline-none'
          onClick={handleClick}
        >{
          (!active)?(<svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>):(<svg
										className=" h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>)
        }
          
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full xl:inline-flex xl:flex-grow xl:w-auto`}
        >
          <div className='xl:inline-flex xl:flex-row xl:ml-auto xl:w-auto w-full xl:items-center items-start flex flex-col xl:h-auto'>
            <ul className='xl:inline-flex xl:flex-row xl:ml-auto xl:w-auto w-full xl:items-center items-start flex flex-col xl:h-auto'>
          
                  <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600 '><Link href='/'>
                    <a onClick={()=>{setActive(!active)}}>
                    Home
                    </a>
                    </Link></li>
                  <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600 '><Link href='/contact'>
                    <a onClick={()=>{setActive(!active)}}>
                    Contact Us
                    </a>
                    </Link></li>
                  <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600 '><Link href='/blog'>
                    <a onClick={()=>{setActive(!active)}}>
                    Blogs
                    </a>
                    </Link></li>
                    <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/gallery'>
                    <a onClick={()=>{setActive(!active)}}>
                    Gallery
                    </a>
                  </Link></li>
                    <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/class'>
                    <a onClick={()=>{setActive(!active)}}>
                    Classes
                    </a>
                  </Link></li>
                    
                  <li className='xl:text-lg cursor-pointer xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center'>
                    <a onClick= {handleDropdown3} className='inline-flex hover:text-teal-600' >
                    Team </a><AiFillCaretDown onClick= {handleDropdown3} className=' hover:text-teal-600 inline-block'/>
                    
                    {dropdown3 && <div className='invisible xl:visible bg-white text-slate-800  font-normal border border-slate-500 absolute top-0 right-0 translate-y-20 -translate-x-[31rem] rounded '>
                      <ul className='px-4 py-2 '>
                        <Link href='/faculty'><li className='hover:text-teal-600'><a onClick={()=>{setDropdown3(!dropdown2)}}>Faculty</a></li></Link>
                        <Link href='/alumni'><li className='hover:text-teal-600'><a onClick={()=>{setDropdown3(!dropdown2)}}>Alumni</a></li></Link>
                        <Link href='/coordinator'><li className='hover:text-teal-600'><a onClick={()=>{setDropdown3(!dropdown2)}}>Coordinators</a></li></Link>
                      </ul>
                  </div>}
                    {active && dropdown3 && <div className='xl:hidden'>
                        <ul>
                        <div className=' mt-2  rounded font-normal border border-slate-500 p-2'>
                        <Link href='/faculty'><li className='hover:text-teal-600'><a onClick={()=>{setActive(!active)}}>Faculty</a></li></Link>
                          <Link href='/alumni'><li className='hover:text-teal-600'><a onClick={()=>{setActive(!active)}}>Alumni</a></li></Link>
                          <Link href='/coordinator'><li className='hover:text-teal-600'><a onClick={()=>{setActive(!active)}}>Coordinators</a></li></Link>
                        </div>
                        </ul>
                    </div>}
                  </li>
                    <li className='xl:text-lg xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/antyodaya'>
                    <a onClick={()=>{setActive(!active)}}>
                    Antyodaya
                    </a>
                  </Link></li>
                  <li className='xl:text-lg cursor-pointer xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center'>
                    <a onClick= {handleDropdown2} className='inline-flex hover:text-teal-600' >
                    More </a><AiFillCaretDown onClick= {handleDropdown2} className=' hover:text-teal-600 inline-block'/>
                    
                    {dropdown2 && <div className='invisible xl:visible bg-white text-slate-800  font-normal border border-slate-500 absolute top-0 right-0 translate-y-20 -translate-x-80 rounded '>
                      <ul className='px-4 py-2 '>
                        <Link href='/notice'><li className='hover:text-teal-600'><a onClick={()=>{setDropdown2(!dropdown2)}}>Notice</a></li></Link>
                        <Link href='/testimonial'><li className='hover:text-teal-600'><a onClick={()=>{setDropdown2(!dropdown2)}}>Testimonials</a></li></Link>
                      </ul>
                  </div>}
                    {active && dropdown2 && <div className='xl:hidden'>
                        <ul>
                        <div className=' mt-2  rounded font-normal border border-slate-500 p-2'>
                        <Link href='/notice'><li className='hover:text-teal-600'><a onClick={()=>{setActive(!active)}}>Notice</a></li></Link>
                          <Link href='/testimonial'><li className='hover:text-teal-600'><a onClick={()=>{setActive(!active)}}>Testimonials</a></li></Link>
                        </div>
                        </ul>
                    </div>}
                  </li>

                    <li className='xl:text-lg xl:inline-flex xl:w-auto w-full pl-1 py-1 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/memberShipForm'>
                    <a onClick={()=>{setActive(!active)}} className='inline-flex text-black bg-teal-500 border-0 py-2 px-3 focus:outline-none hover:bg-teal-600 rounded text-lg'>
                    Get Involved
                    </a>
                  </Link></li>
                    <li className='xl:text-lg xl:inline-flex xl:w-auto w-full pl-1 py-1 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/donation'>
                    <a onClick={()=>{setActive(!active)}} className='inline-flex text-black bg-teal-500 border-0 py-2 px-3 focus:outline-none hover:bg-teal-600 rounded text-lg'>
                    Donate Now
                    </a>
                  </Link></li>
                   {!userData && <li  className='xl:text-lg xl:inline-flex xl:w-auto w-full px-1 py-1 rounded text-slate-800 font-semibold items-center justify-center hover:text-teal-600'><Link href='/login'>
                    <a onClick={()=>{setActive(!active)}} className='inline-flex text-black bg-teal-500 border-0 py-2 px-3 focus:outline-none hover:bg-teal-600 rounded text-lg'>
                    Login
                    </a>
                  </Link></li>}
                  {userData && <li  className='xl:text-lg cursor-pointer xl:inline-flex xl:w-auto w-full px-2 xl:px-3 py-2 rounded text-slate-800 font-semibold items-center justify-center '>
                    <div onClick= {handleDropdown1}  className='inline-flex hover:text-teal-600' >
                    <Image id="screenOnClick" src={userData.image}
                             height={50}
                             width={50}
                             className="object-cover rounded-full"
                             alt={userData.username} />
                    </div>
                    {dropdown1 && <div className='invisible xl:visible bg-white text-slate-800  font-normal border border-slate-500 absolute top-0 right-0 translate-y-20 -translate-x-6 rounded '>
                      <ul className='px-4 py-2 '>
                        <li className='hover:text-teal-600'><a>Profile</a></li>
                        <li onClick={() => { setUserData(null);setDropdown1(!dropdown1);return signOut({redirect:false})}} className='hover:text-teal-600'><a>Logout</a></li>
                      </ul>
                  </div>}
                  {active && dropdown1 && <div className='xl:hidden'>
                        <ul>
                        <div className=' mt-2  rounded font-normal border border-slate-500 p-2'>
                        <li className='hover:text-teal-600'><a>Profile</a></li>
                        <li onClick={() => { setUserData(null);setActive(!active);return signOut({redirect:false})}} className='hover:text-teal-600'><a>Logout</a></li>
                        </div>
                        </ul>
                    </div>}

                  </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
// const clickOutsideConfig = {
//   handleClickOutside: () => Navbar.handleClickOutside,
// };

// export default onClickOutside(Navbar, clickOutsideConfig);
export default Navbar


