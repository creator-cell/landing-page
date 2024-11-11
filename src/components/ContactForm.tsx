"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the validation schema with Zod
const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }),
});

// Define the form data type based on the schema
type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        // handle form submission logic here, such as sending to an API
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
