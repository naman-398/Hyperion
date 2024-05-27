import React from 'react'

const Commonbtn = (props) => {
  return (
    <button className=' bg-yellow_gradient mx-auto flex justify-center items-center max-w-[206px] lg:mx-0 py-[22px] w-[206px] border-[1px] overflow-hidden relative hover:brightness-100 duration-500 group  border-[#FFFFFF29]  rounded-[100px] font-poppins font-medium  text-base leading-5 text-night'>
      <span className=' -top-[150%] left-0 bg-yellow_gradient text-nowrap inline-flex w-80 h-[5px] group-hover:top-[150%] shadow-yellow-400 duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] opacity-50 absolute '></span>
      Start trading
    </button>
  )
}

export default Commonbtn