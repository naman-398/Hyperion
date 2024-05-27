import React from 'react'
import MissionSectionImg from "../assets/images/webp/MissionSectionImg.webp";
import MissionSectionBg from "../assets/images/webp/MissionSectionBg.png";
import BlackLayer from "../assets/images/webp/BlackLayer.webp";
const MissionSection = () => {
    return (
        <div className=' pt-[50px] sm:pt-[80px] lg:pt-[100px] relative'>
            <img src={MissionSectionBg} alt="Missionbg" className=' absolute left-0 top-0' />
            <div className=' max-w-[1409px] mx-auto px-3'>
                <div className=' flex flex-wrap -mx-3 flex-col-reverse xl:flex-row '>
                    <div className=' w-full xl:w-1/2 px-3 pt-3 sm:pt-6 xl:pt-[84px]'>
                        <div className=' xl:max-w-[608px]  xl:me-auto '>
                            <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[38px] 576:text-[45px] sm:text-[50px]  md:text-[56px] leading-[38px] 576:leading-[45px] sm:leading-[50px] md:leading-[56px] font-poppins font-medium pb-3 sm:pb-6 text-center xl:text-start'>Mission Hyperion</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 mb-2 sm:mb-3 text-center xl:text-start'>Hyperion is powered by a single mission: to provide traders with a unique advantage in an extremely comptetitive landscape and help traders maximize profits while minimzing losses.</p>
                            <p className=' font-poppins font-normal  text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 text-center xl:text-start'>We designed Hyperion for traders of all levels, providing a superior trading experience supported by AI insights and assistance.</p>
                        </div>
                    </div>
                    <div className=' w-full xl:w-1/2 px-3 xl:h-[582px] relative'>
                        <img src={MissionSectionImg} alt="hpercionsection" className=' max-w-[1209px] w-full xl:min-w-[1208px] xl:h-[582px] xl:absolute right-[-95%] xl:right-[-90%] 1350:right-[-83%]' />
                        <img src={BlackLayer} alt="blacklayer" className=' absolute bottom-[-1%]  w-full xl:w-[unset] xl:right-[-5%] right-0' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionSection