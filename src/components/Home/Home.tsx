import React, { useState, useEffect } from 'react'
import Chair from '../../assets/banner_img.png.webp'
import Chair2 from '../../assets/istock.webp' // Add a second image

const slides = [
  {
    title: "Wood & Cloth Sofa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    img: Chair,
  },
  {
    title: "Modern Leather Couch",
    desc: "Elegance and comfort combined for your perfect space...",
    img: Chair2,
  },
]

function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  const current = slides[index]

  return (
    <div className="w-full bg-white px-4 py-10 transition-all duration-700 ease-in-out">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* Text Section */}
        <div className="md:w-1/2 space-y-4 text-center md:text-left transition-opacity duration-700">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            {current.title}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">{current.desc}</p>
         <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white hover:from-yellow-600 hover:to-red-600 transition duration-300 rounded-md">
  Buy Now
</button>

        </div>

        {/* Image Section */}
        <div className="md:w-1/2 transition-all duration-700">
          <img src={current.img} alt="Sofa" className="w-full h-auto rounded-xl shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default Home
