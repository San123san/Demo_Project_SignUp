import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import signImage from '../Images/SignUp.jpg'

function Pages() {
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    checkbox: false,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, checkbox: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullname || !formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
    } else if (!formData.checkbox) {
      setError('Please check the checkbox.');
    } else {
      setError('');
      // Inside your handleSubmit function after fetching data
      try {
        const response = await fetch('/api/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          navigate('/profile');
        } else if (response.status === 400) {
          setError('Username or email already exists');
        } else {
          setError(data.error || 'Internal server error');
        }
      } catch (error) {
        console.error('Error registering user:', error);
        setError('Internal server error');
      }

    }
  };


  return (
    <>
      <div className='flex max-md:hidden'>
        <img src={signImage} className='h-screen w-1/2 object-cover' alt="" />

        <div className='w-full'>
          <div className='text-right p-4'>
            <div className='p-2 text-base'>Already a Member? <span className='text-[#4d4593] cursor-pointer'>Sign In</span></div>
          </div>

          <div className='ml-64 mr-[267px]'>
            <div className='font-bold text-3xl'>
              Sign up to Dribbble
            </div>

            {/* error message */}
            <div className={`text-[#db6366] p-2 py-4 ${error ? '' : 'm-3'}`}>
              {error && (
                <p className="list-disc">
                  <li>{error}</li>
                </p>
              )}
            </div>


            <form onSubmit={handleSubmit}>
              {/* Name And Username */}
              <div className='flex space-x-5 pt-2 pb-5'>

                {/* Name */}
                <div>
                  <div className='text-lg font-bold pb-1'>Name</div>
                  <input type="text" name="fullname" placeholder='Name' onChange={handleChange} className='bg-slate-100 p-2 pl-4 w-[240px] rounded-md outline-none' />
                </div>

                {/* Username */}
                <div>
                  <div className='text-lg font-bold pb-1'>Username</div>
                  <input type="text" name="username" placeholder='Username' onChange={handleChange} className='bg-slate-100 p-2 pl-4 w-[240px] rounded-md outline-none' />
                </div>
              </div>

              {/* Email */}
              <div className='pt-5 pb-4'>
                <div className='font-bold pb-1'>Email</div>
                <input type="email" name="email" placeholder='Email' onChange={handleChange} className='bg-slate-100 p-2 pl-4 w-[499px] rounded-md outline-none' />
              </div>

              {/* Password */}
              <div className='pt-5 pb-2'>
                <div className='font-bold pb-1'>Password</div>
                <input type="password" name="password" placeholder='6+ character' onChange={handleChange} className='bg-slate-100 p-2 pl-4 w-[499px] rounded-md outline-none' />
              </div>

              <div className='flex pt-2 pb-8'>
                <input type="checkbox" name="checkbox" onChange={handleCheckboxChange} className="form-checkbox h-9 w-9 text-blue-600" />
                <div className='pl-3 pt-2 text-[16px]'>
                  Creating an account means you're okay with our <span className='text-[#5a4bab]'>Terms of
                    Services, Privacy Policy</span> , and default <span className='text-[#5a4bab]'> Notification <br />
                    Settings.
                  </span>
                </div>
              </div>

              <button type="submit" className='p-2 px-8 w-60 bg-[#ea4b8b] rounded-md text-white'>Create Account</button>

              <div className='text-slate-500 text-xs pt-5'>This site is protected by reCAPTCHA and the Google <br />
                <span className='text-[#5a4bab]'>Privacy Policy</span> and <span className='text-[#5a4bab]'>
                  Terms of Service</span> apply.</div>
            </form>
          </div>
        </div>
      </div>



      {/* responsive */}
      <div className="flex flex-col md:hidden">
      <img src={signImage} className="h-80 md:h-screen md:w-1/2 object-cover" alt="" />

      <div className="w-full ">
        <div className="text-center p-4">
          <div className="p-2 text-base">Already a Member? <span className="text-[#4d4593] cursor-pointer">Sign In</span></div>
        </div>

        <div className="mx-4">
          <div className="font-bold text-3xl text-center ">
            Sign up to Dribbble
          </div>

          {/* error message */}
          <div className={`text-[#db6366] p-2 py-4 ${error ? '' : 'm-3'}`}>
            {error && (
              <p className="list-disc">
                <li>{error}</li>
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="mx-auto">
            <div className="pt-2 pb-5">
              <div className="text-lg font-bold pb-1">Name</div>
              <input type="text" name="fullname" placeholder="Name" onChange={handleChange} className="bg-slate-100 p-2 pl-4 w-full rounded-md outline-none" />
            </div>

            <div className="pt-2 pb-5">
              <div className="text-lg font-bold pb-1">Username</div>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} className="bg-slate-100 p-2 pl-4 w-full rounded-md outline-none" />
            </div>

            <div className="pt-2 pb-5">
              <div className="font-bold pb-1">Email</div>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} className="bg-slate-100 p-2 pl-4 w-full rounded-md outline-none" />
            </div>

            <div className="pt-2 pb-5">
              <div className="font-bold pb-1">Password</div>
              <input type="password" name="password" placeholder="6+ characters" onChange={handleChange} className="bg-slate-100 p-2 pl-4 w-full rounded-md outline-none" />
            </div>

            <div className="flex pt-2 pb-8">
              <input type="checkbox" name="checkbox" onChange={handleCheckboxChange} className="form-checkbox h-9 w-9 text-blue-600" />
              <div className="pl-3 pt-2 text-[16px]">
                Creating an account means you're okay with our <span className="text-[#5a4bab]">Terms of Services, Privacy Policy</span>, and default <span className="text-[#5a4bab]">Notification Settings.</span>
              </div>
            </div>

            <button type="submit" className="p-2 px-8 w-full bg-[#ea4b8b] rounded-md text-white mx-auto md:mx-0">Create Account</button>

            <div className="text-slate-500 text-xs pt-5 text-center">This site is protected by reCAPTCHA and the Google <br />
              <span className="text-[#5a4bab]">Privacy Policy</span> and <span className="text-[#5a4bab]">Terms of Service</span> apply.
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pages
