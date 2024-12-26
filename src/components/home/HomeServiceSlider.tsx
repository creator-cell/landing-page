"use client";
import React, { useEffect, useRef, useState } from "react";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Virtual, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { service1, service2, service3, service4, service5, service6 } from "@/assets/services/images/index";

const HomeServiceSlider: React.FC = ({

}) => {



  const servicesData = [
    {
      name: "Custom Software Development",
      description: "When bullding custom software from scratch, we ensure workflows that are easily understandable for users, maintainable code, and comprehensive supporting documentation.",
      color: "#FF5733",
      image: service1
    },
    {
      name: "Cloud Enablement",
      description: "We will help you leverage cloud possibilities and ensure easy scalability, advanced security, and cost savings for your infrastructure and apps hosted in the cloud.",
      color: "#33C9FF",
      image: service2
    },
    {
      name: "IT Management System",
      description: "We will help you standard by standard to implement Optimize and achieve your objective like Resilience to cyber-attacks, Preparedness for new threats Data integrity, confidentiality and availability, Security across all supports, Organization-wide protection Cost savings",
      color: "#FF33A6",
      image: service3
    },
    {
      name: "Digital Transformation",
      description: "Whether you plan to digitally transform one business process or all the business areas, we will analyze what challenges you need to solve and develop a fitting I strategy.",
      color: "#33FF57",
      image: service4
    },
    {
      name: "Software Modernization",
      description: "We will assess your legacy software and offer modernization activities to improve its overall efficiency and cut software maintenance costs,",
      color: "#335BFF",
      image: service5
    },
    {
      name: "Software Consulting",
      description: "We will address any software-related challenges or blockers to help you avoid costly mistakes when building new software or draw maximum business value from your existing systems and products.",
      color: "#FF8C33",
      image: service6
    },
  ];


  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;

    if (swiperInstance) {
      const updateIndex = () => setActiveIndex(swiperInstance.activeIndex);

      swiperInstance.on("slideChange", updateIndex);
      updateIndex(); // Set initial active index

      return () => {
        swiperInstance.off("slideChange", updateIndex);
      };
    }
  }, []);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePreview = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };




  return (
    <div className={` container text-white   pb-10   rounded-t-[40px] md:rounded-t-[90px] lg:rounded-t-[110px] `}>
      <div className=" w-full flex flex-col md:flex-row md:justify-between gap-5 md:pl-[50px] ">
        <div className="w-full  space-y-24 md:w-[30%] flex flex-col items-end">

          <div className="mx-4 w-full pl-4">
            <div className=" ">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeIndex}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-3xl w-full  font-[400] text-left">
                  {servicesData?.[activeIndex]?.name}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
          <div className={cn("px-4 md:px-0",)}>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-sm  leading-[24px] font-[400]">
                {/* EmergeX will assist you to better understand and manage workplace
              safety by integrating hazards and incident reporting with
              investigations, actions and metrics reporting. */}
                {servicesData?.[activeIndex]?.description}
              </motion.p>
            </AnimatePresence>
          </div>
          {/* <div className="flex self-start items-start justify-start mt-12">
            <Link href={`/services/${servicesData?.[activeIndex]?.id}`}
              className="px-[20px] py-[8px] text-[16px] sm:text-base bg-[#3DA229] rounded-full text-white hover:bg-[#3DA229] transition-all duration-300 ease-in-out"
            >
              Explore Now
            </Link>
          </div> */}
        </div>
        <div className=" w-full md:w-[60%]">
          <SwiperComponent
            ref={swiperRef}
            modules={[Virtual]}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            virtual
            style={{ position: "relative" }}
          >
            {servicesData?.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="w-full ">
                  <div className="w-full px-4 md:min-h-[20rem]">
                    <Image
                      src={item.image}
                      alt="slideimg"
                      width={800}
                      height={400}
                      className="rounded-[16px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <div className="w-[32%]"></div>
        <div className="flex items-center gap-4 mt-5 w-[56.5%]">
          {
            servicesData && servicesData.length > 0 &&
            <>
              <button
                onClick={slidePreview}
                disabled={activeIndex === 0}
                className=" w-10 h-10 z-20 rounded-full disabled:grayscale disabled:opacity-50  hover:bg-customGreen/70  bg-customGreen border text-white flex items-center justify-center"
              >
                <ChevronLeft />
              </button>
              <div>
                {activeIndex + 1} /{servicesData.length}
              </div>
              <button
                disabled={activeIndex === servicesData.length - 1}
                onClick={slideNext}
                className=" w-10 h-10 z-20  disabled:grayscale disabled:opacity-50  hover:bg-customGreen/70  bg-customGreen  rounded-full border text-white flex items-center justify-center"
              >
                <ChevronRight />
              </button>

            </>
          }

        </div>
      </div>
    </div>
  );
};

export default HomeServiceSlider;
