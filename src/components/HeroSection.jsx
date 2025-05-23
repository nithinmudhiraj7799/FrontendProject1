// src/components/HeroSection.jsx
import React, { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/futuristic.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Tech Tomorrow</h1>
        <p className="text-lg md:text-2xl mb-6 text-center px-4 md:px-0">
          Discover the Future of AI Technology
        </p>
        <button
          onClick={toggleVideo}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 focus:outline-none"
        >
          Play/Pause Video
        </button>
      </div>
    </div>
  );
};

export default HeroSection;