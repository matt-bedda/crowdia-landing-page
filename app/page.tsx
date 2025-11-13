"use client";

import { VideoHero } from "@/components/video-hero";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import { MapPin, Users, Sparkles, Award, TrendingUp, Zap } from "lucide-react";

export default function Home() {
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
              <span className="relative z-10 drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] group-hover:drop-shadow-[0_0_15px_hsl(var(--primary)/0.7)] group-hover:scale-110 transition-all duration-500">
                CROWDIA
              </span>
            </span>
          </h1>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Main Heading */}
          <h2 className="font-montserrat text-5xl md:text-7xl lg:text-8xl font-bold mb-6 mt-20">
            <span className="text-white">Discover</span>{" "}
            <span className="text-primary whitespace-nowrap">Your City</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-primary font-bold">CROWDIA</span> is your concierge for social life, entertainment, and real connections. Transform the way you experience real-life in your city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <SparkleButton variant="primary" size="lg">
              <Sparkles className="w-5 h-5" />
              Join the Launch - unisciti al lancio
            </SparkleButton>
            <SparkleButton variant="secondary" size="lg">
              Learn More
            </SparkleButton>
          </div>

          {/* Launch Info */}
          <p className="text-sm md:text-base text-muted-foreground mt-4">
            Launching soon in <span className="text-primary/80">Palermo</span>
          </p>
        </div>
      </VideoHero>

      {/* Features Section */}
      <section className="py-20 px-4 bg-charcoal-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4">
            Why <span className="text-primary">CROWDIA</span>?
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            We&apos;re not just another event app. We&apos;re building a community-driven
            platform that rewards you for living your best life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Real-Time Discovery
              </h3>
              <p className="text-muted-foreground">
                Find events happening right now around you. No more FOMO—see
                what&apos;s live, trending, and nearby in real time.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Social by Design
              </h3>
              <p className="text-muted-foreground">
                Connect with friends, discover mutual interests, and build your
                social network through shared experiences.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Gamified Engagement
              </h3>
              <p className="text-muted-foreground">
                Earn points and rewards for attending events, sharing
                experiences, and bringing friends. Your social life, rewarded.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Influencer Hub
              </h3>
              <p className="text-muted-foreground">
                For influencers and PRs: monetize your reach, promote events,
                and grow your following with our verified membership system.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Organizer Tools
              </h3>
              <p className="text-muted-foreground">
                Lower fees, better tools, direct access to your audience.
                Promote and sell tickets effortlessly with integrated marketing.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-shadow">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold mb-3">
                Instant Everything
              </h3>
              <p className="text-muted-foreground">
                Buy tickets instantly with our in-app payment system. Seamless
                crypto-to-fiat conversion—you won&apos;t even notice it&apos;s Web3.
              </p>
            </div>
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
            Getting started is simple. Here&apos;s how CROWDIA transforms your social
            experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 rounded-full bg-magenta-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
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
              <div className="w-20 h-20 rounded-full bg-magenta-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
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
              <div className="w-20 h-20 rounded-full bg-magenta-500 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
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

      {/* Social Proof / Vision Section */}
      <section className="py-20 px-4 bg-charcoal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-primary">Movement</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re building more than an app—we&apos;re creating a new way to
            experience your city. Starting with Palermo, expanding everywhere.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-xl bg-card border-2 border-primary/30">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                50K+
              </div>
              <p className="text-muted-foreground">Users Expected Year 1</p>
            </div>
            <div className="p-6 rounded-xl bg-card border-2 border-primary/30">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                10+
              </div>
              <p className="text-muted-foreground">Cities in Pipeline</p>
            </div>
            <div className="p-6 rounded-xl bg-card border-2 border-primary/30">
              <div className="text-4xl font-montserrat font-bold text-primary mb-2">
                24/7
              </div>
              <p className="text-muted-foreground">Real-Time Updates</p>
            </div>
          </div>
          <SparkleButton variant="primary" size="lg">
            <Sparkles className="w-5 h-5" />
            Get Early Access
          </SparkleButton>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6">
            Download <span className="text-primary">CROWDIA</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Available soon on iOS and Android. Join the waitlist to be notified
            when we launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* App Store Badge */}
            <a
              href="#"
              className="group relative inline-block transition-transform hover:scale-105"
              aria-label="Download on the App Store (Coming Soon)"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all" />
              <div className="relative bg-black border-2 border-white/20 rounded-xl px-8 py-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
              </div>
            </a>

            {/* Google Play Badge */}
            <a
              href="#"
              className="group relative inline-block transition-transform hover:scale-105"
              aria-label="Get it on Google Play (Coming Soon)"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg group-hover:bg-primary/30 transition-all" />
              <div className="relative bg-black border-2 border-white/20 rounded-xl px-8 py-4 hover:border-primary transition-colors">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                    fill="white"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            Apps launching Q1 2025. <span className="text-primary">Join the waitlist</span> to get notified.
          </p>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 px-4 bg-charcoal-950 border-t-2 border-magenta-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
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
          <h3 className="font-montserrat text-2xl font-bold">
            Ready to Transform Your City Experience?
          </h3>
          <p className="text-muted-foreground">
            Be among the first to experience CROWDIA. Sign up for early access
            and exclusive launch perks.
          </p>
          <div className="pt-4">
            <SparkleButton variant="primary" size="lg">
              Join the Launch - unisciti al lancio
            </SparkleButton>
          </div>
          <div className="pt-8 text-sm text-gray-500">
            <p>&copy; 2025 CROWDIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
