import React from 'react'
import hyperion from "../assets/images/webp/HyperionSectionImg.webp";
import Commonbtn from './common/Commonbtn';
import HyperionSectionBg from "../assets/images/webp/HyperionSectionBg.webp";
import HyperionEllipse from "../assets/images/webp/Hyperionellipse.webp";
import BlackLayer from "../assets/images/webp/BlackLayer.webp";
const Hperionsection = () => {
    return (
        <div className=' pt-[35px] sm:pt-[80px] lg:pt-[140px] relative z-0' >
            <img src={HyperionSectionBg} alt="hyperionbg" className=' absolute  top-[20%] right-0 z-[-1]' />
            <img src={HyperionEllipse} alt="hyperionbg" className=' absolute  top-[-10%] z-[-1] left-0 max-w-[610px]' />
            <div className=' max-w-[1409px] mx-auto px-3'>
                <h2 className=' xl:max-w-[976px] 1350:ms-5 text-center text-transparent pb-[4px] bg-clip-text bg-text_gradient1 tracking-[-2%]  font-medium text-[30px] sm:text-[38px] md:text-[44px] lg:text-[56px] md:leading-[56px] leading-[40px] sm:leading-[46px]'>   Hyperion isn't just
                    <span className=' md:block xl:text-start'> another trading platform – it's your </span>
                    <span className=' xl:flex '> partner in perps trading </span></h2>
                <div className=' flex flex-wrap -mx-3 flex-row mt-[15px] sm:mt-[60px] items-center'>
                    <div className=' w-full xl:w-1/2 px-3 xl:h-[565px] relative'>
                        <img src={hyperion} alt="hpercionsection" className=' max-w-[1208px] w-full xl:min-w-[1208px] xl:h-[565px] xl:absolute left-[-95%] xl:left-[-90%] 1350:left-[-79%]' />
                        <img src={BlackLayer} alt="blacklayer" className=' absolute bottom-[-1%]  w-full xl:min-w-[1087px] xl:right-[7%] right-0' />
                    </div>
                    <div className=' w-full xl:w-1/2 px-3 pt-3 sm:pt-6 xl:pt-0'>
                        <div className=' xl:max-w-[608px]  '>
                            <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] font-poppins font-medium pb-3 sm:pb-6 text-center xl:text-start'>Decentralized Trade Insights</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg !leading-[23.4px] text-snow_drift opacity-70 mb-2 sm:mb-3 text-center xl:text-start'>With Hyperion-AI, you'll get all the information you need to make a well-informed trade.  Our AI conducts deep technical analysis on every available pair, analyzes the current revelant news, tracks social sentiment, and provides a trade score +  suggestions on your trade.</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg !leading-[23.4px] text-snow_drift opacity-70 mb-2 sm:mb-3 text-center xl:text-start'>We're focused on giving you the tools and data you need to succeed with ease.</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg !leading-[23.4px] text-snow_drift opacity-70 mb-3 sm:mb-6 md:mb-12 text-center xl:text-start'>And the best part? Hyperion is decentralized and permissionless — giving you security and complete control over your funds and trades.</p>
                            <span className=' flex justify-center xl:block'><Commonbtn /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hperionsection