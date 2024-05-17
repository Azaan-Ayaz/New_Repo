import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const Home = () => {


  const navigate = useNavigate()

  const eventHandler = (path) => {
    navigate(path)
  }

  return (


    <>
    <Helmet>
      <title>
        Techsol Solutions
      </title>
    </Helmet>
    <Layout>
     <div className="flex flex-col justify-center items-start font-poppins px-16  font-extrabold bg-black max-md:px-5">
     <div className="relative flex flex-col  max-w-full w-[957px] max-md:mt-10">
      {/* Gradient Circle */}
      <div className="absolute inset-0 top-0 left-0 flex">
        <div className="w-[650px] h-[650px] bg-gradient-to-r from-custom1 to-red-600 rounded-full blur-3xl opacity-30 max-md:w-[150px] max-md:h-[150px]"></div>
      </div>
      
      <div className="relative z-10 mt-24 ml-16 text-9xl bg-clip-text max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-r from-custom1 via-custom1 to-red-600">
        GREETINGS,
      </div>
      <div className="relative z-10 mt-2.5 text-4xl text-white max-md:max-w-full">
        WE’RE
      </div>
      <div className="relative z-10 mt-10 text-9xl font-bold text-white leading-[180px] tracking-[2px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        TECHSOL <br />
        SOLUTIONS
      </div>
    </div>
    </div>
    <div className="flex justify-center items-center px-0 py-20 max-md:py-10 bg-neutral-950 font-poppins max-md:px-5">
      <div className="flex flex-col w-full max-w-full max-md:max-w-full">
        <div className=" self-center mt-20 max-md:mt-6 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-color1  to-color2 text-[200px]  max-md:max-w-full max-md:text-5xl">
          ABOUT US{" "}
        </div>
        {/* <div className='relative text-white text-center font-poppins mt-[20px] text-8xl font-semibold'>ABOUT US</div> */}
        <div class="mt-16 max-md:mt-6 max-md:max-w-full">
  <div class="flex flex-row gap-24 md:px-48 items-start mx-4 max-md:flex-col-reverse max-md:gap-0">
    <div class="w-2/3 max-md:w-[90%]">
      <div class="mt-6 text-2xl font-normal leading-8 text-justify text-white max-md:text-lg max-md:max-w-full max-md:mt-2">
        Techsol Solutions is the go-to destination for cutting-edge IT solutions. Specializing in everything from digital marketing to engineering products, we boast a wide array of services including solution design, system integration, and professional support. With a customer-centric ethos at our core, we are committed to delivering excellence, innovation, and unparalleled value to our clients.
      </div>
    </div>
    <div class="w-1/3 max-md:w-[90%] mt-6 max-md:mt-3 ">
      <img
        loading="lazy"
        src="/home/about.png"
        alt="Techsol Solutions"
        class="grow w-full h-auto max-md:max-w-full"
      />
    </div>
  </div>
</div>

        <div className=" self-center mt-28 max-md:text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-custom1 via-custom1 to-orange-500 text-[200px] max-md:mt-10 max-md:max-w-full">
          VISION
        </div>
        {/* <div className='relative text-white text-center font-poppins mt-[6px] text-8xl font-semibold'>VISION</div> */}
        <div class="mt-8 max-md:mt-10 max-md:max-w-full">
  <div class="flex flex-row gap-24 md:px-48 items-start mx-4 max-md:flex-col max-md:gap-0">
    <div class="w-1/3 max-md:w-[90%]">
      <img
        loading="lazy"
        src="/home/vision.png"
        alt="Techsol Solutions"
        class="grow w-full h-auto max-md:max-w-full"
      />
    </div>
    <div class="w-2/3 max-md:w-[90%]">
      <div class="mt-6 text-2xl font-poppins font-normal leading-8 text-justify max-md:mt-2 text-white max-md:text-lg max-md:max-w-full">
        Techsol Solutions is the go-to destination for cutting-edge IT solutions. Specializing in everything from digital marketing to engineering products, we boast a wide array of services including solution design, system integration, and professional support. With a customer-centric ethos at our core, we are committed to delivering excellence, innovation, and unparalleled value to our clients.
      </div>
    </div>
  </div>
</div>

        <div className=" self-center mt-28 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-custom1  to-purple-700 text-[200px] max-md:mt-10 max-md:max-w-full max-md:text-5xl">
          MISSION
        </div>
        {/* <div className='relative text-white text-center font-poppins mt-[6px] text-8xl font-semibold'>MISSION</div> */}
        <div class="mt-8 max-md:mt-6 max-md:max-w-full">
  <div class="flex flex-row gap-24 md:px-48 items-start mx-4 max-md:flex-col max-md:gap-0">
    <div class="w-2/3 max-md:w-[90%]">
      <div class="text-2xl lg:text-2xl xl:text-2xl font-normal leading-8 text-justify text-white max-md:text-lg max-md:max-w-full max-md:mt-2">
        At TechSol, we're dedicated to excellence in an ever-changing, competitive market. Our focus is on providing cutting-edge products, tailored solutions, and top-tier service standards to meet customer needs. As industry leaders, we prioritize innovation and continual process improvement to maintain our edge.
      </div>
    </div>
    <div class="w-1/3  max-md:w-[90%]">
      <img
        loading="lazy"
        src="/home/mission.png"
        alt="Techsol Solutions"
        class="grow w-full h-auto max-md:max-w-full max-md:mt-2"
      />
    </div>
  </div>
</div>

      </div>
    </div>
    <div className="flex justify-center items-center px-16 md:py-20 bg-stone-950 max-md:px-5 font-poppins">
      <div className="flex flex-col items-center mt-10 w-full max-w-[1619px] max-md:mt-3 max-md:max-w-full">
        <div className=" self-center text-5xl mt-20 max-md:mt-6 font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-b from-color1  to-color2 text-[200px]  max-md:max-w-full max-md:text-4xl">
          PRODUCTS & SOLUTIONS
        </div>
        {/* <div className='relative text-white text-center font-poppins mt-[6px] text-8xl font-semibold'>PRODUCTS & SOLUTIONS</div> */}
        <div className="mt-40 w-full max-w-[1592px] max-md:mt-2 max-md:max-w-full">
          <div className="flex gap-24 justify-between max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-20 w-full rounded-xl shadow-lg bg-neutral-700  max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="/home/s4.png"
                  alt='Techsol Solutions'
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="flex flex-col px-12 mt-16 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-semibold tracking-tight text-gray-200 max-md:max-w-full">
                    Engineering Products & Solutions
                  </div>
                  <div className="mt-14 text-2xl font-normal tracking-tight text-white text-opacity-60 max-md:mt-10 max-md:max-w-full">
                    Test and Measurement Products & Solutions
                    <br />
                    Valves & Gauges
                    <br />
                    Processes Monitoring, Management & Automation
                    <br />
                    Power Backup & Alter
                  </div>
                  <div className="justify-center self-center px-5 py-3.5 mt-[210px] text-xl leading-5 text-center text-white bg-custom1 rounded-md border border-white border-solid max-md:mt-10">
                    <button onClick={() => eventHandler("/engineering-products-and-solutions")}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pt-1 pb-20 w-full rounded-xl shadow-lg bg-neutral-700 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="/home/s1.png"
                  alt='Techsol Solutions'
                  className="w-full aspect-[2.08] max-md:max-w-full"
                />
                <div className="flex flex-col mt-14 ml-9 max-w-full w-[383px] max-md:mt-10 max-md:ml-2.5">
                  <div className="text-4xl font-semibold tracking-tight text-gray-200">
                    IT Products & Solutions
                  </div>
                  <div className="mt-20 text-2xl font-normal tracking-tight text-white text-opacity-60 max-md:mt-10">
                    Infrastructure Product & Solutions
                    <br />
                    IP/Networking & Security
                    <br />
                    Client Computing
                  </div>
                  <div className="justify-center self-end px-5 py-3.5 mt-48 mr-7 text-xl leading-5 text-center text-white bg-custom1 rounded-md border border-white border-solid max-md:mt-10 max-md:mr-2.5">
                   <button onClick={() => eventHandler("/it-products")}>
                    Read More
                   </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 w-full max-w-[1592px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-24 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-12 w-full rounded-xl shadow-lg bg-neutral-700 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="/home/s3.png"
                  alt='Techsol Solutions'
                  className="w-full aspect-[1.49] max-md:max-w-full"
                />
                <div className="flex flex-col mt-20 ml-9 max-w-full w-[458px] max-md:mt-10">
                  <div className="text-4xl font-semibold tracking-tight text-gray-200 max-md:max-w-full">
                    Software/Licenses Solutions
                  </div>
                  <div className="mt-10 text-2xl font-normal tracking-tight text-white text-opacity-60 max-md:max-w-full">
                    Oracle Licenses
                    <br />
                    Microsoft Products
                    <br />
                    Virtualization
                    <br />
                    Backup Solutions
                    <br />
                    End User Security & other Licenses
                    <br />
                  </div>
                  <div className="justify-center self-center px-5 py-3.5 mt-28 ml-14 text-xl leading-5 text-center text-white bg-custom1 rounded-md border border-white border-solid max-md:mt-10">
                    <button onClick={() => eventHandler("/software_license")}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow pb-12 w-full rounded-xl shadow-lg bg-neutral-700 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="/home/s2.png"
                  alt='Techsol Solutions'
                  className="w-full aspect-[1.49] max-md:max-w-full"
                />
                <div className="flex flex-col mt-16 ml-9 max-w-full w-[505px] max-md:mt-10">
                  <div className="text-4xl font-semibold tracking-tight text-gray-200 max-md:max-w-full">
                    Professional/Digital Marketing Services
                  </div>
                  <div className="mt-6 text-2xl font-normal tracking-tight text-white text-opacity-60 max-md:max-w-full">
                    Marketing Consulting
                    <br />
                    Digital Marketing Services
                    <br />
                    Graphic Designing
                    <br />
                    Web Development
                    <br />
                    E-Commerce Development & Management
                    <br />
                    Managed Services
                    <br />
                    CRM
                  </div>
                  <div className="justify-center self-center px-5 py-3.5 mt-20 text-xl leading-5 text-center text-white bg-custom1 rounded-md border border-white border-solid">
                    <button onClick={() => eventHandler("/professional-services")}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center px-16 py-20 bg-black max-md:px-5">
      <div className="flex flex-col mt-4 w-full max-w-full max-md:max-w-full">
      <div className="self-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-custom1 via-custom1 to-orange-500 text-[200px] max-md:max-w-full max-md:text-4xl text-center">
  Our Clients
</div>
<div className="px-4 md:px-12 lg:px-36">
  <div className="flex flex-wrap justify-between mb-3 w-full">
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/c5.png" alt="Techsol Solutions" className="w-2/3 md:w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/shell.png" alt="Techsol Solutions" className="w-2/3 md:w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/c3.png" alt="Techsol Solutions" className="w-2/3 md:w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/Cements.png" alt="Techsol Solutions" className="w-2/3 md:w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/tcs.png" alt="Techsol Solutions" className="w-2/3 md:w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/toyota.png" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
  </div>
  <div className="flex flex-wrap justify-between mt-6 md:mt-24 mb-3">
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/eng.png" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/c11.png" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/c6.png" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/SSGC.jpg" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
    <div className="flex-1 max-w-[45%] sm:max-w-[30%] md:max-w-[18%] p-2">
      <img src="/home/kelec.png" alt="Techsol Solutions" className="w-full h-auto" />
    </div>
  </div>
  <div className="flex flex-wrap justify-between">
    
  </div>
</div>



        <div className="self-center mt-56 font-bold bg-clip-text text-[200px] max-md:mt-10 max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-b from-custom1  to-purple-700 ">
          Partners
        </div>
        <div className="  max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-[100px] max-md:flex-wrap max-md:gap-10 ">
            
              <img
                loading="lazy"
                srcSet="/home/p1.png"
                alt='Techsol Solutions'
                className="grow shrink-0 max-w-full h-[100px] w-auto mt-24 max-md:mt-10 max-md:w-[100px] max-md:h-[20px]"
              />
            
            
              <img
                loading="lazy"
                srcSet="/home/attom.png"
                alt='Techsol Solutions'
                className="grow mt-24 w-[250px] h-[100px]  max-md:mt-10 max-md:max-w-full max-md:w-[100px] max-md:h-[20px]"
              />
            
            
              <img
                loading="lazy"
                srcSet="/home/clch.png"
                alt='Techsol Solutions'
                className="grow mt-16 w-[180px] h-[150px]  max-md:mt-10 max-md:max-w-full"
              />
            
            <img
            loading="lazy"  
            srcSet="/home/dell.png"
            alt='Techsol Solutions'
            className="shrink-0 self-start mt-12 max-w-full h-[150px] w-[150px] max-md:w-[50px] max-md:h-[50px]"
          />
          
              <img
                loading="lazy"
                srcSet="/home/p6.png"
                alt='Techsol Solutions'
                className="grow shrink-0 mt-16 max-w-2/3 h-[170px] w-[140px] max-md:mt-10 max-md:w-[100px] max-md:h-[20px]"
              />
            
            <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
            <img
            loading="lazy"
            srcSet="/home/p5.png"
            alt='Techsol Solutions'
            className="shrink-0 my-auto mt-20 max-w-full h-[100px] w-[280px] max-md:w-[100px] max-md:h-[20px]"
          />
            </div>
          </div>
        </div>
        
        
        <div className="flex gap-40 max-md:gap-10 justify-center items-center px-0.5 mt-10 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/home/p9.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch my-auto max-w-full mt-12 aspect-[3.63] w-[232px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/p10.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch my-auto mt-10 max-w-full h-[80px] w-[250px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/p11.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch max-w-full h-[100px] mt-8 w-[222px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/p16.png"
            alt='Techsol Solutions'
            className="shrink-0 self-end mt-6 max-w-full aspect-[3.23]  w-[267px] max-md:w-[100px] max-md:h-[20px]"
          />

<img
            loading="lazy"
            srcSet="/home/heeoki.jpg"
            alt='Techsol Solutions'
            className="shrink-0 mt-5  max-w-full  w-[267px] max-md:w-[100px] max-md:h-[20px]"
          />

           
        </div>
        <div className="flex gap-[160px] justify-center items-center mt-10 max-md:flex-row max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="/home/p12.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch h-[108px] mt-10 w-[108px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/sangforr.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch my-auto mt-11 max-w-full h-[95px] w-[280px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/shopify.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch h-[90px] max-w-full mt-10 w-[220px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/tp.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch my-auto max-w-full mt-6 aspect-[2] w-[250px] max-md:w-[100px] max-md:h-[20px]"
          />
          <img
            loading="lazy"
            srcSet="/home/huawei.png"
            alt='Techsol Solutions'
            className="shrink-0 self-stretch my-auto max-w-full aspect-[3] w-[250px] max-md:w-1/4"
          />
        </div>
      </div>
    </div>
</Layout>
    </>
  )
}

export default Home
