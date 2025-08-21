import React from "react";
import logoUniversity from "../assets/image/logoUniversity.png";
import homepageSmaller from "../assets/image/homepageSmaller.jpg";
import AlanG500 from "../assets/image/AlanG500.jpg";
import sevenBros from "../assets/image/sevenBros.jpg";
import UoMake from "../assets/image/UoMake.jpg";
import ManchesterSkyline from "../assets/image/ManchesterSkyline.jpg";
import researchimpact from "../assets/image/researchimpact.jpg";
import uomresearch from "../assets/image/uomresearch.jpg";
import festbusiness from "../assets/image/festbusiness.jpg";
import allianceBus from "../assets/image/allianceBus.jpg";
import QSrankings from "../assets/image/QSrankings.jpg";
import arwu2025 from "../assets/image/arwu2025.jpg";
import iStockone from "../assets/image/iStockone.jpg";
import internationalCentres from "../assets/image/internationalCentres.jpg";
import InternationalEducation from "../assets/image/InternationalEducation.jpg";
import BusinessEngagement from "../assets/image/BusinessEngagement.jpg";
import Policy from "../assets/image/Policy.jpg";
import SupportManchester from "../assets/image/SupportManchester.jpg";
import ConnectJobs from "../assets/image/ConnectJobs.jpg";
import alumnipromo from "../assets/image/alumnipromo.jpg";
import TeachersCareers from "../assets/image/TeachersCareers.jpg";
import jodrell from "../assets/image/jodrell.jpg";
import JohnRylands from "../assets/image/JohnRylands.jpg";
import ManchesterMuseum from "../assets/image/ManchesterMuseum.jpg";
import manchesterchristmas from "../assets/image/manchesterchristmas.jpg";
import theWhitworth from "../assets/image/theWhitworth.jpg";
import sactuaryAward from "../assets/image/sactuaryAward.jpg";
import Platinumengagelogo from "../assets/image/Platinumengagelogo.jpg";
import charters from "../assets/image/charters.jpg";
import AthenaSwan from "../assets/image/AthenaSwan.jpg";
import livingwage from "../assets/image/livingwage.png";
import icons from "../assets/image/icons.png";

const page = () => {
  return (
    <div>
      <nav className="w-full h-24 my-10">
        <div className="flex justify-around">
          <ul className="flex text-3xl space-x-12 items-center text-gray-400">
            <li>
              <img src={logoUniversity} alt="" />
            </li>
            <li>
              <i class="fa-solid fa-house"></i>
            </li>
            <li>
              <h1>Study</h1>
            </li>
            <li>
              <h1>Research</h1>
            </li>
            <li>
              <h1>Collaborate</h1>
            </li>
            <li>
              <h1>About</h1>
            </li>
            <li>
              <h1>Connect</h1>
            </li>
          </ul>
          <button className="border border-gray-500 w-40 h-16 rounded-2xl text-3xl text-gray-400">
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i>Search
          </button>
        </div>
      </nav>

      {/* fontpage */}
      <div className="mx-10 relative my-10">
        <img src={homepageSmaller} alt="" className="" />
        <div className="absolute top-30 left-50">
          <h1 className="text-5xl w-105 bg-gray-300 px-2 py-5">
            One of the world's top 50 universities
          </h1>
          <h1 className="bg-gray-300 w-80 py-3 text-start text-lg px-5">
            We are 46th in the latest Academic tanking of World Universities.
          </h1>
          <button className="py-4 px-4 bg-violet-800 text-xl text-white">
            Find out more
          </button>
        </div>
      </div>

      {/* study */}
      <div className="mx-30 my-10">
        <h1 className="text-5xl my-4">Study</h1>
        <div className="grid grid-cols-3 gap-20">
          <div className="grid col-span-2 bg-violet-800 px-4 py-5 relative">
            <h1 className="text-4xl text-white">Course and prgramme finder</h1>
            <h1 className="text-2xl text-white">A-Z list:</h1>

            <ul className="my-10 text-xl text-amber-300 space-y-3">
              <li>Undergraduate courses(2026 entry)</li>
              <li>Undergraduate courses(2025 entry)</li>
              <li>Taught master's courses</li>
              <li>Postgraduate research areas</li>
            </ul>
            <div className="flex flex-col space-y-3 absolute right-10 top-30">
              <input
                type="text"
                className="w-100 bg-white text-lg rounded-sm h-10 px-2"
                placeholder="Undergraduate(2026 entry)"
              />
              <input
                type="text"
                className="w-100 bg-white text-lg rounded-sm h-10 px-2"
                placeholder="Enter keywords"
              />
              <button className="w-100 bg-gray-700 text-white rounded-sm h-10 px-2 text-lg">
                Search
              </button>
            </div>
          </div>
          <div className="bg-gray-200  grid col-span-1">
            <div className="py-10 px-5 space-y-5">
              <h1 className="text-3xl">Clearing 2025</h1>
              <h1 className="text-xl">
                We have a few courses available in clearing.
              </h1>
              <h1 className="text-2xl text-violet-700 mt-10">
                Browse vacancies
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Pupular links */}
      <div className="mx-30 my-10">
        <div className="grid grid-cols-3 gap-x-3">
          <div className="relative">
            <img src={UoMake} className="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Manchester 2035
            </button>
            <p className="text-lg mt-5">
              Read the latest on{" "}
              <span className="italic text-gray-500">Manchester 2025</span> as
              we move into the third phase of the strategy process.
            </p>
          </div>
          <div className="relative">
            <img src={sevenBros} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Manchester 2035
            </button>
            <p className="text-lg mt-4">
              Discover what student support services are available during the
              summer break
            </p>
          </div>
          <div className="relative">
            <img src={AlanG500} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Manchester 2035
            </button>
            <p className="text-lg mt-4">
              Join our campus tour (21 August) to explore if Manchester is the
              place for you.
            </p>
          </div>
        </div>
      </div>

      {/* Research */}
      <div className="w-full bg-gray-200 py-5">
        <div className="mx-30 my-10">
          <p className="text-5xl font-thin my-5">Research</p>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="relative">
              <img src={ManchesterSkyline} className="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                Research beacons
              </button>
              <p className="text-lg mt-5">
                Pioneering research discoveries in advanced materials,
                biotechnology,cancer,energy and global inequalities
              </p>
            </div>
            <div className="relative">
              <img src={researchimpact} alt="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                Impact
              </button>
              <p className="text-lg mt-4">
                We're delivering innovative solutions to the world's biggest
                challenges and transforming lives.
              </p>
            </div>
            <div className="relative">
              <img src={uomresearch} alt="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                Research Explorer
              </button>
              <p className="text-lg mt-4">
                Find out more about our researchers, publications and projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* News */}
      <div className="w-full px-23 py-10">
        <div className="w-full flex justify-between px-15 py-5">
          <p className="text-5xl font-thin">News</p>
          <p className="text-2xl font-thin text-violet-700 underline">
            All news
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-4 gap-x-10">
          <div>
            <img src={festbusiness} alt="" />
            <p className="text-2xl py-3">
              Festival of Business to mark 60 years of AMBS
            </p>
            <p className="text-lg">
              To mark its 60th anniversary,Alliance Manchester Business
              school(AMBS) is bringing back its Festival of Business, expanding
              on the sucess of last year's event.
            </p>
          </div>
          <div>
            <img src={arwu2025} alt="" />
            <p className="text-2xl py-3">
              Manchester 46th in the world in academic rankings
            </p>
            <p className="text-lg">
              The University has risen to 46th globally in the 2025 Academic
              Ranking of World Universities (ARWU).
            </p>
          </div>
          <div>
            <img src={allianceBus} alt="" />
            <p className="text-2xl py-3">Remembering Lord David Alliance CBE</p>
            <p className="text-lg">
              It is with great sadness that we have learnt about the passing of
              Lord David Alliance CBE.
            </p>
          </div>
          <div>
            <img src={QSrankings} alt="" />
            <p className="text-2xl py-3">
              Manchester holds firm as a global leader in QS World University
              Rankings
            </p>
            <p className="text-lg">
              {" "}
              Manchester ranks 35th globally and 7th in the UK,highlighting its
              world teaching research strength and societal impact.
            </p>
          </div>
        </div>
      </div>

      {/* Global influence */}
      <div className="w-full bg-gray-200 py-5">
        <div className="mx-30 my-10">
          <p className="text-5xl font-thin my-5">Global influence</p>
          <div className="grid grid-cols-3 gap-x-3">
            <div className="relative">
              <img src={iStockone} className="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                Global partnerships
              </button>
              <p className="text-lg mt-5 px-2">
                {" "}
                Discover our pioneering partnerships with key institutions
                across the globe including the Melbourne-Toronto Alliane.
              </p>
            </div>
            <div className="relative">
              <img src={internationalCentres} alt="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                Global centres
              </button>
              <p className="text-lg mt-4">
                Our global centres offer a diverse portfolio of distance and
                blended learning programmes.
              </p>
            </div>
            <div className="relative">
              <img src={InternationalEducation} alt="" />
              <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
                International education
              </button>
              <p className="text-lg mt-4">
                We welcome one the largest international student populations in
                the UK to our university every year.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Collaborate*/}
      <div className="mx-30 my-10">
        <p className="text-4xl font-thin py-5">Collaborate</p>
        <div className="grid grid-cols-3 gap-x-3">
          <div className="relative">
            <img src={BusinessEngagement} className="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-25 text-xl">
              Services for business
            </button>
            <p className="text-lg mt-5 px-5">
              We know the value of working together. Our expertise can help you
              achieve you business objectives.
            </p>
          </div>
          <div className="relative">
            <img src={Policy} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-25 text-xl">
              Policy
            </button>
            <p className="text-lg mt-4 px-5">
              We engage policymaker, thinkers,researchers, the media and the
              public with our work, informing policy in the UK around the world.
            </p>
          </div>
          <div className="relative">
            <img src={SupportManchester} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-25 text-xl">
              Give to Manchester
            </button>
            <p className="text-lg mt-4 px-5">
              Your support helps our researchers and graduates to build a more
              pogressive, responsible world.
            </p>
          </div>
        </div>
      </div>
      {/* About */}
      <div className="w-full bg-gray-200 grid grid-cols-3 py-10 px-40">
        <div className="flex flex-col gap-y-6">
          <p className="text-5xl font-thin">About</p>
          <div className="flex items-center gap-x-5">
            <button className="h-24 w-24 bg-gray-400 rounded-full"><i class="fa-solid fa-location-dot fa-xl text-white"></i></button>
            <div>
              <p className="text-2xl">Maps</p>
              <p className="text-lg">Come and Visit us</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <button className="h-24 w-24 bg-gray-400 rounded-full"><i class="fa-solid fa-calendar-days fa-2xl text-white"></i></button>
          <div>
            <p className="text-2xl">Events</p>
            <p className="text-lg">What's on at the University</p>
          </div>
        </div>

        <div className="flex items-center gap-x-5">
          <button className="h-24 w-24 bg-gray-400 rounded-full"><i class="fa-solid fa-building-columns fa-2xl text-white"></i></button>
          <div>
            <p className="text-2xl">Heritage</p>
            <p className="text-lg">Explore our past</p>
          </div>
        </div>
      </div>

      {/* Connect*/}
      <div className="mx-30 my-10">
        <p className="text-4xl font-thin py-5">Connect</p>
        <div className="grid grid-cols-3 gap-x-3">
          <div className="relative">
            <img src={ConnectJobs} className="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Job
            </button>
            <p className="text-lg mt-5 px-9">
              We offer every kind od role imaginable. From local talent to global experts, 
              we want to hear from you
            </p>
          </div>
          <div className="relative">
            <img src={alumnipromo} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Alumni
            </button>
            <p className="text-lg mt-4 px-5">
              From career support to events and volunteering, your alumni community is here for you.
            </p>
          </div>
          <div className="relative">
            <img src={TeachersCareers} alt="" />
            <button className="bg-gray-100 py-4 px-4 absolute bottom-19 text-xl">
              Teachers and careers advisers
            </button>
            <p className="text-lg mt-4 px-5">
              Our tailored support services and engaging activities for pupils of all ages will help
              make you job easier.
            </p>
          </div>
        </div>
      </div>

        
        {/* Explore Manchester */}
        <div className="w-full bg-gray-200 py-5">
          <div className="mx-30 my-10">
             <p className="text-5xl font-thin text-gray-700 ">Explore Manchester</p>
            <div className="grid grid-cols-3 border border-black">
              <div className="grid col-span-2 border border-black">
                <img src={jodrell} className="w-full" />
                <div>
                  <p>Jodrell Bank</p>
                  <p>Our jodrell Bank Observator (a UNESCO World Heritage Site) is home to 
                    giant Lovell Telscope.
                  </p>
                </div>
              </div>

              <div className="grid col-span-1 border border-black">
                <img src={JohnRylands} className="w-full"/>
                <div>
                  <p>Jodrell Bank</p>
                  <p>Our jodrell Bank Observator (a UNESCO World Heritage Site) is home to 
                    giant Lovell Telscope.
                  </p>
                </div>
              </div>

              <div className="grid col-span-1 border border-black">
                <img src={ManchesterMuseum} className="w-full" />
                <div>
                  <p>Jodrell Bank</p>
                  <p>Our jodrell Bank Observator (a UNESCO World Heritage Site) is home to 
                    giant Lovell Telscope.
                  </p>
                </div>
              </div>


                <div className="grid col-span-1 border border-black">
                <img src={manchesterchristmas} className="w-full" />
                <div>
                  <p>Jodrell Bank</p>
                  <p>Our jodrell Bank Observator (a UNESCO World Heritage Site) is home to 
                    giant Lovell Telscope.
                  </p>
                </div>
              </div>
              

              <div className="grid col-span-2 border border-black">
                <img src={theWhitworth} className="w-full" />
                <div>
                  <p>Jodrell Bank</p>
                  <p>Our jodrell Bank Observator (a UNESCO World Heritage Site) is home to 
                    giant Lovell Telscope.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
          
          {/* Awards and accreditations */}
        
         <div className="w-full px-23 py-10">
        <div className="w-full px-50 py-5">
          <p className="text-4xl font-thin">Awards and accreditations</p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-5 gap-x-10">
          <div>
            <img src={sactuaryAward} alt="" />
            <p className="text-xl py-3">
              University of Sanctuary
            </p>
            <p className="text-sm">
              We are commited to creating welcoming and safe place for refugees and asylum
              seekers.
            </p>
          </div>

          <div>
            <img src={Platinumengagelogo} alt="" />
            <p className="text-xl py-3">
              Platinum Watermark
            </p>
            <p className="text-sm px-2">
              This award recognises our excellence in delivering and supporting public engagement.
            </p>
          </div>

          <div>
            <img src={charters} alt="" />
            <p className="text-xl py-3">Race Equality Charter</p>
            <p className="text-sm">
              We have a Race Equality Charter Silver Award through AdvanceHE for excellence in advancing racial equality in higher education.
            </p>
          </div>

           <div>
            <img src={livingwage} alt="" />
            <p className="text-xl py-3">Living Wage Foundation</p>
            <p className="text-sm px-3">
              We are proud to be accredited for our commitment to paying our people a real living wage.
            </p>
          </div>

          <div>
            <img src={AthenaSwan} alt="" />
            <p className="text-xl py-3">
             Athen Swan Chanter
            </p>
            <p className="text-sm">
              {" "}
              We're committed to developing the careers of women is science, technolgy engineering mathematics and medicine
            </p>
          </div>
        </div>
      </div>

      {/* semifooter */}
      <div className="w-full bg-gray-200  px-70 py-13">
      <p className="text-2xl font-thin mb-4">Quick links</p>
      <div className="grid grid-cols-3 ">
      <div>
        <ul className="space-y-2 text-gray-600">
          <li>Maps and travel</li>
          <li>University Gift Shop</li>
          <li>Conference venues</li>
          <li>The university of Manchester Libray</li>
          <li>Key academic dates</li>
          <li>Faculties and schools</li>
          <li>Interdisciplinary research</li>
        </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-600">
            <li>Jodrell Bank Discovery Centre</li>
            <li>John Rylands Research Institute and Library</li>
            <li>Manchester Museum</li>
            <li>The Whitworth</li>
            <li>StaffNet</li>
            <li>My Manchester (for students)</li>
            <li>Your Manchester (for alumni)</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2 text-gray-600">
            <li>Information for investors</li>
            <li>Modern Slavery Act statement</li>
            <li>Criminal Finance Act statement</li>
            <li>Student terms and conditions</li>
            <li>A-Z index</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="w-full bg-gray-900 px-90 grid grid-cols-3 py-7">
        <div className="text-white">
          <p className="text-lg mb-4">Contact Us</p>
          <div className="text-gray-300 space-y-2">
            <p className="underline">+44(0) 161 306 6000</p>
            <p>Call recording policy</p>
            <p>Contact details</p>
          </div>
        </div>

        <div className="text-white">
          <p className="text-lg mb-4">Find Us</p>
          <div className="text-gray-300 space-y-1">
            <p>The university of Manchester</p>
            <p>Oxford Rd</p>
            <p>Manchester</p>
            <p>M13 9PL</p>
            <p>UK</p>
          </div>
        </div>

        <div className="text-white">
          <p className="text-lg mb-4">Contact with us</p>
          <div>
            <img src={icons} alt="" />
            <p className="text-gray-400">Contact details</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default page;
