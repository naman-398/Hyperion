import logo from '../assets/images/webp/footer-logo.webp'
import { Facebookicon, FooterLastLineSvg, Instaicon, Linkedinicon, Telegramicon, Twittericon } from './common/Icons'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <div className=' pt-[40px] sm:pt-[84px] border-t-[1px] border-night_sky' id='footer'>
                <div className='max-w-[1409px] mx-auto px-3'>
                    <div className="flex flex-wrap items-start justify-between flex-row -mx-3">
                        <div className=" w-full md:w-1/2 xl:w-5/12 px-3">
                            <a href="#"> <img src={logo} alt="logo" className=' max-w-[249px] lg:mb-8 sm:mb-6 mb-4 mx-auto md:mx-0' /></a>
                            <p className='text-snow_drift opacity-70 text-base font-normal max-w-[548px] font-poppins leading-[20.8px] mx-auto md:mx-auto text-center md:text-start'>Curious about AI-powered trading and how it can help you up your game? Reach out to our dedicated team today and discover how Hyperion can fool-proof your future trades.
                            </p>
                            <div className='flex sm:gap-[17px] gap-3 lg:mt-12 md:mt-10 sm:mt-8 mt-4 justify-center md:justify-start'>
                                <a href="https://www.instagram.com/" className=' duration-300 hover:-translate-y-3' target='_blank'><Instaicon /></a>
                                <a href="https://www.facebook.com/" className=' duration-300 hover:-translate-y-3' target='_blank'> <Facebookicon /></a>
                                <a href="https://www.twitter.com/" className=' duration-300 hover:-translate-y-3' target='_blank'><Twittericon /></a>
                                <a href="https://www.linkedin.com/" className=' duration-300 hover:-translate-y-3' target='_blank'><Linkedinicon /></a>
                                <a href="https://www.telegram.com/" className=' duration-300 hover:-translate-y-3' target='_blank'><Telegramicon /></a>
                            </div>
                        </div>
                        <div className=" w-full md:w-1/2 xl:w-7/12 2xl:w-6/12 flex flex-row xl:flex-col mt-6 md:mt-0 md:justify-start px-3 gap-6 xl:gap-0 justify-center">
                            <ul className=' flex flex-col xl:flex-row  gap-4 sm:gap-8 md:ms-auto'>
                                <li className='text-base text-snow_drift opacity-70 font-poppins flex-nowrap flex font-normal leading-[20.8px]'> <a href="#home" className=' relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-0 after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'> Welcome</a></li>
                                <li className='text-base text-snow_drift opacity-70 font-poppins flex-nowrap flex font-normal leading-[20.8px]'> <a href="#trade" className=' relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-0 after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'> Trade with AI</a></li>
                                <li className='text-base text-snow_drift opacity-70 font-poppins flex-nowrap flex font-normal leading-[20.8px]'> <a href="#feature" className=' relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-0 after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'> Discover features</a></li>
                                <li className='text-base text-snow_drift opacity-70 font-poppins flex-nowrap flex font-normal leading-[20.8px]'> <a href="#join" className=' relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-0 after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'> Join community</a></li>
                                <li className='text-base text-snow_drift opacity-70 font-poppins flex-nowrap flex font-normal leading-[20.8px]'> <a href="#footer" className=' relative after:absolute after:w-0 after:h-[1px] after:rounded-[20px] after:bg-snow_drift after:right-0 after:bottom-[-2px] hover:after:w-full hover:after:left-0 after:duration-300'> Get support</a></li>
                            </ul>
                            <div className=' xl:mt-[84px] flex flex-col mt-auto'>
                                <a href="tel:123467890" className=' font-poppins font-normal text-base sm:text-lg leading-[23.4px] text-snow_drift  ms-auto'>+1 (0801) 590-75-66</a>
                                <a href="mailto:hyperion@gmail.com" className=' font-poppins font-normal text-base sm:text-lg leading-[23.4px] text-snow_drift pt-4 sm:pt-6 ms-auto'>hyperion@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <hr className=' w-full border-[1px] border-solid border-snow_drift_grey my-4 sm:my-8' />
                    <div className=' flex items-center justify-between pb-4 sm:pb-[33px]'>
                        <span className=' font-poppins font-normal text-xs sm:text-base leading-[19.2px] text-snow_drift opacity-50'>Copyright@{currentYear} Hyperion</span>
                        <span className=' font-poppins font-normal text-sm sm;text-base leading-[19.2px] text-snow_drift opacity-70 flex items-center gap-1 sm:gap-2'>Designed by <FooterLastLineSvg /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer