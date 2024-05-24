import React, { useState } from 'react'
import PageLogo from "../assets/images/webp/Logo.webp";
import { Navcross, Navline } from './common/Icon';
const Navbar = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)  
        if (first === false) {
          document.body.classList.add('overflow_hidden')
        }
        else {
          document.body.classList.remove('overflow_hidden')
        }
    }
    return (
        <div className=' py-4'>
            <div className=' container max-w-[1368px] px-3 mx-auto'>
                <div className=' flex items-center justify-between'>
                    <a href="#"><img src={PageLogo} alt="pagelogo" className='max-w-[150px] max-h-[29.73px]' /></a>
                    <ul className={`${first=== false ? " left-[-100%]" : " left-0"}  font-poppins fw-normal text-lg sm:text-xl lg:text-base leading-[20.8px] text-snow_drift flex  items-center gap-6 mobile-view`}>
                        <li>
                            <a href="" className=' opacity-70'>Welcome</a>
                        </li>
                        <li>
                        <a href="" className=' opacity-70'>Trade with AI</a>
                        </li>
                        <li>
                        <a href="" className=' opacity-70'>Discover features</a>
                        </li>
                        <li>
                        <a href="" className=' opacity-70'>Join community</a>
                        </li>
                        <li>
                        <a href="" className=' opacity-70'>Get support</a>
                        </li>
                        <button className=' sm:hidden bg-yellow_gradient p-[14.5px_29.2px] overflow-hidden relative hover:brightness-150 duration-500 group rounded-[100px] font-poppins fw-medium  text-base leading-5 text-night'>
                            <span className=' -top-[150%] bg-yellow_gradient left-0 inline-flex w-80 h-[5px] group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] opacity-50 absolute '></span>
                    Start trading
                    </button>
                    </ul>
                    <div className=' flex items-center gap-5'>
                    <button className=' hidden sm:block bg-yellow_gradient p-[14.5px_29.2px] rounded-[100px] overflow-hidden relative hover:brightness-100 duration-500 group font-poppins fw-medium  text-base leading-5 text-night'>
                    <span className=' -top-[150%] left-0 bg-yellow_gradient inline-flex w-80 h-[5px] group-hover:top-[150%] shadow-yellow-400 duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] opacity-50 absolute '></span>
                    Start trading
                    </button>
                    <span onClick={show} className=' block lg:hidden relative z-[11]'>{first === false ? <Navline/>: <Navcross/>}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar