import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {Button} from './index'
const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] flex items-center justify-between mx-auto sm:px-16 px-6 py-4'>
            <Link href="/" className='flex items-center justify-center'>
                <Image
                src="/logo.svg"
                alt='Car hub logo'
                width={118}
                height={18}
                className='object-contain'
                />
            </Link>
            <Button
            title='Sign In'
            btnType="button"
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            />
        </nav>
    </header>
  )
}

export default Navbar