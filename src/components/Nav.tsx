"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { logo, small_logo } from "@/assets/logo/index"
import { Button } from './ui/button'
import { ChevronDown, Menu } from 'lucide-react';
import { Plus } from 'lucide-react';
import useScroll from '@/hooks/useScroll';

import { useRouter } from 'next/navigation';
import useMediaQuery from '@/hooks/useMedia';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema for validation
const formSchema = z.object({
    companyName: z.string().min(1, { message: "Company Name is required" }),
    contactNumber: z
        .string()
        .min(10, { message: "Contact Number must be at least 10 digits" }),
});

// Define the form data type based on the schema
type FormData = z.infer<typeof formSchema>;

const Nav = () => {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const isMobile = useMediaQuery('(max-width: 640px)');
    const isSticky = useScroll()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });



    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        // handle form submission logic here
    };


    return (
        <>
            {
                isSticky &&
                <div className='w-full h-24' />
            }

            <div className={` flex flex-col  w-full text-deep_blue-100 ${isSticky ? 'fixed z-40 bg-white top-0 border-b border-deep_blue-300 shadow-md' : ''}`}>
                <nav className=' container w-full h-24 mx-auto flex items-center justify-between'>
                    <div className='flex gap-12 items-center h-full '>
                        <Link href={"/"}>
                            <Image
                                src={isMobile ? small_logo : logo}
                                alt="logo"
                                width={isMobile ? 40 : 80}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className='flex gap-6 max-md:gap-4 items-center '>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="default" className='uppercase text-[0.875rem] leading-[1.375rem] font-medium tracking-[0.05em] py-2 px-6 max-md:px-3 max-sm:py-0 bg-white hover:bg-white text-black' >Sign In</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className='text-center'>Sign In</DialogTitle>
                                </DialogHeader>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid gap-4 py-4">
                                        <div className="">
                                            <Label htmlFor="companyName" className="text-right">
                                                Company Name
                                            </Label>
                                            <Input
                                                id="companyName"
                                                {...register("companyName")}
                                                placeholder="Enter your company name"
                                                className="col-span-3"
                                            />
                                            {errors.companyName && (
                                                <p className="col-span-4 text-red-500 text-sm text-right">
                                                    {errors.companyName.message}
                                                </p>
                                            )}
                                        </div>

                                        <div className="">
                                            <Label htmlFor="contactNumber" className="text-right">
                                                Contact Number
                                            </Label>
                                            <Input
                                                id="contactNumber"
                                                {...register("contactNumber")}
                                                placeholder="Enter your contact number"
                                                className="col-span-3"
                                            />
                                            {errors.contactNumber && (
                                                <p className="col-span-4 text-red-500 text-sm text-right">
                                                    {errors.contactNumber.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </form>
                            </DialogContent>
                        </Dialog>

                        <div className='lg:hidden'>
                            <Menu size={32} onClick={() => setOpenMenu(true)} />
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Nav

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';


