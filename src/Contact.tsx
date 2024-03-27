
export default function Contact(){

    const contacts = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.314 28.323"><path d="m27.728 20.384-4.242-4.242a1.982 1.982 0 0 0-1.413-.586h-.002c-.534 0-1.036.209-1.413.586L17.83 18.97l-8.485-8.485 2.828-2.828c.78-.78.78-2.05-.001-2.83L7.929.585A1.986 1.986 0 0 0 6.516 0h-.001C5.98 0 5.478.209 5.101.587L.858 4.83C.729 4.958-.389 6.168.142 8.827c.626 3.129 3.246 7.019 7.787 11.56 6.499 6.499 10.598 7.937 12.953 7.937 1.63 0 2.426-.689 2.604-.867l4.242-4.242c.378-.378.587-.881.586-1.416 0-.534-.208-1.037-.586-1.415zm-5.656 5.658c-.028.028-3.409 2.249-12.729-7.07C-.178 9.452 2.276 6.243 2.272 6.244L6.515 2l4.243 4.244-3.535 3.535a.999.999 0 0 0 0 1.414l9.899 9.899a.999.999 0 0 0 1.414 0l3.535-3.536 4.243 4.244-4.242 4.242z"/></svg>,
            name: "Phone",
            contact: "+639561787934"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g data-name="7-Email-Arrow up"><path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h13v-2H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23V17h2V7a3 3 0 0 0-3-3zM16 14.77 3.72 6h24.56z"/><path d="m24.29 18.29-4 4 1.41 1.41 2.3-2.29V29h2v-7.59l2.29 2.29 1.41-1.41-4-4a1 1 0 0 0-1.41 0z"/></g></svg>,
            name: "E-mail",
            contact: "jrRanara@mcm.edu.ph"
        },
    ]

    return (
        <section id="contact-section" className="flex items-center justify-center py-20 bg-[#f9f9f9]">
            <div className="flex flex-col gap-16 lg:w-[70vw]">
                <div className='space-y-2'>
                    <h1 className="text-[1.1rem] text-blue-400 font-hnd-black leading-[2rem] text-center lg:text-start">CONTACT</h1>
                    <h1 className='text-[1.3rem] font-hnd-black leading-[2rem] text-center lg:text-start'>Looking forward to working with you! 👇</h1>
                </div>
                <div className='flex flex-col gap-12 lg:flex-row'>
                    {contacts.map((contact) => {
                        return (
                            <div className='flex flex-col items-center gap-4 lg:flex-row lg:text-start'>
                                <div className='size-[24px] box-content p-4 rounded-[50%] icon-shadow'>
                                    {contact.icon}
                                </div>
                                <div className='text-center lg:text-start'>
                                    <h1 className='text-lg font-hnd-black'>{contact.name}</h1>
                                    <h1 className='text-md font-hnd-light'>{contact.contact}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}