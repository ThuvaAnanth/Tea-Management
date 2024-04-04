import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md"

import footer from '../src/assets/footer.jpg';

export default function Footer() {

    const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";

    return <div className='flex items-center justify-around p-2 mobile:flex-col mobile:items-start '
    style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
       
       {/* above 1st*/}
        <div className='flex-1 flex flex-col flex-wrap p-2 text-white'>{/*after this div*/} 
            {/*Store infomation */}
            <h1 className='text-[25px] pt-4 pb-4 font-serif '>{/*3rd */}
               Freash Leaves
            </h1>
            <p className="font-serif">{/**4th */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quo, inventore esse? Voluptas, in sit aliquid mollitia aspernatur harum eos,
            </p>
            <div className='flex items-center justify-center mt-3 self-start pb-4'>{/*5th social div */}
                <div className={socialStyle + 'bg-blue-700'}>
                <TiSocialFacebook />
                </div>
                <div className={socialStyle + 'bg-[#FD610B]'}>
                <TiSocialInstagram />
                </div>
                <div className={socialStyle + 'bg-sky-400'}>
                <TiSocialTwitter />
                </div>
                <div className={socialStyle + 'bg-red-600'}>
                <TiSocialPinterestCircular />


                </div>
            </div>
        </div>
        <div className='flex-1 flex flex-col  text-white  mx-12 '>
            <div className='flex m-3 mx-40 '>
            <MdOutlineLocationOn />
                <p className='pl-3 font-serif '>District of jaffna</p>
            </div>
            <div  className='flex m-3 mx-40'>
            <MdOutlineLocalPhone />
                <p className='pl-3 font-serif'>0772329448</p>
            </div>
            <div  className='flex m-3 mx-40'>
            <MdOutlineMailOutline />
                <p className='pl-3 font-serif'>FreshLeaves@gmail.com</p>
            </div>
        </div>
    </div>
    
}