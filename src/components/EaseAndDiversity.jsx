import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bitcoin, Cardano, Ethereum, Litecoin, Solana, Tether, Toncoin, Tron, Usdc, Xrp } from './common/Icon'
gsap.registerPlugin(ScrollTrigger);
const EaseAndDiversity = () => {
  useEffect(() => {
    const rows = document.querySelectorAll('.crypto-row');

    gsap.fromTo(rows[0], { y: 0 }, {
      y: 200,
      scrollTrigger: {
        trigger: rows[0],
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo(rows[1], { y: 0 }, {
      y: -200,
      scrollTrigger: {
        trigger: rows[1],
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.fromTo(rows[2], { y: 0 }, {
      y: 200,
      scrollTrigger: {
        trigger: rows[2],
        start: 'top center',
        end: 'bottom top',
        scrub: true,
      }
    });
  }, []);
  return (
    <div className=' px-3 pt-12 lg:pt-0' id='trade'>
      <div className=' rounded-[48px] max-w-[1468px] bg-[url(./assets/images/webp/Section2bg.webp)] bg-center bg-cover relative z-[1] md:bg-100% bg-no-repeat mx-auto  p-[0_20px_20px_20px] sm:p-[0_30px_30px_30px] lg:p-[0_30px] xl:p-[0_64px_0_84px] overflow-hidden'>
        <div className=' flex flex-wrap flex-row -mx-3 items-center'>
          <div className=' w-full lg:w-1/2 px-3'>
            <div className='flex gap-[15px] xl:gap-[38.24px] lg:max-h-[744px] overflow-hidden justify-center lg:justify-start'>
              <div className='crypto-row flex flex-col gap-[15px] lg:gap-[34px] h-100 my-auto max-w-[191.8px] w-full'>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Solana />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Solana</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Ethereum />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Ethereum</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Litecoin />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Litecoin</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Cardano />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Cardano</p>
                </div>
              </div>
              <div className='crypto-row flex flex-col gap-[15px] lg:gap-[34px] max-w-[191.8px] w-full'>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Tether />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Tether</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Bitcoin />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Bitcoin</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Xrp />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>XRP</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[140px] sm:min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Cardano />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift -mt-4 sm:mt-0'>Cardano</p>
                </div>
              </div>
              <div className='crypto-row sm:flex flex-col gap-[15px] lg:gap-[34px] h-100 my-auto max-w-[191.8px] w-full hidden'>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Toncoin />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift'>Toncoin</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Usdc />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift'>USDC</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Tron />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift'>TRON</p>
                </div>
                <div className='rounded-[12.75px] bg-[#191A1B3B] border-[1px] border-[#FFFFFF0A] border-solid min-h-[191.8px] max-w-[191.8px] flex-col flex items-center justify-center '>
                  <Litecoin />
                  <p className='opacity-70 font-poppins font-normal text-[21.24px] leading-[27.61px] text-snow_drift'>Litecoin</p>
                </div>
              </div>
            </div>
          </div>
          <div className=' w-full lg:w-1/2 px-3 pt-6 lg:pt-0'>
            <div className=' max-w-[576px] lg:me-0 mx-auto lg:ms-auto lg:h-[578px] flex flex-col justify-between '>
              <div className=' font-poppins'>
                <h2 className=' font-medium text-[32px] 576:text-[45px] sm:text-[50px]  md:text-[56px] leading-[32px] 576:leading-[45px] sm:leading-[50px] md:leading-[56px] text-transparent bg-clip-text bg-text_gradient1 pb-3 sm:pb-6 tracking-[-2%] text-center lg:text-start'>Ease and diversity in trading</h2>
                <p className=' font-normal text-base sm:text-lg leading-[23.4px] text-snow_drift opacity-70 text-center lg:text-start mb-3 sm:mb-6'>At Hyperion, we harness the power of AI to make perps trading effortless, efficient, and exciting. Hyperion equips you with everything necessary to grasp the your potential trades thoroughly, make a completely informed trading decision, and execute the trade in seconds.
                </p>
              </div>
              <div>
                <div className=' border-l-[1px] border-solid border-[#F2C922] ps-6'>
                  <p className=' font-poppins font-normal text-base  sm:text-lg leading-[23.4px] text-snow_drift opacity-70 text-center lg:text-start'>We've built a trader-friendly interface for you that's simple to use and easy to understand</p>
                  <p className=' font-poppins font-normal text-base  sm:text-lg leading-[23.4px] text-snow_drift opacity-70 mt-3 text-center lg:text-start'>Plus, we offer over 70 tokens and pairs to trade, giving you plenty of options to trade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EaseAndDiversity