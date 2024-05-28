import logo from '../assets/images/png/footer-logo.png'
import { Facebook, FooterLastLineSvg, Insta, Linkedin, Telegram, Twitter } from './common/Icon'

const Footer = () => {
    return (
        <>
            <div className='pt-[84px] border-t-[1px] border-[#232323]'>
                <div className='max-w-[1409px] mx-auto px-3'>
                    <div className="flex flex-wrap items-start justify-between flex-row -mx-3">
                        <div className="w-5/12 px-3">
                            <img src={logo} alt="logo" className=' max-w-[249px] lg:mb-8 mb-6' />
                            <p className='text-[#B1B1B0] text-base font-normal max-w-[548px] font-poppins leading-[20.8px]'>Curious about AI-powered trading and how it can help you up your game? Reach out to our dedicated team today and discover how Hyperion can fool-proof your future trades.
                            </p>
                            <div className='flex sm:gap-[17px] gap-3 lg:mt-12 md:mt-10 sm:mt-8 mt-6'>
                                <a href="https://www.instagram.com/"><Insta /></a>
                                <a href="https://www.facebook.com/"> <Facebook /></a>
                                <a href="https://www.twitter.com/"><Twitter /></a>
                                <a href="https://www.linkedin.com/"><Linkedin /></a>
                                <a href="https://www.telegram.com/"><Telegram /></a>
                            </div>
                        </div>
                        <div className="w-6/12 flex flex-col justify-start px-3">
                            <ul className=' flex flex-row gap-8 '>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8px]'>Welcome</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8px]'>Trade&nbsp;with&nbsp;AI</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8px]'>Discover&nbsp;features</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8px]'>Join&nbsp;community</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8px]'>Get&nbsp;support</li>
                            </ul>
                            <a href="tel:123467890" className=' font-poppins font-normal text-lg leading-[23.4px] text-snow_drift mt-[84px] ms-auto'>+1 (0801) 590-75-66</a>
                            <a href="mailto:hyperion@gmail.com" className=' font-poppins font-normal text-lg leading-[23.4px] text-snow_drift mt-6 ms-auto'>hyperion@gmail.com</a>
                        </div>
                    </div>
                    <hr className=' w-full border-[1px] border-solid border-[#F9F9F70A] my-8' />
                    <div className=' flex items-center justify-between pb-[33px]'>
                        <span className=' font-poppins font-normal text-base opacity-50 leading-[19.2px] text-[#F9F9F7B2]'>Copyright@2024 Hyperion</span>
                        <span className=' font-poppins font-normal text-base opacity-50 leading-[19.2px] text-[#F9F9F7B2] flex items-center gap-2'>Designed by <FooterLastLineSvg /></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer