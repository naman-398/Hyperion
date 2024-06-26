import React from 'react'

const Familihype = () => {
    return (
        <>
            <div className='bg-family xl:py-[186px] lg:py-[110px] md:py-[75px] sm:py-16 py-12 bg-[url(../src/assets/images/webp/family-bg.webp)] bg-no-repeat bg-center px-3'>
                <div className=' max-w-[1368px] mx-auto'>
                    <div className=' flex flex-col items-center justify-center'>
                        <h2 className='text-center font-poppins text_gredient1 text-transparent bg-clip-text font-medium text-[26px] 576:text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] md:leading-[56px] leading-[36px] 576:leading-[40px] sm:leading-[46px] max-w-[692px]'>The Hyperion Family</h2>
                        <p className='text-center mt-3 sm:mt-5 md:mt-6 xl:mt-8 font-poppins text-snow_drift max-w-[816px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>Collaboate & Compete with a powerful network of global traders united under the Hyperion banner.
                        </p>
                        <p className='text-center mt-2 md:mt-3 lg:mb-12 md:mb-10 mb-6 font-poppins text-snow_drift max-w-[816px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>Engage in discussions, share insights, share your wins, participate in contests, and strategize with like-minded traders.
                        </p>
                        <button className=' p-[12px_32px] sm:p-[22.5px_52px]  after:absolute after:w-full after:h-full after:duration-300 duration-300 ease-linear hover:text-snow_drift after:left-0 after:top-0 after:z-0 after:bg-yellow_gradient overflow-hidden hover:after:opacity-0 after:opacity-[1] bg-yellow_gradient1 relative  border-[#FFFFFF29]  rounded-[100px] font-poppins font-medium  text-base leading-5 text-night'>
                            <span className=' relative z-[1]'>Join the Hyperion family</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Familihype