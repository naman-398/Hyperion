import React from 'react'
import Navbar from './Navbar'
import HeroBig from "../assets/images/webp/HeroBig.webp";
const Herosection = () => {
    return (
        <div className=' flex flex-col min-h-screen  bg-[100%_100%] bg-cover bg-no-repeat  bg-[url(./assets/images/webp/herobg.png)] '>
            <div>
                <Navbar />
            </div>
            <div className=' flex grow flex-col justify-center'>
                <div className=' container max-w-[1385px] px-3 mx-auto'>
                    <div className=' flex lg:flex-row flex-wrap -mx-3 items-center pt-[50px]'>
                        <div className=' w-full lg:w-7/12 2xl:px-0 px-3 '>
                            <div className=' p-[8px_12px] rounded-[100px] bg-[#18191B] font-poppins fw-normal  mx-auto lg:mx-0 text-base leading-5 text-snow_drift opacity-70 max-w-[321px] relative'>
                                <span className=' absolute w-[97px] rounded-[100px] h-[37px] border-origin bg-border_gradient border-solid left-0 top-0'></span>
                                Permissionless, Limitless & Borderless
                            </div>
                            <h1 className=' bg-text_gradient1 mt-3 sm:mt-6 text-transparent bg-clip-text fw-medium  font-poppins text-[32px] 576:text-[38px] sm:text-[49px] xl:text-[68px] leading-[40px] sm:leading-[58px] xl:leading-[68px] text-center lg:text-start'>Welcome to Hyperion —
                                your ultimate AI-
                                powered decentralized
                                perps platform
                            </h1>
                            <p className=' max-w-[546px] font-poppins fw-normal  text-lg leading-[23.4px] opacity-70 mt-4 sm:mt-8 text-snow_drift mx-auto text-center lg:text-start lg:mx-0'>Trade 70+ Tokens & Pairs on 3 Chains with 50X Leverage. There is an Easier, Faster, Simpler, and Safer Way to Trade - Enter the Hyperion Experience</p>
                            <button className=' bg-yellow_gradient mx-auto flex lg:mx-0 p-[22px_52px] border-[1px] overflow-hidden relative hover:brightness-100 duration-500 group  border-[#FFFFFF29] mt-6 sm:mt-12 rounded-[100px] font-poppins fw-medium  text-base leading-5 text-night'>
                                <span className=' -top-[150%] left-0 bg-yellow_gradient inline-flex w-80 h-[5px] group-hover:top-[150%] shadow-yellow-400 duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] opacity-50 absolute '></span>
                                Start trading
                            </button>
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