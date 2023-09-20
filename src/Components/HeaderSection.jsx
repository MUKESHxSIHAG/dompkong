import React from 'react'
import NavbarSection from './NavbarSection'
import Img1 from '../Assets/images/png/Img-1.png'
import Img2 from '../Assets/images/png/Img-2.png'
import Img3 from '../Assets/images/png/Img-3.png'


const HeaderSection = () => {
  return (
    <div className='overflow-hidden bg-black'>
      <header className="bg-[url('/src/Assets/images/png/headerBg.png')] bg-no-repeat bg-center bg-cover min-h-[90vh]" data-aos="fade-left" data-aos-delay="400">
        <main className='relative '>
          <img className='absolute top-[150%] right-[35%] md:block hidden' src={Img1} alt="Image 1" />
          <img className='absolute sm:top-[117%] top-[90%]  sm:right-[13%] right-[0] md:block  ' src={Img2} alt="Image 2" />
          <img className='absolute top-[79.3%] right-[-13.2%] md:block hidden' src={Img3} alt="Image 3" />
          <div className='flex flex-col justify-center items-center'>
            <h2 className=' text-[#ffffff] lg:text-4xl text-[48px] font-normal text-center ff-AzoSans md:pt-0 pt-10'>WELCOME<span className='block'> TO <span className='text-[#F1C85D] underline'>DOMPKONG</span></span></h2>
            <p className='text-sm text-[#fff] font-normal ff-Montserrat max-w-[505px] text-center md:pt-0 pt-5'>Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vita</p>
          </div>
          <div className='flex flex-wrap items-center gap-[32px] justify-center mt-[35px]'>
            <button className='text-[#000] ff-AzoSans font-normal btn'>WHITEPAPER</button>
            <button className='text-[#000] ff-AzoSans font-normal btn z-20'>MINT</button>
            <button className='text-[#000] ff-AzoSans font-normal btn z-20'>OPENSEA </button>
          </div>
        </main>

      </header>
    </div>
  )
}

export default HeaderSection
