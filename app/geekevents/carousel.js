"use client";
import { useState } from "react";
import Image from "next/image";
import event1 from "../assets/innovaiteluma.png";
const Carousel = () => {
  const cards = [
    { id: 1, img:event1 , event: "InnovAIte", link: "https://lu.ma/m7kepwxr"},
    { id: 2,  img:event1 , event: "InnovAIte", link: "https://lu.ma/m7kepwxr"},
    { id: 3,  img:event1 , event: "InnovAIte", link: "https://lu.ma/m7kepwxr"},
    { id: 4, img:event1 , event: "InnovAIte", link: "https://lu.ma/m7kepwxr"},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[90%] h-[60vw] flex items-center justify-center overflow-hidden">
      {/* Wrapper for the cards */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${cards.length * 100}%`,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[100%] h-[100%] flex-shrink-0 flex items-center justify-center"
          >
            <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-white font-bold  shadow-lg flex items-center justify-center">         
                <Image
                        src={card.img}
                        alt={card.event}
                        className="object-cover cursor-pointer rounded-lg w-[50vw] h-[50vw]"
                      />
            </a>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-[0vw] z-10 p-3 h-[4vw] w-[4vw] bg-gray-800 text-white rounded-full flex items-center justify-center"
      >
        ←
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-[0vw] z-10 p-3 h-[4vw] w-[4vw] bg-gray-800 text-white rounded-full flex items-center justify-center"
      >
        →
      </button>
    </div>
  );
};

export default Carousel;




