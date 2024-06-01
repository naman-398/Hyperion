

import dashboard from '../assets/images/webp/superior-interface-dashboard-img.webp'
import dashboard2 from '../assets/images/webp/top-grade-dashboard.webp'

const AboutHypesec = () => {
    return (
        <>
            <div className=' lg:mt-24 md:mt-[70px] mt-14 sm:mt-16 xl:mt-[140px]'>
                <div className=' max-w-[1368px] px-3 mx-auto'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <h2 className='mx-auto md:mx-0 text-center md:text-start  font-poppins text-grey_gradient text-transparent bg-clip-text font-medium text-2xl 576:text-3xl sm:text-4xl md:text-xxl lg:text-5xl xl:text-vxl md:leading-[56px] leading-[36px] 576:leading-[40px] sm:leading-[46px] max-w-[500px]'>About Hyperion</h2>
                        <div className='flex flex-col gap-2 lg:gap-3'>
                            <p className='mx-auto md:mx-0 text-center md:text-start  mt-3 sm:mt-4 font-poppins text-snow_drift max-w-[618px] opacity-70 text-base lg:text-lg leading-[23.4px] font-normal'>We're not just setting trends in crypto trading; we're reshaping the entire landscape. We understand the evolving needs of modern traders, and our platform reflects that understanding.</p>
                            <p className='mx-auto md:mx-0 text-center md:text-start font-poppins text-snow_drift max-w-[618px] opacity-70 text-base lg:text-lg leading-[23.4px] font-normal'>Hyperion’s commitment to innovation is evident in every aspect of the platform.</p>
                        </div>
                    </div>
                </div>
                <div className='  overflow-x-scroll overflow-y-hidden xscollbar'>
                    <div className=' ml-auto pl-3 md:mt-14 mt-10 sm:mt-12 lg:mt-16 w-[1550px] md:w-[1800px] lg:w-[1980px] xl:ml-[calc((100%-1352px)/2)] flex flex-row gap-8 overflow_box'>
                        <div className='relative bg-[url(../src/assets/images/webp/about-box-bg.webp)] bg_size_100 bg-no-repeat bg-center md:h-[400px] h-[300px] sm:[350px] lg:h-[513px] z-10 w-[750px] md:w-[850px] lg:w-[964px] flex items-center justify-center'>
                            <img src={dashboard} alt="dashboard-img" className=' absolute bottom-[1px] w-[241px] md:w-[330px] lg:w-[415px] rounded-bl-[20px] md:rounded-bl-[25px] lg:rounded-bl-[31px] z-[-1] left-[1px]' />
                            <div className=' ml-auto mr-8 md:mr-10 lg:mr-12 max-w-[440px]'>
                                <p className=' text-grey_gradient text-transparent bg-clip-text font-medium text-2xl md:text-xlg lg:text-3xl leading-[30px] font-poppins'>Superior interface</p>
                                <p className='font-poppins mt-3 sm:mt-4 md:mt-6 text-snow_drift max-w-[618px] opacity-70 text-base md:text-lg leading-[23.4px] font-normal'>Say goodbye to clunky interfaces and hello to intuitive design.</p>
                                <div className=' border-l-[1px] ps-6 border-lighting_yellow md:mt-9 mt-5 sm:mt-8 lg:mt-12'>
                                    <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Our platform is engineered with the modern trader in mind, ensuring seamless navigation and effortless execution of trades.</p>
                                    <p className='font-poppins mt-1 md:mt-3 text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Every click and every interaction is purposefully crafted to uplift your trading journey.</p>
                                </div>
                            </div>
                        </div>
                        <div className='relative bg-[url(../src/assets/images/webp/about-box-bg.webp)] bg_size_100 bg-no-repeat bg-center md:h-[400px] h-[300px] sm:[350px] lg:h-[513px] z-10 w-[750px] md:w-[850px] lg:w-[964px] flex items-center justify-center'>
                            <img src={dashboard2} alt="dashboard-img" className=' absolute bottom-[1px] w-[241px] md:w-[330px] lg:w-[415px] rounded-bl-[20px] md:rounded-bl-[25px] lg:rounded-bl-[31px] z-[-1] left-[1px]' />
                            <div className=' ml-auto mr-8 md:mr-10 lg:mr-12 max-w-[440px]'>
                                <p className=' text-grey_gradient text-transparent bg-clip-text font-medium text-2xl md:text-xlg lg:text-3xl leading-[30px] font-poppins'>Top-Grade performance</p>
                                <p className='font-poppins mt-3 sm:mt-4 md:mt-6 text-snow_drift max-w-[618px] opacity-70 text-base md:text-lg leading-[23.4px] font-normal'>Speed matters in the world of trading, and we deliver nothing short of lightning-fast performance.</p>
                                <div className=' border-l-[1px] ps-6 border-lighting_yellow md:mt-9 mt-5 sm:mt-8 lg:mt-12'>
                                    <p className='font-poppins text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>Whether you're executing a trade or analyzing market trends, our platform's agility ensures you always stay one step ahead.</p>
                                    <p className='font-poppins mt-1 md:mt-3 text-snow_drift opacity-70 text-sm md:text-base leading-[20.8px] font-normal'>With Hyperion, lagging behind is simply not an option!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHypesec
