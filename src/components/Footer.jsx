import React from 'react'
import footerlogo from "../assets/images/webp/Logo.webp";
import { Facebook, Instagram, Linkedin, Telegram, Twitter } from './common/Icon';
const Footer = () => {
    return (
        <div className=' pt-[84px] '>
            <div className=' max-w-[1409px] mx-auto px-3'>
                <div className=' -mx-3 flex-wrap flex-row flex'>
                    <div className=' w-5/12 px-3'>
                        <a href="#"> <img src={footerlogo} alt="footerlogo" className=' max-h-[48px] max-w-[245.42px' /></a>
                        <p className=' text-base font-poppins text-snow_drift opacity-70 leading-[20.8px] mt-8'>Curious about AI-powered trading and how it can help you up your game? Reach out to our dedicated team today and discover how Hyperion can fool-proof your future trades.
                        </p>
                        <div className=' flex items-center gap-[23px] pt-12'>
                        <a href=""><Instagram/></a>
                        <a href=""><Facebook/></a>
                        <a href=""><Twitter/></a>
                        <a href=""><Linkedin/></a>
                        <a href=""><Telegram/></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer