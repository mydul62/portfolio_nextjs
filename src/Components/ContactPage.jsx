import { FaSave, FaTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <div>
      <section className="">
        <div className="max-w-7xl w-[90%] py-4 min-h-[calc(100vh-56px-50px)]  mx-auto">
          <div className="lg:flex lg:items-center flex-row-reverse  ">
            <div>
              <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
                Contact us for <br /> more info
              </h1>

              <div className="mt-6 space-y-8 md:mt-8">
                <p className="flex items-start -mx-2">
                  <FiMapPin className="w-6 h-6 mx-2 text-blue-500" />
                  <span className="mx-2  truncate w-72">
                    Savar, Nabinagar, Dhaka
                  </span>
                </p>

                <p className="flex items-start -mx-2">
                  <FiPhone className="w-6 h-6 mx-2 text-blue-500" />
                  <span className="mx-2  truncate w-72">+8801569148920</span>
                </p>

                <p className="flex items-start -mx-2">
                  <FiMail className="w-6 h-6 mx-2 text-blue-500" />
                  <span className="mx-2  truncate w-72">mydulcse62.niter@gmail.com</span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="">Follow me</h3>

                <div className="flex mt-4 -mx-1.5">
                  <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform" href="#">
                    <FaTwitter className="w-10 h-10 fill-current" />
                  </a>

                  <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform" href="#">
                    <FaLinkedinIn className="w-8 h-8" />
                  </a>

                  <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform" href="#">
                    <FaFacebookF className="w-8 h-8" />
                  </a>

                  <a className="mx-1.5 text-gray-400 transition-colors duration-300 transform" href="#">
                    <FaInstagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            <section className="lg:w-[65%] p-6 mt-12 lg:mt0 mx-auto bg-[#171616] backdrop-blur-md rounded-md shadow-md">
              <h2 className="text-3xl font-semibold text-green-500 capitalize">Let's Work Together</h2>
              <p className=' text-[#f7f5f5]'>Lorem ipsum dolor sit amet consectetur </p>
              <form>
                <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                  <div>
                    <input
                      id="username"
                      placeholder="First Name"
                      type="text"
                      className="block w-full px-4 py-2 mt-2      rounded-md  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <input
                      id="lastname"
                      placeholder="Last Name"
                      type="text"
                      className="block w-full px-4 py-2 mt-2      rounded-md  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <input
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      className="block w-full px-4 py-2 mt-2      rounded-md  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <input
                      id="phonenumber"
                      placeholder="Phone Number"
                      type="number"
                      className="block w-full px-4 py-2 mt-2      rounded-md  focus:outline-none focus:ring"
                    />
                  </div>
                  <div className="lg:col-span-2">
                    <textarea
                      placeholder="Type your message here..."
                      className="block mt-2 w-full placeholder-gray-400 rounded-lg     px-4 h-32 py-2.5  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button className="flex items-center justify-center px-8 py-2.5 w-full leading-5 text-white transition-colors duration-300 transform  rounded-md hover:bg-gray-600 bg-green-500">
                    <FaSave className="mr-2" /> Send
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
