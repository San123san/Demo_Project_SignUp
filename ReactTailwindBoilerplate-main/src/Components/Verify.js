import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import dribbble from '../Images/dribbble_black.jpg'
import notification from '../Images/notifications.jpg'
import envelope from '../Images/envelop.jpg'
import dribbble_pink from '../Images/dribbble_gray.jpg'
import internet from '../Images/internet.jpg'
import pink_internet from '../Images/internet_pink.jpg'

function Verify() {
    return (
        <>
            <div className='max-md:hidden'>
                <div className='flex justify-between mx-5 py-3 my-1'>
                    <div className='flex space-x-5 items-center text-slate-500 font-medium'>
                        <img src={dribbble} className='w-[100px] h-[33px]' alt="" />
                        <div>Inspiration</div>
                        <div>Find Work</div>
                        <div>Learn Design</div>
                        <div>Go Pro</div>
                        <div>Hire Designers</div>
                    </div>
                    <div className='flex space-x-5 items-center'>
                        <div className='flex bg-gray-100 rounded-md p-1'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-slate-400 py-2 px-2' />
                            <input type="text" className='outline-none bg-gray-100 w-28' placeholder='Search' />
                        </div>
                        <img src={notification} className='w-[35px] h-[37px]' alt="notification" />
                        <img src={notification} className='rounded-full border-2 w-[39px] h-[37px]' alt="upload_image" />
                        <button className='bg-pink-500 rounded-md p-2 px-4 text-white'>Upload</button>
                    </div>
                </div>
                <div className='border-b-2 border-slate-200'></div>
                <div className='flex justify-center items-center flex-col'>
                    <p className='text-[42px] font-[550] mt-28'>Please verify your email...</p>
                    <img src={envelope} className='w-[180px] h-[135px] my-4' alt="envelope" />
                    <p className='text-slate-500 text-xl my-1 mt-2'>Please verify your email address. We've sent a confirmation email to:</p>
                    <p className='font-black my-3 text-xl'>account@refero.design</p>
                    <p className='text-slate-500 text-xl my-2'>Click the confirmation link in that email to begin using Dribbble</p>
                    <p className='text-slate-500 text-xl text-center my-4'>Didn't receive the email? Check your Span folder, it may have been caught by a filter. If <br />
                        you still don't see it, you can <span className='text-pink-500 font-semibold'>resend the confirmation email.</span></p>
                    <p className='text-slate-500 text-xl mt-1'>Wrong email address? <span className='text-pink-500 font-semibold'>
                        Change it.</span></p>
                </div>
                <div className='flex bg-gray-50 p-[72px] space-x-12 pr-16 pr-32 pb-20'>
                    <div className='mr-3 '>
                        <img src={dribbble_pink} className='w-[118px] h-[41px]' alt="dribble pink" />
                        <p className='py-5 text-base text-slate-700 ml-2 w-[308px]'>Dribbble is the world's leading <br />
                            community for creatives to share, grow, <br />
                            and get hired.</p>
                        <div className='flex items-center space-x-3'>
                            <img className='w-[25px]' src={internet} alt="internet" />
                            <FontAwesomeIcon className='fa-lg text-slate-700' icon={faTwitter} />
                            <FontAwesomeIcon className='fa-lg text-slate-700' icon={faFacebook} />
                            <FontAwesomeIcon className='fa-lg text-slate-700' icon={faInstagram} />
                            <FontAwesomeIcon className='fa-lg text-slate-700' icon={faPinterest} />
                        </div>
                    </div>
                    <div className='text-base space-y-4 text-slate-700'>
                        <p className='font-bold'>For Designers</p>
                        <p>Go Pro!</p>
                        <p>Design blog</p>
                        <p>Overtime podcast</p>
                        <p>Playoffs</p>
                        <p>Weekly Warm-Up</p>
                        <p>Refer a Friend</p>
                        <p>Code of conduct</p>
                    </div>
                    <div className='text-base space-y-4'>
                        <div className='text-base space-y-4'>
                            <p className='font-bold'>Hire designers</p>
                            <p>Post a job opening</p>
                            <p>Post a freelance
                                project</p>
                            <p>Search for designers</p>
                        </div>
                        <div className='text-base space-y-4'>
                            <p className='font-bold'>Brands</p>
                            <p>Advertise with us</p>
                        </div>
                    </div>
                    <div className='text-base space-y-4'>
                        <p className='font-bold'>Company</p>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Media kit</p>
                        <p>Testimonials</p>
                        <p>API</p>
                        <p>Terms of service</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                    </div>
                    <div className='text-base space-y-4'>
                        <div className='text-base space-y-4'>
                            <p className='font-bold'>Directories</p>
                            <p>Design jobs</p>
                            <p>Designer for hire</p>
                            <p>Freelance designers <br />for hire</p>
                            <p>Tags</p>
                            <p>Places</p>
                        </div>
                        <div className='text-base space-y-4'>
                            <p className='font-bold'>Design assets</p>
                            <p>Dribbble Marketplace</p>
                            <p>Creative Market</p>
                            <p>Fontspring</p>
                            <p>Font Squirrel</p>
                        </div>
                    </div>
                    <div className='text-base space-y-4'>
                        <p className='font-bold'>Design Resource</p>
                        <p>Freelacing</p>
                        <p>Desing Hiring</p>
                        <p>Desing Portfolio</p>
                        <p>Desing Education</p>
                        <p>Creative Process</p>
                        <p>Design Industry <br /> Trends</p>
                    </div>
                </div>

                <div className='bg-gray-50 px-[70px]'>
                    <div className='border-b-2 border-slate-200 px-[70px]'></div>
                    <div className='flex justify-between pb-10 bg-gray-50 text-gray-500 text-sm py-10'>
                        <div>&#169; 2023 Dribbble. All rights reserved.</div>
                        <div className='flex space-x-1 items-center'>
                            <span className='font-bold text-black'>20,501,853</span> shots dribbbled
                            <img className='w-[35px]' src={pink_internet} alt="" />
                        </div>
                    </div>
                </div>
            </div>





            {/* responsive */}
            <div className='md:hidden'>
                <div className="flex justify-between items-center px-4 py-2 flex-col">
                    <div className="flex items-center space-x-3">
                        <img src={dribbble} className="w-24 h-auto" alt="" />
                        <div className="flex flex-col text-gray-500 font-medium text-sm md:text-base">
                            <div className='flex text-center items-center space-x-2 mb-3'>
                                <div>Inspiration</div>
                                <div>Find Work</div>
                                <div>Learn Design</div>
                            </div>
                            <div className='flex space-x-10 mb-3'>
                                <div>Go Pro</div>
                                <div>Hire Designers</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex bg-gray-100 rounded-md p-1">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 p-2" />
                            <input type="text" className="outline-none bg-gray-100 w-24 md:w-28" placeholder="Search" />
                        </div>
                        <img src={notification} className="w-9 h-auto" alt="notification" />
                        <img src={envelope} className="w-9 h-auto rounded-full border-2 border-gray-300" alt="upload_image" />
                        <button className="bg-pink-500 rounded-md p-2 px-4 text-white">Upload</button>
                    </div>
                </div>
                <hr className="border-b-2 border-gray-200" />
                <div className="text-center py-8 px-4 md:px-8">
                    <p className="text-3xl font-semibold">Please verify your email...</p>
                    <img src={envelope} className="w-48 h-auto my-4 ml-24" alt="envelope" />
                    <p className="text-gray-500 text-lg my-2">Please verify your email address. We've sent a confirmation email to:</p>
                    <p className="font-black my-3 text-lg">account@refero.design</p>
                    <p className="text-gray-500 text-lg my-2">Click the confirmation link in that email to begin using Dribbble</p>
                    <p className="text-gray-500 text-lg my-4">Didn't receive the email? Check your Span folder, it may have been caught by a filter. If you still don't see it, you can <span className="text-pink-500 font-semibold">resend the confirmation email.</span></p>
                    <p className="text-gray-500 text-lg mt-1">Wrong email address? <span className="text-pink-500 font-semibold">Change it.</span></p>
                </div>
                <div className="bg-gray-100 px-4 py-8 md:px-8 md:py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                    <div className="text-gray-700">
                        <img src={dribbble_pink} className="w-24 h-auto" alt="dribble pink" />
                        <p className="py-5">Dribbble is the world's leading community for creatives to share, grow, and get hired.</p>
                        <div className="flex items-center space-x-3">
                            <img className="w-5 h-auto" src={internet} alt="internet" />
                            <FontAwesomeIcon className="text-gray-700" icon={faTwitter} />
                            <FontAwesomeIcon className="text-gray-700" icon={faFacebook} />
                            <FontAwesomeIcon className="text-gray-700" icon={faInstagram} />
                            <FontAwesomeIcon className="text-gray-700" icon={faPinterest} />
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <p className="font-semibold mb-3">For Designers</p>
                        <p>Go Pro!</p>
                        <p>Design blog</p>
                        <p>Overtime podcast</p>
                        <p>Playoffs</p>
                        <p>Weekly Warm-Up</p>
                        <p>Refer a Friend</p>
                        <p>Code of conduct</p>
                    </div>
                    <div className="text-gray-700 space-y-4">
                        <div>
                            <p className="font-semibold">Hire designers</p>
                            <p>Post a job opening</p>
                            <p>Post a freelance project</p>
                            <p>Search for designers</p>
                        </div>
                        <div>
                            <p className="font-semibold">Brands</p>
                            <p>Advertise with us</p>
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <p className="font-semibold mb-3">Company</p>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Support</p>
                        <p>Media kit</p>
                        <p>Testimonials</p>
                        <p>API</p>
                        <p>Terms of service</p>
                        <p>Privacy policy</p>
                        <p>Cookie policy</p>
                    </div>
                    <div className="text-gray-700 space-y-4">
                        <div>
                            <p className="font-semibold">Directories</p>
                            <p>Design jobs</p>
                            <p>Designer for hire</p> 
                            <p>Freelance designers for hire</p>
                            <p>Tags</p>
                            <p>Places</p>
                        </div>
                        <div>
                            <p className="font-semibold">Design assets</p>
                            <p>Dribbble Marketplace</p>
                            <p>Creative Market</p>
                            <p>Fontspring</p>
                            <p>Font Squirrel</p>
                        </div>
                    </div>
                    <div className="text-gray-700">
                        <p className="font-semibold mb-3">Design Resource</p>
                        <p>Freelancing</p>
                        <p>Design Hiring</p>
                        <p>Design Portfolio</p>
                        <p>Design Education</p>
                        <p>Creative Process</p>
                        <p>Design Industry Trends</p>
                    </div>
                </div>
                <div className="bg-gray-100 px-4 md:px-8">
                    <hr className="border-b-2 border-gray-200" />
                    <div className="flex justify-between items-center py-4 bg-gray-100 text-gray-500 text-xs md:text-sm">
                        <div>&#169; 2023 Dribbble. All rights reserved.</div>
                        <div className="flex items-center space-x-1">
                            <span className="font-bold text-black">20,501,853</span> shots dribbbled
                            <img className="w-5 h-auto" src={pink_internet} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verify