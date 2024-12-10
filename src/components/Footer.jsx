import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="bg-black text-white px-20">
            <div className="grid grid-cols-1 md:grid-cols-[38%,auto] gap-6 py-10 px-5 lg:px-20">
                <div className="pt-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Are you ready to discover what makes JST unique?
                    </h2>
                    <p className="text-gray-400">
                        Fill out this form and a member of our team will reach out shortly.
                    </p>
                </div>
                <form className="text-white p-6 rounded-lg space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                            type="text"
                            placeholder="Company Name"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            placeholder="First Name"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-PurpleStart"
                    />
                    <div className="flex items-start space-x-2">
                        <input type="checkbox" className="w-5 h-5 text-purple-500" />
                        <p className="text-sm">
                            By clicking here, I agree to receive SMS from JST Truck Permits.
                            You can reply STOP to opt-out at any time. JST Truck Permits will
                            use the data provided in accordance with the{" "}
                            <Link
                                to="/"
                                className="text-purple-500 underline hover:text-PurpleStart"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white p-2 rounded-md hover:bg-PurpleStart transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <footer className="text-white px-6">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-y-[1px] border-red-50 py-6">
                    {/* Logo and Social Media Section */}
                    <div>
                        <div className="flex items-center space-x-2 mb-4 border-b-[1px] border-red-50 pb-3">
                            <img
                                src="/logo.jpg"
                                alt="JST Truck Permits"
                                className="w-12 h-auto filter invert"
                            />
                            <h2 className="text-sm font-bold">TIMEXSOLUTIONX</h2>
                        </div>
                        <div className="flex space-x-4 mt-2">
                            <p className="font-bold text-sm">Follow Us</p>
                            <Link to="/" className="text-white">
                                <FaFacebookF />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaInstagram />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaLinkedinIn />
                            </Link>
                            <Link to="/" className="text-white">
                                <FaTwitter />
                            </Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 border-b-[1px] border-red-50 pb-3">Contact</h3>
                        <p className="flex items-center text-gray-400 mb-2 text-xs">
                            <HiLocationMarker className="text-purple-500 mr-2" /> Fresno, CA 93722, United States
                        </p>
                        <p className="flex items-center text-gray-400 mb-2 text-xs">
                            <HiPhone className="text-purple-500 mr-2" /> 559-389-7772
                        </p>
                        <p className="flex items-center text-gray-400 text-xs">
                            <HiMail className="text-purple-500 mr-2" /> jst@jsttruckpermits.com
                        </p>
                    </div>

                    {/* Services Section */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 border-b-[1px] border-red-50 pb-3">Services</h3>
                        <ul className="space-y-2 text-gray-400 text-xs">
                            <li>Managing Truck Permits</li>
                            <li>DOT Drug & Alcohol Testing</li>
                            <li>DOT Audit Support</li>
                            <li>New Trucking Company Setup</li>
                            <li>Trailer Leasing Services</li>
                            <li>IRP Plates</li>
                        </ul>
                    </div>

                    {/* Working Time & Locations */}
                    <div>
                        <h3 className="font-bold text-sm mb-4 border-b-[1px] border-red-50 pb-3">Working Time</h3>
                        <p className="text-gray-400 mb-6 text-xs">
                            Monday - Friday <br /> 09:00 AM - 05:30 PM PT
                        </p>
                        <h3 className="font-bold text-sm mb-4 border-b-[1px] border-red-50 pb-3">Our Locations</h3>
                        <div className="flex space-x-4">
                            <img
                                src="footer-map.webp"
                                alt="Map"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm py-3">
                    <p className="text-xs">
                        Copyright © 2023 JST Trucking Permits - All Rights Reserved -{" "}
                        <Link to="/" className="text-purple-500 underline text-xs">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
