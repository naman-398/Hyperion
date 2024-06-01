import React from 'react'
import { Charticon, Recycleicon, Searchicon } from './common/Icons'
import PrimaryButton from './common/PrimaryButton'

const ExperienceSection = () => {
    return (
        <div className=' max-w-[1409px] mt-[38px] mx-auto px-3 relative z-[2]'>
            <div className=' flex flex-row  min-h-[325px] flex-wrap lg:flex-nowrap  justify-center'>
                <div className=' experience-card group w-full md:w-1/2 lg:w-1/3 xl:columns-auto pb-6 md:pb-0  max-w-[480px] md:max-w-[388px] px-3   xl:pe-12 border-b-[1px] md:border-b-0 md:border-r-[1px] border-solid border-snow_drift_night md:min-h-[325px]'>
                    <div className=' w-[75px] group-hover:bg-lighting_yellow duration-300 sm:w-[92px] p-[16px] sm:p-[26px] rounded-3xl border-[1px] border-solid border-snow_drift_light bg-light_red mx-auto md:mx-0'>
                        <Searchicon />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-grey_gradient tracking-[-2%] text-2xl md:text-xlg lg:text-3xl leading-[30px] font-poppins font-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Struggling with extensive research on tokens?</p>
                    <p className=' font-poppins font-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start lg:max-w-[293px]'>Hyperion-AI streamlines the process for you.</p>
                </div>
                <div className=' experience-card group w-full md:w-1/2 lg:w-1/3 py-6 md:py-0 xl:columns-auto max-w-[480px] md:max-w-[436px] px-3 xl:[47.5px_0] lg:border-r-[1px] border-b-[1px] border-solid md:border-b-0 border-snow_drift_night md:min-h-[325px]'>
                    <div className=' w-[75px] group-hover:bg-lighting_yellow duration-300 sm:w-[92px] p-[16px] sm:p-[26px] rounded-3xl border-[1px] border-solid border-snow_drift_light bg-light_red mx-auto md:mx-0'>
                        <Charticon />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-grey_gradient tracking-[-2%] text-2xl md:text-xlg lg:text-3xl leading-[30px] font-poppins font-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Feeling overwhelmed by charts, graphs, and reports?</p>
                    <p className=' font-poppins font-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start'>Let Hyperion-AI handle the heavy lifting.</p>
                </div>
                <div className=' experience-card2 group w-full lg:w-1/3 xl:columns-auto md:max-w-[544px] max-w-[480px] ps-3 xl:ps-12  md:min-h-[325px] mt-6 lg:mt-0'>
                    <div className=' w-[75px] group-hover:bg-lighting_yellow duration-300 sm:w-[92px] p-[16px] sm:p-[26px] rounded-3xl border-[1px] border-solid border-snow_drift_light bg-light_red mx-auto md:mx-0'>
                        <Recycleicon />
                    </div>
                    <p className=' text-transparent bg-clip-text bg-grey_gradient tracking-[-2%] text-2xl md:text-xlg lg:text-3xl leading-[30px] font-poppins font-medium pb-3 mt-3 sm:mt-6 md:mt-12 sm:pb-6 text-center md:text-start '>Finding it difficult to consolidate scattered research into actionable insights?</p>
                    <p className=' font-poppins font-normal  opacity-70 leading-5 text-snow_drift text-center md:text-start'>Hyperion-AI compiles real-time data into easy-to-implement reports, guiding your trading decisions.</p>
                </div>
            </div>
            <div className=' mt-[30px] sm:mt-16 w-full p-[25px] sm:p-16 xl:p-[64px_84px] rounded-3xl bg-img-experience1 bg-[url(./assets/images/webp/power-experiencebg.webp)] bg_size_100 bg-center bg-no-repeat flex items-center flex-col lg:flex-row justify-between'>
                <p className=' font-poppins font-normal text-xl sm:text-2xl  xl:text-xlg leading-[28px] sm:leading-[36.4px] text-snow_drift opacity-70 lg:max-w-[795px] text-center lg:text-start'>Experience the power of Hyperion-AI, developed for the perps and futures market, and trade with confidence</p>
                <span className=' mt-4 lg:mt-0 lg:ms-3'>
                    <PrimaryButton />
                </span>
            </div>
        </div>
    )
}

export default ExperienceSection