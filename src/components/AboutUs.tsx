"use client"
import { Separator } from '@/components/ui/separator'
import { aboutUsBanner, aboutUsTop, companyValues, insideContent, locationContent, servicesAndExperience, visionContent } from '@/enum/aboutuspage'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { MoveRight } from 'lucide-react';
import { pathway } from '@/styles/font'

import CommonLocationCard from '@/components/common/CommonLocationCard'
import { CustomHeading } from '@/components/custom/CustomHeading'
import { SectionWrapper } from '@/hoc'


const AboutUs = () => {


    const [hoverLink, sethoverLink] = useState(false)

    return (
        <div className='w-full  text-white'>

            {/* section 1 */}
            <div className='container  px-[16px]  ' >
                <CustomHeading variant={"medium"} className='text-white text-center max-md:text-left'>
                    {aboutUsTop.title}
                </CustomHeading>
                <div className="space-x-1  mt-[30px] gap-1 mb-24">
                    {aboutUsTop.description.map((item, index) => {
                        return item.link ? (
                            <Link
                                key={index}
                                href={item.link}
                                className={cn(`text-[20px] font-[400] leading-[1.5] `, item.className)}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {item.content}
                            </Link>
                        ) : (
                            <span
                                key={index}
                                className={cn(`text-[20px] font-[400] leading-[1.6] `, item.className)}
                            >
                                {item.content}
                            </span>
                        );
                    })}
                </div>
                <div className='container'>
                    <Image
                        src={aboutUsBanner[0].img}
                        alt={aboutUsBanner[0].alt}
                        width={1440}
                        height={400}
                        className='rounded-[10px]'
                    />
                </div>
            </div >
        </div >
    )
}

export default AboutUs


