import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/utils/constants'
const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
            <Image
              src="/logo.svg"
              alt='Car hub logo'
              width={118}
              height={18}
              className='object-contain'
            />
            <p className='text-base text-gray-700'>
              Carhub 2023 <br />
              All rights reserved &copy;
            </p>
        </div>

        <div className='footer__links'>
            {footerLinks.map(({title,links})=>(
              <div className='footer__link' key={title}>
                  <h3 className='font-bold'>{title}</h3>
                  {links.map((li)=>(
                    <Link href={li.url} key={li.title} className=' text-gray-500'>
                      {li.title}
                    </Link>
                  ))}
              </div>
            ))}
        </div>
      </div>
      
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10'>

                  <p>
                    @2023 Carhub. All Rights Reserved
                  </p>
                <div className='footer__copyrights-link'>
                    <Link href={"/"} className='text-gray-500'>
                      Privacy Policy
                    </Link>
                    <Link href={"/"} className='text-gray-500'>
                      Terms of Use
                    </Link>
                </div>
      </div>
    </footer>
  )
}

export default Footer