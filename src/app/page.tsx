import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import { CustomHeading } from "@/components/custom/CustomHeading";
import Hero from "@/components/Hero";
import HeroCarousal from "@/components/home/HeroCarousal";
import HomeServiceSlider from "@/components/home/HomeServiceSlider";
import Services from "@/components/Services";
import { Separator } from "@/components/ui/separator";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start  mx-auto">
      {/* <Hero /> */}
      <HeroCarousal />
      <Separator className="h-3 bg-white" />
      {/* <div className="bg-[#55BACA] w-full"> */}
      <SectionWrapper
        Component={() => (
          <>
            <CustomHeading title="About Us" className="text-white text-center" >
              Our Services
            </CustomHeading>
            <HomeServiceSlider />
          </>
        )}
        idName="service"
        className="flex flex-col gap-y-7 pb-20 container "
      />
      {/* </div> */}

      <Separator className="h-3 bg-white" />
      <SectionWrapper
        Component={() => (
          <>
            <CustomHeading title="About Us" className="text-white text-center" >
              About us
            </CustomHeading>
            <AboutUs />
          </>
        )}
        idName="aboutUs"
        className="flex flex-col gap-y-7 container"
      />
      <Separator className="h-3 bg-white" />
      <SectionWrapper
        Component={() => (
          <>
            <CustomHeading title="About Us" className="text-white text-center pb-12" >
              Contact Us
            </CustomHeading>
            <div className="w-full max-w-md bg-white p-6 flex items-center justify-center mx-auto rounded-md ">
              <ContactForm />
            </div>
          </>
        )}
        idName="contactUs"
        className="mx-auto mb-10 p-6 rounded-md w-full container"
      />
    </main>
  );
}
