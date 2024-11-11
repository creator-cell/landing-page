import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import { CustomHeading } from "@/components/custom/CustomHeading";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start container mx-auto">
      <Hero />
      <Services />
      <div className="flex flex-col gap-y-5">
        <CustomHeading title="About Us" className="text-white text-center" >
          About us

        </CustomHeading>
        <AboutUs />
      </div>
      <div className=" mx-auto my-10  p-6  rounded-md shadow-md w-full">
        <CustomHeading title="About Us" className="text-white text-center pb-12" >
          Contact Us
        </CustomHeading>
        <div className="w-full max-w-md bg-white p-6 flex items-center justify-center mx-auto rounded-md ">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
