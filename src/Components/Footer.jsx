import React from 'react'
import logo from '../utils/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
  return (
    <div className="h-[24rem] w-full bg-[#2e2e2e] mt-8">
      <div className="grid grid-cols-2">
        <div className='mx-5 mt-16'>
            <div className='w-full'>
            <img className='h-16' src={logo} alt='logo'/>
            </div>
            <div>
            <p className='text-white my-4 text-2xl font-bold'>
                PedalCircle is an innovation hub by PedalStart for selected early-stage startups to accelerate the journey in 4 months and build them seed-stage investable.
            </p>
            </div>
        </div>
        <div className='text-center mt-16'>
            <div className='text-white text-2xl font-semibold'>
                Contact Us
            </div>
            <div>
            <p className='font-bold text-white text-2xl my-3'>+91 960346002 </p> 
            </div>
            <div>
            <p className=' text-white my-3 text-xl'>connect@pedalstart.com </p> 
            </div>
            <div>
            <p className=' text-white my-3 text-xl mx-32'>SpringHouse Coworking, Grand Mall,Sikandarpur, Gurgaon, Haryana 122004, IN </p> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
