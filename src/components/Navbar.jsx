import React, { useState } from 'react'
import PageLogo from "../assets/images/webp/logo.webp";
import { Navcrossicon, Navlineicon } from './common/Icons';
const Navbar = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)
        if (first === false) {
            document.body.classList.add('max-lg:overflow-hidden')
        }
        else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }
    return (
        <div className=' py-4'>
            <div className=' container max-w-[1409px] px-3 mx-auto'>
                <div className=' flex items-center justify-between'>
                    <a href="#"><img src={PageLogo} alt="pagelogo" className='max-w-[150px] max-h-[29.73px]' /></a>
                    <ul className={`${first === false ? " left-[-100%]" : " left-0"} 
                     font-poppins font-normal text-lg sm:text-xl lg:text-base leading-[20.8px] text-snow_drift flex  items-center gap-6
                      max-lg:flex max-lg:flex-col  max-lg:justify-center max-lg:absolute max-lg:top-0 max-lg:min-h-[100vh] max-lg:w-full max-lg:bg-black max-lg:z-[11] max-lg:duration-300 max-lg:transition-all`}>
                        <li>
                            <a onClick={show} href="#home" className=' opacity-70 relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-[0%] after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'>Welcome</a>
                        </li>
                        <li>
                            <a onClick={show} href="#trade" className=' opacity-70 relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-[0%] after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'>Trade with AI</a>
                        </li>
                        <li>
                            <a onClick={show} href="#feature" className=' opacity-70 relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-[0%] after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'>Discover features</a>
                        </li>
                        <li>
                            <a onClick={show} href="#join" className=' opacity-70 relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-[0%] after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'>Join community</a>
                        </li>
                        <li>
                            <a onClick={show} href="#footer" className=' opacity-70 relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-[0%] after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'>Get support</a>
                        </li>
                        <button className=' sm:hidden after:absolute after:w-full after:h-full after:duration-300 duration-300 ease-linear hover:text-snow_drift after:left-0 after:top-0 after:z-0 after:bg-yellow_gradient_to_r overflow-hidden hover:after:opacity-0 after:opacity-[1] bg-yellow_gradient_to_l relative  rounded-[100px] font-poppins font-medium  text-base leading-5 text-night'>
                            <span className=' relative z-[1]'>Start trading</span>
                        </button>
                    </ul>
                    <div className=' flex items-center gap-5'>
                        <button className=' hidden sm:block p-[14.5px_29.2px] after:absolute after:w-full after:h-full after:duration-300 duration-300 ease-linear hover:text-snow_drift after:left-0 after:top-0 after:z-0 after:bg-yellow_gradient_to_r overflow-hidden hover:after:opacity-0 after:opacity-[1] bg-yellow_gradient_to_l  rounded-[100px] relative font-poppins font-medium  text-base leading-5 text-night'>
                            <span className=' relative z-[1]'>Start trading</span>
                        </button>
                        <span onClick={show} className=' block lg:hidden relative z-[11]'>{first === false ? <Navlineicon /> : <Navcrossicon />}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar