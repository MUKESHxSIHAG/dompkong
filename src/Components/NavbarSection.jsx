import React from 'react'
import { Container } from 'react-dom'
import { Diamond, Discord, Most, Opensea, Telegram, Twitter } from './Icons'

const NavbarSection = () => {
    return (
        <>
            <header className="bg-no-repeat bg-center bg-cover bg-[url('/src/Assets/images/png/NavBg.png')]  min-h-[15vh] bg-black">
                <div className='container max-[1140px] mx-auto px-3'>
                    <div className='flex justify-end pt-5 cursor-pointer'>
                        <h2 className='color bg-[#FDDA60] inline-block btn ff-AzoSans font-normal text-[16px] '>Connect Wallet</h2>
                    </div>
                    <div className='pt-8 flex items-center gap-4 justify-center pb-4' id='nav'>
                        <span className='cursor-pointer'> <Twitter /></span>
                        <span className='cursor-pointer'><Opensea /></span>
                        <span className='cursor-pointer'><Diamond /></span>
                        <span className='cursor-pointer'><Discord /></span>
                        <span className='cursor-pointer'><Most /></span>
                        <span className='cursor-pointer'><Telegram /></span>
                    </div>
                </div>

            </header>

        </>
    )
}

export default NavbarSection
