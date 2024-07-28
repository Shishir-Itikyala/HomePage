import React from 'react'
import Mentor from './Mentor'
import img1 from '../utils/image2.png'
import img12 from '../utils/img1.png'
import img2 from '../utils/img2.png'
import img3 from '../utils/img3.png'
import img4 from '../utils/img4.png'
import img5 from '../utils/img5.png'
import img6 from '../utils/img6.png'
import img7 from '../utils/img7.png'
import img8 from '../utils/img8.png'
import img9 from '../utils/img9.png'
import img10 from '../utils/img10.png'
import img11 from '../utils/img11.png'
function Mentors() {
  return (
    <div className="my-96">
      <h1 className='text-center text-5xl font-bold'>
        We're backed by incredible 
      </h1>
      <h1 className="text-center flex justify-center my-5 text-8xl font-semibold">
        <p className='bg-[#06F4F9] px-4 pb-3'>mentors</p>&<p className='bg-[#06F4F9] px-4 pb-3'> investors</p>
        </h1>   
        <div className="d-flex justify-content-center">
        <div className="col-md-8">
        <div className="grid grid-cols-4">
            <div><Mentor img={img1} name="Mandeep Manocha" org="Cashify"/></div>
            <div><Mentor img={img2} name="Priyesh Jaiswal" org="Flipkart"/></div>
            <div><Mentor img={img3} name="Dhruv Kumar" org="Angel Investor"/></div>
            <div><Mentor img={img4} name="Neerav Jain" org="Angel Investor"/></div>
            <div><Mentor img={img5} name="Varun Miglani" org="Angel Investor"/></div>
            <div><Mentor img={img6} name="Vikas Lakhani" org="InstaOffice"/></div>
            <div><Mentor img={img7} name="Alok Kohli" org="Pepsico"/></div>
            <div><Mentor img={img8} name="M Ramakrishnan" org="Investor"/></div>
            <div><Mentor img={img9} name="Sandeep Nailwal" org="Polygon"/></div>
            <div><Mentor img={img10} name="Abhinav Kumar" org="Paytm"/></div>
            <div><Mentor img={img11} name="Nikhil Thomas" org="Udaan"/></div>
            <div><Mentor img={img12} name="Rishav Agarwal" org="Picxele"/></div>
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default Mentors
