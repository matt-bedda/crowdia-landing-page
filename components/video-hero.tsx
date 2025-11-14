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
      {/* Fallback Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-black">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/10 animate-pulse" />
        {/* Radial glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Glowing_Night_City_Trails_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 md:bg-black/70 lg:bg-black/80 z-20" />

      {/* Content Overlay */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
        {children}
      </div>
    </section>
  );
}
