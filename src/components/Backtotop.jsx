import React, { useState } from 'react'
import { Backtotopicon } from './common/Icon';


const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
});
  return (
    <div>
    <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed shadow-[0px_0px_16px_1px_#F2C922] rounded-full animate-bounce bottom-[20px] right-[20px] z-[99]`}
    onClick={scrollToTop}
    style={{ display: isVisible ? 'block' : 'none',}} >
        <div className=' p-[10px] 576:p-[15px] rounded-full bg-yellow_gradient flex justify-center items-center hover:animate-bounce'>
            <Backtotopicon/>
</div>
</button>
</div>
  )
}

export default Backtotop