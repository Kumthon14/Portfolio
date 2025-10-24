import React from 'react'
import Projectcard from '../sub/Projectcard'

const Project = () => {
    return (
        <div id='project' className='flex flex-col items-center justify-center py-30'>
            <h1 className='text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Project
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-10 items-center justify-center px-10'>
                <Projectcard
                    src="/n8n.jpg"
                    title="ระบบสรุปไฟล์ PDF ด้วย Agentic-AI"
                    description="ระบบส่งไฟล์สรุปผ่านอีเมลด้วย n8n ที่รันอยู่บน Azure Cloud และใช้ในการเก็บข้อมูล"
                />
                <Projectcard
                    src="/Pattern.png"
                    title="การพัฒนาโมเดล CNN สำหรับการรู้จำรูปแบบแท่งเทียนทางเทคนิค"
                    description="เว็บไซต์สำหรับการแจ้งเตือนหุ้นที่ติดตามไว้ เมื่อมี Pattern เกิดขึ้น"
                />
                <Projectcard
                    src="/Port.png"
                    title="Portfolio"
                    description="เว็บไซต์ Portfolio พัฒนาด้วย NextJS"
                />
            </div>
        </div>
    )
}

export default Project