import React from 'react'
import AIdriven1 from "../assets/images/webp/AiDriven1.webp";
import AIdriven2 from "../assets/images/webp/AiDriven2.webp";
import AIdriven3 from "../assets/images/webp/AiDriven3.webp";
const AiDriven = () => {
    return (
        <div className=' mt-[50px] sm:mt-[80px] lg:mt-[140px] bg-[url(./assets/images/webp/aidrivenbg.webp)] bg-cover bg-center bg-no-repeat' >
            <div className=' max-w-[1409px] mx-auto px-3'>
                <div className=' flex min-[1200px]:items-end justify-between flex-col min-[1200px]:flex-row'>
                    <h2 className=' min-[1200px]:max-w-[864px] text-center font-poppins font-medium  text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[26px] 576:text-[30px] sm:text-[38px] md:text-[44px] lg:text-[50px] xl:text-[56px] md:leading-[56px] leading-[36px] 576:leading-[40px] sm:leading-[46px]'> The hyperion
                        <span className=' md:block min-[1200px]:text-start'>  promise: unmatched features, </span>
                        <span className=' min-[1200px]:flex'>unbeatable results </span></h2>
                    <p className=' font-poppins font-normal text-lg leading-[23.4px] text-snow_drift opacity-70 text-center min-[1200px]:text-start mx-auto min-[1200px]:mx-0 min-[1200px]:pt-0 pt-4 max-w-[440px]'>Embrace the future of trading with Hyperion's innovative features:</p>
                </div>
                <div className=' flex flex-wrap justify-center flex-row -mx-3 mt-[30px] sm:mt-[64px]'>
                    <div className=' w-full sm:w-1/2 lg:w-1/3 px-3'>
                        <div className='border-[1px] aiDrivencard max-w-[440px] mx-auto lg:mx-0 border-solid border-[#F9F9F714] bg-[#1616168A] rounded-[24px] overflow-hidden h-full aiDri'>
                            <div className="max-w-[440px] max-h-[313px] overflow-hidden">
                                <img src={AIdriven1} alt="aidriven" className='duration-300 aiDrivenimg ' /></div>
                            <div className=' p-5 sm:p-6 xl:p-12'>
                                <p className=' text-transparent bg-clip-text bg-text_gradient1 font-poppins font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] tracking-[-2%] pb-2 sm:pb-6'>AI-Driven insights</p>
                                <p className=' font-poppins font-normal text-base leading-[20.8px] text-snow_drift opacity-70'>Uncover market trends and trading opportunities with a single click. Hyperion-AI analyzes real-time data, giving you 360° insights for confident trading decisions at minimum risk.</p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full sm:w-1/2 lg:w-1/3 px-3 mt-5 sm:mt-0'>
                        <div className="aiDrivencard border-[1px] max-w-[440px] mx-auto lg:mx-0 border-solid border-[#F9F9F714] bg-[#1616168A] rounded-[24px] overflow-hidden h-full group">
                            <div className="flex flex-col-reverse">
                                <div className="max-w-[440px] max-h-[313px] min-h-[313px] overflow-hidden">
                                    <img src={AIdriven2} alt="aidriven" className=" duration-300 h-full w-full aiDrivenimg" />
                                </div>
                                <div className="p-5 sm:p-6 xl:p-12 duration-500 ease-linear transform">
                                    <p className="text-transparent bg-clip-text bg-text_gradient1 font-poppins font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] tracking-[-2%] pb-2 sm:pb-6">Multi-chain trading</p>
                                    <p className="font-poppins font-normal text-base leading-[20.8px] text-snow_drift opacity-70">Diversify your portfolio and explore new low-risk trading opportunities with our multi-chain trading capabilities. Trade across multiple chains and access a wide range of tokens and pairs – all from a single platform.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full sm:w-1/2 lg:w-1/3 px-3 mt-5 sm:mt-6 lg:mt-0'>
                        <div className='aiDrivencard border-[1px] max-w-[440px] mx-auto lg:mx-0 border-solid border-[#F9F9F714] bg-[#1616168A] rounded-[24px] overflow-hidden h-full'>
                            <div className="max-w-[440px] max-h-[313px] overflow-hidden">
                                <img src={AIdriven3} alt="aidriven" className=' duration-300 aiDrivenimg ' /></div>
                            <div className=' p-5 sm:p-6 xl:pb-12 xl:px-12 xl:pt-[39px]'>
                                <p className=' text-transparent bg-clip-text bg-text_gradient1 font-poppins font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] tracking-[-2%] pb-2 sm:pb-6'>Lightning-fast execution</p>
                                <p className=' font-poppins font-normal text-base leading-[20.8px] text-snow_drift opacity-70'>Execute trades with lightning-fast speed and precision. Our platform is built for performance, ensuring that you never miss out on that perfect trading opportunity!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiDriven