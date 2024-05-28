import React, { useEffect, useState } from 'react'
import logo from "../assets/images/webp/Logo.webp";

const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 2000); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                    <div className=' flex flex-col justify-center sm576:gap-[20px] items-center'>
                        <div className=' animate-bounce'>
                            <img src={logo} alt="" className=' max-w-[300px] sm:max-w-[600px] sm:max-h-[100px] max-h-[60px]' />
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection