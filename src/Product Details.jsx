import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'





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
      <h2 className="text-green-800 text-2xl font-bold mb-4">Product Details</h2>
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

