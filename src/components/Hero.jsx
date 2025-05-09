import React from 'react'
import { HERO_CONTENT } from '../constants';
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 lg:mb-18">
        <div className='flex flex-wrap justify-center content-center text-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center'> {/*lg:items-start*/}
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-5xl font-thin tracking-tight lg:mt-8 lg:text-6xl'>
                        Tales Alves Knauer
                    </motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent'>
                        Desenvolvedor Full Stack
                    </motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
        </div>
    </div>
  );
}; 

export default Hero