'use client'
import React, { useEffect, useState } from 'react';
import { experiences, skills } from '@/constants';
import Image from 'next/image';
import ParallaxText from './ParallaxText';
import { motion } from 'framer-motion';

const Resume = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        console.log('window.scrollY:', window.scrollY); 
        if (window.scrollY > 1000) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6 } }
    };

    const slideUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <>
            {/* Resume Title */}
            <motion.div
                className="p-10 flex flex-col justify-center items-center space-y-9"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-myBlue text-6xl">Resume</h1>
                <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">Experience</p>
            </motion.div>

            {/* Experience and Image Section */}
            <motion.div
                className="flex flex-col lg:flex-row lg:items-start lg:justify-between mt-10 gap-6  p-10"
                variants={slideUp}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Experience Details */}
                <div className="lg:w-1/2 ">
                    <motion.div
                        className="border-l-4 border-[#032668] pl-6 ml-20"
                        variants={slideUp}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                className="mb-10 relative group"  
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {/* Experience Icon */}
                                <motion.div
                                    className="absolute -left-11 top-4 rounded-full w-10 h-10 bg-white flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {experience.icon && (
                                        <Image
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            width={40}
                                            height={40}
                                        />
                                    )}
                                </motion.div>

                                {/* Experience Details with hover grow effect */}
                                <motion.div
                                    className="bg-gray-100 p-6 rounded-lg shadow-md ml-12 text-start transition-transform duration-300 group-hover:scale-105"  
                                    variants={slideUp}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h3 className="text-xl font-semibold text-[#032668]">{experience.title}</h3>
                                    <h4 className="text-lg text-gray-600">{experience.company_name}</h4>
                                    <p className="text-sm text-gray-500">{experience.date}</p>
                                    <ul className="list-disc list-inside mt-2">
                                        {experience.points.map((point, i) => (
                                            <li key={i} className="text-gray-700 text-sm">{point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Image */}
                <motion.div
                    className="lg:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src='/laptop.png'
                        alt='laptop'
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>

            {/* Parallax Text Section */}
            <div className="w-full py-10 text-white">
                <ParallaxText baseVelocity={-30}>
                    <span className="leading-normal">Next.js ~ React ~ Java ~ Python ~ C# ~</span>
                </ParallaxText>
                <ParallaxText baseVelocity={30}>
                    <span className="leading-normal">Frontend ~ Backend ~ Full-Stack Development ~ Desktop App Dev ~</span>
                </ParallaxText>
            </div>

            {/* Skills Section */}
            <div className='py-10 flex flex-col justify-center items-center '>
                <p className="text-myBlue border-b-4 border-myBlue font-LuckiestGuy">My Skills</p>
                <motion.div
                    className='container mt-16 flex flex-wrap justify-center gap-12'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className='block-container w-20 h-20 '
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className='btn-back rounded-xl'/>
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <Image
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
                
            </div>
        
            {/* {showScrollTop && ( */}
                <motion.button
                    onClick={handleScrollTop}
                    className="fixed bottom-10 right-10 bg-myBlue text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                >
                    Back To Top
                </motion.button>
            {/* )} */}

            <motion.div className='flex justify-center items-center mt-4 h-24'>
                <p className='text-myBlue'>Copyright @ 2024 By <span className='text-myBlue font-bold'>Muhammad Maaz</span></p>
            </motion.div>
    
        </>
    );
};

export default Resume;
