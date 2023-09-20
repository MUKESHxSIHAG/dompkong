import React from 'react'
import MainKong from '../Assets/images/png/MainKong.png'
import Kong1 from '../Assets/images/png/Kong1.png'
import Kong2 from '../Assets/images/png/Kong2.png'
import Kong3 from '../Assets/images/png/Kong3.png'
import Kong4 from '../Assets/images/png/Kong4.png'
import Kong5 from '../Assets/images/png/Kong5.png'
import Kong6 from '../Assets/images/png/Kong6.png'
import Kong7 from '../Assets/images/png/Kong7.png'
import Kong8 from '../Assets/images/png/Kong8.png'
import Kong9 from '../Assets/images/png/Kong9.png'
import Kong10 from '../Assets/images/png/Kong10.png'
import Slider from 'react-slick'
const Thekongs = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0,
    centreMode: true,
    speed: 2000,
    cssEase: 'Linear',
    slidesToShow: 4,
    pauseOnHover: true,
    slidesToScroll: 1,


    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <>
      <section className='bg-black md:pb-[370px] pb-[70px] relative overflow-hidden' >
        <span data-aos="zoom-in" data-aos-delay="400">
          <div className='kongBlur left-[45%] top-[35%] '></div>
          <div className='relative z-10 mx-2 hidden md:block'>
            <div className='flex flex-row gap-4 relative '>
              <div className='rounded-[8px]'><img className='md:absolute lg:left-0 md:left-0   kong cursor-pointer' src={Kong1} alt="Kong1" /></div>
              <div><img className='md:absolute lg:left-[70px] md:left-0  md:translate-y-[120%]  kong cursor-pointer' src={Kong2} alt="Kong2" /></div>
              <div><img className='md:absolute lg:left-[178px] md:left-0 md:translate-y-[240%] kong cursor-pointer' src={Kong3} alt="Kong3" /></div>
              <div><img className='md:absolute lg:left-[70px] md:left-0 md:translate-y-[360%] kong cursor-pointer' src={Kong4} alt="Kong4" /></div>
              <div><img className='md:absolute lg:left-0 md:left-0 md:translate-y-[480%] kong cursor-pointer' src={Kong5} alt="Kong5 " /></div>

              <div><img className='md:absolute lg:right-0 md:right-0  kong cursor-pointer' src={Kong6} alt="Kong1" /></div>
              <div><img className='md:absolute lg:right-[70px]  md:right-[0px]  md:translate-y-[120%] kong cursor-pointer' src={Kong7} alt="Kong2" /></div>
              <div><img className='md:absolute lg:right-[178px] md:right-[0px] md:translate-y-[240%] kong cursor-pointer' src={Kong8} alt="Kong3" /></div>
              <div><img className='md:absolute lg:right-[70px] md:right-[0px] md:translate-y-[360%] kong cursor-pointer' src={Kong9} alt="Kong4" /></div>
              <div><img className='md:absolute lg:right-0 md:right-[0px] md:translate-y-[480%] kong cursor-pointer' src={Kong10} alt="Kong5 " /></div>
            </div>
          </div>
          <h2 className='ff-AzoSans text-white font-normal lg:text-4xl text-3xl mt-5 md:hidden text-center'>The Kongs</h2>
          <div className='md:hidden'>
            <Slider {...settings} className='pt-[52px]'>
              <div className='px-3 '>
                <img className='kong' src={Kong6} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong7} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong8} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong9} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong10} alt="" />
              </div>
            </Slider>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='ff-AzoSans text-white font-normal lg:text-4xl text-3xl mt-5 hidden md:block '>The Kongs</h2>
            <img className='mt-16 relative lg:pt-0 md:pt-36' src={MainKong} alt="Domp Kong" />
          </div>
          <div className='md:hidden'>
            <Slider {...settings} className='pt-[52px]'>
              <div className='px-3'>
                <img className='kong' src={Kong1} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong2} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong3} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong4} alt="" />
              </div>
              <div className='px-3'>
                <img className='kong' src={Kong5} alt="" />
              </div>
            </Slider>
          </div>
        </span>
      </section>

    </>
  )
}

export default Thekongs

