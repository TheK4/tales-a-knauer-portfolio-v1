import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { FaAngular } from "react-icons/fa";
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { PiFigmaLogo } from "react-icons/pi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Tecnologias</motion.h2>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <RiReactjsLine className='text-4xl md:text-5xl lg:text-6xl text-cyan-400' />
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <FaNodeJs className='text-4xl md:text-5xl lg:text-6xl text-green-800' />
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <FaAngular className='text-4xl md:text-5xl lg:text-6xl text-red-600' />
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <SiMongodb className='text-4xl md:text-5xl lg:text-6xl text-green-500' />
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <BiLogoPostgresql className='text-4xl md:text-5xl lg:text-6xl text-sky-800' />
            </motion.div>
            <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <BiLogoJavascript className='text-4xl md:text-5xl lg:text-6xl text-yellow-400' />
            </motion.div>
            <motion.div variants={iconVariants(7)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <BiLogoTypescript className='text-4xl md:text-5xl lg:text-6xl text-sky-600' />
            </motion.div>
            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className='rounded-2xl border-4 border-emerald-200 p-4'>
                <PiFigmaLogo className='text-4xl md:text-5xl lg:text-6xl text-white' />
            </motion.div>  
        </motion.div>
    </div>
  )
}

export default Technologies