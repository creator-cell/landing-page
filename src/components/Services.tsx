import React from 'react';

const Services = () => {
    const serviceDetails = [
        { name: "Custom Software Development", color: "#FF5733" },
        { name: "Cloud Enablement", color: "#33C9FF" },
        { name: "IT Management System", color: "#FF33A6" },
        { name: "Digital Transformation", color: "#33FF57" },
        { name: "Software Modernization", color: "#335BFF" },
        { name: "Software Consulting", color: "#FF8C33" },
    ];

    return (
        <div className="w-full bg-black">
            <div className="container w-full">
                <div className="w-full pb-8">
                    <h1 className="text-[#c1c1c5] text-center text-[20px] font-[400] leading-[1.6]">
                        Front Cloud is the <span className="text-[#FEFEFF]">most trusted</span> commerce solution provider.
                    </h1>
                    <h1 className="text-[#c1c1c5] text-center text-[13px] font-[400] leading-[1.6]">
                        The Forrester Wave™ B2C and B2B Commerce Solutions Q2, 2022
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {serviceDetails.map((service, index) => (
                        <ServiceCard key={index} name={service.name} color={service.color} />
                    ))}
                </div>
            </div>
        </div>
    );
};





const ServiceCard = ({ name, color }: { name: string, color: string }) => {
    return (
        <div className={`p-4 rounded-md text-white`} style={{ backgroundColor: color }}>
            <h2 className="text-lg font-semibold">{name}</h2>
        </div>
    );
};



export default Services
