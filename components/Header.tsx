import Image from 'next/image'
import React from 'react'
import { ChevronDownIcon, HomeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image 
          objectFit="contain" 
          src="https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg" 
          layout="fill" 
          alt="logo"
        />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5"/>
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5"/>
      </div>

      <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100'>
        <MagnifyingGlassIcon className='h-7 w-7 text-gray-400 pl-2'/>
        <input type="text" placeholder="Search Reddit Clone" className='flex-1 bg-transparent outline-none'/>
        <button type="submit" hidden/>
      </form>

      {/* Signin / Signout */}
      <div>
        
      </div>
    </div>
  )
}
