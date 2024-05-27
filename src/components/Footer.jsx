import logo from '../assets/images/png/footer-logo.png'
import { Facebook, Insta, Linkedin, Telegram, Twitter } from './common/Icon'

const Footer = () => {
    return (
        <>
            <div className='pt-[84px] border-t-[1px] border-[#232323]'>
                <div className='max-w-[1368px] mx-auto px-3'>
                    <div className="flex flex-wrap items-start justify-start flex-row -mx-3">
                        <div className="5/12 px-3">
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
                        <div className="7/12 flex flex-col justify-start items-baseline px-3">
                            <ul className=' flex flex-row h-[40px] items-stretch flex-wrap gap-8'>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Welcome</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Trade with AI</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Discover features</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Join community</li>
                                <li className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Get support</li>
                            </ul>
                            <p className='text-base text-[#B1B1B0] font-poppins font-normal leading-[20.8]'>Get support</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer