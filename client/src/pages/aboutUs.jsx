import React from 'react';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
    <Helmet>
      <title>About Us - Techsol Solutions</title>
    </Helmet>
    <Layout>
      <div className="flex flex-col pb-7 bg-white font-poppins">
        <img
          loading="lazy"
          srcSet="/about/image.png"
          alt='Techsol Solution'
          className="w-full aspect-[2.86] max-md:max-w-full"
        />
        <div className="flex flex-col md:ml-10 px-20 my-10 max-md:px-4 w-full text-black max-w-[1888px] max-md:mt-10 max-md:max-w-full">
  <div className="self-start text-4xl font-bold max-md:text-center text-red-900 mb-4">
    ABOUT US
  </div>
  <div className="h-2 w-full" />
  <div className="mt-2 max-md:mt-0 max-md:max-w-full">
    <span className="font-semibold text-2xl md:text-2xl block mb-2">Background</span>
    <span className="text-xl md:text-xl max-md:text-base leading-relaxed max-md:tracking-tight font-light">
      We started our journey back in the year 1965, with the establishment of the Textile industry in Pakistan, and are one of the pioneering business entities of the country. With the advent of rapidly evolving global technological innovations, a need was felt to bring the innovative technologies to Pakistan that can serve as a platform for broadening the national technological horizon.
    </span>
  </div>
  <div className="mt-6 max-md:max-w-full">
    <span className="font-semibold text-2xl md:text-3xl block mb-2">Techsol Solutions</span>
    <span className="text-xl md:text-xl max-md:text-base leading-relaxed max-md:tracking-tight font-light">
      We are a leading technology company encompassing 360 degrees of IT Solutions, ranging from Comprehensive Marketing / Digital Marketing Solutions, E-commerce and Managed Services to Engineering Products & Solutions backed by rich expertise and experience in Solution Designing, Consulting, System Integration, Hardware and Software Provisioning and Professional Services. We believe in working as a solution provider for our clientele with an experienced and well-qualified team of professionals and specialists. Our customer-focused policies and committed support and services have been the key to our continued success and growth. Our strength is world-acclaimed innovative technology product lines, and our highly motivated team with sales professionals, marketing gurus, and trained engineers/technical staff.
    </span>
  </div>
</div>

        <img
          loading="lazy"
          srcSet="/about/image2.png"
          alt='Techsol Solution'
          className="w-full aspect-[2.86]  max-md:max-w-full"
        />
        <div className="flex justify-center items-center px-5 md:px-10 py-20 w-full text-2xl font-semibold text-black bg-stone-200 max-md:max-w-full">
  <div className="flex flex-col mt-4 max-md:mt-1 mb-2.5 w-full max-w-[1634px] max-md:max-w-full">
    <div className="text-3xl md:text-4xl mb-4 text-center max-md:text-left md:text-left">Our Mission</div>
    <div className="text-xl md:text-2xl max-md:text-base leading-relaxed max-md:leading-snug max-md:tracking-tight font-light mb-6">
      Techsol is committed to excellence and to finding the best way forward in an evolving and increasingly competitive business landscape. We aim to offer state-of-the-art products and solutions and the best service standards, carefully designed to cater to the needs of our customers. To be the industry leader, we shall persistently consider and implement innovation and relentlessly grow our knowledge base with continuous process improvement.
    </div>
    <div className="text-3xl md:text-4xl mb-4 text-center max-md:text-left md:text-left">Our Vision</div>
    <div className="text-xl md:text-2xl max-md:text-base leading-relaxed max-md:leading-snug max-md:tracking-tight font-light">
      Harnessing cutting-edge technology and innovative strategies, we aim to revolutionize traditional workflows and elevate operational efficiency to new heights. Our dedication to leveraging global resources ensures that our solutions remain adaptable, scalable, and tailored to meet the evolving needs of our clients and partners worldwide.
    </div>
  </div>
</div>

        <div className="flex overflow-hidden relative flex-col justify-center px-px w-full min-h-[1171px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/about/image6.png"
            className="object-cover absolute opacity-100 inset-0 size-full"
          />
          <div className="flex overflow-hidden font-poppins relative flex-col px-20 py-12 w-full min-h-[1171px] max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="/about/image6.png"
              className="object-cover absolute opacity-100 inset-0 size-full"
            />
            <div className="relative text-center ml-3.5 text-4xl font-bold text-white">
              Company Overview
            </div>
            <div className='flex justify-center'>
            <div className='h-1 mt-[5px] bg-black relative text-center w-96 items-center'></div>
            </div>
            <div className="relative shrink-0 self-center mt-2 ml-3.5 max-w-full h-2 w-[417px]" />
            <div className="relative px-0.5 mt-16 ml-6 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-row max-md:gap-2 ">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/about/image3.png"
                    alt="Techsol Solutions"
                    className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/about/image4.png"
                    alt="Techsol Solutions"
                    className="mt-2 w-full aspect-square max-md:mt-10 max-md:max-w-full"
                  />
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    srcSet="/about/image5.png"
                    className="mt-2 w-full aspect-square max-md:mt-10 max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-2xl md:mt-5 max-md:text-[16px] leading-[1.5] max-md:tracking-tighter text-white font-light">
              Welcome to Techsol Solutions, where innovation meets excellence!
              We're not just a tech company; we're your dynamic partners in
              success. At Techsol, we specialize in delivering cutting-edge
              solutions tailored to your unique needs. Whether it's software,
              state-of-the-art hardware, Strategic Consultancy, or Engineering
              Products / Solutions, we've got you covered. With a passionate team
              dedicated to push boundaries and exceeding expectations, we're here
              to empower your business to thrive in today's ever-evolving digital
              world. Experience the difference with Techsol Solutions – where
              innovation is our language, and success is our destination.
              <br />
              We are a dynamic technological company dedicated to transform
              businesses through innovative solutions. We specialize in providing
              cutting-edge software, hardware, and consultancy services tailored
              to our customers need. With a team of passionate experts at the
              helm, we strive to be the trusted partner that businesses can rely
              upon. Our commitment to excellence, creativity, and customer
              satisfaction sets us apart, making us the preferred choice for
              companies seeking to thrive in today's competitive landscape. At
              Techsol Solutions, we are more than just a technology provider – we
              are your strategic ally in achieving success.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mt-5 items-center px-7 max-md:px-5">
        <div className="text-4xl md:text-4xl font-bold font-poppins text-center text-zinc-800 relative">
  CEO MESSAGE
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-800 via-red-800 to-gray-800"></div>
</div>

          <div className="shrink-0  h-2 w-[200px] max-md:w-full" />
          <div className="items-start self-stretch px-11 p-3 mx-10 max-md:mx-0 text-xl max-md:text-lg font-normal leading-9 rounded-3xl shadow-lg bg-stone-300 text-neutral-600 max-md:px-5 max-md:max-w-full font-poppins">
            <span className="text-3xl font-semibold text-red-800">
              Dear Esteemed Readers,
            </span>
            <br />
            
            It is with great pleasure that I introduce Techsol Solutions -
            established with a strong team of technology experts and business
            professionals, carrying decades of experience, to meet the requirements
            of future growth and capability enhancement of industries/users in
            diverse business and services environment.
            
            <br />
            Techsol Solutions is a dynamic force in the realm of technology
            innovation. As the CEO, I am thrilled to share our journey of pioneering
            advancements that redefine the landscape of technology and its
            applications.
            
            <br />
            At Techsol Solution, we are driven by a relentless pursuit of
            excellence, pushing boundaries to create solutions that inspire and
            transform industries. Our commitment to innovation and customer
            satisfaction is at the core of everything we do.
            
            <br />
            Since incorporation, we have achieved significant milestones, thanks to
            the dedication and expertise of our team. We have consistently delivered
            cutting-edge products and services that have set new benchmarks in the
            industry.
            
            <br />
            As we continue to evolve and grow, we remain focused on our core values
            of integrity, innovation, and excellence. We are dedicated to delivering
            value to our stakeholders and making a positive impact on society.
            <br />
            I invite you to explore our corporate profile and learn more about
            our journey, achievements, and vision for the future. Together, let us
            shape the future of technology and create a better tomorrow.
            <br />
            Thank you for your continued support.
            <br />
            
            Warm Regards,
            <br />
            
            Dr. Shahzad Arshad
            <br />
            Chairman
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default AboutUs
