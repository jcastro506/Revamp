"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, Settings, TrendingUp, Clock, ChevronDown, ChevronUp, Phone, MessageSquare, Sparkles, Shield, Wrench, Star, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Accordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-gray-500 transition-colors"
      >
        <span className="text-lg font-bold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="text-xl font-bold tracking-tighter font-display">Revamp Services</div>
        <Link
          href="/audit"
          className="px-5 py-2 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-200 rounded-full"
        >
          Get Your Free Audit →
        </Link>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative z-10 flex flex-col justify-center min-h-screen px-6 pt-32 pb-20 md:px-12">
        <motion.div 
          style={{ opacity, scale }}
          className="max-w-5xl mx-auto text-center"
        >
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Now accepting new clients
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-display mb-8 leading-[1.1]">
              You&apos;re on the job site, not <span className="text-gray-300 italic">researching software.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-xl text-gray-300 md:text-2xl leading-relaxed mb-12">
              We set up the tools that text back your missed calls, follow up on every quote, and get you more 5-star reviews. You do nothing — just see results.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/audit"
              className="px-8 py-4 text-lg font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              Get Your Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-400 mt-2 sm:mt-0 sm:ml-4">
              Takes 2 minutes. No sales pitch.
            </p>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. The Problem — WHITE */}
      <section className="relative z-10 py-32 border-t border-gray-200 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-16 max-w-3xl">
              There are 14,000 tools on the market. You don't need all of them. You need the right three.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "72%", title: "Don't Know Where to Start", desc: "Nearly three out of four small business owners say they don't know where to start with automation. The landscape changes every week." },
              { number: "37%", title: "No Time to Figure It Out", desc: "Over a third of small businesses say they lack the time or resources to even explore automation — let alone set it up. You're booked solid as it is." },
              { number: "95%", title: "Automation Projects That Fail", desc: "Almost all small business automation projects break down before producing real value. Not because the tools don't work — because nobody set them up right." }
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-5xl font-display font-bold text-black mb-4">{card.number}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="relative z-10 py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-20 max-w-2xl">
              Three steps. No jargon. No 47-page proposals.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { step: "1", title: "Tell Us What Hurts", desc: "Fill out a quick intake form about your business, your biggest time-wasters, and what's keeping you up at night.", time: "2 MINUTES" },
              { step: "2", title: "Get Your Custom Audit", desc: "We analyze your operations and hand you a clear report: the 3-5 existing, proven tools that fit your business, what they cost, and what they'll save you.", time: "48 HOURS" },
              { step: "3", title: "We Handle Everything", desc: "Say the word and we set it all up — missed-call texting, automated follow-ups, after-hours phone answering, review requests. All proven tools, ready to go for your business. You don't touch a thing.", time: "1–2 WEEKS" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative">
                 <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center text-3xl font-display font-bold mb-6 border border-white/10">
                   {item.step}
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                 <p className="text-gray-300 mb-6 leading-relaxed">{item.desc}</p>
                 <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider">{item.time}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What's In The Audit */}
      <section className="relative z-10 py-32 bg-white text-black px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <FadeIn>
              <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Your Free Audit Includes</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-6">
                A real plan — not a sales pitch disguised as a consultation.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Most "free consultations" are 30-minute sales calls. Ours is a detailed, personalized report you can act on with or without us.
              </p>
            </FadeIn>

            <div className="grid gap-6">
              {[
                { icon: <FileText className="w-6 h-6" />, title: "Operations Assessment", desc: "We map your current workflow — where time is being wasted, where leads are falling through the cracks, and where manual work could disappear." },
                { icon: <Settings className="w-6 h-6" />, title: "Tool Recommendations", desc: "The specific tools that fit your business — not custom software, not generic suggestions. We've tested hundreds of tools so you don't have to. Each recommendation includes what it costs and how it connects to what you already use." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Money & Time You'll Save", desc: "How many hours you'll get back each week, how much money you'll save each month, and how many more jobs you could book. Real numbers based on your actual business — not guesses." },
                { icon: <Clock className="w-6 h-6" />, title: "Step-by-Step Setup Plan", desc: "Exactly what we'll set up, in what order, and how long each piece takes. You'll see the full picture before you commit to anything." }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 flex-shrink-0 bg-black text-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proof / Stats */}
      <section className="relative z-10 py-32 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: "72%", label: "Of small businesses can't figure out automation on their own" },
              { number: "48hr", label: "From intake form to your completed audit" },
              { number: "3-5", label: "Tools max — we find the few that actually matter" },
              { number: "0", label: "Technical knowledge required from you" }
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-5xl md:text-6xl font-display font-bold text-white mb-4">{stat.number}</div>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-[150px] mx-auto">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Who We Work With — WHITE */}
      <section className="relative z-10 py-32 border-t border-gray-200 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto mb-24 text-center">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Who We Work With</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-8 max-w-3xl mx-auto">
              Built for home service businesses that run on calls, quotes, and reputation.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Plumbers, electricians, HVAC, roofers, cleaners, landscapers, pest control — if you&apos;re in the field while your phone rings, we built this for you.</p>
          </FadeIn>
        </div>

        {/* PRIMARY: Home Services */}
        <div className="max-w-6xl mx-auto mb-32">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-bold uppercase tracking-wider mb-6 text-black">
                  <Wrench className="w-4 h-4" /> Home Services
                </div>
                <h3 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">Never lose a job because you couldn&#39;t pick up.</h3>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  When you&apos;re on a roof or under a sink, you can&apos;t answer the phone. We connect proven tools that text missed calls back instantly, follow up on every quote, and get you 5-star reviews on autopilot. No app to learn, no system to manage. It just works.
                </p>
                <ul className="space-y-4">
                  {[
                    "Instant Missed Call Text-Back",
                    "Automated Quote & Estimate Follow-Ups",
                    "5-Star Review Requests After Every Job",
                    "Virtual Receptionist for After-Hours Calls",
                    "Job Updates Texted to Your Customers",
                    "Win-Back Messages for Past Customers"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 p-8 bg-gray-50 rounded-3xl border border-gray-200 flex flex-col justify-center">
                <div className="space-y-4">
                   <div className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center justify-between">
                     <div className="flex items-center gap-3">
                       <Phone className="w-5 h-5 text-red-500" />
                       <span className="text-red-700">Missed Call from (555) 123-4567</span>
                     </div>
                     <span className="text-xs text-red-500">Now</span>
                   </div>
                   <div className="flex justify-center">
                     <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 my-2" />
                   </div>
                   <div className="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-3">
                     <MessageSquare className="w-5 h-5 text-green-600" />
                     <div>
                       <div className="text-green-700 font-medium">Auto-Text Sent</div>
                       <div className="text-xs text-green-600">&ldquo;Hey! Sorry I missed your call. How can I help?&rdquo;</div>
                     </div>
                   </div>
                   <div className="flex justify-center">
                     <ArrowRight className="w-6 h-6 text-gray-300 rotate-90 my-2" />
                   </div>
                   <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-3">
                     <Star className="w-5 h-5 text-blue-600" />
                     <div>
                       <div className="text-blue-700 font-medium">Review Request Sent</div>
                       <div className="text-xs text-blue-600">&ldquo;Thanks for choosing us! Mind leaving a quick review?&rdquo;</div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* SECONDARY: Also serve these verticals */}
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-center text-sm font-bold tracking-widest text-gray-500 uppercase mb-12">We Also Work With</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-bold uppercase tracking-wider mb-4 text-black">
                  <Sparkles className="w-4 h-4" /> Med Spas &amp; Aesthetics
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display tracking-tight">Fill your calendar on autopilot.</h3>
                <p className="text-gray-600 mb-4">Instant DM replies, automated booking confirmations, review requests after every visit, and win-back messages to bring past clients back in.</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/5 border border-black/10 text-sm font-bold uppercase tracking-wider mb-4 text-black">
                  <Shield className="w-4 h-4" /> Dental Practices
                </div>
                <h3 className="text-2xl font-bold mb-3 font-display tracking-tight">A full schedule without the phone tag.</h3>
                <p className="text-gray-600 mb-4">Digital intake forms, smart appointment reminders, automated texts to bring patients back for cleanings, and emergency call handling.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. Who We Are + Tools — BLACK */}
      <section className="relative z-10 py-32 border-t border-white/10 px-6 md:px-12 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Who We Are</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-8 max-w-3xl">
              Small businesses shouldn&apos;t be left behind.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl mb-8">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Enterprise companies have entire departments dedicated to automation. They have the budgets, the engineers, the time. Small businesses have none of that — but they need these tools just as much, if not more.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Revamp Services exists to close that gap. We don&apos;t build custom software. We don&apos;t sell you a platform. We find proven tools that already work — and we set them up for your business so you don&apos;t have to learn, touch, or manage a single thing.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every audit is personally reviewed. Every setup is tested to make sure everything actually works before we hand it over. If our free audit doesn&apos;t show you something you didn&apos;t know was possible, you owe us nothing.
              </p>
            </div>
          </FadeIn>

          {/* Tools We Use */}
          <FadeIn delay={0.2}>
            <div className="mt-20 pt-16 border-t border-white/10">
              <p className="text-center text-sm font-bold tracking-widest text-gray-400 uppercase mb-12">The Tools We Use To Set You Up</p>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center">
                {[
                  { name: "Claude", logo: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M4.709 15.955l4.397-2.85-.702-1.26-4.658 2.457a.49.49 0 0 0-.2.675l.488.778a.49.49 0 0 0 .675.2zm7.859-5.394l-2.95-5.293a.49.49 0 0 0-.675-.2l-.778.488a.49.49 0 0 0-.2.675l2.689 5.59 1.914-.26zm5.473 2.335L13.71 5.23a.49.49 0 0 0-.675-.2l-.778.488a.49.49 0 0 0-.2.675l4.07 7.142 1.914.561zm2.155 3.722l-1.07-1.918-1.573.645.809 1.473a.49.49 0 0 0 .675.2l.959-.6zm-8.076-.89l-6.812 3.59a.49.49 0 0 0-.2.675l.488.778a.49.49 0 0 0 .675.2l7.073-4.143-1.224-1.1zm8.88.09l-3.395-6.09-1.914.26 3.655 6.23a.49.49 0 0 0 .675.2l.778-.488a.1.1 0 0 0 .039-.018.49.49 0 0 0 .161-.094z"/></svg> },
                  { name: "n8n", logo: <span className="text-2xl font-black tracking-tighter text-white">n8n</span> },
                  { name: "Supabase", logo: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M13.7 21.8c-.4.5-1.3.2-1.3-.5v-7.6h8.9c.8 0 1.3 1 .7 1.6l-8.3 6.5zM10.3 2.2c.4-.5 1.3-.2 1.3.5v7.6H2.7c-.8 0-1.3-1-.7-1.6l8.3-6.5z"/></svg> },
                  { name: "HighLevel", logo: <span className="text-xl font-black tracking-tight text-white">GHL</span> },
                  { name: "Retell", logo: <span className="text-xl font-black tracking-tight text-white">Retell</span> },
                  { name: "Calendly", logo: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg> },
                ].map((tool, i) => (
                  <FadeIn key={i} delay={i * 0.05}>
                    <div className="flex flex-col items-center gap-3 text-white">
                      {tool.logo}
                      <span className="text-xs font-medium tracking-wide text-gray-400">{tool.name}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. What Happens After You Submit — WHITE */}
      <section className="relative z-10 py-32 border-t border-gray-200 px-6 md:px-12 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Full Transparency</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-16 max-w-3xl">
              Here&apos;s exactly what happens after you hit submit.
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-[23px] top-8 bottom-8 w-px bg-gray-200" />

            <div className="space-y-12">
              {[
                { time: "Immediately", title: "Confirmation email hits your inbox", desc: "You\u2019ll know we got it. No black hole." },
                { time: "0\u201324 hours", title: "We research your business", desc: "We look at your website, check your Google reviews, see how your social media looks, and scope out your competitors \u2014 all behind the scenes." },
                { time: "24\u201348 hours", title: "Your custom audit is generated", desc: "We analyze everything and produce a detailed report. Then we personally review it to make sure every recommendation makes sense for your specific business." },
                { time: "48 hours", title: "Audit lands in your inbox", desc: "A full PDF showing what\u2019s costing you money, which tools will fix it, how much you\u2019ll save, and a step-by-step plan for getting it all set up. It\u2019s yours to keep." },
                { time: "48+ hours", title: "Optional: free walkthrough call", desc: "We\u2019ll record a quick video walking through your audit, or you can book a live call to ask questions. Zero pressure \u2014 the audit speaks for itself." },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center relative z-10">
                      <CheckCircle className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-wider text-gray-500 uppercase mb-1">{step.time}</div>
                      <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Founding Clients */}
      <section className="relative z-10 py-32 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Limited Availability</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-8 max-w-3xl">
              We&apos;re taking on 10 founding clients — at a rate we won&apos;t offer again.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
              We&apos;re a new company, and we&apos;re not going to pretend otherwise. Instead of fake testimonials, here&apos;s what we&apos;re offering: our first 10 clients get our lowest rate, our most hands-on attention, and a direct line to the people doing the work. As we grow, prices go up and availability goes down. Right now, you get both.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Founding Rate — Locked In",
                desc: "$1,500–$2,500 one-time setup. $350/month management. These prices are for founding clients only and won't come back.",
                highlight: "Save 30–50% vs. future pricing",
              },
              {
                title: "White-Glove Setup",
                desc: "You won't be handed off to a junior team or lost in a queue. Every founding client gets direct access to the people building your system.",
                highlight: "Direct access, not a ticket number",
              },
              {
                title: "We Grow Together",
                desc: "You get premium service at a fraction of the cost. We get to prove what we can do. If the results don't speak for themselves, we haven't earned your trust.",
                highlight: "Results first, everything else second",
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6 flex-1">{card.desc}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-sm font-medium text-white w-fit">
                    <CheckCircle className="w-4 h-4" />
                    {card.highlight}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-16 text-center">
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105"
            >
              Claim Your Founding Spot <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 10. FAQ — WHITE */}
      <section className="relative z-10 py-32 px-6 md:px-12 border-t border-gray-200 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Common Questions</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-12">Straight answers.</h2>
          </FadeIn>

          <div className="space-y-2">
            {[
              { q: "What if I already use some tools?", a: "Great \u2014 we\u2019ll look at what\u2019s working, what\u2019s not, and what\u2019s missing. Most businesses we talk to have tried one tool here and there, but nothing is set up to actually work together. We find those gaps and fix them." },
              { q: "How much does it cost to get set up?", a: "For our founding clients, setup starts at $1,500\u2013$2,500 depending on how much you need. That\u2019s a one-time fee \u2014 we handle everything from start to finish. The audit is free and shows you exactly what it\u2019ll cost before you commit to anything." },
              { q: "Do I need to be technical?", a: "Not even a little. You fill out a 2-minute form and we do literally everything else. We pick the tools, set them up, connect them to your business, test everything, and show your team how it works. If you can use Instagram, you can use what we set up. You don\u2019t install anything, learn anything, or manage anything." },
              { q: "What happens after everything is set up?", a: "We offer monthly management for $350/month. We keep everything running, make it better over time, and send you a monthly report showing exactly how many calls were caught, reviews collected, and quotes followed up \u2014 you never have to think about it. Think of us as your automation team, so you don\u2019t need to hire one." },
              { q: "How is this different from a marketing agency?", a: "Marketing agencies run ads and post content. We set up proven tools that handle the stuff you\u2019re losing money on right now. We\u2019re not writing your Instagram posts \u2014 we\u2019re making sure every missed call gets a text back in seconds, every customer gets a review request, and every quote gets followed up on automatically. You don\u2019t manage any of it." },
              { q: "Is the audit really free? What's the catch?", a: "No catch. We use automation to put together the first draft of your report, which keeps our costs low enough to offer it free. You\u2019ll get a real report with real recommendations. If you want us to set it all up, great. If you want to do it yourself using our plan, that works too." }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Accordion question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final CTA — BLACK */}
      <section id="audit" className="relative z-10 py-40 px-6 md:px-12 bg-black text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter font-display mb-8 leading-tight">
              Every missed call is a job going to your competitor.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              The contractors who get automation working for them first will win their market. The audit takes 2 minutes, costs nothing, and shows you exactly what you&apos;re leaving on the table.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-10 py-5 text-xl font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Get Your Free Audit <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-6 text-sm text-gray-400 font-medium">
              No credit card. No commitment. Just clarity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <div className="text-lg font-bold tracking-tighter font-display mb-3">Revamp Services</div>
              <p className="text-sm text-gray-400 max-w-xs">Tools set up for your business so you don&apos;t have to lift a finger.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Contact</div>
                <div className="space-y-2">
                  <a href="mailto:joshua@revamp.services" className="block text-sm text-gray-400 hover:text-white transition-colors">joshua@revamp.services</a>
                  <a href="tel:+16313357603" className="block text-sm text-gray-400 hover:text-white transition-colors">(631) 335-7603</a>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3">Legal</div>
                <Link href="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center">
            <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Revamp Services. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
