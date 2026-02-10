import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-md border-b border-white/5 bg-black/50">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
        <div className="text-lg font-bold tracking-tighter font-display">Revamp Services</div>
        <div className="w-20" />
      </nav>

      <div className="relative z-10 max-w-3xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-4xl font-bold font-display tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">What We Collect</h2>
            <p>
              When you fill out our audit intake form, we collect the information you provide — including your name, email address, phone number, business name, website, and details about how your business operates. We use this information solely to prepare your personalized audit report and to communicate with you about our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">How We Use Your Information</h2>
            <p>
              Your information is used to analyze your business operations, generate your custom audit, and follow up with you about the results. We may also use your email to send you your completed audit report and, if you opt in, occasional updates about our services. We will never sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Third-Party Tools</h2>
            <p>
              We use trusted third-party services to process and store your information securely, including cloud hosting providers and email delivery services. These providers are bound by their own privacy policies and are only given access to the information needed to perform their specific functions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Data Security</h2>
            <p>
              We take reasonable measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Your Rights</h2>
            <p>
              You can request to see, update, or delete any personal information we have on file at any time. Just email us at{" "}
              <a href="mailto:joshua@revamp.services" className="text-white underline hover:no-underline">joshua@revamp.services</a>{" "}
              and we&apos;ll take care of it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cookies</h2>
            <p>
              Our website may use basic analytics cookies to understand how visitors use the site. We do not use cookies for advertising or tracking across other websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about this policy? Reach out at{" "}
              <a href="mailto:joshua@revamp.services" className="text-white underline hover:no-underline">joshua@revamp.services</a>{" "}
              or call <a href="tel:+16313357603" className="text-white underline hover:no-underline">(631) 335-7603</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
