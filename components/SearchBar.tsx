"use client"
import React,{useState} from 'react'
import {SearchManufacturer,SearchButton} from './index'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState("")
    const router = useRouter()
    const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if (manufacturer===" "  && model ===" ") {
        alert("Please give some data")
        return
      }
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
      setManufacturer("")
      setModel("")
    
    }

    const updateSearchParams=(model:string,manufacturer:string)=>{
      const searchParams = new URLSearchParams(window.location.search)
      if (model) {
        searchParams.set('model',model)
      }else{
        searchParams.delete('model')
      }

      if (manufacturer) {
        searchParams.set('make',manufacturer)
      }else{
        searchParams.delete('make')
      }
      const newPathName=`${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathName)
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        
        <SearchButton
            otherClasses="sm:hidden"
            />
        </div>
        <div className='searchbar__item'>
          <Image
          src="/model-icon.png"
          alt='car model'
          width={25}
          height={25}
          className='absolute w-[20px] height-[20px] ml-4'
          />
          <input 
          type="text" 
          name="model" 
          value={model}
          onChange={(e)=>setModel(e.target.value)}
          placeholder='Tiguan..'
          className='searchbar__input'
          />
              <SearchButton
            otherClasses="sm:hidden"
            />
        </div>
        <SearchButton
            otherClasses="max-sm:hidden"
            />
    </form>
  )
}

export default SearchBar