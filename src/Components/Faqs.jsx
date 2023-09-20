import { Accordion } from 'flowbite-react'
import React from 'react'
import { Diamond, Discord, Most, Opensea, Telegram, Twitter } from './Icons'


const Faqs = () => {
    return (
        <>
            <section className='bg-black pb-12 relative overflow-hidden'>
                <div className='absolute h-[132px] w-[132px] bg-[#fdda60] blur-[146px] top-[35%] left-[50%]'></div>
                <div className='absolute h-[247px] w-[247px] bg-[#fdda60] blur-[146px] bottom-[-14%] left-[0%]'></div>
                <div className='flex justify-center items-center'>
                    <h2 className='text-4xl font-normal text-white ff-AzoSans'>FAQS</h2>
                </div>
                <div className='mx-auto max-w-[1150px] container px-3'>

                    <Accordion className='max-w-[896px] mx-auto' data-aos="zoom-in" data-aos-delay="400">
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 before:blur-[1px] pt-6 pb-4'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Arcu faucibus diam feugiat magna etiam.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Fermentum tortor aenean.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Dictum est amet sollicitudin.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4 '>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Sed vulputate mi faucibus.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Commodo placerat ultricies.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <div className=' relative before:absolute before:w-[100%] before:h-[1px] before:bg-[#fdda60] before:bottom-0 !before:shadow-faqShadow pt-6 pb-4 before:blur-[1px]'>
                                <Accordion.Title className='text-white font-Montserrat font-[700] text-md sm:text-lg a text-start'>
                                    Nunc amet cursus morbi donec.
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className='text-white font-Montserrat font-[400] text-sm pt-2 pb-6 pe-4'>
                                        Arcu faucibus diam feugiat magna etiam. Leo ridiculus mauris, risus vitae luctus volutpat turpis. Nisl, consequat tellus laoreet viverra diam nulla. Etiam vitae, proin Leo at nibh nibh.
                                    </p>
                                </Accordion.Content>
                            </div>
                        </Accordion.Panel>
                    </Accordion>

                </div>
                <div className='flex justify-center items-center gap-6 lg:pt-[300px] md:pt-[180px] pt-[80px] svgg pb-10 z-20'>
                    <span className='z-10'><Twitter /></span>
                    <span className='z-10'><Opensea /></span>
                    <span className='z-10'><Diamond /></span>
                    <span className='z-10'> <Discord /></span>
                    <span className='z-10'><Most /></span>
                    <span className='z-10'><Telegram /></span>
                </div>
                <div className='h-[2px] bg-white z-20'></div>
            </section>

        </>
    )
}

export default Faqs
