'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop } from '@/utils/motion'
import { CheckIcon } from '@heroicons/react/24/solid'

const SuccessModal = ({ handleShowModal }) => {
    return (
        <div className='w-screen h-screen fixed top-0 flex backdrop-filter backdrop-blur-md backdrop-brightness-75 items-center justify-center z-50'>

            <div className="relative">

                {/* Tick icon (absolute กับ wrapper) */}
                <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={slideInFromTop(0.01)}
                    className='absolute top-[-1px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'
                >
                    <div className='w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex justify-center items-center shadow-lg'>
                        <CheckIcon className="w-14 h-14 text-white" />
                    </div>
                </motion.div>

                <div className='relative w-90 h-80 flex flex-col gap-6 Welcome-box justify-center items-center'>
                    <div className='font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-cyan-500'>
                        Success
                    </div>
                    <div className='text-center text-lg text-white px-7 font-semibold'>
                        Thanks for contacting me! <br /> I’ll get back to you as soon as possible.
                    </div>
                    <div onClick={handleShowModal} className='button-primary text-xl text-white font-semibold px-20 py-2 rounded-xl mx-auto cursor-pointer'>
                        Close
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SuccessModal