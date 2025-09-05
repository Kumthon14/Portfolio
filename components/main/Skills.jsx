import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data, Tools } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'
import { SparklesIcon } from '@heroicons/react/24/solid'

const Skills = () => {
    return (
        <section
            id='skills'
            className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-35'
            style={{ transform: "scale(0.9)" }}
        >
            <SkillText />
            <div className='grid grid-rows-3 md:grid-rows-2 gap-x-5 gap-y-8 items-center justify-center'>
                <div className='Welcome-box flex flex-col relative pb-10 overflow-hidden items-start justify-start border border-[#7042f88b] opacity-[0.9]'>
                    <div className='flex flex-row mt-[2rem]'>
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
                        <h1 className='Welcome-text text-[1.8rem] font-semibold font'>Front-End Skills</h1>
                    </div>
                    <div className="flex flex-row justify-evenly flex-wrap mt-6 px-10 gap-5 items-center">
                        {Frontend_skill.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width + 10}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className='Welcome-box flex flex-col relative pb-10 overflow-hidden items-start justify-start border border-[#7042f88b] opacity-[0.9]'>
                    <div className='flex flex-row mt-[2rem]'>
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
                        <h1 className='Welcome-text text-[1.8rem] font-semibold font'>Back-End Skills</h1>
                    </div>
                    <div className="flex flex-row justify-evenly flex-wrap mt-6 px-15 gap-5 items-start">
                        {Backend_skill.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width + 10}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className='Welcome-box flex flex-col relative pb-10 overflow-hidden items-start justify-start md:col-span-2 mx-auto border border-[#7042f88b] opacity-[0.9]'>
                    <div className='flex flex-raw mt-[2rem]'>
                        <SparklesIcon className="text-[#b49bff] mr-[10px] h-10 w-10" />
                        <h1 className='Welcome-text text-[1.8rem] font-semibold font'>Tools</h1>
                    </div>
                    <div className="flex flex-row justify-evenly flex-wrap mt-7 px-15 gap-7 items-center">
                        {Tools.map((image, index) => (
                            <SkillDataProvider
                                key={index}
                                src={image.Image}
                                width={image.width + 10}
                                height={image.height}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className='w-full h-full absolute'>
                <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
                    <video
                        className='w-full h-auto'
                        preload='false'
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>

        </section>
    )
}

export default Skills