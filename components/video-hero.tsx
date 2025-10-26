"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function VideoHero({ children }: { children?: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Force play for Safari compatibility
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
      }
    };

    playVideo();

    // Retry play on user interaction for Safari
    document.addEventListener("touchstart", playVideo, { once: true });
    document.addEventListener("click", playVideo, { once: true });

    return () => {
      document.removeEventListener("touchstart", playVideo);
      document.removeEventListener("click", playVideo);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/crowdia-logo-icon-transparent.png"
      >
        <source src="/Glowing_Night_City_Trails_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {children}
      </div>
    </section>
  );
}
