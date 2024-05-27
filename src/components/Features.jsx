import { featuredata } from "./common/Helper"
import graphimg from '../assets/images/webp/feature-img4.webp'
import graphimg2 from '../assets/images/webp/feature-img5.webp'
const Features = () => {
    return (
        <>
            <div className='xl:mt-140 lg:mt-[100px] md:mt-[80px] mt-14 sm:mt-16 px-3'>
                <h2 className='text-center xl:mb-[84px] lg:mb-[70px] md:mb-[55px] mb-10 font-poppins text_gredient1 text-transparent bg-clip-text font-medium text-[29px] sm:text-[38px] md:text-[44px] lg:text-[56px] md:leading-[56px] leading-[40px] sm:leading-[46px]'>The Hyperion Features
                </h2>
                <div className='max-w-[1368px] mx-auto'>
                    <div className="flex flex-row border-b-[1px] pb-12 border-b-[#1E1E1F] flex-wrap">
                        {featuredata.map((obj, index) => {
                            return (
                                <div className={`${index == 0 ? " max-[1200px]:flex items-center justify-center min-[1200px]:w-[32.3%] w-full md:w-[50%]  md:pr-3" : index == 1 ? "md:border-l-[1px] border-l-[#1E1E1F] min-[1200px]:border-r-[1px] mt-12 md:mt-0 flex md:pl-3 min-[1200px]:px-3 items-center justify-center min-[1200px]:w-[35.4%] w-full md:w-[50%] border-r-[#1E1E1F]" : index == 2 ? " min-[1200px]:w-[32.3%] w-full min-[1200px]:pl-3 flex items-center justify-center max-[1200px]:mt-12 min-[1200px]:items-end flex-col" : ""} h-full`}>
                                    <div className=" min-[1200px]:max-w-[392px] max-w-[450px]">
                                        <img src={obj.img} alt="img" className="w-[392px] h-[294px]" />
                                        <p className='text-center md:text-start  text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] lg:mt-12 mt-5 md:mt-9 lg:mb-6 mb-3 font-poppins'>{obj.title}</p>
                                        <p className='text-center md:text-start font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>{obj.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=" flex flex-row flex-wrap pt-12">
                        <div className=" w-[32.3%] h-full">
                            <div className=" max-w-[392px]">
                                <p className='text-center md:text-start  text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] lg:mb-6 mb-3 font-poppins'>Integrations</p>
                                <p className='text-center md:text-start font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>GMX, SYNTHENTIX, AGGR TRADE, 0x Protocol, TradingView </p>
                                <img src={graphimg} alt="imggraph" className="w-full mt-12" />
                            </div>
                        </div>
                        <div className="w-[65%] pl-12 md:border-l-[1px] border-l-[#1E1E1F]">
                            <div className=" flex flex-row gap-12">
                                <img src={graphimg2} alt="" className=" max-w-[392px]" />
                                <div className=" flex flex-col ">
                                    <p className='text-center md:text-start  text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] lg:mb-6 md:mb-4 mb-3 font-poppins'>AI Trading Indicators
                                    </p>
                                    <p className='text-center md:text-start font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>Gain a competitive edge with Hyperion's AI trading indicator. Identify the most promising trading pairs and leverage AI-driven analysis for strategic, low-risk trades. </p>
                                    <p className='text-center md:text-start mt-3 font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>Here’s a breakdown of 10+ trading indicators you’ll get from Hyperion AI for each of your trades: </p>
                                    <p className=" text-[#B2B2B1]"></p>
                                    <p className='text-center md:text-start  text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] lg:mb-6 md:mb-4 mb-3 font-poppins'>AI Trading Indicators
                                    </p>
                                    <p className='text-center md:text-start font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>Gain a competitive edge with Hyperion's AI trading indicator. Identify the most promising trading pairs and leverage AI-driven analysis for strategic, low-risk trades. </p>
                                    <p className='text-center md:text-start mt-3 font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal max-w-[392px]'>Here’s a breakdown of 10+ trading indicators you’ll get from Hyperion AI for each of your trades: </p>
                                    <p className=" text-[#B2B2B1]"></p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features