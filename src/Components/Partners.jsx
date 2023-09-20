import React from 'react'
import Slider from "react-slick";
import Evening from '../Assets/images/png/Evening.png'
import NftCalendar from '../Assets/images/png/NftCalendar.png'
import Furniture from '../Assets/images/png/Furniture.png'
import Fannie from '../Assets/images/png/Fannie.png'

const Partners = () => {
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
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <>
            <section className='bg-black pt-[121px]'>
                <div className='container mx-auto max-w-[1150px] px-3' data-aos="zoom-in" data-aos-delay="400">
                    <div className='flex justify-center items-center'>
                        <h2 className='ff-AzoSans lg:text-4xl text-3xl font-normal text-white'>Partners</h2>
                    </div>
                    <Slider {...settings} className='pt-[52px] '>
                        <div>
                            <img src={Evening} alt="" />
                        </div>
                        <div>
                            <img src={NftCalendar} alt="" />
                        </div>
                        <div>
                            <img src={Furniture} alt="" />
                        </div>
                        <div>
                            <img src={Fannie} alt="" />
                        </div>
                        <div>
                            <img src={Evening} alt="" />
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Partners
