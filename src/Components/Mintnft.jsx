import React, { useState } from 'react'
import DompkongBottle from '../Assets/images/png/DompkongBottle.png'
const Mintnft = () => {
    const [count, setCount] = useState(1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    if (count == 10) {
        document.getElementById("addzero").style.display = "none"
    } else if (count == 9) {
        document.getElementById("addzero").style.display = "block"
    }


    return (
        <>
            <section className="bg-no-repeat bg-center bg-cover bg-[url('/src/Assets/images/png/NftBg.png')] relative !overflow-hidden">
                <div className='absolute h-[173px] w-[173px] bg-[#fdda60] blur-[146px] top-[10%] left-[0%]'></div>
                <div className='absolute h-[296px] w-[296px] bg-[#fdda60] blur-[146px] top-[35%] right-[0]'></div>
                <div className='container mx-auto max-w-[1150px] px-3'>
                    <div className='flex flex-wrap items-center justify-center'>
                        <div className='lg:w-1/2 w-1/2 lg:flex-none flex justify-center items-center' data-aos="fade-right" data-aos-delay="400">
                            <img className='w-100 mt-[70px]' src={DompkongBottle} alt="Bottle Glass" />
                        </div>
                        <div className='lg:w-1/2 w-[100%] lg:flex-none flex justify-center items-center lg:pt-0 pt-10 lg:pb-0 pb-14 ' data-aos="fade-left" data-aos-delay="400">
                            <div className='max-w-[480px]'>
                                <div className='flex flex-col'>
                                    <h2 className='ff-AzoSans font-normal lg:text-4xl text-[42px]  text-white'>MINT NFT</h2>

                                </div>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='ff-Montserrat font-black text-3xl text-white'>9999</h3>
                                        <p className='ff-Montserrat font-normal text-sm text-white'>of 10,000 minted</p>
                                    </div>
                                    <div>
                                        <h3 className='ff-Montserrat font-black text-3xl text-white'>.2 ETH</h3>
                                        <p className='text-sm ff-Montserrat font-normal text-white'>per NFT</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center mt-[33px]'>
                                    <div>
                                        <h3 className='ff-Montserrat font-black text-3xl text-white'>Max 9</h3>
                                        <p className='ff-Montserrat font-normal text-sm text-white'>NFTs per transaction</p>
                                    </div>
                                    <div>
                                        <h3 className='ff-Montserrat font-black text-3xl text-white'>Max 2</h3>
                                        <p className='text-sm ff-Montserrat font-normal text-white'>NFTs per wallet</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-4 mt-12'>
                                    <button className='text-black font-4xl rounded ff-Montserrat font-black bg-[#FFFFFF] pt-3 pb-3 ps-8 pe-8' onClick={decrement}>-</button>
                                    <p className='text-white font-4xl ff-Montserrat font-black ring-2 ring-[white] h-[44px] rounded flex justify-center items-center w-full bg-transparent mb-0 '><span id='addzero'>0</span>{count}</p>
                                    <button className='text-black font-4xl rounded ff-Montserrat font-black bg-[#FFFFFF] pt-3 pb-3 ps-8 pe-8' onClick={() => setCount(count + 1)}>+</button>
                                </div>

                                <button className='btn mt-[29px] w-[100%] ff-AzoSans font-normal text-2xl'>MINT NOW</button>

                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </>
    )
}

export default Mintnft
