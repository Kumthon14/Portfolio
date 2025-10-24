import React from 'react'
import Projectcard from '../sub/Projectcard'

const Achievement = () => {
    return (
        <div id='archievement' className='flex flex-col items-center justify-center py-30'>
            <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Achievement
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 items-center justify-center px-10'>
                <Projectcard
                    src="/Tokio.jpg"
                    title="6th Place Hackathon Tokion Marine"
                    description="งานแข่งขันการแบ่งทีมทำเว็บไซต์ตามโจทย์ เพื่อการหาทีมที่ดีที่สุดไปเข้าฝึกงานที่บริษัท Tokio Marine"
                />
                <Projectcard
                    src="/CDG.jpg"
                    title="4th Place Hackathon CDG"
                    description="งานแข่งขันด้านนวัตกรรมในหัวข้อ “Trust in Tech: AI - Power and KYC for Smart Public Services” "
                />
            </div>
        </div>
    )
}

export default Achievement