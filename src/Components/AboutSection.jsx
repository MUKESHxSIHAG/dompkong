import React from "react";
import Boats from '../Assets/images/png/Boats.png'
import Watches from '../Assets/images/png/Watches.png'
import Cars from '../Assets/images/png/Cars.png'

const AboutSection = () => {
  
    return (
        <>
            <section className="bg-black pb-24">
                <div className="container max-w-[1250px] mx-auto px-3">

                    <div className="flex flex-wrap pt-[129px]">
                        <div className='xl:w-1/2 w-[100%] xl:flex-none flex flex-col xl:justify-start justify-center xl:items-start  items-center ' data-aos="fade-right" data-aos-delay="400">
                            <h2 className='ff-AzoSans lg:text-4xl text-3xl text-white'>About</h2>
                            <p className='max-w-[510px] text-white ff-Montserrat text-[16px] font-normal xl:text-left text-center  xl:pt-0 pt-10'>
                                Turpis et tortor vel pharetra nibh. Mauris nisl sit vitae viverra amet et. Erat nam molestie. Vitae mollis lacus senectus mattis nisl. Porta , adipiscing sed mus diam amet, ac sed tellus.
                            </p>                                 
                        </div>
                        <div className='xl:w-1/2 w-[100%] xl:mt-0 mt-12 xl:pb-0 pb-[20rem] md:overflow-visible overflow-hidden'>
                            <section id="slideshow rotateY">
                                <div class="entire-content rotateZ">
                                    <div class="content-carrousel">
                                        <figure class="shadow"><img src={Boats} alt="" /></figure>
                                        <figure class="shadow"><img src={Watches} alt="" /></figure>
                                        <figure class="shadow"><img src={Cars} alt="" /></figure>
                                        <figure class="shadow"><img src={Boats} alt="" /></figure>
                                        <figure class="shadow"><img src={Watches} alt="" /></figure>
                                        <figure class="shadow"><img src={Cars} alt="" /></figure>
                                        <figure class="shadow"><img src={Boats} alt="" /></figure>
                                        <figure class="shadow"><img src={Boats} alt="" /></figure>
                                        <figure class="shadow"><img src={Watches} alt="" /></figure>
                                        <figure class="shadow"><img src={Cars} alt="" /></figure>
                                    </div>
                                </div>
                            </section>

                        </div>
                   </div>



                </div>
            </section>

        </>
    )
}

export default AboutSection
