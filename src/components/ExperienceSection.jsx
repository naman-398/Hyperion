import React from 'react'
import { Chart, Recycle, Search } from './common/Icon'
import Commonbtn from './common/Commonbtn'

const ExperienceSection = () => {
    return (
        <div className=' max-w-[1409px] mt-[38px] mx-auto px-3'>
            <div className=' flex flex-row  min-h-[325px] flex-wrap lg:flex-nowrap  justify-center'>
                <div className=' w-full md:w-1/2 lg:columns-auto pb-6 md:pb-0  md:max-w-[388px] px-3 sm:px-6 md:ps-0 md:pe-6 xl:pe-12 border-b-[1px] md:border-b-0 md:border-r-[1px] border-solid border-[#F9F9F70F] md:min-h-[325px]'>
                    <div className='  w-[92px] p-[26px] rounded-[24px] border-[1px] border-solid border-[#F9F9F714] bg-[#1F1F1F8A] mx-auto md:mx-0'>
                        <Search />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[25px] sm:text-[30px] leading-[30px] font-poppins fw-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Struggling with extensive research on tokens?</p>
                    <p className=' font-poppins fw-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start'>Hyperion-AI streamlines the process for you.</p>
                </div>
                <div className=' w-full md:w-1/2 py-6 md:py-0 lg:columns-auto md:max-w-[436px] px-3 sm:px-6 xl:px-12 lg:border-r-[1px] border-b-[1px] border-solid md:border-b-0 border-[#F9F9F70F] md:min-h-[325px]'>
                    <div className='  w-[92px] p-[26px] rounded-[24px] border-[1px] border-solid border-[#F9F9F714] bg-[#1F1F1F8A] mx-auto md:mx-0'>
                        <Chart />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[25px] sm:text-[30px] leading-[30px] font-poppins fw-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Feeling overwhelmed by charts, graphs, and reports?</p>
                    <p className=' font-poppins fw-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start'>Let Hyperion-AI handle the heavy lifting.</p>
                </div>
                <div className=' w-full lg:columns-auto md:max-w-[544px] px-3 sm:px-6 md:pe-0 md:ps-6 xl:ps-12  md:min-h-[325px] mt-6 lg:mt-0'>
                    <div className='  w-[92px] p-[26px] rounded-[24px] border-[1px] border-solid border-[#F9F9F714] bg-[#1F1F1F8A] mx-auto md:mx-0'>
                        <Recycle />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-text_gradient1 tracking-[-2%] text-[25px] sm:text-[30px] leading-[30px] font-poppins fw-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Finding it difficult to consolidate scattered research into actionable insights?</p>
                    <p className=' font-poppins fw-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start'>Hyperion-AI compiles real-time data into easy-to-implement reports, guiding your trading decisions.</p>
                </div>
            </div>
            <div className=' mt-[64px] w-full p-[25px] sm:p-[64px] xl:p-[64px_84px] rounded-[24px] bg-[#1010108A] flex items-center flex-col lg:flex-row justify-between'>
                <p className=' font-poppins fw-normal text-[20px] sm:text-[24px]  xl:text-[28px] leading-[28px] sm:leading-[36.4px] text-snow_drift opacity-70 lg:max-w-[795px] text-center lg:text-start'>Experience the power of Hyperion-AI, developed for the perps and futures market, and trade with confidence</p>
                <span className=' mt-4 lg:mt-0 lg:ms-3'>
                    <Commonbtn/>
                </span>
            </div>
        </div>
    )
}

export default ExperienceSection