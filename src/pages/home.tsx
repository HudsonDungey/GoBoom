import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import { GiMining } from "react-icons/gi";
import { FaTrafficLight } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";
import { IoIosChatboxes } from "react-icons/io";
import { Input } from "postcss";

export const Page = () => {
  return (
    <div className="min-h-screen flex flex-col">
<section className="relative w-full h-screen flex items-center justify-center text-center text-white">
        <div className="absolute top-0 left-0 w-full h-full"></div>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/traffic.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 p-5">
          <h2 className="text-base font-semibold tracking-wide uppercase text-gogateamber">Safety & Efficiency</h2>
          <h1 className="text-5xl font-bold drop-shadow-lg pb-3 mt-2">
            Your Traffic Control, Simplified and Portable
          </h1>
          <h2 className="text-sm font-semibold tracking-wide uppercase text-white">
            GoGate provides reliable, portable boom gates for traffic control, mining, and enhanced site <br/> safety. Discover more!
          </h2>
          <a href="#solutions" className="mt-6 inline-block bg-gogateamber text-sm text-black px-6 py-3 rounded font-bold text-lg hover:bg-amber-600">
            Explore GoGate
          </a>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center flex flex-col justify-center items-center">
          <h1 className="text-sm font-semibold pb-3 flex text-gogateamber flex-row jusify-center items-center"><span><HiDotsVertical /></span>SERVICES OVERVIEW</h1>
          <h2 className="text-4xl font-bold text-black mb-10">Our Expert Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Mining Solutions", image: "/mining.jpeg", icon: <GiMining /> },
              { name: "Public Traffic Control", image: "/traffic.jpeg", icon: <FaTrafficLight /> },
              { name: "Events", image: "/events.jpeg", icon: <LuPartyPopper /> },
            ].map((solution) => (
              <div key={solution.name} className="bg-white shadow-lg rounded-lg">
                <img src={solution.image} alt={solution.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="text-xl font-semibold text-gray-800 p-4 flex flex-row justify-center items-center gap-x-4"><span className="text-gogateamber">{solution.icon}</span>{solution.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Core Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-10">Our Core Values</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              {title: "Safety", info: "Our gates are designed to reduce having people in dangerous work areas, while keeping a safe and controlled worksite."},
              {title: "Efficiency", info: "Quick deployment and automated operation ensure traffic is managed without unnecessary delays."},
              {title: "Ease", info: "Our boom gates are simple to install and use, making site management effortless."},
              {title: "Quality", info: "We use high-grade materials to ensure durability and long-term reliability."},
              {title: "Reliability", info: "GoGate solutions work consistently in all conditions, ensuring uninterrupted access control."},
              {title: "Innovation", info: "We continuously improve our technology to offer the best in traffic and site management."},
            ].map((value) => (
              <div key={value.title} className="bg-gray-200 px-6 py-4 rounded-lg text-lg font-semibold text-center">
                <h3 className="text-xl text-gogateamber">{value.title}</h3>
                <p className="text-gray-700 text-sm mt-2">{value.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/city.jpeg')" }}>
        <div className="w-full h-full bg-black bg-opacity-50 absolute top-0 left-0"></div>
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          {/* Left Section */}
          <div className="text-white flex flex-col justify-center items-start">
            <h2 className="text-lg uppercase font-semibold text-gogateamber">Our Impact</h2>
            <h1 className="text-5xl font-bold mt-2">Proven Performance</h1>
            <p className="text-lg text-gray-300 mt-4">Delivering excellence across diverse project applications.</p>
            <a href="#contact" className="mt-6 inline-block bg-gogateamber text-black px-6 py-3 rounded-sm font-bold text-lg hover:bg-amber-600">
              Get Quote
            </a>
          </div>
          {/* Right Section - Stats */}
          <div className="grid grid-cols-2 gap-6 text-center text-white">
            <div className="bg-black bg-opacity-60 p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-gogateamber">500+</h2>
              <p className="text-lg">Sites Secured</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-gogateamber">3+</h2>
              <p className="text-lg">Professional Engineers</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-gogateamber">24/7</h2>
              <p className="text-lg">Support Available</p>
            </div>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg">
              <h2 className="text-4xl font-bold text-gogateamber">100+</h2>
              <p className="text-lg">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-gray-100 grid grid-cols-2">
         <div className="p-10 pl-20 flex flex-col items-start">
          <h1 className="text-sm pb-3 flex flex-row gap-x-2 text-gogateamber justify-center items-center">
          <IoIosChatboxes /> LET'S TALK
          </h1>
          <h1 className="text-5xl font-bold text-start pb-10">
            Want to improve your business with <span className="text-gogateamber">GoGates</span>?
          </h1>
            <div className="flex flex-col w-full pt-10">
            <form className="w-full rounded-lg flex flex-col gap-4">
              <div className="text-start font-semibold pb-4">
              <h1 className="pb-1">Full Name</h1>
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gogateamber" 
              required 
            />
            </div>
            <div className="text-start font-semibold pb-4">
            <h1 className="pb-1">Email</h1>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gogateamber" 
              required 
            />
            </div>
            <div className="text-start font-semibold pb-4">
              <h1 className="pb-1">Message</h1>
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gogateamber"
              required 
            ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-gogateamber w-4/12 text-white font-bold py-3 px-6 rounded-sm hover:bg-amber-600 transition-all"
            >
              Submit
            </button>
          </form>
            </div>
         </div>

         <div className="p-5 flex flex-col justify-between gap-y-6 py-12 h-full">
          <div className="bg-white w-full p-6 flex flex-col justify-center items-center rounded-lg shadow-md flex-1">
            <h1 className="text-xl font-bold">Darwin, Northern Territory</h1>
            <p>123 Main St</p>
          </div>
          <div className="bg-white w-full p-6 flex flex-col justify-center items-center rounded-lg shadow-md flex-1">
            <h1 className="text-xl font-bold">Email</h1>
            <p>admin@gogate.info</p>
          </div>
          <div className="bg-white w-full p-6 flex flex-col justify-center items-center rounded-lg shadow-md flex-1">
            <h1 className="text-xl font-bold">Phone</h1>
            <p>(+61) 0473 964 055</p>
          </div>
        </div>
      </section>
    </div>
  );
}
