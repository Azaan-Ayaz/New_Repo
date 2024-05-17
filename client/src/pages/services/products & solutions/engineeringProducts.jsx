import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import Layout from '../../../components/Layout'


const EngineeringProducts = () => {


  const navigate = useNavigate()

  const eventHandler = () => {
    navigate("/contact")
  }

  return (
    <>
    <Helmet>
      <title>
        Engineering Products - Techsol Solutions
      </title>
    </Helmet>
    <Layout>
     <div className="flex flex-col gap-0 pb-8 bg-white max-md:flex-wrap">
      <img
        loading="lazy"
        srcSet="/engineering_products_solutions/image.png"
        className="gap-0 w-full aspect-[2.7] max-md:flex-wrap max-md:max-w-full"
      />
      <div className="flex gap-0 font-poppins justify-center items-center px-16 py-16 w-full font-bold text-center text-white bg-red-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col gap-5 max-md:gap-2 max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 text-6xl max-md:text-3xl tracking-normal max-md:flex-wrap max-md:max-w-full ">
            PRODUCTS, SERVICES & SOLUTIONS
          </div>
          <div className="gap-0 mt-6 mr-6 text-5xl tracking-tight max-md:text-2xl max-md:mt-1 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            Engineering products & Solutions
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3.5 self-center px-5 w-full max-w-[1643px] max-md:flex-wrap max-md:max-w-full">
        <div className="gap-0 text-5xl max-md:text-2xl max-md:font-medium mt-10 font-semibold font-poppins tracking-tight text-red-900 max-md:flex-wrap max-md:max-w-full">
          Test & Measurement
        </div>
        <div className="gap-0 max-md:text-[17px] max-md:tracking-tighter text-2xl font-poppins tracking-tight text-black max-md:flex-wrap max-md:max-w-full">
          We represent world-leading Test & Measurement equipment brands like
          Fluke, Amprobe, Hioki and Megger. Bringing thousands of products to
          meet the requirements of a diverse range of industries, we give our
          customers unique access to the largest range of carefully selected
          test & measurement equipment to meet their technical and budgetary
          requirements.
          <br />
          Being OEM-authorized distributors and resellers, we also extend fully
          backed life cycle support for warranty, calibration as well as
          maintenance services. Our division aims to bring the next-generation
          products which enhance productivity and reduce downtime, while
          minimizing defects.
        </div>
        <img
          loading="lazy"
          srcSet="/engineering_products_solutions/image2.png"
          className="gap-0 self-center w-full aspect-[3.33] max-md:flex-wrap max-md:max-w-full"
        />
      </div>
      <div className="flex gap-0 justify-center items-center px-16 py-12 mt-10 w-full bg-stone-300 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col gap-3.5 mt-0 w-full max-w-[1643px] max-md:flex-wrap max-md:max-w-full">
          <div className="gap-0 text-5xl max-md:text-2xl max-md:font-medium mt-10 font-semibold font-poppins tracking-tight text-red-900 max-md:flex-wrap max-md:max-w-full">
            Process Monitoring, Management & Automation
          </div>
          <div className="gap-0 max-md:text-[17px] max-md:tracking-tighter text-2xl font-poppins tracking-tight text-black max-md:flex-wrap max-md:max-w-full">
            At Techsol Solutions, we understand the complexities of modern
            industrial processes. That's why we offer a comprehensive suite of
            industrial Process Monitoring, Management, and Automation Solutions.
            Our advanced systems provide real-time data insights, allowing for
            proactive maintenance, optimized production efficiency, and
            minimized downtime. We empower you to make data-driven decisions,
            ensuring seamless process control and a significant boost to your
            bottom line.
          </div>
          <img
            loading="lazy"
            srcSet="/engineering_products_solutions/image3.png"
            className="gap-0 self-center  ml-0 w-full aspect-[3.33] max-md:flex-wrap max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3.5 self-center px-5 w-full max-w-[1643px] max-md:flex-wrap max-md:max-w-full">
        <div className="gap-0 text-5xl max-md:text-2xl max-md:font-medium mt-10 font-semibold font-poppins tracking-tight text-red-900 max-md:flex-wrap max-md:max-w-full">
          Alternate Energy & Backup Power
        </div>
        <div className="gap-0 max-md:text-[17px] max-md:tracking-tighter text-2xl font-poppins tracking-tight text-black max-md:flex-wrap max-md:max-w-full">
          Techsol Solutions is an accredited supplier, and installer of UPS,
          Power Backups and Solar energy centric systems. We are the first
          choice for many commercial and domestic clients for a variety of
          renewable systems such as Solar Panels, Wind Turbines, UPS, Inverters,
          Dry Batteries & Battery Panels. At Techsol Solutions we apply a
          rigorous engineering approach, starting with energy profiling and
          leading methodically through design, verification, construction, and
          procedures that are uncompromising.
        </div>
        <img
          loading="lazy"
          srcSet="/engineering_products_solutions/image4.png"
          className="gap-0 self-center w-full aspect-[3.33] max-md:flex-wrap max-md:max-w-full"
        />
      </div>
      <div className="flex justify-center items-center p-8">
          <button className="bg-custom1 text-white font-medium text-xl py-3 px-6 rounded-full hover:bg-red-900 transition duration-300"
          onClick={eventHandler}>
            Contact Us
          </button>
        </div>
    </div> 
    </Layout>
    </>
  )
}

export {EngineeringProducts}
