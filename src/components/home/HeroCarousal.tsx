"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const HeroCarousal = () => {
    return (
        <div className='min-h-[80vh] w-full relative'>
            <Swiper
                cssMode={true}
                // navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop
                modules={[Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                {
                    Array.from({ length: 5 }).map((_, index) => (
                        <SwiperSlide key={index} >
                            <div className='h-[80vh]  overflow-hidden'>
                                <Image width={1200} height={600} src={`/hero-images/hero${index + 1}.jpg`} alt='hero-image' className='object-contain w-full' />
                            </div>
                        </SwiperSlide>
                    ))

                }
                {/* <Button asChild className='absolute bottom-1/2 left-1/4 mx-auto mb-10 z-40 w-fit'>
                    <Link
                        href={"/#contactUs"}
                        className={cn(`text-[30px] font-[500] leading-[1.5] px-8 py-9 `)}
                        rel="noopener noreferrer"
                    >
                        Get In Touch
                    </Link>
                </Button> */}
            </Swiper>
        </div>
    );
}

export default HeroCarousal;
