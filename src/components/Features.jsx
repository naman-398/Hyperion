import { featuredata } from "./common/Helper"

const Features = () => {
    return (
        <>
            <div className='xl:mt-140 lg:mt-[100px] md:mt-[80px] mt-14 sm:mt-16 px-3'>
                <h2 className='text-center mb-[84px] font-poppins text_gredient1 text-transparent bg-clip-text font-medium text-[30px] sm:text-[38px] md:text-[44px] lg:text-[56px] md:leading-[56px] leading-[40px] sm:leading-[46px]'>The Hyperion Features
                </h2>
                <div className='max-w-[1368px] mx-auto'>
                    <div className="flex ">
                        {featuredata.map((obj, index) => {
                            return (
                                <div className={`${index == 0 ? "border-r-[1px] w-[32.2%] border-r-[#1E1E1F] pr-12" : index == 1 ? "border-r-[1px] px-12 border-r-[#1E1E1F]" : index == 2 ? "pl-12" : ""}`}>
                                    <img src={obj.img} alt="img" className="w-[392px]" />
                                    <p className=' text_gredient1 text-transparent bg-clip-text font-medium text-[24px] md:text-[28px] lg:text-[30px] leading-[30px] font-poppins'>{obj.title}</p>
                                    <p className='font-poppins text-snow_drift opacity-70 text-[14px] md:text-[16px] leading-[20.8px] font-normal'>{obj.description}</p>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features