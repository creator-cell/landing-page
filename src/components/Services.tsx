import React from 'react';

const Services = () => {
    const serviceDetails = [
        {
            name: "Custom Software Development",
            description: "When bullding custom software from scratch, we ensure workflows that are easily understandable for users, maintainable code, and comprehensive supporting documentation.",
            color: "#FF5733"
        },
        {
            name: "Cloud Enablement",
            description: "We will help you leverage cloud possibilities and ensure easy scalability, advanced security, and cost savings for your infrastructure and apps hosted in the cloud.",
            color: "#33C9FF"
        },
        {
            name: "IT Management System",
            description: "We will help you standard by standard to implement Optimize and achieve your objective like Resilience to cyber-attacks, Preparedness for new threats Data integrity, confidentiality and availability, Security across all supports, Organization-wide protection Cost savings",
            color: "#FF33A6"
        },
        {
            name: "Digital Transformation",
            description: "Whether you plan to digitally transform one business process or all the business areas, we will analyze what challenges you need to solve and develop a fitting I strategy.",
            color: "#33FF57"
        },
        {
            name: "Software Modernization",
            description: "We will assess your legacy software and offer modernization activities to improve its overall efficiency and cut software maintenance costs,",
            color: "#335BFF"
        },
        {
            name: "Software Consulting",
            description: "We will address any software-related challenges or blockers to help you avoid costly mistakes when building new software or draw maximum business value from your existing systems and products.",
            color: "#FF8C33"
        },
    ];

    return (
        <div className="w-full bg-black ">
            <div className="container w-full">
                <div className="w-full pb-8">
                    <h1 className="text-[#c1c1c5] text-center text-[20px] font-[400] leading-[1.6]">
                        Front Cloud is the <span className="text-[#FEFEFF]">most trusted</span> commerce solution provider.
                    </h1>
                    <h1 className="text-[#c1c1c5] text-center text-[13px] font-[400] leading-[1.6]">
                        The Forrester Wave™ B2C and B2B Commerce Solutions Q2, 2022
                    </h1>

                </div>
                <div className="flex flex-col gap-y-16 py-8 w-full items-center justify-center">
                    {serviceDetails.map((service, index) => (
                        <ServiceCard
                            key={index}
                            name={service.name}
                            description={service.description}
                            color={service.color}
                            isReversed={index % 2 !== 0}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};





const ServiceCard = ({ name, color, isReversed, description }: { name: string, color: string, isReversed: boolean, description: string }) => {
    return (
        <div className={`w-full flex flex-col relative ${isReversed ? "sm:flex-row-reverse" : "sm:flex-row"} justify-between items-start gap-x-16 gap-y-4`}>
            <div className={`w-full sm:w-1/2 relative  flex flex-col  `}>
                <div className={`p-6 py-9 rounded-md text-white w-full sm:w-80 z-50 ${isReversed ? "self-end" : "self-start"} `} style={{ backgroundColor: color }}>
                    <h2 className="text-lg font-semibold">{name}</h2>
                </div>
                <div className={`h-px hidden sm:block bg-white w-full absolute ${!isReversed ? "right-0" : "-left-8"}  bottom-1/2 transform ${isReversed ? "-translate-x-1/2" : "translate-x-1/2"} z-30`} />
            </div>
            <div className='text-gray-200 sm:w-1/2 bg-black z-50 min-h-32 p-6'>
                {description}
            </div>
        </div>
    );
};



export default Services
