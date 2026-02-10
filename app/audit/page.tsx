"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ChevronRight,
  Clock,
  DollarSign,
  Layout,
  MessageSquare,
  Phone,
  Smartphone,
  Star,
  TrendingUp,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const STEPS = [
  { id: "basics", title: "Your Info", icon: MessageSquare },
  { id: "business", title: "Your Business", icon: Building2 },
  { id: "leads-in", title: "How Leads Come In", icon: Phone },
  { id: "leads-go", title: "Where Leads Go", icon: Layout },
  { id: "scheduling", title: "Scheduling", icon: Clock },
  { id: "communication", title: "Communication", icon: Smartphone },
  { id: "pain", title: "Pain Points", icon: AlertCircle },
  { id: "reviews", title: "Reviews & Reputation", icon: Star },
  { id: "success", title: "What Success Looks Like", icon: TrendingUp },
  { id: "budget", title: "Budget & Timing", icon: DollarSign },
];

export default function AuditPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    // Your Info
    ownerName: "",
    email: "",
    phone: "",
    role: "",
    // Your Business
    businessName: "",
    websiteUrl: "",
    businessType: "",
    businessTypeOther: "",
    location: "",
    // How Leads Come In
    leadSources: [] as string[],
    afterHoursResponse: "",
    // Where Leads Go
    leadDestination: [] as string[],
    hasCrm: "",
    crmName: "",
    // Scheduling
    bookingMethod: "",
    schedulingTool: "",
    missedBookings: "",
    // Communication
    textsCustomers: "",
    phoneSystem: "",
    repetitiveQuestions: "",
    // Pain Points
    biggestPainPoints: [] as string[],
    // Reviews & Reputation
    googleReviewCount: "",
    googleRating: "",
    askForReviews: "",
    socialPlatforms: [] as string[],
    socialPostFrequency: "",
    // Success & Impact
    avgJobValue: "",
    monthlyJobVolume: "",
    successMetrics: [] as string[],
    additionalJobsGoal: "",
    systemPreference: "",
    // Budget & Wrap Up
    budgetExpectation: "",
    monthlyBudget: "",
    timeline: "",
    anythingElse: "",
  });

  const updateField = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;

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
        <div className="text-lg font-bold tracking-tighter font-display">Revamp Services — Free Audit</div>
        <div className="w-20" />
      </nav>

      <div className="relative z-10 max-w-2xl mx-auto pt-32 pb-20 px-6">
        {/* Success State */}
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mb-8">
              <TrendingUp className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">Your audit is on the way.</h2>
            <p className="text-xl text-gray-300 mb-2">We&apos;re looking at your business now. Within 48 hours, you&apos;ll have a clear report showing exactly which tools will save you time and money — and we&apos;ll handle the entire setup if you want to move forward.</p>
            <p className="text-gray-400 mb-12">Check your inbox at <span className="text-white font-medium">{formData.email}</span> for a confirmation.</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        )}

        {/* Progress Bar */}
        {!isSubmitted && (<>
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">Step {currentStep + 1} of {STEPS.length}</span>
              <h2 className="text-2xl font-bold font-display">{STEPS[currentStep].title}</h2>
            </div>
            <span className="text-sm font-medium text-white/80">{Math.round(progress)}% Complete</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "circOut" }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >

              {/* Step 0: Your Info */}
              {currentStep === 0 && (
                <div className="space-y-6">
                  <p className="text-gray-300 italic text-sm">We need this to send you your completed audit. We&apos;ll never spam you.</p>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="e.g. Josh Castro"
                      value={formData.ownerName}
                      onChange={(e) => updateField("ownerName", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="you@yourbusiness.com"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Your Role</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Owner", "Operator / Manager", "Office Admin", "Other"].map((role) => (
                        <button
                          key={role}
                          onClick={() => updateField("role", role)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.role === role
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Your Business */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="e.g. Acme Plumbing"
                      value={formData.businessName}
                      onChange={(e) => updateField("businessName", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Website URL (if any)</label>
                    <input
                      type="url"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="https://example.com"
                      value={formData.websiteUrl}
                      onChange={(e) => updateField("websiteUrl", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">What type of service business are you?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Plumbing", "HVAC", "Electrical", "Roofing",
                        "Cleaning (Residential)", "Cleaning (Commercial)",
                        "Landscaping", "Pest Control", "Handyman", "Other"
                      ].map((type) => (
                        <button
                          key={type}
                          onClick={() => updateField("businessType", type)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
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
                  {formData.businessType === "Other" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">What type of business?</label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                        placeholder="e.g. Pool cleaning, Garage door repair..."
                        value={formData.businessTypeOther}
                        onChange={(e) => updateField("businessTypeOther", e.target.value)}
                      />
                    </motion.div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">City + State</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                      placeholder="Dallas, TX"
                      value={formData.location}
                      onChange={(e) => updateField("location", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: How Leads Come In */}
              {currentStep === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How do new customers usually find you? (Select all that apply)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Phone Calls", "Website Form", "Google Local Services Ads", "Google Ads", "Facebook / Instagram", "Yelp", "Referrals", "Other"].map((source) => (
                        <button
                          key={source}
                          onClick={() => {
                            const current = formData.leadSources;
                            updateField("leadSources", current.includes(source) ? current.filter((s: string) => s !== source) : [...current, source]);
                          }}
                          className={`px-4 py-3 rounded-lg border transition-all text-left ${
                            formData.leadSources.includes(source)
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {source}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">What happens when someone reaches out after hours?</label>
                    <div className="grid gap-3">
                      {[
                        "We respond right away",
                        "We get back to them the next business day",
                        "Sometimes they get missed",
                        "Not sure"
                      ].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("afterHoursResponse", opt)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                            formData.afterHoursResponse === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Where Leads Go */}
              {currentStep === 3 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">When someone contacts you, where does it end up? (Select all that apply)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "Phone (voicemail if missed)",
                        "Email inbox",
                        "CRM or lead software",
                        "Scheduling software",
                        "Text message",
                        "Not sure"
                      ].map((dest) => (
                        <button
                          key={dest}
                          onClick={() => {
                            const current = formData.leadDestination;
                            updateField("leadDestination", current.includes(dest) ? current.filter((d: string) => d !== dest) : [...current, dest]);
                          }}
                          className={`px-4 py-3 rounded-lg border transition-all text-left ${
                            formData.leadDestination.includes(dest)
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {dest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Do you use a CRM or customer tracking tool?</label>
                    <div className="flex gap-3">
                      {["No", "Yes", "Not sure"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("hasCrm", opt)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center ${
                            formData.hasCrm === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.hasCrm === "Yes" && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
                      <label className="block text-sm font-medium text-gray-300 mb-4">Which one?</label>
                      <div className="grid grid-cols-2 gap-3">
                        {["GoHighLevel", "Jobber", "Housecall Pro", "ServiceTitan", "HubSpot", "Zoho", "Salesforce", "Other", "Not sure"].map((crm) => (
                          <button
                            key={crm}
                            onClick={() => updateField("crmName", crm)}
                            className={`px-4 py-3 rounded-lg border transition-all text-center ${
                              formData.crmName === crm
                                ? "bg-white text-black border-white"
                                : "bg-white/5 border-white/10 hover:border-white/30"
                            }`}
                          >
                            {crm}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Step 4: Scheduling */}
              {currentStep === 4 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How are appointments booked today?</label>
                    <div className="grid gap-3">
                      {[
                        "We book everything manually (phone, text, back-and-forth)",
                        "Customers can book themselves online",
                        "A mix of both"
                      ].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("bookingMethod", opt)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                            formData.bookingMethod === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Do you use a scheduling or booking tool?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Google Calendar", "Calendly", "Jobber", "Housecall Pro", "Acuity", "ServiceTitan", "None", "Other"].map((tool) => (
                        <button
                          key={tool}
                          onClick={() => updateField("schedulingTool", tool)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.schedulingTool === tool
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {tool}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Do you ever lose jobs because you didn&apos;t respond fast enough?</label>
                    <div className="flex gap-3">
                      {["Yes, often", "Sometimes", "Rarely", "Not sure"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("missedBookings", opt)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center text-sm ${
                            formData.missedBookings === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Communication */}
              {currentStep === 5 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Do you text your customers?</label>
                    <div className="flex gap-3">
                      {["Yes, regularly", "Occasionally", "No"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("textsCustomers", opt)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center ${
                            formData.textsCustomers === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">What phone system do you use?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Cell phone", "VoIP (RingCentral, OpenPhone, etc.)", "Google Voice", "Landline", "Not sure"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("phoneSystem", opt)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.phoneSystem === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Do customers ask you the same questions over and over?</label>
                    <p className="text-gray-300 text-xs mb-4">e.g. pricing, service areas, hours, &ldquo;do you do X?&rdquo;</p>
                    <div className="flex gap-3">
                      {["Yes, all the time", "Sometimes", "Not really"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("repetitiveQuestions", opt)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center text-sm ${
                            formData.repetitiveQuestions === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 6: Pain Points */}
              {currentStep === 6 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">What would you most want to fix? (Pick up to 3)</label>
                    <div className="grid gap-3">
                      {[
                        "Missing or slow follow-up on leads",
                        "Too many phone calls to handle",
                        "Too much time on admin and paperwork",
                        "Scheduling headaches",
                        "No-shows and last-minute cancellations",
                        "Not enough Google reviews",
                        "Hard to keep track of leads and customers",
                        "I don\u2019t know what\u2019s actually working"
                      ].map((pain) => (
                        <button
                          key={pain}
                          onClick={() => {
                            const current = formData.biggestPainPoints;
                            if (current.includes(pain)) {
                              updateField("biggestPainPoints", current.filter((p: string) => p !== pain));
                            } else if (current.length < 3) {
                              updateField("biggestPainPoints", [...current, pain]);
                            }
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                            formData.biggestPainPoints.includes(pain)
                              ? "bg-white text-black border-white"
                              : formData.biggestPainPoints.length >= 3
                                ? "bg-white/5 border-white/10 opacity-40 cursor-not-allowed"
                                : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {pain}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 7: Reviews & Reputation */}
              {currentStep === 7 && (
                <div className="space-y-8">
                  <p className="text-gray-300 italic text-sm">Your online reputation is one of the biggest factors in winning new jobs. This helps us see where you stand and how we can get you more 5-star reviews on autopilot.</p>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How many Google reviews do you have?</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["0\u201310", "11\u201350", "51\u2013100", "100\u2013250", "250+", "Not sure"].map((range) => (
                        <button
                          key={range}
                          onClick={() => updateField("googleReviewCount", range)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.googleReviewCount === range
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">What&apos;s your current Google star rating?</label>
                    <div className="flex gap-3">
                      {["Below 4.0", "4.0\u20134.4", "4.5\u20134.8", "4.9\u20135.0", "No listing yet"].map((rating) => (
                        <button
                          key={rating}
                          onClick={() => updateField("googleRating", rating)}
                          className={`flex-1 px-3 py-3 rounded-lg border transition-all text-center text-sm ${
                            formData.googleRating === rating
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {rating}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Do you ask customers for reviews after a job?</label>
                    <div className="flex gap-3">
                      {["Never", "Sometimes", "Yes, it\u2019s automated"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => updateField("askForReviews", opt)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-sm ${
                            formData.askForReviews === opt
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Which social platforms are you on? (Select all that apply)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Facebook", "Instagram", "Google Business", "Nextdoor", "TikTok", "None"].map((platform) => (
                        <button
                          key={platform}
                          onClick={() => {
                            if (platform === "None") {
                              updateField("socialPlatforms", ["None"]);
                            } else {
                              const current = formData.socialPlatforms.filter((p: string) => p !== "None");
                              updateField("socialPlatforms", current.includes(platform) ? current.filter((p: string) => p !== platform) : [...current, platform]);
                            }
                          }}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.socialPlatforms.includes(platform)
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {platform}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How often do you post on social media?</label>
                    <div className="flex gap-3">
                      {["Never", "Rarely", "1\u20132x/week", "Daily"].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => updateField("socialPostFrequency", freq)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center ${
                            formData.socialPostFrequency === freq
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 8: What Success Looks Like */}
              {currentStep === 8 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Roughly, what&apos;s the average value of a completed job?</label>
                    <div className="grid grid-cols-3 gap-3">
                      {["Under $250", "$250\u2013$500", "$500\u2013$1,000", "$1,000\u2013$2,500", "$2,500+"].map((val) => (
                        <button
                          key={val}
                          onClick={() => updateField("avgJobValue", val)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.avgJobValue === val
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">About how many jobs do you complete in a typical month?</label>
                    <div className="flex gap-3">
                      {["Under 20", "20\u201350", "50\u2013100", "100+"].map((vol) => (
                        <button
                          key={vol}
                          onClick={() => updateField("monthlyJobVolume", vol)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center ${
                            formData.monthlyJobVolume === vol
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {vol}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">If this worked perfectly, what would improve? (Pick 1&ndash;2)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "More booked jobs",
                        "Faster response times",
                        "Less time on the phone",
                        "Fewer missed leads",
                        "Better customer experience",
                        "More reviews"
                      ].map((metric) => (
                        <button
                          key={metric}
                          onClick={() => {
                            const current = formData.successMetrics;
                            if (current.includes(metric)) {
                              updateField("successMetrics", current.filter((m: string) => m !== metric));
                            } else if (current.length < 2) {
                              updateField("successMetrics", [...current, metric]);
                            }
                          }}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.successMetrics.includes(metric)
                              ? "bg-white text-black border-white"
                              : formData.successMetrics.length >= 2
                                ? "bg-white/5 border-white/10 opacity-40 cursor-not-allowed"
                                : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {metric}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How many additional jobs per month would make a real difference?</label>
                    <div className="flex gap-3">
                      {["1\u20133", "3\u20135", "5\u201310", "10+"].map((goal) => (
                        <button
                          key={goal}
                          onClick={() => updateField("additionalJobsGoal", goal)}
                          className={`flex-1 py-3 rounded-lg border transition-all text-center ${
                            formData.additionalJobsGoal === goal
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How do you prefer things to work?</label>
                    <div className="grid gap-3">
                      {[
                        "Mostly automatic \u2014 just tell me when something needs attention",
                        "I\u2019m fine checking a dashboard now and then",
                        "Send me alerts only when something needs my input"
                      ].map((pref) => (
                        <button
                          key={pref}
                          onClick={() => updateField("systemPreference", pref)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                            formData.systemPreference === pref
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {pref}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 9: Budget & Timing */}
              {currentStep === 9 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Which best describes what you&apos;re looking for?</label>
                    <div className="grid gap-3">
                      {[
                        "Something simple that just works",
                        "The most reliable system possible",
                        "Something advanced I can grow into"
                      ].map((exp) => (
                        <button
                          key={exp}
                          onClick={() => updateField("budgetExpectation", exp)}
                          className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                            formData.budgetExpectation === exp
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {exp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">Comfortable monthly investment? (We handle everything — you don&apos;t manage any of it.)</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Under $500", "$500\u2013$1,000", "$1,000\u2013$2,000", "$2,000+"].map((range) => (
                        <button
                          key={range}
                          onClick={() => updateField("monthlyBudget", range)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.monthlyBudget === range
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-4">How soon are you looking to get started?</label>
                    <div className="grid grid-cols-2 gap-3">
                      {["ASAP", "2\u20134 weeks", "1\u20132 months", "Just exploring"].map((time) => (
                        <button
                          key={time}
                          onClick={() => updateField("timeline", time)}
                          className={`px-4 py-3 rounded-lg border transition-all text-center ${
                            formData.timeline === time
                              ? "bg-white text-black border-white"
                              : "bg-white/5 border-white/10 hover:border-white/30"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Anything else we should know about how your business runs? (optional)</label>
                    <textarea
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all min-h-[100px]"
                      placeholder="Anything that would help us understand your business better..."
                      value={formData.anythingElse}
                      onChange={(e) => updateField("anythingElse", e.target.value)}
                    />
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-16 flex justify-between items-center pt-8 border-t border-white/5">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
              currentStep === 0 ? "opacity-0 pointer-events-none" : "hover:bg-white/5"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <button
            onClick={currentStep === STEPS.length - 1 ? async () => {
              setIsSubmitting(true);
              try {
                console.log("Audit form submitted:", JSON.stringify(formData, null, 2));
                // TODO: Replace with real API endpoint (n8n webhook or Supabase insert)
                // await fetch("https://your-n8n-instance.com/webhook/audit-intake", {
                //   method: "POST",
                //   headers: { "Content-Type": "application/json" },
                //   body: JSON.stringify(formData),
                // });
                await new Promise(resolve => setTimeout(resolve, 1500));
                setIsSubmitted(true);
              } catch (err) {
                console.error("Submission failed:", err);
              } finally {
                setIsSubmitting(false);
              }
            } : nextStep}
            disabled={isSubmitting}
            className={`flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold transition-all hover:scale-105 ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"}`}
          >
            <span>{isSubmitting ? "Submitting..." : currentStep === STEPS.length - 1 ? "Submit My Audit Request" : "Continue"}</span>
            {!isSubmitting && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-gray-400 uppercase tracking-widest">
          Your data is secure and will only be used to prepare your personalized audit.
        </p>
        </>
        )}
      </div>
    </main>
  );
}
