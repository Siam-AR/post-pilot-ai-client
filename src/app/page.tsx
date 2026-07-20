"use client";

import Banner from "@/components/Banner";
import CallToAction from "@/components/CallToAction";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main className="bg-[#07101a]">
      <div className="px-3 py-3 sm:px-5 sm:py-5"><Banner /></div>
      <Marquee />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  );
}
