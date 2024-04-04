import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Logo from '../src/assets/uprofile.png'




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
           <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-green-800 text-2xl font-bold mb-4">Edit Profile</h2>

      <div className="flex items-center justify-center">
     
        <img  className='w-[113px] h-[115px] ' src={Logo} alt='Logo'/>
    
    </div>
      <div className="mb-4">
       <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Name"
          type="text"
          placeholder="Name"
        />
      </div>


      <div className="mb-4">
        
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="expiration"
          type="text"
          placeholder="Email-Address"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="  Mobile Number"
          type="text"
          placeholder="Mobile Number"
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
      <button className="bg-green-800  hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
       Update
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

