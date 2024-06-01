import { featuredata } from "./common/Helper"
import graphimg from '../assets/images/webp/integration.webp'
import graphimg2 from '../assets/images/webp/trading-indicaters.webp'
import tik from '../assets/images/svg/tik.svg'
const Features = () => {
    return (
        <>
            <div className='xl:mt-[140px] lg:mt-24 md:mt-20 mt-14 sm:mt-16 px-3' id='feature'>
                <h2 className='text-center xl:mb-[84px] lg:mb-[70px] md:mb-[55px] mb-10 font-poppins grey_gradient_to_r text-transparent bg-clip-text font-medium text-2xl 576:text-3xl sm:text-4xl md:text-xxl lg:text-5xl xl:text-vxl md:leading-[56px] leading-[36px] 576:leading-[40px] sm:leading-[46px]'>The Hyperion Features
                </h2>
                <div className='max-w-[1368px] mx-auto'>
                    <div className="flex flex-row border-b-[1px] pb-12 border-b-dark_voilet flex-wrap">
                        {featuredata.map((obj, index) => {
                            return (
                                <div className={`${index == 0 ? " max-[1200px]:flex items-center justify-center min-[1200px]:w-[32.3%] w-full md:w-[50%]  md:pr-3" : index == 1 ? "md:border-l-[1px] border-l-dark_voilet min-[1200px]:border-r-[1px] mt-12 md:mt-0 flex md:pl-3 min-[1200px]:px-3 items-center justify-center min-[1200px]:w-[35.4%] w-full md:w-[50%] border-r-dark_voilet" : index == 2 ? " min-[1200px]:w-[32.3%] w-full min-[1200px]:pl-3 flex items-center justify-center max-[1200px]:mt-12 min-[1200px]:items-end flex-col" : ""} h-full`}>
                                    <div className=" min-[1200px]:max-w-[392px] max-w-[450px] group">
                                        <div className=" overflow-hidden rounded-[32px]">
                                            <img src={obj.img} alt="img" className="w-[392px] h-[294px] group-hover:scale-110 duration-300" />
                                        </div>
                                        <p className='text-center md:text-start  grey_gradient_to_r text-transparent bg-clip-text font-medium text-2xl md:text-xlg lg:text-3xl leading-[30px] lg:mt-12 mt-5 md:mt-9 lg:pb-6 pb-3 font-poppins'>{obj.title}</p>
                                        <p className='text-center md:text-start font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal max-w-[392px]'>{obj.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=" flex flex-col-reverse min-[1380px]:flex-row flex-wrap pt-12">
                        <div className="max-[1380px]:mt-12 max-[1380px]:flex items-center justify-center min-[1380px]:w-[32.3%] h-full ">
                            <div className=" max-w-[392px] aiDrivencard">
                                <p className='text-center min-[1380px]:text-start  grey_gradient_to_r text-transparent bg-clip-text font-medium text-2xl md:text-xlg lg:text-3xl leading-[30px] lg:pb-6 pb-3 font-poppins'>Integrations</p>
                                <p className='text-center min-[1380px]:text-start font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal max-w-[392px]'>GMX, SYNTHENTIX, AGGR TRADE, 0x Protocol, TradingView </p>
                                <div className=" max-w-[392px] xl:mt-12 lg:mt-10 md:mt-8 mt-6 max-h-[294px] overflow-hidden rounded-3xl border-[1px] border-solid  border-snow_drift_light"><img src={graphimg} alt="img" className=" w-full h-full aiDrivenimg duration-300 " /></div>
                            </div>
                        </div>
                        <div className="min-[1380px]:w-[67.7%] aiDrivencard min-[1380px]:pl-12 min-[1380px]:border-l-[1px] border-l-dark_voilet">
                            <div className=" flex flex-col lg:flex-row md:gap-10 gap-6 items-center justify-center lg:gap-12">
                                <div className="w-full max-w-[392px] max-h-[294px] md:max-h-[370px] lg:min-h-[520px] h-full overflow-hidden rounded-3xl border-[1px] border-solid  border-snow_drift_light"><img src={graphimg2} alt="img" className=" lg:min-h-[520px] w-full h-full aiDrivenimg duration-300 " /></div>
                                <div className=" flex flex-col max-w-[600px]">
                                    <p className='text-center lg:text-start  grey_gradient_to_r text-transparent bg-clip-text font-medium text-2xl md:text-xlg lg:text-3xl leading-[30px] lg:pb-6 md:pb-4 pb-3 font-poppins'>AI Trading Indicators
                                    </p>
                                    <p className='text-center lg:text-start font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Gain a competitive edge with Hyperion's AI trading indicator. Identify the most promising trading pairs and leverage AI-driven analysis for strategic, low-risk trades. </p>
                                    <p className='text-center lg:text-start mt-3 font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Here’s a breakdown of 10+ trading indicators you’ll get from Hyperion AI for each of your trades: </p>
                                    <p className="text-snow_drift leading-[23.4px] text-base lg:text-lg lg:mt-10 md:mt-6 mt-4 xl:mt-12 font-semibold mb-6">Brief description of current market sentiment and opinion</p>
                                    <div className=" flex items-start justify-start gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Real Time funding rates</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Oracle Pricing</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Oscillators, Moving Averages, Pivots and their direct relevancy + impact to your potential trade</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Real Time Order Book</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Market Sentiment</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Total Score for a short/long position</p>
                                    </div>
                                    <div className=" flex items-start justify-start mt-3 gap-[6px]">
                                        <img src={tik} alt="imgtik" />
                                        <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Closing Statements / Remarks + trade suggestions</p>
                                    </div>
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