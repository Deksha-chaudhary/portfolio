import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const _emailConfig = {
    _serviceId: "service_6m64fvd",
    _templateId: "template_h3borwf",
    _userId: "ao6tmlnT9GY0rehXf"
}



const newObj = () => {
    return { name: "", email: "", subject: "", message: "", }
}
const Contact = () => {
    const [contactDetails, setContactDetails] = useState({ ...newObj() })
    const [isLoading, setIsLoading] = useState(false);



    const handleSend = (e) => {
        e.preventDefault();
        
        const { _serviceId, _templateId, _userId } = _emailConfig
        let templateParams = contactDetails;
        templateParams.subject = templateParams.name;
        setIsLoading(true)
        send(_serviceId, _templateId, templateParams, _userId)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                toast.success('Form submitted successfully.');
                setIsLoading(false);
                setContactDetails({ ...newObj() })
            }, function (err) {
                setIsLoading(false);
                console.log('FAILED...', err);
            });
    }

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setContactDetails(prev => ({
            ...prev, [key]: value
        }))
    }

    return (
        <>
            {isLoading && <div className="loader-container">
                <div className="loader"></div>
            </div>}
            <div id="contact" className="container m-auto mt-16">
                {/* heading */}
                <div className="relative mb-5">
                    <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl"> Contact</h3>
                    <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
                </div>

                {/* card*/}
                <div className="card-wrapper w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col">
                    <div className="left w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
                        <div className="flex-3 w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
                            <div data-aos="zoom-in">
                                <h1 className="text-5xl font-bold sm:text-3xl">You Need</h1>
                                <h3 className="text-xl sm:text-lg">
                                    Beautiful design for your website leave a request
                                </h3>
                            </div>
                        </div>
                        <div className=" flex p-5 items-center justify-center ">
                            <button data-aos="zoom-in" className=" text-yellow-500 font-extrabold text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] ">
                                <BsArrowRight className=" md:rotate-90" />
                            </button>
                        </div>
                    </div>
                    <div className="right flex-1">
                        <form data-aos="zoom-in" className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"    onSubmit={handleSend}  >
                            <input
                                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                                type="name"
                                placeholder="Enter your name"
                                name="name"
                                id='name'
                                value={contactDetails.name}
                                required
                                onChange={handleChange}
                            />
                            <input
                                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                                type="email"
                                placeholder="e.g. example@email.com"
                                name=""
                                id='email'
                                value={contactDetails.email}
                                required
                                onChange={handleChange}
                            />

                            <textarea
                                className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
                                rows="4"
                                cols="50"
                                placeholder="Write your message"
                                name=""
                                id="message"
                                value={contactDetails.message}
                                required
                                onChange={handleChange}
                            />
                            <button className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1" type="submit" >
                                <span >Send</span>
                                <RiSendPlaneFill />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
