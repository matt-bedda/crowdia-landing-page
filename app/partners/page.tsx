"use client";

import { useState } from "react";
import { SparkleButton } from "@/components/ui/sparkle-button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    localeName: "",
    instagramLink: "",
    phone: "",
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
          email: `partner-${Date.now()}@crowdia.app`,
          source: "partners",
          metadata: {
            localeName: formData.localeName,
            instagramLink: formData.instagramLink,
            phone: formData.phone,
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
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-charcoal-700 hover:text-charcoal-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-inter">Indietro</span>
          </Link>

          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image
                src="/crowdia-logo-icon-transparent.png"
                alt="CROWDIA Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="font-montserrat text-xl font-bold text-charcoal-900" translate="no">
              CROWDIA
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal-900 mb-6">
            Tu crei l&apos;evento.{" "}
            <span className="text-primary">Noi portiamo la folla.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-charcoal-600 mb-12 max-w-2xl mx-auto">
            Fai parte della rivoluzione. Ottieni il badge &quot;Founding Partner&quot; e garantisciti la priorità su tutti gli eventi futuri.
          </p>

          {/* Form Card */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 max-w-xl mx-auto">
            {isSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-montserrat text-2xl font-bold text-charcoal-900 mb-2">
                  Richiesta Inviata!
                </h3>
                <p className="text-charcoal-600">
                  Ti contatteremo presto per discutere la partnership.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="localeName" className="block text-left font-inter font-medium text-charcoal-700 mb-2">
                    Nome Organizzazione*
                  </label>
                  <input
                    type="text"
                    id="localeName"
                    required
                    value={formData.localeName}
                    onChange={(e) => setFormData({ ...formData, localeName: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-charcoal-900 bg-white"
                    placeholder="Il tuo nome o brand"
                  />
                </div>

                <div>
                  <label htmlFor="instagramLink" className="block text-left font-inter font-medium text-charcoal-700 mb-2">
                    Link Instagram *
                  </label>
                  <input
                    type="url"
                    id="instagramLink"
                    required
                    value={formData.instagramLink}
                    onChange={(e) => setFormData({ ...formData, instagramLink: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-charcoal-900 bg-white"
                    placeholder="https://instagram.com/..."
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-left font-inter font-medium text-charcoal-700 mb-2">
                    Telefono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-charcoal-900 bg-white"
                    placeholder="+39 ..."
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
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
                    "Richiedi Accesso Partner"
                  )}
                </SparkleButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
