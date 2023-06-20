"use client"
import { showMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import {Button} from './'
import { updateSearchParams } from '@/utils/updateSearchParams'

const ShowMore = ({pageNumber,isNext}:showMoreProps) => {
  const router = useRouter()

  const handleNavigation=()=>{
        const newLimit = (pageNumber+1)*10
        const newPathName = updateSearchParams("limit",`${newLimit}`)
        router.push(newPathName)
  }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <Button
        title='ShowMore'
        btnType='button'
        containerStyles='bg-primary-blue rounded-full text-white'
        handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore