/** @format */

import { useState, useEffect } from "react";
import Photoslider1 from "../assets/Photoslider1.jpg";
import Photoslider2 from "../assets/Photoslider2.jpg";
import Photoslider3 from "../assets/Photoslider3.jpg";
import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right.svg";

const images = [Photoslider1, Photoslider2, Photoslider3];
const descriptions = [
  "Eco-Friendly Briquettes",
  "Minimal Combustion Smoke",
  "Lasts up to 4 hours",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Carousel"
      className="relative flex z-20 h-screen w-full items-center m-0 justify-center overflow-hidden md:h-[85vh]"
    >
      <div id="wrapperslider" className="relative h-full w-screen">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Deskripsi gambar ${index + 1}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-16 bottom-12 text-white transition-transform duration-700">
              <h5 className="animate-fade-in-up font-Intertight absolute inset-x-16 bottom-[12rem] z-3 cursor-pointer text-left text-2xl font-bold md:text-3xl lg:text-4xl">
                {descriptions[index]}
              </h5>
              <p className="font-Intertight absolute inset-x-16 bottom-[10.5rem] z-3">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicator Buttons */}
      <div className="absolute bottom-0 left-1/2 flex w-screen -translate-x-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-12 w-full cursor-pointer transition-opacity duration-500 ${
              index === currentIndex
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-20">
        <button onClick={prevSlide} aria-label="Previous Slide">
          <img
            src={ArrowLeft}
            alt="Previous"
            className="h-24 cursor-pointer transition-transform duration-500 hover:scale-110 md:h-48"
          />
        </button>
        <button onClick={nextSlide} aria-label="Next Slide">
          <img
            src={ArrowRight}
            alt="Next"
            className="h-24 cursor-pointer transition-transform duration-500 hover:scale-110 md:h-48"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
