"use client"
import { Separator } from '@/components/ui/separator'
import { aboutUsBanner, aboutUsTop, companyValues, insideContent, locationContent, servicesAndExperience, visionContent } from '@/enum/aboutuspage'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { MoveRight } from 'lucide-react';
import { pathway } from '@/styles/font'

import CommonLocationCard from '@/components/common/CommonLocationCard'
import { CustomHeading } from '@/components/custom/CustomHeading'
import { SectionWrapper } from '@/hoc'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Button } from './ui/button'


const AboutUs = () => {

    const targetRef = useRef(null)
    const isInView = useInView(targetRef)

    return (
        <div className='w-full  text-white' ref={targetRef}>
            <AnimatePresence mode='wait'>
                {/* section 1 */}
                <div className='container  px-[16px]  ' >
                    <CustomHeading variant={"medium"} className='text-white text-center max-md:text-left'>
                        <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            exit={{ opacity: 0, x: -100 }}
                        >
                            {aboutUsTop.title}
                        </motion.p>
                    </CustomHeading>
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 2 }}
                        exit={{ opacity: 0, x: -100 }}

                        className="space-x-1  mt-[30px] gap-1 mb-24">
                        {aboutUsTop.description.map((item, index) => {
                            return item.link ? (
                                <Button asChild>
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className={cn(`text-[20px] font-[400] leading-[1.5] `, item.className)}
                                        rel="noopener noreferrer"
                                    >
                                        {item.content}
                                    </Link>
                                </Button>

                            ) : (
                                <span
                                    key={index}
                                    className={cn(`text-[20px] font-[400] leading-[1.6] `, item.className)}
                                >
                                    {item.content}
                                </span>
                            );
                        })}
                    </motion.div>
                    {/* <div className='container'>
                    <Image
                        src={aboutUsBanner[0].img}
                        alt={aboutUsBanner[0].alt}
                        width={1440}
                        height={400}
                        className='rounded-[10px]'
                    />
                </div> */}
                </div >
            </AnimatePresence>
        </div >
    )
}

export default AboutUs


