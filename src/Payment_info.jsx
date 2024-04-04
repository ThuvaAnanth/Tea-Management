import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Logo from '../src/assets/payments.svg'




export default function 
() {

  return (
    <>
        <div className=''>{/**Header */}
       <Navbar/>
        </div>
        

        <div className=' flex flex-row'>
            <div className='className= bg-lime-950 w-[175px] h-[490px]text-center rounded-md'>
                <button value="staff_payment" className='btn'> User Information 
                </button>
                <button value = "supplier info" className='btn'> Product Details </button>

                <button vlau ='inventry info' className='btn'>Payment Info</button>
                <button vlau ='inventry info' className='btn'>Feedback History</button>
                
            </div>
            <div className='bg-white -300 w-[30%] h-[485px] flex-grow border'>
            <div className="max-w-md mx-auto bg-gray-300  p-8 rounded-lg shadow-md">
            <h2 className="text-green-800 text-2xl font-bold mb-4">Payment Information</h2>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="First Name"
           />
        </div>
        <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="last Name"
        />
        </div>
        <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="City"
          type="text"
          placeholder="City"
        />
        </div>
         <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Address"
          type="text"
          placeholder="Address"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Code"
          type="text"
          placeholder='Postal code (ZIP)'
        />
      </div>
      <div className="mb-4">
      <img  className='w-[3000px] h-[34px] ' src={Logo} alt='Logo'/>
        </div>

      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Date"
          type="text"
          placeholder=" Card Number                           MM/YY CVC"
        />
      </div>
      <button className="bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
      Save
      </button>
    </div>


            </div>
        </div>
      

        {/*footer */}
        <div className=' w-auto h-[100px] items-end'> 
            <Footer/>
        </div>
    </>
  )
}

