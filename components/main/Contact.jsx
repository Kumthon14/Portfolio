'use client'

import React from 'react'

const Contact = ({ handleShowModal }) => {

    async function handleSubmit(event) {

        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d82d3ad1-b7ba-465f-a642-015956269002");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log('success')
            handleShowModal()
        }
    }

    return (
        <div id='contact' className='flex flex-col items-center justify-center my-35 mx-5'>
            <h1 className='text-[50px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                Contact me
            </h1>
            <div className='flex flex-col md:flex-row gap-10'>
                <form onSubmit={handleSubmit} className='items-center justify-center'>
                    <div className='flex flex-col gap-3 w-full'>
                        <input type="text" name='name' placeholder='Your name' className='Welcome-box text-white px-7 py-5 z-50 text-lg w-100 mx-auto' required />
                        <input type="email" name='email' placeholder='Your email' className='Welcome-box text-white px-7 py-5 z-50 text-lg w-100 mx-auto ' required />
                        <textarea name="message" placeholder='Your message' className='Welcome-box text-white px-7 py-5 z-50 resize-none text-lg w-100 mx-auto'></textarea>
                        <div className='px-1 z-50 text-md font-semibold w-100 mx-auto'>
                            <button type='submit' className='button-primary rounded-2xl text-white py-3 z-50 w-35 cursor-pointer'>Submit</button>
                        </div>
                    </div>
                </form>
                <iframe className='w-full h-90 rounded-2xl z-50' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Som%20Chai%20Phatthana%20Condo%20(Bang%20Kruai),%20Bang%20Kruai,%20Bang%20Kruai%20District,%20Nonthaburi,%20Thailand+(My%20Home)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
    )
}

export default Contact