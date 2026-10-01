import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'

const Footer = () => {
    return (
       <section className='flex items-center justify-between text-white w-full h-[100px] bg-black mx-auto py-10 px-30 border-t-gray-800 border-t-2' >
        <div className='flex items-center gap-2 '>
            <Image src={logo} alt='footer logo' className='rotate-135'></Image>
            <h4 className='text-[16px] font-bold '>Fitlog</h4>
        </div>
        <div>
            <p className='text-gray-500 text-[12px]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
        </div>
       </section>
    );
};

export default Footer;