"use client"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { CiTwitter } from 'react-icons/ci';
import { FaSave, FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import Swal from 'sweetalert2';

const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zvtcwo1', 'template_nf79095', form.current, '9n8mklkY2QycfbkeO')
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You successfully sent the message",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="max-w-7xl w-[90%] overflow-x-hidden my-8 mx-auto">
            <div className="lg:flex lg:items-center min-h-[calc(100vh-56px-50px)] flex-row-reverse">
                <div>
                    <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                        Contact us for <br /> more info
                    </h1>

                    <div className="mt-6 space-y-8 md:mt-6">
                        <p className="flex items-start -mx-2">
                            <FiMapPin className="w-6 h-6 mx-2 text-blue-500" />
                            <span className="mx-2 truncate w-72">Savar, Nabinagar, Dhaka</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <FiPhone className="w-6 h-6 mx-2 text-blue-500" />
                            <span className="mx-2 truncate w-72">+8801569148920</span>
                        </p>

                        <p className="flex items-start -mx-2">
                            <FiMail className="w-6 h-6 mx-2 text-blue-500" />
                            <span className="mx-2 truncate w-72">mydulcse62.niter@gmail.com</span>
                        </p>
                    </div>

                    <div className="mt-6 w-80 md:mt-8">
                        <h3>Follow me</h3>

                        <div className="flex lg:justify-start justify-center pt-4 gap-8">
                            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 border-green-500">
                                <a href="https://www.facebook.com/profile.php?id=100021415790435" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
                            </div>
                            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 border-green-500">
                                <a href="https://www.linkedin.com/in/mahim62/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={20} /></a>
                            </div>
                            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 border-green-500">
                                <a href="http://" target="_blank" rel="noopener noreferrer"><CiTwitter size={20} /></a>
                            </div>
                            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 border-green-500">
                                <a href="https://github.com/mydul62" target="_blank" rel="noopener noreferrer"><FaGithub size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="lg:w-[65%] p-6 mt-10 lg:mt-0 mx-auto bg-[#171616] backdrop-blur-md rounded-md shadow-md">
                    <h2 className="text-3xl font-semibold text-green-500 capitalize">Let's Work Together</h2>
                    <p className='text-[#f7f5f5]'>I specialize in front-end website development. Contact me to discuss how I can help elevate your online presence.</p>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                            <div>
                                <input
                                    name="to_name"
                                    id="username"
                                    placeholder="First Name"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <input
                                    name='to_names'
                                    id="lastname"
                                    placeholder="Last Name"
                                    type="text"
                                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <input
                                    id="email"
                                    name="from_name"
                                    type="email"
                                    placeholder="Email Address"
                                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring"
                                />
                            </div>

                            <div>
                                <input
                                    id="phonenumber"
                                    placeholder="Phone Number"
                                    type="number"
                                    className="block w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring"
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <textarea
                                    name="message"
                                    placeholder="Type your message here..."
                                    className="block mt-2 w-full placeholder-gray-400 rounded-lg px-4 h-28 py-2.5 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                ></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="flex items-center justify-center px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform rounded-md hover:bg-gray-600 bg-green-500">
                                <FaSave className="mr-2" /> Send
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;
