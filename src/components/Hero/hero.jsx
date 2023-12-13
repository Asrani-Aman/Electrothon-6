import React from 'react';
import Timer from '../CountDown/countDown';
import CrookCanvas from '../../canvas/Croo_k';
import MagicCanvas from '../../canvas/Magic_stand';

const Hero = () => {
  return (
    <>  
    <div className="flex w-full z-[20] items-center justify-center min-h-[38rem] sm:min-h-screen bg-transparent relative">
 {/* left */}
      <div className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-full object-cover opacity-90">
       <CrookCanvas/>
</div>

      {/* Content Container */}
      <div className="absolute mt-20  sm:my-8 top-0 z-10 text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Centered Content</h1>
        <p className="text-lg text-gray-600">
          Your content goes here. Customize this text to suit your needs.
        </p>
        <div className='w-full overflow-x-hidden'>
            <Timer/>
        </div>
      </div>

  {/* right */}
<div className='hidden sm:block absolute top-0 right-0 h-full w-1/4'>
    <MagicCanvas/>
</div>
    </div>

    </>
  );
};

export default Hero;
