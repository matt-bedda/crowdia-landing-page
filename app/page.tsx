"use client";

import { VideoHero } from "@/components/video-hero";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Sparkles, Award, TrendingUp, Zap, Heart } from "lucide-react";

export default function Home() {
  const scrollToCTA = () => {
    const cta = document.getElementById('cta-section');
    cta?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const features = [
    {
      icon: MapPin,
      title: "Real-Time Discovery",
      description: "Find events happening right now around you. No more FOMO—see what's live, trending, and nearby in real time.",
      hidden: false
    },
    {
      icon: Users,
      title: "Social by Design",
      description: "Connect with friends, discover mutual interests, and build your social network through shared experiences.",
      hidden: false
    },
    {
      icon: Heart,
      title: "Real-Life Connections",
      description: "We're building a social app that rewards you for living your best life. Connect with your community, build real relationships, and make memories offline.",
      hidden: false
    },
    {
      icon: Sparkles,
      title: "Gamified Engagement",
      description: "Earn points and rewards for attending events, sharing experiences, and bringing friends. Your social life, rewarded.",
      hidden: false
    },
    {
      icon: TrendingUp,
      title: "Organizer Tools",
      description: "Integrated marketing tools, direct access to influencers, and direct access to your audience. Promote your events effortlessly.",
      hidden: false
    },
    {
      icon: Award,
      title: "Influencer Hub",
      description: "For influencers and PRs: monetize your reach, promote events, and grow your following with our verified membership system.",
      hidden: false
    },
    {
      icon: Zap,
      title: "Instant Everything",
      description: "Buy tickets instantly with our in-app payment system. Seamless crypto-to-fiat conversion—you won't even notice it's Web3.",
      hidden: true
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoHero>
        {/* Logo and Brand in Top Left */}
        <div className="absolute top-8 left-8 flex items-center gap-1 z-20 group cursor-pointer">
          {/* Logo with permanent glow */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            {/* Animated glow background - smaller */}
            {/* <div className="absolute inset-0 rounded-full bg-primary/15 blur-md animate-glow" /> */}
            <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />

            {/* Logo image */}
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

          {/* Title with permanent glow */}
          <h1 className="font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold relative">
            {/* Animated background glow - smaller */}
            {/* <span className="absolute -inset-1 bg-primary/8 blur-lg rounded-lg animate-glow" /> */}
            <span className="absolute -inset-0.5 bg-primary/4 blur-xl rounded-lg animate-glow" style={{ animationDelay: '1s' }} />

            <span className="text-white relative inline-block">
              {/* Text with layered glow */}
              <span className="relative z-10 drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)] group-hover:scale-110 transition-all duration-500" translate="no">
                CROWDIA
              </span>
            </span>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <h2 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold mb-6 mt-20 uppercase tracking-wider">
            <span className="text-white">PALERMO.</span>{" "}
            <span className="text-primary">ORA.</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto">
            L&apos;unica piattaforma che premia la tua vita sociale. Non guardare gli eventi, vivili.
          </p>

          {/* Single CTA Button - Scrolls to choice section */}
          <div className="flex justify-center items-center mt-8">
            <SparkleButton variant="primary" size="lg" onClick={scrollToCTA}>
              <Sparkles className="w-5 h-5" />
              Scopri di più
            </SparkleButton>
          </div>
        </div>
      </VideoHero>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="text-primary" translate="no">CROWDIA</span>?
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We&apos;re not just another event app. We&apos;re building a community-driven
            platform that rewards you for living your best life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.filter(f => !f.hidden).map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-montserrat text-xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Getting started is simple. Here&apos;s how <span translate="no">CROWDIA</span> transforms your social
            experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                <span className="font-montserrat text-3xl font-bold">1</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Discover
              </h3>
              <p className="text-muted-foreground">
                Open the app and see what&apos;s happening around you right now. Filter
                by vibe, venue, or friends.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                <span className="font-montserrat text-3xl font-bold">2</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">
                Connect
              </h3>
              <p className="text-muted-foreground">
                RSVP, buy tickets, or invite friends. Check in when you arrive and
                share your experience.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                <span className="font-montserrat text-3xl font-bold">3</span>
              </div>
              <h3 className="font-montserrat text-2xl font-bold mb-3">Earn</h3>
              <p className="text-muted-foreground">
                Get rewarded with points for attending, sharing, and inviting
                friends. Level up your social game.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Choice Buttons */}
      <section id="cta-section" className="py-20 px-4 bg-background border-t-2 border-primary/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="relative w-16 h-16 mx-auto group cursor-pointer">
            {/* Animated glow background */}
            <div className="absolute inset-0.5 rounded-full bg-primary/8 blur-xl animate-glow" style={{ animationDelay: '1s' }} />

            <Image
              src="/crowdia-logo-icon-transparent.png"
              alt="CROWDIA Logo"
              fill
              className="object-contain drop-shadow-[0_0_15px_hsl(var(--primary)/0.6)] group-hover:drop-shadow-[0_0_25px_hsl(var(--primary)/0.9)] transition-all duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="font-montserrat text-3xl md:text-4xl font-bold">
            Chi sei?
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Scegli il tuo percorso e unisciti alla rivoluzione della vita sociale a Palermo.
          </p>

          {/* Choice Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/social">
              <SparkleButton variant="primary" size="lg">
                <Sparkles className="w-5 h-5" />
                Cosa fare stasera?
              </SparkleButton>
            </Link>
            <Link href="/partners">
              <SparkleButton variant="secondary" size="lg">
                Organizzo Eventi
              </SparkleButton>
            </Link>
            <Link href="/voices">
              <SparkleButton variant="secondary" size="lg">
                Voglio collaborare
              </SparkleButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 <span translate="no">CROWDIA</span>. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
