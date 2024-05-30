import React from 'react'

const Familihype = () => {
    return (
        <>
            <div className='bg-family xl:py-[186px] lg:py-[110px] md:py-[75px] sm:py-16 py-12 bg-[url(../src/assets/images/webp/family-bg.webp)] bg-no-repeat bg-center px-3'>
                <div className=' max-w-[1368px] mx-auto'>
                    <div className=' flex flex-col items-center justify-center'>
                        <h2 className='text-center font-poppins text_gredient1 text-transparent bg-clip-text font-medium text-[30px] sm:text-[38px] md:text-[44px] lg:text-[56px] md:leading-[56px] leading-[40px] sm:leading-[46px]  max-w-[692px]'>The Hyperion Family</h2>
                        <p className='text-center mt-3 sm:mt-5 md:mt-6 xl:mt-8 font-poppins text-snow_drift max-w-[816px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>Collaboate & Compete with a powerful network of global traders united under the Hyperion banner.
                        </p>
                        <p className='text-center mt-2 md:mt-3 lg:mb-12 md:mb-10 mb-6 font-poppins text-snow_drift max-w-[816px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>Engage in discussions, share insights, share your wins, participate in contests, and strategize with like-minded traders.
                        </p>
                        <button className=' bg-yellow_gradient p-[22.5px_52px] mx-auto flex justify-center text-nowrap items-center lg:mx-0 py-[22px] border-[1px] overflow-hidden relative hover:brightness-100 duration-500 group  border-[#FFFFFF29]  rounded-[100px] font-poppins font-medium  text-base leading-5 text-night'>
                            <span className=' -top-[150%] left-0 bg-yellow_gradient text-nowrap inline-flex w-80 h-[5px] group-hover:top-[150%] shadow-yellow-400 duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] opacity-50 absolute '></span>
                            Join the Hyperion family
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Familihype