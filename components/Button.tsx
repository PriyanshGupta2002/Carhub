"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const Button = ({title,containerStyles,handleClick,btnType,textStyles,rightIcon}:CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
       {rightIcon &&
       <div className='relative w-6 h-6'>
        <Image
          fill
          className='object-contain'
          src={rightIcon}
          alt='right arrow'
        />
       </div>
       }
    </button>
  )
}

export default Button