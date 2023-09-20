import React from 'react'
import { CardSection } from './Helper';

const Utilities = () => {
    return (
        <>
            <section className='bg-black pb-[126px]'>
                <div className='container mx-auto max-w-[1150px] px-3 md:px-0 xl:pt-20' data-aos="zoom-in" data-aos-delay="400">
                    <div className='flex justify-center items-center'>
                        <h2 className='text-white lg:text-4xl text-3xl ff-AzoSans'>UTILITIES</h2>
                    </div>

                    <div className=' flex gap-[17px] justify-center items-center pt-[54px] flex-wrap' >
                        {CardSection.map((data) => {
                            return (
                                <>

                                    <div className='utilitiesCard flex flex-wrap flex-col  justify-center items-center cursor-pointer relative overflow-hidden' id='utl'>
                                        <div className='whiteBlur absolute top-[-18px] right-[-10px] '></div>
                                        <div className='whiteBlur absolute bottom-[-18px] left-[-10px] '></div>
                                        {data.image}
                                        <h2 className='text-white pt-4 ff-Montserrat text[24px] font-semibold'>
                                            {data.heading}
                                        </h2>
                                        <p className='text-white max-w-[330px] ff-Montserrat text-[16px] font-normal pt-3'>
                                            {data.paragraph}
                                        </p>

                                    </div>
                                </>
                            );
                        }

                        )}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Utilities
