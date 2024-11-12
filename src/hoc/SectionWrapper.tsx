
// const SectionWrapper = ({ Component, idName }: { Component: any, idName: string }) =>
//     function HOC() {
//         return (
//             <section
//                 className={`padding max-w-7xl mx-auto relative z-0`}
//             >
//                 <span className='mt-[-96px] pb-[96px] block' id={idName}>
//                     &nbsp;
//                 </span>

//                 <Component />
//             </section>
//         );
//     };

// export default SectionWrapper;

// components/SectionWrapper.js
import React from 'react';

const SectionWrapper = ({ Component, idName, className = '' }: { Component: React.FC, idName: string, className?: string }) => {
    return (
        <section className={`relative mx-auto ${className} pt-[6rem]`}>
            {/* Hidden anchor for precise positioning */}
            {/* <span id={idName} className="absolute -top-[6rem] h-[6rem]" aria-hidden="true" /> */}
            <span className='mt-[-120px] pb-[96px] block' aria-hidden="true" id={idName}>
                &nbsp;
            </span>
            <Component />
        </section>
    );
};

export default SectionWrapper;

