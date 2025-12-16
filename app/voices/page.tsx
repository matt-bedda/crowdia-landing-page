"use client";

import { useState } from "react";
import { VideoHero } from "@/components/video-hero";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

export default function VoicesPage() {
  const [formData, setFormData] = useState({
    socialLink: "",
    role: "",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: `voice-${Date.now()}@crowdia.app`,
          source: "voices",
          metadata: {
            socialLink: formData.socialLink,
            role: formData.role,
            motivation: formData.motivation,
          },
        }),
      });

      if (!response.ok) throw new Error("Submission failed");
      setIsSuccess(true);
    } catch {
      setError("Si è verificato un errore. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Video Background */}
      <VideoHero>
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
            <span className="text-white">La tua voce muove</span>{" "}
            <span className="text-primary">Palermo.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Non cerchiamo semplici utenti. Cerchiamo le Voci che accenderanno la città.
          </p>

          {/* Body Text */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Sei un PR, un Creator o un punto di riferimento per la tua community? Unisciti al programma Voices. Ottieni budget, accessi backstage e contatto diretto con i founder.
          </p>

          {/* Application Form */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {isSuccess ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-montserrat text-2xl font-bold text-white mb-2">
                    Candidatura Inviata!
                  </h3>
                  <p className="text-gray-300">
                    Ti contatteremo presto per discutere la tua candidatura.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="socialLink" className="block text-left font-inter font-medium text-white mb-2">
                      Link Instagram/TikTok *
                    </label>
                    <input
                      type="url"
                      id="socialLink"
                      required
                      value={formData.socialLink}
                      onChange={(e) => setFormData({ ...formData, socialLink: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10 placeholder:text-gray-500"
                      placeholder="https://instagram.com/..."
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-left font-inter font-medium text-white mb-2">
                      Chi sei? *
                    </label>
                    <select
                      id="role"
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10"
                    >
                      <option value="" className="bg-charcoal-900">Seleziona...</option>
                      <option value="promoter" className="bg-charcoal-900">Promoter</option>
                      <option value="creator" className="bg-charcoal-900">Creator</option>
                      <option value="altro" className="bg-charcoal-900">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-left font-inter font-medium text-white mb-2">
                      Perché dovremmo sceglierti? *
                    </label>
                    <textarea
                      id="motivation"
                      required
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-white/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white bg-white/10 placeholder:text-gray-500 resize-none"
                      placeholder="Raccontaci di te e della tua community..."
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-sm">{error}</p>
                  )}

                  <SparkleButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Invio in corso...
                      </>
                    ) : (
                      "Candidati come Voice"
                    )}
                  </SparkleButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </VideoHero>
    </main>
  );
}
