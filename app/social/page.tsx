"use client";

import { VideoHero } from "@/components/video-hero";
import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SocialPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoHero allowOverflow>
        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors z-20"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-inter">Indietro</span>
        </Link>

        {/* Logo in Top Right */}
        <div className="absolute top-8 right-8 flex items-center gap-1 z-20 group cursor-pointer">
          <Link href="/" className="flex items-center gap-1">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />
              <div className="relative w-full h-full transition-all duration-500 group-hover:scale-110">
                <Image
                  src="/crowdia-logo-icon-transparent.png"
                  alt="CROWDIA Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)] group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.9)]"
                  priority
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
            </div>
            <span className="font-montserrat text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)]" translate="no">
              CROWDIA
            </span>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 px-4">
          {/* Main Heading */}
          <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-20">
            <span className="text-white">La tua vita sociale</span>
            <br />
            <span className="text-primary">merita un upgrade</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Basta screenshot persi nelle chat. <span className="text-primary font-semibold" translate="no">CROWDIA</span> raccoglie tutti gli eventi di Palermo in un unico feed.
          </p>

          {/* Scarcity Note */}
          <p className="text-lg md:text-xl text-primary font-semibold">
            🔥 Beta limitata a 1.000 posti.
          </p>

          {/* Waitlist Form */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <WaitlistForm buttonText="Entra in Lista d'Attesa" source="social" glowButton={true} emailOnly={true} />
            </div>
          </div>
        </div>
      </VideoHero>
    </main>
  );
}
