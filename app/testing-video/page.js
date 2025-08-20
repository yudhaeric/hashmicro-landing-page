/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Page() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Konten di atas video */}
      <div className="relative z-10 flex flex-col items-center justify-start w-[90%] h-full mx-auto gap-20 mt-10">
        <img src='/assets/top.png' alt='logo' className='w-[280px]'/>
        <img src='/assets/mid.png' alt='logo' className='w-[280px]'/>
        <img src='/assets/button.png' alt='logo' className='w-[200px] mt-[100px]'/>
      </div>
    </div>
  )
}
