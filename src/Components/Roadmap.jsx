import React from 'react'
import { HalfCircle, RaodmapIcon } from './Icons'
import Roadmappic from '../Assets/images/png/Roadmappic.png'
const Roadmap = () => {
    return (
        <>
            <section className='bg-black pt-[94px] ' >
                <div className='container mx-auto px-3 max-w-[1150px] relative' data-aos="zoom-in" data-aos-delay="400">
                    <div className='flex justify-center items-center mb-8'>
                        <h2 className='text-white lg:text-4xl text-3xl font-normal ff-AzoSans md:mb-[89px]'>Roadmap</h2>
                    </div>
                    <div className='md:hidden flex justify-center'>
                        <img src={Roadmappic} alt="" className='' />
                    </div>
                    <div className='reative hidden md:block'>
                        <div className='reative'>
                            <div className='absolute md:top-[95px] lg:top-[136px] hidden md:block'>
                                <span className='shadow2'><HalfCircle /></span>
                            </div>
                            <img src={Roadmappic} alt="" className='translate-x-[-60px] lg:translate-x-[-80px] hidden md:block' />
                        </div>

                        <div className="flex !w-full relative " id='hover'>
                            <div className="flex absolute top-[-435px] md:left-[124px] lg:left-[126px] md:gap-8 lg:gap-5">
                                <div className="pt-4">
                                    <div className='w-[30px] h-[30px] smallCircle rounded-full bg-[#FDDA60] mt-3'></div>
                                </div>
                                <div className="flex !gap-5 w-full">
                                    <div className="hidden lg:block pt-9">
                                        <span className='smallCircle'><RaodmapIcon /></span>
                                    </div>
                                    <div className='w-full'>
                                        <div className="flex gap-12">
                                            <div className=''>
                                                <div className='h-[76px] w-[76px] rounded-full smallCircle ab bg-white text-black flex justify-center items-center'>
                                                    <span className=' ff-AzoSans text-md font-black flex justify-center items-center'>20%</span>
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='text-md font-normal text-white ff-AzoSans'>PHASE 1</h3>
                                                <div className='w-full'>
                                                    <p className='w-full ff-Montserrat text-sm font-normal '>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex !w-full relative" id='hover'>
                            <div className="flex absolute top-[-325px] md:left-[228px] lg:left-[225px] md:gap-8 lg:gap-5">
                                <div className="pt-4">
                                    <div className='w-[30px] h-[30px] smallCircle rounded-full bg-[#FDDA60] mt-3'></div>
                                </div>
                                <div className="flex !gap-5 w-full">
                                    <div className="hidden lg:block pt-9">
                                        <span className='smallCircle'><RaodmapIcon /></span>
                                    </div>
                                    <div className='w-full'>
                                        <div className="flex gap-12">
                                            <div className=''>
                                                <div className='h-[76px] w-[76px] rounded-full bg-white smallCircle ab text-black flex justify-center items-center'>
                                                    <span className=' ff-AzoSans text-md font-black flex justify-center items-center'>40%</span>
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='text-md font-normal text-white ff-AzoSans'>PHASE 2</h3>
                                                <div className='w-full'>
                                                    <p className='w-full ff-Montserrat text-sm font-normal '>Amet viverra diam netus aenean at mauris, facilisis quis. Urna euismod sed ultricies arcu ullamcorper </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex !w-full relative" id='hover'>
                            <div className="flex absolute top-[-215px] md:left-[257px] lg:left-[258px] md:gap-8 lg:gap-5">
                                <div className="pt-4">
                                    <div className='w-[30px] h-[30px] rounded-full smallCircle bg-[#FDDA60] mt-3'></div>
                                </div>
                                <div className="flex !gap-5 w-full">
                                    <div className="hidden lg:block pt-9">
                                        <span className='smallCircle'><RaodmapIcon /></span>
                                    </div>
                                    <div className='w-full'>
                                        <div className="flex gap-12">
                                            <div className=''>
                                                <div className='h-[76px] w-[76px] rounded-full bg-white ab smallCircle text-black flex justify-center items-center'>
                                                    <span className=' ff-AzoSans text-md font-black flex justify-center items-center'>60%</span>
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='text-md font-normal text-white ff-AzoSans'>PHASE 3</h3>
                                                <div className='w-full'>
                                                    <p className='w-full ff-Montserrat text-sm font-normal '>Hendrerit massa non sed sit. Lobortis in pulvinar lectus ut in elit nibh faucibus mauris. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex !w-full relative" id='hover'>
                            <div className="flex absolute top-[-105px] md:left-[240px] lg:left-[240px] md:gap-8 lg:gap-5">
                                <div className="pt-4">
                                    <div className='w-[30px] h-[30px] rounded-full smallCircle bg-[#FDDA60] mt-3'></div>
                                </div>
                                <div className="flex !gap-5 w-full">
                                    <div className="hidden lg:block pt-9">
                                        <span className='smallCircle'><RaodmapIcon /></span>
                                    </div>
                                    <div className='w-full'>
                                        <div className="flex gap-12">
                                            <div className=''>
                                                <div className='h-[76px] w-[76px] rounded-full bg-white ab smallCircle text-black flex justify-center items-center'>
                                                    <span className=' ff-AzoSans text-md font-black flex justify-center items-center'>80%</span>
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='text-md font-normal text-white ff-AzoSans'>PHASE 4</h3>
                                                <div className='w-full'>
                                                    <p className='w-full ff-Montserrat text-sm font-normal '>Ut egestas lacus nec varius blandit volutpat, malesuada nunc, nisl. Nisl mattis convallis lacus tristique.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex !w-full relative" id='hover'>
                            <div className="flex absolute top-[5px] md:left-[165px] lg:left-[162px] md:gap-8 lg:gap-5">
                                <div className="pt-4">
                                    <div className='w-[30px] h-[30px] rounded-full smallCircle bg-[#FDDA60] mt-3'></div>
                                </div>
                                <div className="flex !gap-5 w-full">
                                    <div className="hidden lg:block pt-9">
                                        <span className='smallCircle'><RaodmapIcon /></span>
                                    </div>
                                    <div className='w-full'>
                                        <div className="flex gap-12">
                                            <div className=''>
                                                <div className='h-[76px] w-[76px] rounded-full ab smallCircle bg-white text-black flex justify-center items-center'>
                                                    <span className=' ff-AzoSans text-md font-black flex justify-center items-center'>100%</span>
                                                </div>
                                            </div>
                                            <div className="text-white">
                                                <h3 className='text-md font-normal text-white ff-AzoSans'>PHASE 5</h3>
                                                <div className='w-full'>
                                                    <p className='w-full ff-Montserrat text-sm font-normal '>Faucibus congue risus nisl dictum. A, viverra malesuada nunc varius. Ut dignissim mauris eu sed nisl neque. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative md:hidden block ms-8'>
                        <div className='min-h-[82%] w-[3px] bg-white absolute top-2 after:h-[55px] after:w-[55px] after:rounded-[50%] after:content-["20%"] after:flex after:justify-center after:items-center after:text-md after:ff-Montserrat after:font-black  after:bg-white after:absolute after:left-[-26px] after:top-0'></div>
                        <div className='relative text-white px-10 pt-3'>
                            <h3 className='text-md ff-AzoSans font-normal text-white'>Phase 1</h3>
                            <p className='text-sm ff-Montserrat font-normal text-white !opacity-40'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>

                        <div className='after:h-[55px] after:w-[55px] after:rounded-[50%] after:content-["40%"] after:flex after:justify-center after:items-center after:text-md after:ff-Montserrat after:font-black  after:bg-white after:absolute after:left-[-26px] after:top-[20%]'></div>
                        <div className='relative text-white px-10 pt-3'>
                            <h3 className='text-md ff-AzoSans font-normal text-white'>Phase 2</h3>
                            <p className='text-sm ff-Montserrat font-normal text-white !opacity-40'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>

                        <div className='after:h-[55px] after:w-[55px] after:rounded-[50%] after:content-["60%"] after:flex after:justify-center after:items-center after:text-md after:ff-Montserrat after:font-black  after:bg-white after:absolute after:left-[-26px] after:top-[40%]'></div>
                        <div className='relative text-white px-10 pt-3'>
                            <h3 className='text-md ff-AzoSans font-normal text-white'>Phase 3</h3>
                            <p className='text-sm ff-Montserrat font-normal text-white !opacity-40'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>

                        <div className='after:h-[55px] after:w-[55px] after:rounded-[50%] after:content-["80%"] after:flex after:justify-center after:items-center after:text-md after:ff-Montserrat after:font-black  after:bg-white after:absolute after:left-[-26px] after:top-[60%]'></div>
                        <div className='relative text-white px-10 pt-3'>
                            <h3 className='text-md ff-AzoSans font-normal text-white'>Phase 4</h3>
                            <p className='text-sm ff-Montserrat font-normal text-white !opacity-40'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>

                        <div className='after:h-[55px] after:w-[55px] after:rounded-[50%] after:content-["100%"] after:flex after:justify-center after:items-center after:text-md after:ff-Montserrat after:font-black  after:bg-white after:absolute after:left-[-26px] after:top-[80%]'></div>
                        <div className='relative text-white px-10 pt-3'>
                            <h3 className='text-md ff-AzoSans font-normal text-white'>Phase 5</h3>
                            <p className='text-sm ff-Montserrat font-normal text-white !opacity-40'>Mi amet elementum, posuere tempus odio eu lacinia. Natoque arcu viverra ullamcorper condimentum massa laoree</p>
                        </div>




                    </div>
                    <div className='flex justify-center items-center pt-[26px] md:pt-[176px]'>
                        <button className='btn text-black font-normal text-sm sm:text-md ff-AzoSans'> Read Our Whitepaper</button>
                    </div>
                </div>





            </section>


        </>
    )
}

export default Roadmap
