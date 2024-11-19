"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import React, { Dispatch, SetStateAction } from "react";

// Define the validation schema with Zod
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }),
});

// Define the form data type based on the schema
type FormData = z.infer<typeof formSchema>;


interface ContactFormProps {
    closeForm?: Dispatch<SetStateAction<boolean>>
}

const ContactForm: React.FC<ContactFormProps> = ({
    closeForm
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        console.log("🚀 ~ onSubmit ~ data:", data)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to save contact');
            }
            console.log('Form submitted and data saved:', data);
            toast.success('Your message has been saved!');
            reset();
            closeForm?.(false);
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit the form. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-full">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <Input
                    type="text"
                    id="name"
                    {...register("name")}
                    placeholder="Your name"
                    required
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <Input
                    type="email"
                    id="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    required
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Your message here..."
                    required
                />
                {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
            </div>

            <Button type="submit">Submit</Button>
        </form>
    );
};

export default ContactForm;
