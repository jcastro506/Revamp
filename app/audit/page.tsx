"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const BUSINESS_TYPES = [
  "Home Services (Plumbing, HVAC, etc.)",
  "Restaurant / Food",
  "Dental / Medical",
  "Retail / Shop",
  "Professional Services",
  "Other",
];

export default function AuditPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    websiteUrl: "",
    businessType: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setError(null);

    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Please add your name and email so we can reach you.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed.");
      }
      setIsSubmitted(true);
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-gray-500";

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.01] blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md border-b border-white/5 bg-black/50">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="text-lg font-bold tracking-tighter font-display">Revamp — Free Redesign Preview</div>
        <div className="w-20" />
      </nav>

      <div className="relative z-10 max-w-xl mx-auto pt-32 pb-20 px-6">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Got it — thank you.</h2>
            <p className="text-lg text-gray-300 mb-2">
              We&apos;ll review your business and get back to you within 48 hours with a free preview of what your new site could look like.
            </p>
            <p className="text-gray-400 mb-12">
              We&apos;ll reach out at <span className="text-white font-medium">{formData.email}</span>.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        ) : (
          <>
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold font-display mb-3 text-balance">
                Get your free redesign preview
              </h1>
              <p className="text-gray-300 leading-relaxed">
                Tell us a bit about your business and we&apos;ll send you a free mockup of what your new website could look like. No cost, no obligation.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Josh Castro"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    className={inputClass}
                    placeholder="you@yourbusiness.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    className={inputClass}
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="e.g. Reliable Plumbing & Heating"
                  value={formData.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Website <span className="text-gray-500">(leave blank if you don&apos;t have one)</span>
                </label>
                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://example.com"
                  value={formData.websiteUrl}
                  onChange={(e) => updateField("websiteUrl", e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What kind of business is it?</label>
                <div className="grid grid-cols-2 gap-3">
                  {BUSINESS_TYPES.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => updateField("businessType", type)}
                      className={`px-4 py-3 rounded-lg border transition-all text-left text-sm ${
                        formData.businessType === type
                          ? "bg-white text-black border-white"
                          : "bg-white/5 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Anything you want us to know? <span className="text-gray-500">(optional)</span>
                </label>
                <textarea
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="What do you like or dislike about your current site? What are you hoping to get out of a redesign?"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                />
              </div>

              {error && (
                <div className="flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold transition-all ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200 hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Get My Free Preview"}
              </button>

              <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
                Your info goes straight to our team. No spam, ever.
              </p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
