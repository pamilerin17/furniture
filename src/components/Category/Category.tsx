import React from 'react';
import Feature1 from '../../assets/feature_1.png';
import Feature2 from '../../assets/feature_2.png';
import Feature3 from '../../assets/feature_3.png';
import Feature4 from '../../assets/feature_4.png';
import { FaPlay } from 'react-icons/fa';


const categories = [
  {
    title: "Latest foam Sofa",
    subtitle: "Premium Quality",
    image: Feature1,
  },
  {
    title: "Latest foam Sofa",
    subtitle: "Premium Quality",
    image: Feature2,
  },
  {
    title: "Latest foam Sofa",
    subtitle: "Premium Quality",
    image: Feature3,
  },
  {
    title: "Latest foam Sofa",
    subtitle: "Premium Quality",
    image: Feature4,
  },
];

function Category() {
  

  return (
    <div className="bg-[#f6fbff] px-6 py-16 w-full">
      <h2 className="text-3xl font-bold text-center mb-10">Featured Category</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-between bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            data-aos="fade-up"
          >
            {/* Text content */}
            <div className="w-full space-y-4 text-center md:text-left">
              <p className="text-gray-600 text-sm md:text-base">{item.subtitle}</p>
              <h2 className="text-2xl font-bold text-black">{item.title}</h2>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center justify-center md:justify-start gap-2 text-pink-600 font-semibold uppercase text-sm hover:translate-x-1 transition-transform">
                  Explore Now <FaPlay className="text-pink-500" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full mt-6">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-72 object-contain mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
