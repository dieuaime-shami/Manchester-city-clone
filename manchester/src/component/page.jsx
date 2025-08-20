import React from 'react'
import logoUniversity from '../assets/image/logoUniversity.png'
import homepageSmaller from '../assets/image/homepageSmaller.jpg'
import AlanG500 from '../assets/image/AlanG500.jpg'
import sevenBros from '../assets/image/sevenBros.jpg'
import UoMake from '../assets/image/UoMake.jpg'

const page = () => {
  return (
    <div>
     <nav className='w-full h-24 my-10'>
      <div className='flex justify-around'>
        <ul className='flex text-3xl space-x-12 items-center text-gray-400'>
          <li><img src={logoUniversity} alt="" /></li>
          <li><i class="fa-solid fa-house"></i></li>
          <li><h1>Study</h1></li>
          <li><h1>Research</h1></li>
          <li><h1>Collaborate</h1></li>
          <li><h1>About</h1></li>
          <li><h1>Connect</h1></li>
        </ul>
        <button className='border border-gray-500 w-40 h-16 rounded-2xl text-3xl text-gray-400'> <i class="fa-solid fa-magnifying-glass"></i>Search</button>
      </div>
     </nav>
    
    {/* fontpage */}
    <div className='mx-10 relative my-10'>
      <img src={homepageSmaller} alt="" className=''/>
      <div className='absolute top-30 left-50'>
        
          <h1 className='text-5xl w-105 bg-gray-300 px-2 py-5'>One of the world's top 50 universities</h1>
          <h1 className='bg-gray-300 w-80 py-3 text-start text-lg px-5'>We are 46th in the latest Academic tanking of World Universities.</h1>
        <button className='py-4 px-4 bg-violet-800 text-xl text-white'>Find out more</button>
      </div>
    </div>

    {/* study */}
      <div className='mx-30 my-10'>
        <h1 className='text-5xl my-4'>Study</h1>
      <div className='grid grid-cols-3 gap-20'>
      <div className='grid col-span-2 bg-violet-800 px-4 py-5 relative'>
          <h1 className='text-4xl text-white'>Course and prgramme finder</h1>
          <h1 className='text-2xl text-white'>A-Z list:</h1>

          <ul className='my-10 text-xl text-amber-300 space-y-3'>
            <li>Undergraduate courses(2026 entry)</li>
            <li>Undergraduate courses(2025 entry)</li>
            <li>Taught master's courses</li>
            <li>Postgraduate research areas</li>
          </ul>
          <div className='flex flex-col space-y-3 absolute right-10 top-30'>
            <input type="text" className='w-100 bg-white text-lg rounded-sm h-10 px-2' placeholder='Undergraduate(2026 entry)'/>
            <input type="text" className='w-100 bg-white text-lg rounded-sm h-10 px-2' placeholder='Enter keywords'/>
            <button className='w-100 bg-gray-700 text-white rounded-sm h-10 px-2 text-lg'>Search</button>
          </div>
      </div>
      <div className='bg-gray-200  grid col-span-1'>
        <div className='py-10 px-5 space-y-5'>
          <h1 className='text-3xl'>Clearing 2025</h1>
         <h1 className='text-xl'>We have a few courses available in clearing.</h1>
         <h1 className='text-2xl text-violet-700 mt-10'>Browse vacancies</h1>
        </div>
      </div>
    </div>
     </div>

     {/* Pupular links */}
     <div className='mx-30 my-10'>
        <div className='grid grid-cols-3 gap-x-3'>
          <div>
            <img src={UoMake} alt="" />
            <button>Manchester 2035</button>
            <p>Read the latest on <span>Manchester 2025</span> as we move into the third phase of the strategy process.</p>
          </div>
          <div>
            <img src={sevenBros} alt="" />
          </div>
          <div>
            <img src={AlanG500} alt="" />
          </div>
        </div>
     </div>
    </div>
  )
}

export default page
