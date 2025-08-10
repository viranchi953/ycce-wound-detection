"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function Demo() {
  return (
    <div>
      <Navbar/>
      <div className="flex justify-center my-8">
        <iframe
          width="1120"
  height="630"
          src="https://www.youtube.com/embed/pcY-iNTYHDI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export default Demo
