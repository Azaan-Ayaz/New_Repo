import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../../../components/Layout';

const Software = () => {

const navigate = useNavigate()

  const eventHandler = () => {
    navigate("/contact-us")
  }


  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
    <Helmet>
      <title>Software License - Techsol Solutions</title>
    </Helmet>
    <Layout>
      <div className="flex flex-col gap-0 text-black bg-white max-md:flex-wrap font-poppins">
        <img
          loading="lazy"
          alt="Techsol Solutions"
          srcSet="/software_license/image.png"
          className="gap-0 w-full aspect-[2.13] fill-[url(<path-to-image>)_lightgray_53.356px_-252.062px_/_95.191%_140.316%_no-repeat,#9E696A] max-md:flex-wrap max-md:max-w-full"
        />
        <div className="justify-center text-center max-md:py-10 pt-20 pb-20 md:leading-[70px] w-full text-7xl font-bold leading-7 text-white bg-red-900 max-md:flex-wrap max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:font-semibold">
          Software/ Licenses Solutions
        </div>
        <div className="flex gap-0 justify-center items-center px-16 py-11 w-full bg-gray-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col gap-5 w-full max-w-[1544px] max-md:flex-wrap max-md:max-w-full">
            <div className="gap-0 text-4xl font-semibold leading-8 max-md:flex-wrap max-md:max-w-full max-md:text-3xl text-custom1">
              DATABASE & OPERATING SYSTEMS
            </div>
            <img
              loading="lazy"
              alt="Techsol Solutions"
              srcSet="/software_license/image2.png"
              className="gap-0 mt-8 w-full max-md:mt-4 aspect-[2.94] max-md:flex-wrap max-md:max-w-full"
            />
            <div className="gap-0 mt-8 max-md:mt-4 text-[22px] leading-8 max-md:text-lg max-md:tracking-tighter max-md:flex-wrap max-md:max-w-full">
              Techsol Solutions acts as your go-to place for all your database and
              operating system needs. We offer licensing and implementation for
              industry-leading solutions like <span className='font-bold'>Oracle</span> , ensuring optimal data
              management. Additionally, we provide Microsoft Windows operating
              system, Microsoft Office Suite and Server products, equipping your
              workforce with the essential tools for productivity. Our team of
              experts can guide you through the selection process, ensuring you
              have the right software foundation for your business success.
            </div>
          </div>
        </div>
        <div className="flex gap-0 justify-center items-center px-16 py-11 w-full bg-neutral-400 bg-opacity-60 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col gap-5 w-full max-w-[1544px] max-md:flex-wrap max-md:max-w-full">
            <div className="gap-0 text-4xl font-semibold leading-8 max-md:flex-wrap text-custom1 max-md:max-w-full max-md:text-3xl">
              VIRTUALIZATION
            </div>
            <img
              loading="lazy"
              srcSet="/software_license/image3.png"
              alt="Techsol Solutions"
              className="gap-0 mt-8 max-md:mt-4 w-full aspect-[2.94] max-md:flex-wrap max-md:max-w-full"
            />
            <div className="gap-0 mt-8 max-md:mt-4 text-[22px] leading-8 max-md:text-lg max-md:tracking-tighter max-md:flex-wrap max-md:max-w-full">
              Techsol Solutions empowers businesses to unlock the efficiency and
              flexibility of virtualization. We offer a comprehensive suite of
              virtualization solutions. Our expertise spans industry-leading
              platforms allowing you to consolidate resources, optimize workloads,
              and ensure business continuity. Additionally, we are partners of
              leading vendors like VMware, Sangfor and Microsoft Hyper-V to
              provide robust protection for your virtualized environment. Let
              Techsol Solutions guide you towards a streamlined and secure
              virtualized infrastructure.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-0 items-center px-16 pt-11 pb-20 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col gap-5 w-full max-w-[1544px] max-md:flex-wrap max-md:max-w-full">
            <div className="gap-0 text-4xl font-semibold max-md:text-3xl leading-8 text-custom1 max-md:flex-wrap max-md:max-w-full">
              OTHER UNIQUE SOLUTIONS
            </div>
            <img
              loading="lazy"
              alt="Techsol Solutions"
              srcSet="/software_license/image4.png"
              className="gap-0 mt-8 max-md:mt-4 w-full aspect-[2.94] max-md:flex-wrap max-md:max-w-full"
            />
            <div className="gap-0 mt-8 max-md:mt-4 text-[22px] leading-8 max-md:text-lg max-md:tracking-tighter max-md:flex-wrap max-md:max-w-full">
              We help you in managing customer relationships effectively through
              our CRM tools, boosting sales and improving customer satisfaction.
              Additionally, our solutions provide a centralized platform to manage
              all your core business functions, optimizing efficiency and
              fostering data-driven decision-making.
            </div>
          </div>
        </div>
        <div className="flex gap-0 justify-center items-center px-16 py-11 w-full bg-gray-200 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col gap-5 w-full max-w-[1544px] max-md:flex-wrap max-md:max-w-full">
            <div className="gap-0 text-4xl max-md:text-3xl font-semibold leading-8 text-custom1 max-md:flex-wrap max-md:max-w-full">
              END USER SECURITY & OTHER LICENSES
            </div>
            <img
              loading="lazy"
              srcSet="/software_license/image5.png"
              alt="Techsol Solutions"
              className="gap-0 mt-8 max-md:mt-4 w-full aspect-[2.94] max-md:flex-wrap max-md:max-w-full"
            />
            <div className="gap-0 mt-8 max-md:mt-4 text-[22px] leading-8 max-md:text-lg max-md:tracking-tighter max-md:flex-wrap max-md:max-w-full">
              Techsol Solutions prioritizes your organization's cybersecurity. We
              offer a robust selection of End User Security licenses from leading
              industry vendors like Kaspersky, Sophos, Fortinet, Sangfor, and
              McAfee. Our team can help you to choose the right solution to
              protect your endpoints, data, and network from evolving cyber
              threats. We go beyond just selling licenses, we can also assist with
              implementation, configuration, and ongoing support to ensure your
              cybersecurity posture remains strong.
            </div>
          </div>
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
  );
};

export default Software;
