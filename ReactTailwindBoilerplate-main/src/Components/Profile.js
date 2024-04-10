import React, { useState, useEffect } from 'react'
import dribbble from '../Images/dribbble.jpg'
import select_image from '../Images/select_image.jpg'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const [selectedImage, setSelectedImage] = useState(select_image);
    const [location, setLocation] = useState('');
    const [isProfileSet, setIsProfileSet] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        handleProfileSet(location, uploadedImage);
    }, [selectedImage, location, uploadedImage]);

    const handleProfileSet = (newLocation, newUploadedImage) => {
        if (newLocation !== '' && (newUploadedImage || selectedImage !== select_image)) {
            setIsProfileSet(true);
        } else {
            setIsProfileSet(false);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSelectedImage(reader.result);
            setUploadedImage(file);
        };
        reader.readAsDataURL(file);
    };

    const handleDefaultImage = () => {
        setSelectedImage(dribbble);
        setUploadedImage(null); 
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleNextButtonClick = () => {
        if ((uploadedImage || selectedImage !== select_image) && location) {
            uploadImageToServer();
            navigate('/option');
        }
    };

    const uploadImageToServer = () => {
        const formData = new FormData();
        formData.append('image', uploadedImage);
        formData.append('location', location);
        fetch('/api/users/uploadImage', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Image uploaded successfully:', data);
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
    };

    return (
        <>
            <div className='max-md:hidden'>
                <img className='w-[120px] m-5 mt-7 object-cover' src={dribbble} alt="dribble image" />

                <div className='ml-96'>
                    <p className='text-[39px] font-black'>Welcome! Let's create your profile</p>
                    <p className='text-lg text-slate-500'>Let others get to know you better! You can do these later</p>
                    <p className='font-black text-[23px] mt-12'>Add an avatar</p>
                    <div className='flex mt-10'>
                        <div className='flex justify-center items-center w-[210] h-[220]'>
                            <img className={`
                            ${selectedImage === select_image ?
                                    'w-48 h-[195px] px-[73px] py-[80px] rounded-full outline-dashed outline-slate-300'
                                    : 'w-48 h-[195px]'}`}
                                src={selectedImage} alt="" />
                        </div>

                        <div className='mt-7 ml-12'>
                            <div>
                                <input type="file" onChange={handleImageUpload} className='hidden' id="fileUpload" />
                                <label htmlFor="fileUpload" className='rounded-lg py-2.5 px-3.5 cursor-pointer border-2 border-slate-300
                            font-semibold text-base'>
                                    Choose Image</label>
                            </div>
                            <button onClick={handleDefaultImage} className='rounded-lg py-2 cursor-pointer mt-8 text-slate-500
                            font-semibold text-base'>
                                &gt; Or choose one of our defaults</button>

                        </div>
                    </div>

                    <div>
                        <div className='font-black text-[23px] mt-16 mb-10'>Add your location</div>
                        <input className='border-b-2 text-lg border-slate-300 pb-2 outline-none w-[687px] font-semibold
                    placeholder:font-normal' type="text"
                            placeholder='Enter a location' onChange={handleLocationChange} />
                    </div>

                    <button
                        className={`p-2 px-8 w-60 rounded-md text-white mt-16 ${isProfileSet ? 'bg-[#ea4b8b]' : 'bg-[#f8b8d0] mb-16'}`}
                        onClick={handleNextButtonClick}
                    >
                        Next
                    </button>

                    {isProfileSet && (
                        <p className='mt-2 text-slate-500 text-base mb-10'>or Press
                            <span className='font-bold'>Return</span>
                        </p>
                    )}
                </div>
            </div>


            {/* responsive */}
            <div className="px-4 py-6 md:px-0 md:py-10 md:flex md:items-center md:justify-center md:hidden">
                <div className="max-w-lg mx-auto">
                    <img className="w-24 mx-auto mb-5 md:w-[120px]" src={dribbble} alt="dribble image" />

                    <div className="text-center">
                        <p className="text-3xl font-black">Welcome! Let's create your profile</p>
                        <p className="text-lg text-slate-500">Let others get to know you better! You can do these later</p>
                    </div>

                    <div className="mt-12">
                        <p className="font-black text-2xl mb-5">Add an avatar</p>

                        <div className="flex flex-col items-center">
                        <div className='flex justify-center items-center w-[210] h-[220]'>
                            <img className={`
                            ${selectedImage === select_image ?
                                    'w-48 h-[195px] px-[73px] py-[80px] rounded-full outline-dashed outline-slate-300'
                                    : 'w-48 h-[195px]'}`}
                                src={selectedImage} alt="" />
                        </div>

                        <div className='mt-7 '>
                            <div>
                                <input type="file" onChange={handleImageUpload} className='hidden' id="fileUpload" />
                                <label htmlFor="fileUpload" className='rounded-lg py-2.5 px-3.5 cursor-pointer border-2 border-slate-300
                            font-semibold text-base ml-16'>
                                    Choose Image</label>
                            </div>
                            <button onClick={handleDefaultImage} className='rounded-lg py-2 cursor-pointer mt-8 text-slate-500
                            font-semibold text-base mr-24'>
                                &gt; Or choose one of our defaults</button>

                        </div>
                        </div>

                        <div>
                            <p className="font-black text-2xl mb-5">Add your location</p>
                            <input className="w-full border-b-2 pb-1 outline-none font-semibold text-lg placeholder-slate-300" type="text" placeholder="Enter a location" onChange={handleLocationChange} />
                        </div>

                        <button
                            className={`w-full py-2 mt-12 rounded-md text-white ${isProfileSet ? 'bg-pink-500' : 'bg-gray-300'}`}
                            disabled={!isProfileSet}
                            onClick={handleNextButtonClick}
                        >
                            Next
                        </button>

                        {isProfileSet && (
                            <p className="mt-2 text-slate-500 text-sm">or Press <span className="font-bold">Return</span></p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
