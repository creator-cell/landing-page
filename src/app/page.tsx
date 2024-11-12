import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import { CustomHeading } from "@/components/custom/CustomHeading";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start container mx-auto">
      <Hero />

      <SectionWrapper
        Component={() => (
          <>
            <CustomHeading title="About Us" className="text-white text-center" >
              Our Services
            </CustomHeading>
            <Services />
          </>
        )}
        idName="service"
        className="flex flex-col gap-y-7 pb-20"
      />

      {/* <div className="flex flex-col gap-y-7 pb-20" id="service">
        <span className='mt-[-20px] pb-[96px] block' id={"service"}>
          &nbsp;
        </span>
        <CustomHeading title="About Us" className="text-white text-center" >
          Our Services
        </CustomHeading>
        <Services />
      </div> */}

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
        className="flex flex-col gap-y-7"
      />
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
        className="mx-auto my-10 p-6 rounded-md shadow-md w-full"
      />
    </main>
  );
}
