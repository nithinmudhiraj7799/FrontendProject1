// src/components/HeroSection.jsx
import React, { useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        console.log("Video playing");
      } else {
        video.pause();
        console.log("Video paused");
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/13384288_1920_1080_60fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls 
      />

    
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
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
