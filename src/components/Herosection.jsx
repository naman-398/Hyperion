import React from 'react'
import Navbar from './Navbar'
import HeroBig from "../assets/images/webp/HeroBig.webp";
import Commonbtn from './common/Commonbtn';
const Herosection = () => {
    return (
        <div className=' flex flex-col min-h-screen  bg-[100%_100%] bg-cover bg-no-repeat  bg-[url(./assets/images/webp/herobg.webp)] '>
            <div>
                <Navbar />
            </div>
            <div className=' flex grow flex-col justify-center'>
                <div className=' container max-w-[1385px] px-3 mx-auto'>
                    <div className=' flex lg:flex-row flex-wrap -mx-3 items-center pt-[50px]'>
                        <div className=' w-full lg:w-7/12 2xl:px-0 px-3 '>
                            <div className=' p-[8px_12px] rounded-[100px] bg-[#18191B] font-poppins border-origin bg-border_gradient border-solid fw-normal  mx-auto lg:mx-0 text-base leading-5 text-snow_drift opacity-70 max-w-[321px] relative'>
                                {/* <span className=' absolute w-[97px] rounded-[100px] h-[37px]  left-0 top-0'></span> */}
                                Permissionless, Limitless & Borderless
                            </div>
                            <h1 className=' bg-text_gradient1 mt-3 sm:mt-6 text-transparent bg-clip-text fw-medium  font-poppins text-[32px] 576:text-[38px] sm:text-[49px] xl:text-[68px] leading-[40px] sm:leading-[58px] xl:leading-[68px] text-center lg:text-start'>Welcome to Hyperion —
                                your ultimate AI-
                                powered decentralized
                                perps platform
                            </h1>
                            <p className=' max-w-[546px] font-poppins fw-normal  text-base sm:text-lg leading-[23.4px] opacity-70 mt-4 sm:mt-8 text-snow_drift mx-auto text-center lg:text-start lg:mx-0'>Trade 70+ Tokens & Pairs on 3 Chains with 50X Leverage. There is an Easier, Faster, Simpler, and Safer Way to Trade - Enter the Hyperion Experience</p>
                        <span className=' flex justify-center lg:block mt-6 sm:mt-12'> <Commonbtn/></span>
                        </div>
                        <div className=' w-full lg:w-5/12 px-3 pt-8 lg:pt-0'>
                            <img src={HeroBig} alt="herobig" className=' max-w-[533px] max-h-[568px] w-full mx-auto lg:ms-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection