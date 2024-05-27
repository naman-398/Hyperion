import React from 'react'
import Navbar from './Navbar'
import HeroBig from "../assets/images/webp/HeroBig.webp";
import Commonbtn from './common/Commonbtn';
import headerelipse from "../assets/images/webp/headerelipse.webp";
import headerelipse2 from "../assets/images/webp/HeaderElispe2.webp";
const Herosection = () => {
    return (
        <div className=' flex flex-col min-h-screen  bg-center bg-100% bg-no-repeat  bg-[url(./assets/images/webp/herobg.webp)] '>
            <div>
                <Navbar />
            </div>
            <div className=' flex grow flex-col justify-center relative'>
                <img src={headerelipse} alt="heraderelipse" className=' absolute right-0 top-[-14%] z-0' />
                <img src={headerelipse2} alt="heraderelipse" className=' absolute right-[-10%] top-[-4%] z-0' />
                <div className=' container max-w-[1409px] px-3 mx-auto'>
                    <div className=' flex lg:flex-row flex-wrap -mx-3 items-center pt-[50px] relative z-1'>
                        <div className=' w-full lg:w-7/12 2xl:px-0 px-3 '>
                        <button className="bg-gray-800 text-gray-300 font-bold py-2 px-4 border-l-2 border-gradient-to-r from-yellow-500 to-orange-500 border-t-0 border-r-0 border-b-0 border-opacity-0 hover:border-opacity-100 hover:border-l-2 hover:border-r-0 hover:border-t-0 hover:border-b-0 hover:border-gradient-to-r hover:from-yellow-500 hover:to-orange-500 hover:border-l-1 hover:border-r-1 hover:border-t-1 hover:border-b-1 hover:opacity-100 transition-all duration-300 ease-in-out w-[98px]  h-[37px]  rounded-[1000px] opacity-[0%]">
  Permissionless, Limitless & Borderless
</button>
                            <h1 className=' bg-text_gradient1 mt-3 sm:mt-6 text-transparent bg-clip-text fw-medium  font-poppins text-[32px] 576:text-[38px] sm:text-[49px] xl:text-[68px] leading-[40px] sm:leading-[58px] xl:leading-[68px] text-center lg:text-start'>Welcome to Hyperion —
                            <div className=' p-[8px_12px] rounded-[100px] bg-[url(./assets/images/webp/SubHeadingBg.webp)] bg-100% bg-center bg-no-repeat font-poppins  font-normal  mx-auto lg:mx-0 text-base leading-5 text-snow_drift opacity-70 max-w-[321px] relative'>
                                Permissionless, Limitless & Borderless
                            </div>
                            <h1 className=' bg-text_gradient1 mt-3 sm:mt-6 text-transparent bg-clip-text font-medium  font-poppins text-[32px] 576:text-[38px] sm:text-[49px] xl:text-[68px] leading-[40px] sm:leading-[58px] xl:leading-[68px] text-center lg:text-start'>Welcome to Hyperion —
                                your ultimate AI-
                                powered decentralized
                                perps platform
                            </h1>
                            <p className=' max-w-[546px] font-poppins font-normal  text-base sm:text-lg leading-[23.4px] opacity-70 mt-4 sm:mt-8 text-snow_drift mx-auto text-center lg:text-start lg:mx-0'>Trade 70+ Tokens & Pairs on 3 Chains with 50X Leverage. There is an Easier, Faster, Simpler, and Safer Way to Trade - Enter the Hyperion Experience</p>
                            <span className=' flex justify-center lg:block mt-6 sm:mt-12'> <Commonbtn /></span>
                        </div>
                        <div className=' w-full lg:w-5/12 px-3 pt-8 lg:pt-0'>
                            <img src={HeroBig} alt="herobig" className=' max-w-[533px] max-h-[568px] w-full mx-auto lg:ms-auto lg:-me-3' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection