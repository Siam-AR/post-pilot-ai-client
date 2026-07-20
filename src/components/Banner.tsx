"use client";

import type { ReactNode, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

type SocialIconProps = {
  className: string;
  children: ReactNode;
};

function SocialIcon({ className, children }: SocialIconProps) {
  const style: CSSProperties = {
    animation: "floatSocial 4.2s ease-in-out infinite",
  };

  return (
    <div
      aria-hidden="true"
      style={style}
      className={`absolute grid h-16 w-16 place-items-center rounded-[22px] border border-white/10 bg-[#0d1420]/75 text-3xl shadow-[0_16px_38px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:h-[5.4rem] sm:w-[5.4rem] sm:text-[2.45rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default function Banner() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5.25rem)] overflow-hidden rounded-[1.9rem] border border-white/5 bg-[#09101a] px-5 py-16 text-center text-slate-100 shadow-[0_24px_80px_rgba(2,6,23,.34)] sm:px-8 lg:min-h-[calc(100svh-6rem)] lg:py-24">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_47%,rgba(45,148,222,.24),transparent_28%),radial-gradient(circle_at_47%_39%,rgba(127,78,255,.22),transparent_22%),radial-gradient(circle_at_78%_23%,rgba(109,69,231,.13),transparent_29%),linear-gradient(110deg,#0c1b2b_0%,#10192a_46%,#171429_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(rgba(255,255,255,.13)_0.7px,transparent_0.7px)] bg-size-[5px_5px]" />

      <SocialIcon className="left-[9%] top-[9%] hidden text-[#1877f2] sm:grid"><FaFacebookF /></SocialIcon>
      <SocialIcon className="left-[25%] top-[13%] hidden text-white lg:grid"><FaThreads /></SocialIcon>
      <SocialIcon className="right-[10%] top-[6%] hidden text-[#f13d6c] sm:grid"><FaInstagram /></SocialIcon>
      <SocialIcon className="left-[7%] top-[48%] hidden text-[#ff4500] lg:grid"><FaRedditAlien /></SocialIcon>
      <SocialIcon className="right-[7%] top-[34%] hidden text-white lg:grid"><FaTiktok /></SocialIcon>
      <SocialIcon className="bottom-[11%] left-[12%] hidden text-[#0a66c2] lg:grid"><FaLinkedinIn /></SocialIcon>
      <SocialIcon className="bottom-[14%] right-[12%] hidden text-[#ff0000] lg:grid"><FaYoutube /></SocialIcon>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-2.5 text-sm text-slate-400 shadow-lg backdrop-blur sm:text-base">
          <Image src="/post-pilot-ai-logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" />
          <span className="font-bold tracking-tight text-white">Post<span className="text-[#7866ff]">Pilot</span></span>
          <span className="text-slate-500">•</span>
          <span>9 platforms</span>
        </div>

        <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[.93] tracking-[-0.075em] text-[#f5f7fb] drop-shadow-[0_8px_0_rgba(5,10,19,.12)] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
          AI-powered social media
          <span className="mt-4 block bg-[linear-gradient(95deg,#9345f5_13%,#586cff_45%,#12a9df_82%)] bg-clip-text text-transparent">for every platform</span>
        </h1>

        <p className="mt-12 max-w-3xl font-serif text-xl leading-relaxed text-slate-400 sm:text-2xl">
          Create on-brand content, schedule posts, and publish across every platform — powered by AI that knows your brand.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register" className="group inline-flex min-w-64 items-center justify-center gap-3 rounded-2xl bg-[#5067f5] px-7 py-5 text-lg font-bold text-white shadow-[0_16px_35px_rgba(67,91,243,.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#6278ff] hover:shadow-[0_20px_42px_rgba(67,91,243,.5)]">
            Get Started Free <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </Link>
          <Link href="/about" className="inline-flex min-w-64 items-center justify-center rounded-2xl border border-white/10 bg-white/6 px-7 py-5 text-lg font-bold text-white shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
