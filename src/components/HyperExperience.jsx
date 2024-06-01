import React from 'react'
import PrimaryButton from './common/PrimaryButton'

const Experience = () => {
    return (
        <>
            <div className='xl:mt-[140px] lg:mt-24 md:mt-20 mt-14 sm:mt-16 px-3'>
                <div className='bg-experience bg-[url(../src/assets/images/webp/experience-bg.webp)] bg_size_100 rounded-[32px] bg-center bg-no-repeat max-w-[1488px] mx-auto  xl:py-[120px] lg:py-[95px] md:py-[70px] sm:py-[55px] py-[48px]'>
                    <div className='flex w-100 items-center justify-center lg:justify-start'>
                        <div className='lg:flex flex-col lg:pl-[84px] md:px-4 px-3'>
                            <h2 className='text-center lg:text-start  font-poppins text-grey_gradient text-transparent bg-clip-text font-medium text-2xl 576:text-3xl sm:text-4xl md:text-xxl lg:text-5xl xl:text-vxl md:leading-[56px] leading-[36px] 576:leading-[40px] sm:leading-[46px]  max-w-[692px]'>Experience the hyperion difference</h2>
                            <p className='text-center max-lg:mx-auto lg:text-start mt-3 sm:mt-5 md:mt-6 xl:mt-8 font-poppins text-snow_drift max-w-[618px] opacity-70 text-base lg:text-lg leading-[23.4px] font-normal'>Ready to unlock a whole new dimension and take your trading to new levels? Experience the Hyperion difference today.
                            </p>
                            <p className='text-center max-lg:mx-auto lg:text-start  mt-2 md:mt-3 lg:mb-12 md:mb-10 mb-6 font-poppins text-snow_drift max-w-[618px] opacity-70 text-base lg:text-lg leading-[23.4px] font-normal'>Whether you're a seasoned trader or just starting your trading journey, our platform is designed to meet your needs and exceed your expectations.
                            </p>
                            <div className=' text-center lg:text-start'>
                                <PrimaryButton text="Start trading" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience