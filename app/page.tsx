"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Smartphone,
  Search,
  MousePointerClick,
  PenTool,
  Hammer,
  Rocket,
  Gauge,
  Star,
} from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { RedesignShowcase } from "@/components/redesign-showcase";

const Hero3D = dynamic(() => import("@/components/hero-3d"), { ssr: false });

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
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white/20 font-sans">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.03] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md border-b border-white/5 bg-black/50">
        <div className="text-xl font-bold tracking-tighter font-display">Revamp</div>
        <Link
          href="/audit"
          className="px-5 py-2 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-200 rounded-full"
        >
          Get a Free Redesign Preview →
        </Link>
      </nav>

      {/* 1. Hero Section */}
      <section className="relative z-10 flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-32 pb-20 md:px-12 md:pt-36">
        {/* 3D animated background */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Hero3D />
          {/* Fade the 3D into the page edges so text stays legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        </div>

        <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-display mb-6 md:mb-8 leading-[1.08] md:leading-[1.05] text-balance">
              Your business deserves a website that actually <span className="text-gray-300 italic">wins customers.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 md:text-2xl leading-relaxed mb-8 md:mb-10 text-pretty">
              We redesign outdated local business websites — or build you a brand-new one from scratch — so you look as good online as you are in person.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col items-center gap-4">
            <Link
              href="/audit"
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
            >
              Get My Free Redesign Preview <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-gray-400">Takes 2 minutes. No sales pitch.</p>
          </FadeIn>
        </motion.div>
      </section>

      {/* 2. The Problem — WHITE */}
      <section className="relative z-10 py-20 md:py-32 border-t border-gray-200 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Problem</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-16 max-w-3xl text-balance">
              An outdated website quietly sends your customers to your competitors.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone className="w-6 h-6" />, number: "75%", title: "Judge You By Your Site", desc: "Three out of four people admit they judge a business's credibility based on its website design. A dated site makes even a great business look unreliable." },
              { icon: <Gauge className="w-6 h-6" />, number: "53%", title: "Leave If It's Slow", desc: "Over half of mobile visitors abandon a site that takes more than 3 seconds to load. Old sites are slow, clunky, and broken on phones." },
              { icon: <Search className="w-6 h-6" />, number: "#1", title: "Invisible on Google", desc: "If your site isn't fast, mobile-friendly, and modern, Google buries it. Your competitors show up first — and get the call you should have gotten." },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 mb-6 bg-black text-white rounded-lg flex items-center justify-center">{card.icon}</div>
                <div className="text-5xl font-display font-bold text-black mb-4">{card.number}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE SIGNATURE: Before / After Showcase */}
      <section className="relative z-10 px-6 py-20 md:py-32 md:px-12 border-t border-white/10">
        <FadeIn className="mb-10 md:mb-12 text-center">
          <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Before &amp; After</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter font-display max-w-2xl mx-auto text-balance">
            Real local businesses. Drag the slider to see the transformation.
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <RedesignShowcase />
        </FadeIn>
      </section>

      {/* 4. What We Do — two paths */}
      <section className="relative z-10 py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-6 max-w-2xl text-balance">
              Two ways we get you a website you're proud of.
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mb-16 leading-relaxed">
              Whether you have a tired old site or nothing at all, we meet you where you are.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <PenTool className="w-6 h-6" />,
                tag: "Redesign",
                title: "Rework the site you already have",
                desc: "We keep what's working, fix what isn't, and rebuild it into a modern, fast, mobile-first site — without losing your Google ranking or your existing content.",
                points: ["Modern, on-brand redesign", "Mobile-first and lightning fast", "Keep your domain, emails & SEO", "Clear calls-to-action that convert"],
              },
              {
                icon: <Hammer className="w-6 h-6" />,
                tag: "Build From Scratch",
                title: "Start fresh with a site built to win",
                desc: "No website yet? We build you a complete online presence from the ground up — designed to book calls, take reservations, and make your business look established from day one.",
                points: ["Custom design, no cookie-cutter templates", "Copywriting & professional imagery", "Booking, forms & maps built in", "Set up to grow with your business"],
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.15}>
                <div className="h-full p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col">
                  <div className="w-12 h-12 mb-6 bg-white text-black rounded-lg flex items-center justify-center">{card.icon}</div>
                  <span className="inline-block w-fit px-3 py-1 mb-4 bg-white/10 rounded-full text-xs font-bold tracking-wider uppercase">{card.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-display tracking-tight">{card.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{card.desc}</p>
                  <ul className="space-y-3 mt-auto">
                    {card.points.map((p, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-200">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="relative z-10 py-20 md:py-32 border-t border-white/10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">How It Works</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-14 md:mb-20 max-w-2xl text-balance">
              Three steps. No jargon. No 47-page proposals.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <MousePointerClick className="w-7 h-7" />, step: "1", title: "Get Your Free Preview", desc: "Tell us about your business in a quick form. We'll mock up a fresh redesign of your homepage — completely free — so you can see the potential before spending a dime.", time: "2 MINUTES" },
              { icon: <PenTool className="w-7 h-7" />, step: "2", title: "We Design & Build", desc: "Love the direction? We design and build out your full site — every page, on every device — with your feedback at each step. No surprises, no tech headaches.", time: "1–3 WEEKS" },
              { icon: <Rocket className="w-7 h-7" />, step: "3", title: "We Launch It For You", desc: "We handle the domain, hosting, and go-live so nothing breaks. Your new site goes up, and you start looking like the best option in your area.", time: "LAUNCH DAY" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="relative">
                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 text-white">
                  {item.icon}
                </div>
                <div className="text-sm font-display font-bold text-gray-500 mb-2">STEP {item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{item.desc}</p>
                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold tracking-wider">{item.time}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Proof / Stats — WHITE */}
      <section className="relative z-10 py-20 md:py-32 border-t border-gray-200 px-6 md:px-12 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-14 md:mb-20">
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">The Difference A Redesign Makes</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display max-w-2xl mx-auto text-balance">
              A modern site isn't a vanity project. It's your hardest-working salesperson.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-12 text-center">
            {[
              { number: "2×", label: "More phone calls and form submissions after a redesign" },
              { number: "3 sec", label: "The load time we design every site to beat" },
              { number: "100%", label: "Mobile-responsive on every screen size" },
              { number: "0", label: "Technical work required from you" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="text-5xl md:text-6xl font-display font-bold text-black mb-4">{stat.number}</div>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-[160px] mx-auto">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Founding Clients / Pricing */}
      <section className="relative z-10 py-20 md:py-32 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-4">Limited Availability</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-8 max-w-3xl text-balance">
              We&apos;re taking on 10 founding clients — at a rate we won&apos;t offer again.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-16">
              We&apos;re a new studio, and we&apos;re not going to pretend otherwise. Instead of fake testimonials, here&apos;s the deal: our first 10 clients get our lowest rate, our most hands-on attention, and a direct line to the people actually building your site. As we grow, prices go up and spots run out.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Founding Rate — Locked In", desc: "Redesigns start at $1,500 and full custom builds at $2,500. One-time, all-in. Optional care plan at $75/month for hosting, updates & backups.", highlight: "Save 30–50% vs. future pricing" },
              { title: "White-Glove Process", desc: "You won't be handed to a junior team or lost in a queue. Every founding client works directly with the people designing and building the site.", highlight: "Direct access, not a ticket number" },
              { title: "You Only Pay If You Love It", desc: "Your redesign preview is free. You see the new look before you commit to anything. If it doesn't wow you, you walk away owing nothing.", highlight: "See it before you buy it" },
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

      {/* 8. FAQ — WHITE */}
      <section className="relative z-10 py-20 md:py-32 px-6 md:px-12 border-t border-gray-200 bg-white text-black">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Common Questions</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter font-display mb-12">Straight answers.</h2>
          </FadeIn>

          <div className="space-y-2">
            {[
              { q: "Is the redesign preview really free?", a: "Yes. You fill out a quick form and we design a fresh concept for your homepage at no cost. You see exactly what your business could look like before you spend anything. If you love it, we build the rest. If not, no hard feelings — the preview is yours to keep." },
              { q: "Will I lose my Google ranking or existing content?", a: "No. When we redesign an existing site, we carry over your content, keep your domain, and follow SEO best practices so you keep (and usually improve) your ranking. We never make you start from zero unless you want a totally fresh brand." },
              { q: "I don't have a website at all. Can you still help?", a: "Absolutely — that's a big part of what we do. We build complete websites from scratch, including the design, copywriting, images, booking forms, and Google Maps. You'll go from having nothing to looking like the most established business in your area." },
              { q: "Do I need to be technical or manage anything?", a: "Not at all. You fill out a 2-minute form and we handle everything else — design, build, domain, hosting, and launch. If you can send a text message, you can work with us. Nothing to install, nothing to maintain." },
              { q: "How much does it cost?", a: "For founding clients, redesigns start at $1,500 and full custom builds at $2,500 — a one-time, all-in fee. There's an optional $75/month care plan for hosting, backups, and ongoing updates, but it's never required. You'll always see the price before you commit." },
              { q: "How long does it take?", a: "Most redesigns go live in 1–3 weeks depending on how many pages you need. We move fast, keep you updated at every step, and never disappear mid-project." },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Accordion question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA — BLACK */}
      <section id="audit" className="relative z-10 py-24 md:py-40 px-6 md:px-12 bg-black text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter font-display mb-8 leading-tight text-balance">
              Your competitors already look better online.
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Let&apos;s fix that. Get a free redesign preview of your homepage — it takes 2 minutes, costs nothing, and shows you exactly what your business could look like.
            </p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 px-10 py-5 text-xl font-bold bg-white text-black hover:bg-gray-200 rounded-full transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Get My Free Redesign Preview <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-6 text-sm text-gray-400 font-medium">No credit card. No commitment. Just clarity.</p>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 px-6 md:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div>
              <div className="text-lg font-bold tracking-tighter font-display mb-3">Revamp</div>
              <p className="text-sm text-gray-400 max-w-xs">Website redesigns and new builds for local businesses that want to look as good online as they are in person.</p>
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
            <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Revamp. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
