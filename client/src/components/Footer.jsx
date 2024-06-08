import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";


const Footer = () => {

  const navigate = useNavigate()
  const eventHandler = (path) => {
    navigate(path)
  }

  return (
    <>
    <div className="px-20 pt-14 pb-2.5 bg-gray-800 font-poppins max-md:px-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-base text-white max-md:mt-10">
            <img
              loading="lazy"
              srcSet="./logo.png"
              alt='Techsol Solutions'
              className="w-2/4 "
            />
            <div className="mt-5 max-md:text-lg text-xl">
              36-E/1, PECHS Block-6 , Shahrah-e-Faisal <br />
              Karachi, Pakistan
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex grow gap-4 items-start mt-14 text-white max-md:mt-10">
            <div className="flex flex-col self-start max-md:text-lg text-xl">
              <div className="text-3xl max-md:text-xl font-semibold text-red-900">Company</div>
              <div className="mt-4 text-3xl max-md:text-2xl max-md:" onClick={() => eventHandler("/")}><FaHome className='full'/></div>
              <div className="mt-4" onClick={() => eventHandler("/about")}>About Us</div>
              <div className="mt-4" onClick={() => eventHandler("/professional-services")}>Professional Services</div>
              {/* <div className="mt-5">FAQs</div> */}
            </div>
            <div className="flex flex-col self-end mt-">
              <div className="flex flex-col items-start pl-11 max-md:text-lg text-xl max-md:pl-5">
              <div className="text-3xl max-md:text-xl font-semibold text-red-900">Product & Solutions</div>
                <div className="self-start mt-4">Engineering Products & Solutions</div>
                <div className="mt-4">IT Product</div>
                <div className="mt-4">Software License</div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-28 max-md:mt-6 ">
  <button className="px-6 py-3 max-md:py-1 max-md:px-2 max-md:text-lg text-xl text-center text-white bg-red-700 hover:bg-red-800 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg "
  onClick={() => eventHandler("/contact-us")}>
    Contact Us
  </button>
</div>

      </div>
      <hr className='mt-3'/>
      <div className="mt-6 text-center max-md:text-lg text-white text-xl font-light">
                © 2024 All Rights Reserved
              </div>
    </div>


 
    </>
  )
}

export default Footer
