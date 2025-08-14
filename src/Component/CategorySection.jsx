import React from "react";
import men from "../assets/men.jpg";
import women from "../assets/women.jpg";
import kid from "../assets/kid.jpg";

const CategorySection = () => {
  const images = [
    { title: "men", image: men },
    { title: "women", image: women },
    { title: "kid", image: kid },
  ];
  return (
    <div className="mx-auto grid grid-cols-1 sm:grid-cols-3  gap-6  ">
      {images.map((images, index) => (
        <div
          key={index}
          className="relative -64 transform transition-transform duration-300 hover:scale-105 cursor-pointer "
        >
          <img
            src={images.image}
            alt="image"
            className="w-100 h-50 object-cover rounded-lg shadow-md"
          />
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold capitalize">{images.title}</p>
            <p className="text-gray-900  font-semibold capitalize">view all</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
