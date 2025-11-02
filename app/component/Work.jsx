"use client"

import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
    const [visibleCount, setVisibleCount] = useState(4);


    const handleShowMore = () => {
        setVisibleCount((prev) => {
            const newCount = prev + 4;
            return newCount >= workData.length ? workData.length : newCount;
        });
    };


    const isFinished = visibleCount === workData.length;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>My portfolio </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>My latest work </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfoloi ! Explpore a collection of projects showcasing my expertise in front-end development.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2  my-10 gap-5 dark:text-black'>
                {workData.slice(0, visibleCount).map((project, index) => (
                    <motion.div
                        whileInHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 
                        py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>

                                <div className='flex  gap-2  py-3 justify-start items-center'>

                                    <a href={project.github}><Image src={assets.github} alt='github link' title='github link' /></a><br />
                                    <a href={project.DemoLink} title='link Demo'>
                                        <svg className="w-7 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin ="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                    </a>
                                </div>

                            </div>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {!isFinished ? (
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    onClick={handleShowMore}
                    className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
            py-3 px-10 mx-auto my-20 hover:bg-rose-50 duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover'>
                    Show more <Image src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold} alt='right arrow' className='w-4' />
                </motion.a>
            ) : (
                <motion.a
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://github.com/bitashahsavan' className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full
            py-3 px-10 mx-auto my-20 hover:bg-rose-50 duration-500 dark:text-white dark:border-white dark:hover:bg-dark-hover'>
                    View GitHub
                </motion.a>
            )}

        </motion.div>
    )
}

export default Work