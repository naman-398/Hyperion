import React from 'react'
import hyperion from "../assets/images/webp/HyperionSectionImg.webp";
import Commonbtn from './common/Commonbtn';
import HyperionSectionBg from "../assets/images/webp/HyperionSectionBg.png";
import BlackLayer from "../assets/images/webp/BlackLayer.webp";
const Hperionsection = () => {
    return (
        <div className=' pt-[50px] sm:pt-[80px] lg:pt-[140px] relative'>
            <img src={HyperionSectionBg} alt="hyperionbg" className=' absolute  top-[20%] right-0' />
            <div className=' max-w-[1409px] ms-auto px-3'>
                <h2 className=' xl:max-w-[976px] text-center text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%]  font-medium text-[38px] 576:text-[45px] sm:text-[50px]  md:text-[56px] leading-[38px] 576:leading-[45px] sm:leading-[50px] md:leading-[56px]'>   Hyperion isn't just
                    <span className=' md:block xl:text-start'> another trading platform – it's your </span>
                    <span className=' xl:flex'> partner in perps trading </span></h2>
                <div className=' flex flex-wrap -mx-3 flex-row mt-[30px] sm:mt-[64px] items-center'>
                    <div className=' w-full xl:w-1/2 px-3 xl:h-[565px] relative'>
                        <img src={hyperion} alt="hpercionsection" className=' max-w-[1208px] w-full xl:min-w-[1208px] xl:h-[565px] xl:absolute left-[-95%] xl:left-[-90%] 1350:left-[-83%]' />
                        <img src={BlackLayer} alt="blacklayer" className=' absolute bottom-[-1%]  w-full xl:w-[unset] xl:right-[7%] right-0' />
                    </div>
                    <div className=' w-full xl:w-1/2 px-3 pt-3 sm:pt-6 xl:pt-0'>
                        <div className=' xl:max-w-[608px]  '>
                            <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[25px] sm:text-[30px] leading-[30px] font-poppins font-medium pb-3 sm:pb-6 text-center xl:text-start'>Decentralized Trade Insights</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 mb-2 sm:mb-3 text-center xl:text-start'>With Hyperion-AI, you'll get all the information you need to make a well-informed trade.  Our AI conducts deep technical analysis on every available pair, analyzes the current revelant news, tracks social sentiment, and provides a trade score +  suggestions on your trade.</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 mb-2 sm:mb-3 text-center xl:text-start'>We're focused on giving you the tools and data you need to succeed with ease.</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 mb-3 sm:mb-12 text-center xl:text-start'>And the best part? Hyperion is decentralized and permissionless — giving you security and complete control over your funds and trades.</p>
                            <span className=' flex justify-center xl:block'><Commonbtn /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hperionsection