import React, { useEffect, useState } from 'react';
import { LuMenu } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isEngineeringOpen, setIsEngineeringOpen] = useState(false);


  const navigate = useNavigate();

  const handleEvent = (path) => {
    navigate(path);
    setOpen(false); // Close the menu after navigating
    setIsProductsOpen(false); // Close the products dropdown after navigating
  };

  const handleProductsToggle = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const handleEngineeringToggle = () => {
    setIsEngineeringOpen(!isEngineeringOpen);
  };
  
  useEffect(() => {
    if (!open) {
      setIsProductsOpen(false);
      
    }
  }, [open]);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-custom1 text-white  p-4 md:py-0  flex items-center w-full z-40 justify-between">
        <div className='flex justify-between w-full md:mx-10'>
          <div>
            <img src="./logo.png" alt="Techsol Solutions"  className='w-1/5 md:py-2 max-md:w-1/3 md:mt-4'/>
          </div>
          <div className="flex max-md:hidden font-poppins text-[24px] items-center md:space-x-10">
            <div onClick={() => handleEvent("/")} className="cursor-pointer text-4xl max-"><FaHome className='full'/></div>
            <div onClick={() => handleEvent("/about")} className="cursor-pointer">About</div>
            <div onClick={() => handleEvent("/professional-services")} className="cursor-pointer text-nowrap">Professional Services</div>
            
            <div className="relative text-nowrap">
            <div onClick={handleProductsToggle} className="cursor-pointer">Products & Solutions</div>
            {isProductsOpen && (
              <div className="absolute bg-custom2 w-full font-medium text-xl text-custom1 p-4 text-wrap top-full left-0  mt-1 rounded-md shadow-lg">
                <div onClick={() => handleEvent("/engineering-products-and-solutions")} className="cursor-pointer">Engineering Products and Solutions</div>
                <div onClick={() => handleEvent("/it-products")} className="cursor-pointer mt-2">IT Products</div>
                <div onClick={() => handleEvent("/software_license")} className="cursor-pointer mt-2">Software License</div>
              </div>
            )}
          </div>

            {/* <div onClick={handleProductsToggle} className="cursor-pointer">Products & Solutions</div> */}
            <div onClick={() => handleEvent("/contact")} className="cursor-pointer">Contact</div>
          </div>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white focus:outline-none">
          {open ? <IoCloseCircleSharp className="w-8 h-8" /> : <LuMenu className="w-8 h-8" />}
        </button>
      </div>
      {/* Responsive Navigation */}
      {open && (
        <div className="md:hidden bg-custom2 font-medium text-xl text-custom1 p-4">
          <div className="flex flex-col space-y-4">
            <div onClick={() => handleEvent("/")} className="cursor-pointer text-3xl"><FaHome /></div>
            <div onClick={() => handleEvent("/about")} className="cursor-pointer">About</div>
            <div onClick={() => handleEvent("/professional-services")} className="cursor-pointer">Professional Services</div>
            <div onClick={handleProductsToggle} className="cursor-pointer">Products & Solutions</div>
            {/* Dropdown for Products & Solutions on small screens */}
      {isProductsOpen && (
        <div className="md:hidden bg-custom2 font-medium text-xl text-custom1 p-4">
          <div className="flex flex-col space-y-4">
            <div onClick={() => handleEvent("/engineering-products-and-solutions")} className="cursor-pointer">Engineering Products and Solutions</div>
            <div onClick={() => handleEvent("/it-products")} className="cursor-pointer">IT Products</div>
            <div onClick={() => handleEvent("/software-license")} className="cursor-pointer">Software License</div>
          </div>
        </div>
      )}
      {/* Dropdown for Products & Solutions on large screens */}
      {open && isProductsOpen && (
        <div className="hidden md:block bg-custom2 font-medium text-xl text-custom1 p-4">
          <div className="flex flex-col space-y-4">
            <div onClick={() => handleEvent("/engineering-products-and-solutions")} className="cursor-pointer">Engineering Products and Solutions</div>
            <div onClick={() => handleEvent("/it-products")} className="cursor-pointer">IT Products</div>
            <div onClick={() => handleEvent("/software-license")} className="cursor-pointer">Software License</div>
          </div>
        </div>
      )}
            <div onClick={() => handleEvent("/contact")} className="cursor-pointer">Contact</div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default Header;
