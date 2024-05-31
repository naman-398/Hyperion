import React, { useEffect, useState } from 'react'

const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true);
            document.body.style.overflow = '';
        }, 4500);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                    <div className=' flex flex-col justify-center 576:gap-5 items-center'>
                        <div className="loader inline-block relative w-[120px] h-[80px]">
                            <div className='absolute top-[3px] w-4 h-4 rounded-full bg-lighting_yellow'></div>
                            <div className='absolute top-[3px] w-4 h-4 rounded-full bg-lighting_yellow'></div>
                            <div className='absolute top-[3px] w-4 h-4 rounded-full bg-lighting_yellow'></div>
                            <div className='absolute top-[3px] w-4 h-4 rounded-full bg-lighting_yellow'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection