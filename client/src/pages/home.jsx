import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'


const Home = () => {


useEffect(() => window.scrollTo(0,0), [])

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
        <div className='font-poppins'>
          <div className="flex flex-col ">
            <div className="flex flex-col justify-center items-start md:px-10 px-16 py-20 max-md:py-20 w-full text-6xl font-semibold bg-black max-md:px-5 max-md:max-w-full max-md:text-4xl">
              <div className="flex flex-col md:mt-20 md:mb-20 md:ml-10 max-md:my-0 max-md:max-w-full max-md:text-4xl">
                <div className="text-8xl bg-clip-text max-md:max-w-full max-md:text-5xl font-semibold text-transparent bg-gradient-to-r from-custom1 to-custom3 ">
                  GREETINGS,
                </div>
                <div className="mt-4 text-white max-md:mt-2 max-md:max-w-full max-md:text-4xl">
                  WE’RE
                </div>
                <div className="mt-4 text-white max-md:mt-2 max-md:max-w-full max-md:text-4xl">
                  TECHSOL SOLUTIONS
                </div>
              </div>
            </div>
            <div className="flex flex-col md:py-20 w-full bg-white max-md:max-w-full">
              <div className="self-center w-full max-w-[1554px] max-md:max-w-full">
                <div className="flex gap-16  max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col self-stretch px-5 my-auto font-semibold max-md:mt-10 max-md:max-w-full">
                      <div className="text-5xl text-black max-md:max-w-full max-md:text-4xl">
                        Welcome to
                      </div>
                      <div className="mt-2 text-6xl bg-clip-text max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                        Techsol Solutions
                      </div>
                      <div className="mt-2 md:mb-10 text-[22px] max-md:text-lg font-normal max-md:max-w-full">
                        Techsol Solutions is the go-to destination for cutting-edge IT
                        solutions. Specializing in everything from digital marketing
                        to engineering products, we boast a wide array of services
                        including solution design, system integration, and
                        professional support. With a customer-centric ethos at our
                        core, we are committed to delivering excellence, innovation,
                        and unparalleled value to our clients.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mb-5 ml-5 w-[37%] max-md:ml-0 max-md:w-full">
                    <div className="grow max-md:mt-10 max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-row max-md:gap-0">
                        <div className="flex flex-col max-md:flex-row w-[43%] max-md:ml-0 max-md:w-1/5">
                          <img
                            loading="lazy"
                            srcSet="/landing/image1.png"
                            alt='Techsol Solutions'
                            className="self-stretch my-auto  w-[220px] aspect-square max-md:mt-10"
                          />
                        </div>
                        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-1/5">
                          <div className="flex flex-col max-md:flex-row grow max-md:mt-8">
                            <img
                              loading="lazy"
                              srcSet="/landing/image2.png"
                              alt='Techsol Solutions'
                              className="self-end max-w-full aspect-square w-[220px]"
                            />
                            <img
                              loading="lazy"
                              srcSet="/landing/image3.png"
                              alt='Techsol Solutions'
                              className="mt-8 max-md:mt-0 max-w-full  aspect-square w-[200px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 max-md:py-5 md:py-16 bg-black max-md:px-5">
                <div className="flex flex-col mt-1 w-full max-w-[1656px] max-md:max-w-full">
                  <div className="self-center max-md:text-center text-5xl max-md:text-4xl max-md:leading-7 font-semibold bg-clip-text max-md:max-w-full text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                    How We Assist Our Customers
                  </div>
                  <div className="mt-11 max-md:mt-0 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-7 text-2xl font-semibold text-center text-red-700 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="/landing/image5.png"
                            alt='Techsol Solutions'
                            className="w-full aspect-square cursor-pointer"
                            onClick={() => eventHandler("/professional-services")
                          }
                          />
                          <div className="self-center max-md:mt-2 md:mt-7">
                            Professional/ Marketing <br />
                            Services
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-7 text-2xl font-semibold text-center text-red-700 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="/landing/image6.png"
                            alt='Techsol Solutions'
                            className="w-full aspect-square cursor-pointer"
                            onClick={() => eventHandler("/software_license")}
                          />
                          <div className="mt-7 max-md:mt-2">
                            Software Licenses <br />
                            /Solutions
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-7 text-2xl font-semibold text-red-700 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="/landing/image7.png"
                            alt='Techsol Solutions'
                            className="w-full aspect-square cursor-pointer"
                            onClick={() => eventHandler("/it-products")}
                          />
                          <div className=" mt-7 max-md:text-center max-md:mt-2">
                            IT Products / Solutions
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col mt-7 text-2xl font-semibold text-center text-red-700 max-md:mt-10">
                          <img
                            loading="lazy"
                            srcSet="/landing/image8.png"
                            alt='Techsol Solutions'
                            className="w-full aspect-square cursor-pointer"
                            onClick={() => eventHandler("/engineering-products-and-solutions")}
                          />
                          <div className=" mt-7 max-md:mt-2 ">
                            Engineering Products /<br />
                            Solutions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex mt-20 max-md:mt-6 max-md:py-10 font-poppins flex-col">
                <div className="flex flex-col self-center px-5 w-full max-w-[1541px] max-md:max-w-full">
                  <div className="text-5xl font-semibold bg-clip-text max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                    Our Mission
                  </div>
                  <div className="self-start mt-7 max-md:mt-1 max-md:text-lg text-2xl text-black max-md:max-w-full">
                    At TechSol, we're dedicated to excellence in an ever-changing,
                    competitive market. Our focus is on providing cutting-edge products,
                    tailored solutions, and top-tier service standards to meet customer
                    needs. As industry leaders, we prioritize innovation and continual
                    process improvement to maintain our edge.
                  </div>
                </div>
                <div className="flex justify-center items-center px-16 py-20 md:mt-24  w-full bg-black max-md:px-5 max-md:mt-6 max-md:max-w-full">
                  <div className="flex flex-col md:mt-4  w-full max-w-[1522px] max-md:mb-10 max-md:max-w-full">
                    <div className="text-5xl font-semibold bg-clip-text max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                      Our Vision
                    </div>
                    <div className="mt-7 max-md:mt-1 text-2xl max-md:text-lg text-white max-md:max-w-full">
                      Techsol Solutions is the go-to destination for cutting-edge IT
                      solutions. Specializing in everything from digital marketing to
                      engineering products, we boast a wide array of services including
                      solution design, system integration, and professional support. With
                      a customer-centric ethos at our core, we are committed to delivering
                      excellence, innovation, and unparalleled value to our clients.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex overflow-hidden  flex-col items-center self-center max-md:pt-6 px-16 pt-20 max-w-full min-h-[600px] w-[1300px] max-md:px-5">
              <img
                loading="lazy"
                srcSet="/landing/image9.png"
                className="object-cover relative inset-0 size-full"
              />
              <div className="flex md:absolute z-10 flex-col px-14 py-20 mt-72 mb-0 max-w-full bg-black w-[1050px] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
                <div className="text-2xl text-white max-md:text-lg font-normal max-md:max-w-full">
                  We provide comprehensive 360-degree solutions, ensuring all your
                  needs are met seamlessly. Our expertise guarantees innovative and
                  effective results.
                </div>
                <button className="flex justify-center items-center px-16 py-9 mt-16 mb-1.5 text-4xl font-semibold bg-black border border-white border-solid rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
                  onClick={() => eventHandler("/contact-us")}>
                  <div className="bg-clip-text max-md:max-w-full max-md:text-xl text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                    GET FREE CONSULTANCY NOW
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center px-16 py-20 mt-52 w-full bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col mb-4 w-full max-w-[1522px] max-md:max-w-full">
                <div className="text-5xl font-semibold bg-clip-text max-md:max-w-full max-md:text-4xl text-transparent bg-gradient-to-br from-custom4 via-custom5 to-custom6">
                  Why Us
                </div>
                <div className="mt-8 text-2xl max-md:text-lg text-white max-md:max-w-full">
                  At TechSol, we excel in a competitive market by providing
                  cutting-edge products, tailored solutions, and top-tier service
                  standards. As industry leaders, we prioritize innovation and
                  continual process improvement. Our comprehensive IT services range
                  from digital marketing to engineering products, including solution
                  design, system integration, and professional support. With a
                  customer-centric approach, we serve both renowned corporate clients
                  and emerging start-ups, delivering excellence, innovation, and
                  unparalleled value to all.
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-10">
            <div className="flex gap-5 px-5 w-full max-w-[1813px] max-md:flex-wrap max-md:max-w-full">
              <div className="flex-auto my-auto w-1/2 text-5xl font-semibold bg-clip-text max-md:text-4xl bg-gradient-to-br from-custom4 via-custom5 to-custom6 text-transparent">
                Our Clients
              </div>
              <div className="flex-auto text-2xl max-md:text-lg text-black max-md:max-w-full">
                We are proud to serve some of the most well-known and respected
                corporate clients, and we love helping start-ups and new brands too.
                Our dedicated team tailors solutions to fit each client’s unique
                needs. Let us drive your success with our innovative and comprehensive
                approach.
              </div>
            </div>
            <div className="flex flex-col items-center px-5 py-10 max-md:py-2 w-full">
              <div className="flex flex-wrap max-md:flex-wrap justify-center gap-16 max-md:gap-6 mt-20 w-full max-w-[1667px]">
                <img
                  loading="lazy"
                  srcSet="/home/kelec.png"
                  alt="Kelec"
                  className="w-[250px] max-md:w-1/4 h-[150px] max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/shell.png"
                  alt="Shell"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/tcs.png"
                  alt="TCS"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/SSGC.jpg"
                  alt="SSGC"
                  className="w-[250px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/landing/engro.png"
                  alt="Engro"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/Cements.png"
                  alt="Cements"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
              </div>
              <div className="flex flex-wrap justify-center max-md:gap-6 gap-28 mt-10 max-md:mt-0 w-full max-w-[1667px]">
                <img
                  loading="lazy"
                  srcSet="/home/c11.png"
                  alt="C11"
                  className="w-[300px] h-[200px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/c3.png"
                  alt="C3"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/c5.png"
                  alt="C5"
                  className="w-[200px] h-[200px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/c6.png"
                  alt="C6"
                  className="w-[275px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
                <img
                  loading="lazy"
                  srcSet="/home/toyota.png"
                  alt="Toyota"
                  className="w-[150px] h-[150px]  max-md:w-1/4 max-md:h-1/4"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center px-16 pt-20 pb-12 bg-black max-md:px-5">
              <div className="mt-12 text-6xl font-semibold bg-clip-text max-md:mt-10 max-md:text-4xl bg-gradient-to-br from-custom4 via-custom5 to-custom6 text-transparent">
                Partners
              </div>
              <div className="container mx-auto px-5 py-10">
                <div className="flex max-md:flex-wrap flex-row gap-40 max-md:gap-3 justify-center mt-10 max-md:mt-0">
                  <img
                    loading="lazy"
                    srcSet="/home/p1.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p2.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/clch.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-1/4 max-md:h-1/4"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/dell.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-1/4 max-md:h-1/4"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p12.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-1/4 max-md:h-1/4"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p6.png"
                    alt="Techsol Solutions"
                    className="w-40 h-40 object-contain max-md:w-1/4 max-md:h-1/4"
                  />
                </div>
                <div className="flex flex-row max-md:flex-wrap max-md:gap-10 gap-16 justify-center mt-11">
                  <img
                    loading="lazy"
                    srcSet="/home/shopify.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/sangforr.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/tp.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p5.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p16.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/ibm.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                </div>
                <div className="flex flex-row max-md:flex-wrap gap-16 max-md:gap-10 justify-center mt-0">
                  <img
                    loading="lazy"
                    srcSet="/home/p10.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/p9.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/linux.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/H.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/hioki.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                  <img
                    loading="lazy"
                    srcSet="/home/oracle.png"
                    alt="Techsol Solutions"
                    className="w-60 h-60 md:object-contain max-md:w-2/5 max-md:h-2/5"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
