import React, { useEffect, useState } from 'react'
import axios from "axios"
import Layout from '../components/Layout';
import {Helmet} from "react-helmet"

const Contact = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/create/contact", {
      name,
      email,
      subject,
      message
    })
      .then(response => {
        // Handle successful response
        console.log("Success:", response.data);
      })
      .catch(error => {
        // Handle error
        console.error("Error:", error);
      });
  }

  return (
    <>
    <Helmet>
      <title>Contact US - Techsol Solutions</title>
    </Helmet>
    <Layout title = {"Contact Us"}>
      <div className="flex flex-col font-poppins bg-white">
        <img
          loading="lazy"
          srcSet="/contact/first.png"
          alt='Techsol Solutions'
          className="w-full aspect-[0.33] max-md:max-w-full max-md:max-h-[200px] md:max-h-[800px]"

        />
        <div className="w-full  rounded-xl shadow-2xl max-md:max-w-full">
          <div className="flex max-md:flex-col max-md:gap-0">
          <div class="flex justify-center items-center w-full md:w-1/2 p-5  rounded-lg ">
  <img src="/contact/Frame.png" alt="Techsol Solutions" className="w-full max-w-xs md:max-w-md rounded-md" />
</div>
            <form action="Submit">
              <div className="flex flex-col ml-5 md:item-center align-middle w-full max-md:ml-0 max-md:w-full">
                <div className="flex flex-col  self-stretch px-5 my-auto text-xs font-semibold leading-5 text-neutral-400 max-md:mt-0 max-md:max-w-full">
                  <div className="self-center text-custom1 mt-10 text-5xl leading-5  max-md:text-4xl">
                    Contact Us
                  </div>
                  <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                    <label className="block text-sm font-medium text-gray-700 font-poppins">Your Name</label>
                    <input
                      type="text"
                      className="mt-1 p-2 block w-full border-1 sm:text-sm border-gray-300 "
                      // placeholder="Enter Your Name"
                      value={name}
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                    <hr className='border-1' />
                  </div>

                  <div className="mt-6 max-md:mt-10 md:w-full max-md:max-w-full">
                    <label className="block text-sm font-medium text-gray-700 font-poppins">Email Address</label>
                    <input
                      type="text"
                      className="mt-1  block w-full  sm:text-sm border-gray-300 p-2"
                      // placeholder="Email Address"
                      value={email}
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <hr className='border-1' />
                  </div>

                  <div className="mt-6 max-md:mt-10 max-md:max-w-full">
                    <label className="block text-sm font-medium text-gray-700 font-poppins">Subject</label>
                    <input
                      type="text"
                      className="mt-1  block w-full  sm:text-sm border-gray-300 p-2"
                      // placeholder="Subject"
                      value={subject}
                      required
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    <hr className='border-1' />
                  </div>

                  <div className="mt-6 max-md:mt-10 max-md:max-w-full">
                    <label className="block text-sm font-medium text-gray-700 font-poppins">Message</label>
                    <textarea
                      rows="4"
                      className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 border-2 pl-2 pt-2 rounded-md"
                      // placeholder="Message"
                      value={message}
                      required
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>


                  <div className="justify-center self-end px-11 md:mb-2 max-md:mb-2 py-4 mt-7 text-base font-medium text-center text-white bg-custom1 rounded-md hover:bg-custom1 shadow-sm max-md:px-5"
                    onClick={handleSubmit}>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-center items-center px-16 max-md:py-6 md:py-20 w-full bg-zinc-300 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-6 md:mb-9 w-full max-w-[1620px] max-md:max-w-full">
            <div className="text-5xl text-custom1 font-semibold max-md:max-w-full max-md:text-4xl">
              Our Locations
            </div>
            <div className="mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-6 w-full text-lg md:font-medium max-md:font-base text-black bg-white max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/contact/khi.png"
                      alt='Techsol Solutions'
                      className="w-full aspect-[1.49] max-md:max-w-full"
                    />
                    <div className="flex flex-col px-16 mt-9 max-md:px-5 max-md:max-w-full">
                      <div className="text-3xl">Karachi </div>
                      <div className="mt-4">
                        36-E/1, Block 6, PECHS, Shahrah e Faisal, Karachi,
                        Pakistan.
                      </div>
                      <div className="flex gap-1.5 mt-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/daea0b6f38dfd846efe2be27391e48389ecd4b0b108523f14c9ed586687a326f?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto my-auto">+92 21 34370164-6</div>
                      </div>
                      <div className="flex gap-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2401a9523e35aa2c8ded851602520af6ca1dbecd73eb6fc19b1d105f0d774e5f?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto my-auto">+92 21 34370167</div>
                      </div>
                      <div className="flex gap-1.5 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5ac383a79255a1495fdb87d7ef6841641e0495f19fa9b047563f4885c4997ec?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto self-start mt-3">
                          info@techsolsol.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-14 w-full text-lg max-md:text-normal md:font-medium text-black bg-white max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/contact/lhr.png"
                      alt='Techsol Solutions'
                      className="w-full aspect-[1.49] max-md:max-w-full"
                    />
                    <div className="flex flex-col items-start pr-20 pl-8 mt-9 max-md:px-5 max-md:max-w-full">
                      <div className="text-3xl">Lahore</div>
                      <div className="mt-5 max-md:ml-2">
                        Office no. 243, 2nd Floor, Landmark Plaza, 5/6 Jail Road, Gulberg
                        V Lahore, Pakistan.
                      </div>
                      <div className="flex gap-1.5 mt-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/36ca7a879d68c4b4705eddb194e0ae3de384bd564966d56fa74d763682fddaae?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto my-auto">+92 42 37874441</div>
                      </div>
                      <div className="flex gap-1.5 whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9de72bbaf5f312154f95b22eb44bf1568b697058a8bdd412b807a4dd4e31f1?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto self-start mt-3">
                          info@techsolsol.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow pb-14 w-full text-lg max-md:font-normal md:font-medium text-black bg-white max-md:mt-10 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="/contact/isb.png"
                      alt='Techsol Solutions'
                      className="w-full aspect-[1.49] max-md:max-w-full"
                    />
                    <div className="flex flex-col px-11 mt-9 max-md:px-5 max-md:max-w-full">
                      <div className="text-3xl max-md:max-w-full">Islamabad</div>
                      <div className="mt-5 max-md:max-w-full">
                        Office no. 16, Second Floor,
                        <br />
                        Zaki Center, I-8 Markaz, Islamabad, Pakistan
                      </div>
                      <div className="flex gap-1.5 self-start mt-3">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/702ed924bc2a969c57253c9a0458a1bea567c1e468b80b4bac8a7dd4350f2b22?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto my-auto">+92 321 5455374</div>
                      </div>
                      <div className="flex gap-1.5 self-start whitespace-nowrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af270c10ee0b06734b6745efa2bffe677fe3806a0a6b7e48d582a122856448d?"
                          alt='Techsol Solutions'
                          className="shrink-0 w-8 aspect-square"
                        />
                        <div className="flex-auto self-start mt-3">
                          info@techsolsol.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </>
  )
}

export default Contact
