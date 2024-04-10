import React, { useState } from 'react';
import dribbble from '../Images/dribbble.jpg';
import option_1 from '../Images/option_1.jpg';
import option_2 from '../Images/option_2.jpg';
import option_3 from '../Images/option_3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'

function Option() {
    const [selectedOption, setSelectedOption] = useState(-1);
    const navigate = useNavigate();

    const options = [
        { src: option_1, alt: "option_1", text: "I'm a designer looking to share my work" },
        { src: option_2, alt: "option_2", text: "I'm looking to hire a designer" },
        { src: option_3, alt: "option_3", text: "I'm looking for design inspiration" },
    ];

    const handleFinish = async () => {
        try {
            await fetch('api/users/saveOption', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selectedOption })
            });
            navigate('/verify');
        } catch (error) {
            console.error('Error finishing:', error);
        }
    };


    return (
        <>
            <div className='max-md:hidden'>
                <div className='overflow-x-hidden'>
                    <div className='flex'>
                        <img className='w-[120px] m-5 mt-7 object-cover' src={dribbble} alt="dribble image" />
                        <button className='bg-slate-100 text-slate-500 text-lg font-bold mt-5 w-16 ml-3 rounded-md pb-1 my-5'> &lt; </button>
                    </div>

                    <div>
                        <p className='text-4xl font-bold text-center mb-7'>What brings you to Dribbble?</p>
                        <p className='text-lg text-center text-slate-500'>Select the options that best describe you.
                            Dont't worry, you can explore other options later.</p>
                    </div>

                    <div className='flex space-x-10 p-10 mt-24 px-56'>
                        {options.map((option, index) => (
                            <div key={index} className=''>
                                <div onClick={() => setSelectedOption(index)}
                                    className={`border-2 rounded-lg flex flex-col justify-center items-center px-7 
                                    ${selectedOption === index ? 'border-pink-500 p-2' : 'border-slate-400 p-5'}`}>

                                    <img className={`${selectedOption === index ? 'relative top-[-100px]' : ''}`}
                                        src={option.src} alt={option.alt} />
                                    <p className={`text-center text-xl font-black ${selectedOption === index ? 'relative top-[-90px]' : ''}`}>
                                        {option.text}</p>

                                    {selectedOption === index && <p className='relative top-[-80px] w-[269px] h-[23px] text-center text-sm'>With over 7 million shots from a vast
                                        community of designers, Dribbble is the leading source
                                        for design inspiration.</p>}
                                    <div className='w-6 h-6 mt-3'>
                                        {selectedOption === index ? <FontAwesomeIcon icon={faCircleCheck}
                                            className='text-pink-500 rounded-full bg-white w-6 h-6 mb-10 relative top-[-18px]' />
                                            : <div className='border-slate-300 border-2 rounded-full w-6 h-6'></div>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={handleFinish} className={`rounded-md p-3 text-white text-center px-20 py-2 my-10 mx-[662px] 
                    ${selectedOption >= 0 ? 'bg-pink-500' : 'bg-[#f8b8d0]'}`
                    }>Finish</button>

                    {selectedOption >= 0 && <p className='mt-2 text-slate-500 text-base mb-10 text-center'>or Press
                        <span className='font-bold'>Return</span></p>}
                </div>
            </div>



            <div className="px-4 py-6 md:hidden">
                <div>
                    <div className="flex items-center">
                        <img className="w-16 h-16 mt-5 mr-3 object-cover" src={dribbble} alt="dribble image" />
                        <button className="bg-slate-100 text-slate-500 text-lg font-bold mt-5 rounded-md pb-1"> &lt; </button>
                    </div>

                    <div>
                        <p className="text-2xl font-bold text-center mt-7 mb-4">What brings you to Dribbble?</p>
                        <p className="text-base text-center text-slate-500 mb-10">Select the options that best describe you. Don't worry, you can explore other options later.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {options.map((option, index) => (
                            <div key={index} onClick={() => setSelectedOption(index)} className={`border-2 rounded-lg p-4 ${selectedOption === index ? 'border-pink-500 bg-pink-100' : 'border-slate-400'}`}>
                                <img className="w-20 h-20 mb-2 mx-auto object-cover" src={option.src} alt={option.alt} />
                                <p className="text-base font-semibold text-center mb-2">{option.text}</p>
                                {selectedOption === index && <p className="text-sm text-center mb-4">With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>}
                                <div className="w-6 h-6 mx-auto">
                                    {selectedOption === index && <FontAwesomeIcon icon={faCircleCheck} className="text-pink-500 rounded-full bg-white w-6 h-6" />}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={handleFinish} className={`block mx-auto mt-8 p-3 rounded-md text-white px-16 ${selectedOption >= 0 ? 'bg-pink-500' : 'bg-gray-300'}`}>Finish</button>

                    {selectedOption >= 0 && <p className="mt-2 text-slate-500 text-sm text-center">or Press <span className="font-bold">Return</span></p>}
                </div>
            </div>
        </>
    );
}

export default Option;
