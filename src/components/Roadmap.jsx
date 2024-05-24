import trade1 from '../assets/images/webp/roadmap-img1.webp'
import trade2 from '../assets/images/webp/roadmap-img2.webp'
import trade3 from '../assets/images/webp/roadmap-img3.webp'
import web from '../assets/images/webp/white-bg-web.webp'
import web2 from '../assets/images/png/white-bg-web2.png'
import icon1 from '../assets/images/svg/hand-shake.svg'
import icon2 from '../assets/images/svg/headphone.svg'
import icon3 from '../assets/images/svg/market-up.svg'
import icon4 from '../assets/images/svg/icon-left-border-img.svg'

const Roadmap = () => {

    return (
        <>
            <div className=' md:mt-[100px] mt-[70px] lg:mt-[140px] bg-[#0B0B0B] overflow-hidden'>
                <div className='max-w-[1368px] px-3 mx-auto'>
                    <div className="flex flex-col gap-[48px] md:gap-[70px] lg:gap-[100px] xl:gap-[160px] timeline_container relative">
                        <div className='timeline_line w-[2px] h-full absolute md:left-[8%] lg:left-0 min-[1440px]:left-0 left-1 bg-lighting_yellow timeline_blur shadow-[0px_0px_29px_1px_#F2C922]'>
                        </div>
                        <div className=' flex flex-wrap pt-[60px] lg:pt-[50px] xl:pt-0 mx-[-12px] flex-col lg:flex-row relative items-center z-10 sm:pl-[50px] pl-8'>
                            <img src={web2} alt="web-img" aria-label='bg web in roadmap' className='absolute max-w-[1440px] z-[-1] top-[-20%] left-0' />
                            <div className=' md:w-10/12 w-full lg:w-6/12 px-3'>
                                <div className='relative max-w-[64px]'><img src={icon1} alt="icon" />
                                    <img src={icon4} alt="icon" aria-label='border left for icon' className=' absolute left-[-3px] top-[25%] timeline_blur' />
                                    <div className=' w-[50px] bg-lighting_yellow h-[1px] left-[-27px] sm:left-[-44px] timeline_blur shadow-[0_0_20px_1px_#F2C922] z-[-1] md:left-[-50px] absolute top-[50%]  xl:[top-7%]'></div>
                                </div>
                                <p className=' font-poppins text_gredient1 mt-6 text-transparent bg-clip-text font-medium text-[36px] sm:text-[40px] md:text-[40px] lg:text-[56px] md:leading-[45px] lg:leading-[56px] leading-[40px] sm:leading-[46px]  max-w-[500px]'>Join the Hyperion family</p>
                                <p className=' mt-4 md:mt-6 font-poppins text-snow_drift max-w-[618px] opacity-70 text-[16px] sm:text-[18px] leading-[23.4px] font-normal'>Embrace the Hyperion Revolution by joining a global community of new and seasoned traders who support each other. Share your wins, insights, and strategies, seek expert opinions, get feedback, and collaborate with like-minded traders.</p>
                            </div>
                            <div className="md:w-10/12 w-full lg:w-6/12 px-3">
                                <img src={trade1} alt="img-trade" aria-label='roadmap img trade' className=' mt-5 mt-lg-0 w-full max-w-[590px] min-[1400px]:translate-x-[60px]' />
                            </div>
                        </div>
                        <div className=' flex flex-wrap mx-[-12px] flex-col lg:flex-row relative items-center z-10 sm:pl-[50px] pl-8'>
                            <img src={web} alt="web-img" aria-label='bg web in roadmap' className='absolute max-w-[1440px] h-[929px] z-[-1] top-[-30%] right-0' />
                            <div className=' md:w-10/12 w-full lg:w-6/12 px-3'>
                                <div className='relative max-w-[64px]'><img src={icon2} alt="icon" />
                                    <img src={icon4} alt="icon" aria-label='border left for icon' className=' absolute left-[-3px] top-[25%] timeline_blur' />
                                    <div className=' w-[50px] bg-lighting_yellow timeline_blur shadow-[0_0_20px_1px_#F2C922] h-[1px] left-[-27px] sm:left-[-44px] z-[-1] md:left-[-50px] absolute top-[50%]  xl:[top-7%]'></div>
                                </div>
                                <p className=' font-poppins text_gredient1 mt-6 text-transparent bg-clip-text font-medium text-[36px] sm:text-[40px] md:text-[40px] lg:text-[56px] md:leading-[45px] lg:leading-[56px] leading-[40px] sm:leading-[46px] max-w-[594px]'>Expert support, every step of the way</p>
                                <p className=' mt-4 md:mt-6 font-poppins text-snow_drift max-w-[618px] opacity-70 text-[16px] sm:text-[18px] leading-[23.4px] font-normal'>At Hyperion, our team of experts is dedicated to your success. Get personalized support  and guidance whenever you need it — whether it's about platform features or refining your trading strategy.</p>
                            </div>
                            <div className="md:w-10/12 w-full lg:w-6/12 px-3">
                                <img src={trade2} alt="img-trade" aria-label='roadmap img trade' className=' w-full lg:max-w-[590px] ml-auto' />
                            </div>
                        </div>
                        <div className=' flex flex-wrap mx-[-12px] flex-col lg:flex-row relative items-center z-10 sm:pl-[50px] pl-8'>
                            <img src={web2} alt="web-img" aria-label='bg web in roadmap' className='absolute max-w-[1440px] z-[-1] top-[-20%] left-0' />
                            <div className=' md:w-10/12 w-full lg:w-6/12 px-3'>
                                <div className='relative max-w-[64px]'><img src={icon3} alt="icon" />
                                    <img src={icon4} alt="icon" aria-label='border left for icon' className=' absolute left-[-3px] top-[25%] timeline_blur' />
                                    <div className=' w-[50px] bg-lighting_yellow timeline_blur shadow-[0_0_20px_1px_#F2C922] h-[1px] left-[-27px] sm:left-[-44px] z-[-1] md:left-[-50px] absolute top-[50%]  xl:[top-7%]'></div>
                                </div>
                                <p className=' font-poppins text_gredient1 mt-6 text-transparent bg-clip-text font-medium  max-w-[478px] text-[36px] sm:text-[40px] md:text-[40px] lg:text-[56px] md:leading-[45px] lg:leading-[56px] leading-[40px] sm:leading-[46px]'>Ready to trade like a pro?</p>
                                <p className=' mt-4 md:mt-6 font-poppins text-snow_drift max-w-[618px] opacity-70 text-[16px] sm:text-[18px] leading-[23.4px] font-normal'>Up your trading game with Hyperion. Join thousands of traders already benefiting from our platform and start your AI-powered Perps Trading journey today.</p>
                            </div>
                            <div className="md:w-10/12 w-full lg:w-6/12 px-3">
                                <img src={trade3} alt="img-trade" aria-label='roadmap img trade' className=' w-full max-w-[639px] lg:ml-auto min-[1457px]:translate-x-[53px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap