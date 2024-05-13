import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const ProfessionalServices = () => {
  return (
    <>
    <div className='font-poppins'>
      <div className="flex flex-col items-center">
      <div className="relative">
  <img
    loading="lazy"
    srcSet="/professionalServices/image.png"
    className="w-full mix-blend-luminosity aspect-[2.63] max-md:max-w-full"
    alt="Professional Services"
  />
  <div className="absolute top-52 left-0 w-full text-center max-md:top-20 max-md:text-4xl text-white font-semibold text-7xl">
    Professional Services
  </div>
</div>

      {/* <div className="self-stretch w-full bg-red-900 min-h-[165px] max-md:max-w-full" /> */}
      <div className="justify-center items-center w-full px-16 py-10 text-4xl font-bold text-center text-white uppercase bg-red-900 leading-[0px] max-md:text-3xl max-md:py-4 max-md:px-5 max-md:max-w-full">
      MARKETING SERVICES
    </div>
      <div className="px-5 mt-14 max-md:mt-0 w-full max-w-screen-2xl  max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] shadow-2xl max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-white max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/professionalServices/image1.png"
                alt='Techsol Solutions'
                className="w-full  mix-blend-luminosity aspect-[0.98]"
              />
              <div className="flex flex-col md:px-8 pt-2 pb-5 w-full bg-custom1 text-white max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[400px] font-semibold leading-6 text-center uppercase w-[300px]">
                  SEO (Search Engine Optimization)
                </div>
                <div className="mt-4 font-normal max-md:text-[18px] leading-5">
                  We provide expert SEO services to enhance your online
                  visibility and drive organic traffic. Our offerings include
                  keyword research, on-page optimization, off-page strategies,
                  technical audits, and performance tracking.
                </div>
                <div className="flex gap-5 mt-8 font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae7f575c1778ffab7f97d4207495df4f1ac2cd65c89719664ccfd81bf453c61e?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.5] stroke-[1.466px] stroke-white w-[3px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-white max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/professionalServices/image2.png"
                alt='Techsol Solutions'
                className="w-full mix-blend-luminosity aspect-[0.98]"
              />
              <div className="flex flex-col px-8 py-6 w-full bg-custom1 max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[600px] font-semibold leading-6 text-center uppercase w-[300px]">
                  EMAIL MARKETING
                </div>
                <div className="mt-6 font-normal max-md:text-[18px] leading-5">
                  Unlock the potential of email marketing with our services.
                  From crafting compelling campaigns to analyzing performance,
                  we help you reach and engage your audience effectively.
                </div>
                <div className="flex gap-5 justify-between mt-7 font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b666bd0a065d76667a6e2eb0e25f739c6843dfb141bdcbd2fefe28902f2b547?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.63] stroke-[1.466px] stroke-white w-[5px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* Add a new div below */}
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-white max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/professionalServices/image3.png"
                alt='Techsol Solutions'
                className="w-full mix-blend-luminosity aspect-[0.98]"
              />
              <div className="flex flex-col px-8 py-6 w-full bg-custom1 max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[600px] font-semibold leading-6 text-center uppercase w-[300px]">
                SOCIAL MEDIA MARKETING
                </div>
                <div className="mt-6 font-normal max-md:text-[18px] leading-5">
                Discover our social media marketing services for enhanced
                  brand visibility. We offer content creation, profile
                  management, targeted ads, and strategy optimization across
                  platforms.
                </div>
                <div className="flex gap-5 justify-between mt-[50px] font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b666bd0a065d76667a6e2eb0e25f739c6843dfb141bdcbd2fefe28902f2b547?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.63] stroke-[1.466px] stroke-white w-[5px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          {/* Add a new div above */}
          
        </div>
      </div>
      <div className="px-5 mt-14 w-full max-w-screen-2xl max-md:mt-0 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-white max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/professionalServices/image4.png"
                className="w-full mix-blend-luminosity aspect-[0.98]"
              />
              <div className="flex flex-col px-8 py-6 w-full bg-custom1 max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[600px] font-semibold leading-6 text-center uppercase w-[300px]">
                  CONTENT MARKETING
                </div>
                <div className="mt-6 font-normal max-md:text-[18px] leading-5">
                  Drive engagement and conversions with our content marketing
                  services. We create compelling content that resonates with
                  your audience, helping you build brand awareness and establish
                  thought leadership in your industry.
                </div>
                <div className="flex gap-5 justify-between mt-[70px] font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae7f575c1778ffab7f97d4207495df4f1ac2cd65c89719664ccfd81bf453c61e?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.5] stroke-[1.466px] stroke-white w-[3px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-sm text-white max-md:mt-10">
              <img
                loading="lazy"
                srcSet="/professionalServices/image5.png"
                className="w-full mix-blend-luminosity aspect-[0.98]"
              />
              <div className="flex flex-col px-8 py-6 w-full bg-custom1 max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[600px] font-semibold leading-6 text-center uppercase w-[300px]">
                  ADVERTISMENT
                </div>
                <div className="mt-6 font-normal max-md:text-[18px] leading-5">
                  We provide expert digital advertising services to appraise
                  Online Brand Visibility, Drive Traffic, and engage a higher
                  ROI. Our offerings include Facebook Ads, Google Ads, Social
                  Media Ads, technical audits, and performance tracking.
                </div>
                <div className="flex gap-5 justify-between mt-[90px] font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae7f575c1778ffab7f97d4207495df4f1ac2cd65c89719664ccfd81bf453c61e?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.5] stroke-[1.466px] stroke-white w-[3px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-10">
              <div className="overflow-hidden relative flex-col items-end px-16 pt-96 pb-0.5 w-full text-5xl font-extrabold uppercase whitespace-nowrap mix-blend-luminosity aspect-[0.98] leading-[52px] max-md:pt-10 max-md:pl-5 max-md:text-4xl">
                <img
                  loading="lazy"
                  srcSet="/professionalServices/image6.png"
                  className="object-cover absolute inset-0 size-full"
                />
                
              </div>
              <div className="flex flex-col px-8 py-6 w-full bg-custom1 max-md:px-5">
                <div className="self-center text-2xl max-md:text-[25px] max-md:w-[600px] font-semibold leading-6 text-center uppercase w-[300px]">
                  MARKETING CONSULTANCY
                </div>
                <div className="mt-6 font-normal max-md:text-[18px] leading-5">
                  Gain valuable insights and strategies with our marketing
                  consultancy services. We offer expert guidance tailored to
                  your business goals, helping you optimize campaigns and
                  achieve measurable results.
                </div>
                <div className="flex gap-5 justify-between mt-[45px] max-md:mt-10 font-medium uppercase leading-[150%] max-md:pr-5">
                <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
                  {/* <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae7f575c1778ffab7f97d4207495df4f1ac2cd65c89719664ccfd81bf453c61e?"
                    className="shrink-0 my-auto border border-white border-solid aspect-[0.5] stroke-[1.466px] stroke-white w-[3px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="/professionalServices/image7.png"
        className="mt-14 w-96 max-w-full mix-blend-luminosity aspect-[0.98] max-md:mt-10"
      />
      <div className="flex flex-col px-5 pt-6 mb-6 pb-4 w-96 max-w-full text-white bg-custom1">
        <div className="self-center text-2xl font-semibold leading-6 text-center uppercase">
          MANAGED SERVICES
        </div>
        <div className="flex flex-col px-3.5 mt-3 text-sm">
          <div className="font-normal max-md:text-[18px] leading-5">
            Techsol Solutions has a Service Oriented Culture and we believe in
            Customer Focused policies, therefore, Techsol can be your right
            choice for your Process Out-Sourcing, Managed Services, and Service
            Level Agreements for IT Infrastructure, Networking, End- User
            Computing, Printing, Archiving, UPS and Data Centers.
          </div>
          <div className="flex gap-5 mt-1.5 font-normal  uppercase leading-[150%] max-md:pr-5">
            <div className="justify-center p-2 bg-white text-custom1">
              <button className='cursor-pointer text-lg'>Learn More</button>
            </div>
            {/* <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3728100f2996d4d2519275de66d089cc6878a5d5f7c0ffa6576551482197c588?"
              className="shrink-0 my-auto border border-white border-solid aspect-[0.63] stroke-[1.466px] stroke-white w-[5px]"
            /> */}
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col text-white">
      <div className="justify-center items-center px-16 pt-24 pb-24 w-full text-4xl font-semibold text-center bg-red-900 leading-[56px] max-md:px-5 max-md:max-w-full">
        DESIGNING & DEVELOPMENT SERVICES
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full text-red-900 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-2.5 mb-5 w-full max-w-[1635px] max-md:max-w-full">
          <div className="text-4xl font-bold text-center leading-[56px] max-md:max-w-full">
            WEB DEVELOPMENT
          </div>
          <div className="mt-8 text-2xl leading-9 max-md:max-w-full">
            We help you in transorming your online presence with our web
            development services. We create responsive and user-friendly
            websites that reflect your brand and drive conversions. We offer
            CMS-based website developments like Wordpress, Shopify, Magento, and
            custom-built websites.
          </div>
          <img
            loading="lazy"
            srcSet="/professionalServices/image8.png"
            className="mt-8 w-full aspect-[3.85] fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-red-900 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-2.5 mb-5 w-full max-w-[1635px] max-md:max-w-full">
          <div className="text-4xl font-semibold text-center leading-[56px] max-md:max-w-full">
            APP DEVELOPMENT
          </div>
          <div className="mt-8 text-2xl leading-9 max-md:max-w-full">
            Elevate your business with our mobile app development services. We
            design and develop innovative mobile applications tailored to your
            unique needs, enhancing user engagement and driving growth.
          </div>
          <img
            loading="lazy"
            srcSet="/professionalServices/image10.png"
            className="mt-16 w-full aspect-[3.85] fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-20 w-full text-red-900 bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col mt-2 mb-5 w-full max-w-[1635px] max-md:max-w-full">
          <div className="text-4xl font-semibold text-center leading-[56px] max-md:max-w-full">
            E COMMERCE DEVELOPMENT & MANAGEMENT
          </div>
          <div className="mt-8 text-2xl leading-9 max-md:max-w-full">
            Enhance your online store with our e-commerce development and
            management services. We create user-friendly platforms and provide
            ongoing support to optimize sales and customer satisfaction.
          </div>
          <img
            loading="lazy"
            srcSet="/professionalServices/image9.png"
            className="mt-16 w-full aspect-[3.85] fill-[url(<path-to-image>)_lightgray_50%_/_cover_no-repeat] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProfessionalServices
