import dashboard from '../assets/images/webp/Dashboard-img.webp'
import dashboard2 from '../assets/images/webp/Dashboard-img2.webp'
import vector from '../assets/images/webp/about-vector.png'
const Abouthype = () => {
    return (
        <>
            <div className=' lg:mt-[100px] md:mt-[70px] mt-14 sm:mt-16 xl:mt-[140px]'>
                <div className=' max-w-[1368px] px-3 mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <h2 className=' font-poppins text_gredient1 text-transparent bg-clip-text font-medium text-[30px] sm:text-[38px] md:text-[44px] lg:text-[56px] md:leading-[56px] leading-[40px] sm:leading-[46px]  max-w-[500px]'>About Hyperion</h2>
                        <div className=' flex flex-col gap-2 lg:gap-3'>
                            <p className='mt-3 sm:mt-4 font-poppins text-snow_drift max-w-[618px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>We're not just setting trends in crypto trading; we're reshaping the entire landscape. We understand the evolving needs of modern traders, and our platform reflects that understanding.</p>
                            <p className='font-poppins text-snow_drift max-w-[618px] opacity-70 text-[16px] lg:text-[18px] leading-[23.4px] font-normal'>Hyperion’s commitment to innovation is evident in every aspect of the platform.</p>
                        </div>
                    </div>

                </div>
                <div className='  overflow-x-scroll overflow-y-hidden'>
                    <div className=' ml-auto pl-3 md:mt-14 mt-10 sm:mt-12 lg:mt-16 w-[1550px] md:w-[1800px] lg:w-[1980px] xl:ml-[calc((100%-1352px)/2)] flex flex-row gap-8 overflow_box'>
                        <div className='relative box_about bg-no-repeat bg-center md:h-[400px] h-[300px] sm:[350px] lg:h-[513px] z-10 w-[750px] md:w-[850px] lg:w-[964px] flex items-center justify-center'>
                            <img src={dashboard} alt="dashboard-img" className=' absolute bottom-[1px] max-w-[241px] md:max-w-[330px] lg:max-w-[415px] rounded-bl-[20px] md:rounded-bl-[25px] lg:rounded-bl-[31px] z-[-1] left-[1px]' />
                            <div className=' ml-auto mr-8 md:mr-10 lg:mr-12 max-w-[440px]'>
                                <p className=' text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] font-poppins'>Superior interface</p>
                                <p className='font-poppins mt-3 sm:mt-4 md:mt-6 text-snow_drift max-w-[618px] opacity-70 text-[16px] md:text-[18px] leading-[23.4px] font-normal'>Say goodbye to clunky interfaces and hello to intuitive design.</p>
                                <div className=' border-l-[1px] ps-6 border-[#F2C922] md:mt-9 mt-5 sm:mt-8 lg:mt-12'>
                                    <p className='font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal'>Our platform is engineered with the modern trader in mind, ensuring seamless navigation and effortless execution of trades.</p>
                                    <p className='font-poppins mt-1 md:mt-3 text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal'>Every click and every interaction is purposefully crafted to uplift your trading journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative box_about bg-no-repeat bg-center md:h-[400px] h-[300px] sm:[350px] lg:h-[513px] z-10 w-[750px] md:w-[850px] lg:w-[964px] flex items-center justify-center'>
                            <img src={dashboard2} alt="dashboard-img" className=' absolute bottom-[1px] max-w-[241px] md:max-w-[330px] lg:max-w-[415px] rounded-bl-[20px] md:rounded-bl-[25px] lg:rounded-bl-[31px] z-[-1] left-[1px]' />
                            <div className=' ml-auto mr-8 md:mr-10 lg:mr-12 max-w-[440px]'>
                                <p className=' text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] font-poppins'>Top-Grade performance</p>
                                <p className='font-poppins mt-3 sm:mt-4 md:mt-6 text-snow_drift max-w-[618px] opacity-70 text-[16px] md:text-[18px] leading-[23.4px] font-normal'>Speed matters in the world of trading, and we deliver nothing short of lightning-fast performance.</p>
                                <div className=' border-l-[1px] ps-6 border-[#F2C922] md:mt-9 mt-5 sm:mt-8 lg:mt-12'>
                                    <p className='font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal'>Whether you're executing a trade or analyzing market trends, our platform's agility ensures you always stay one step ahead.</p>
                                    <p className='font-poppins mt-1 md:mt-3 text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal'>With Hyperion, lagging behind is simply not an option!</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Abouthype