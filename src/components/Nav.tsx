"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { logo, small_logo } from "@/assets/logo/index"
import { Button } from './ui/button'
import { Menu } from 'lucide-react';
import useScroll from '@/hooks/useScroll';
import useMediaQuery from '@/hooks/useMedia';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from './ui/label';
import { useForm } from 'react-hook-form';
import { usePathname, useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import ContactForm from './ContactForm';

import {
    Sheet,
    SheetTrigger,
    SheetContent
} from "@/components/ui/sheet"

// Define Zod schema for validation
const formSchema = z.object({
    companyName: z.string().min(1, { message: "Company Name is required" }),
    contactNumber: z
        .string()
        .min(10, { message: "Contact Number must be at least 10 digits" }),
});

// Define the form data type based on the schema
type FormData = z.infer<typeof formSchema>;

const navLinks = [
    { id: "aboutUs", title: "About" },
    { id: "service", title: "Service" },
    { id: "contactUs", title: "Contact" },
];

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isAlreadyHaveAccount, setIsAlreadyHaveAccount] = useState<boolean | null>(null);

    const isMobile = useMediaQuery('(max-width: 640px)');
    const isSticky = useScroll();

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        setIsAlreadyHaveAccount(null);
        // handle form submission logic here
    };

    const [active, setActive] = React.useState<string>()

    return (
        <>
            {isSticky && <div className='w-full h-24' />}

            <div className={`flex flex-col w-full text-deep_blue-100 bg-white ${isSticky ? 'fixed z-[100] top-0 border-b shadow-md' : ''}`}>
                <nav className="container w-full px-3 h-24 mx-auto flex items-center justify-between">
                    <div className='flex gap-12 items-center h-full'>
                        <Link href={"/"}>
                            <Image
                                src={isMobile ? small_logo : logo}
                                alt="logo"
                                width={isMobile ? 40 : 80}
                                height={30}
                            />
                        </Link>
                    </div>
                    <div className='flex gap-6 max-md:gap-4 items-center'>
                        <div className="hidden sm:flex items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    href={`#${link.id}`}
                                    onClick={() => setActive(link.title)}
                                    className={`
                                        font-medium text-[18px] cursor-pointer mx-3 duration-300 ease-in-out
                                        ${active === link.title ? "text-black" : "text-gray-500"}
                                        hover:text-gray-900
                                    `}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="default" className='uppercase text-[0.875rem] leading-[1.375rem] font-medium tracking-[0.05em] py-2 px-6 max-md:px-3 max-sm:py-0 bg-white hover:bg-white text-black'>
                                    Sign In
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle className='text-center'>Sign In</DialogTitle>
                                </DialogHeader>

                                {/* Account Type Selector */}
                                <div className="py-4">
                                    <Label>Do you have an account with us?</Label>
                                    <RadioGroup value={isAlreadyHaveAccount === null ? "as" : isAlreadyHaveAccount ? "yes" : "no"} onValueChange={(value) => setIsAlreadyHaveAccount(value === "yes")} className="flex space-x-4 mt-2">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="have-account" />
                                            <Label htmlFor="have-account">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="no-account" />
                                            <Label htmlFor="no-account">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {/* Conditionally Render Form */}

                                {isAlreadyHaveAccount === null ? (
                                    <div>

                                    </div>
                                ) : isAlreadyHaveAccount ? (
                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid gap-4 py-4">
                                            <div>
                                                <Label htmlFor="companyName">Company Name</Label>
                                                <Input
                                                    id="companyName"
                                                    {...register("companyName")}
                                                    placeholder="Enter your company name"
                                                    className="col-span-3"
                                                />
                                                {errors.companyName && (
                                                    <p className="col-span-4 text-red-500 text-sm">
                                                        {errors.companyName.message}
                                                    </p>
                                                )}
                                            </div>

                                            <div>
                                                <Label htmlFor="contactNumber">Contact Number</Label>
                                                <Input
                                                    id="contactNumber"
                                                    {...register("contactNumber", {
                                                        pattern: {
                                                            value: /^[0-9]{10}$/,
                                                            message: "Contact Number must be exactly 10 digits",
                                                        },
                                                    })}
                                                    maxLength={10}
                                                    placeholder="Enter your contact number"
                                                    className="col-span-3"
                                                    type="tel"
                                                    inputMode="numeric"
                                                    onInput={(e: React.FormEvent<HTMLInputElement>) => {
                                                        const target = e.target as HTMLInputElement;
                                                        target.value = target.value.replace(/[^0-9]/g, '');
                                                    }}
                                                />
                                                {errors.contactNumber && (
                                                    <p className="col-span-4 text-red-500 text-sm">
                                                        {errors.contactNumber.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                ) : (
                                    <ContactForm />
                                )}
                            </DialogContent>
                        </Dialog>

                        <Sheet>
                            <SheetTrigger>
                                <Menu size={32} className='block sm:hidden' />
                            </SheetTrigger>
                            <SheetContent className='flex flex-col gap-y-4 mt-4'>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        href={`#${link.id}`}
                                        onClick={() => setActive(link.title)}
                                        className={`
                                            font-medium text-[18px] cursor-pointer mx-3 duration-300 ease-in-out
                                            ${active === link.title ? "text-black" : "text-gray-500"}
                                            hover:text-gray-900
                                        `}
                                    >
                                        <SheetTrigger>{link.title}</SheetTrigger>
                                    </Link>
                                ))}
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav;
