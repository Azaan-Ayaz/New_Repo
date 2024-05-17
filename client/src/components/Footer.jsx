import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
    <div className="text-center md:text-left mb-4 md:mb-0">
      <p className="text-lg font-bold">Techsol Solutions</p>
      <p className="text-sm">Your trusted partner in technology.</p>
    </div>
    <div className="flex justify-center md:justify-end items-center space-x-6">
      <a href="/" className="hover:text-gray-300">
        Home
      </a>
      <a href="/about" className="hover:text-gray-300">
        About
      </a>
      <a href="/services" className="hover:text-gray-300">
        Professional Services
      </a>
      <a href="/contact" className="hover:text-gray-300">
        Contact
      </a>
    </div>
  </div>
</footer>

 
    </>
  )
}

export default Footer
