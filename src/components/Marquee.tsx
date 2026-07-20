import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";

const platforms = [
  { name: "Facebook", icon: FaFacebookF, color: "text-[#1877f2]" },
  { name: "Instagram", icon: FaInstagram, color: "text-[#f04770]" },
  { name: "LinkedIn", icon: FaLinkedinIn, color: "text-[#0a66c2]" },
  { name: "YouTube", icon: FaYoutube, color: "text-[#ff0000]" },
  { name: "TikTok", icon: FaTiktok, color: "text-white" },
  { name: "Threads", icon: FaThreads, color: "text-white" },
  { name: "Reddit", icon: FaRedditAlien, color: "text-[#ff4500]" },
];

function PlatformItems() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {platforms.map(({ name, icon: Icon, color }) => (
        <div key={name} className="flex items-center gap-3 whitespace-nowrap font-serif text-lg text-slate-400 sm:text-xl">
          <Icon className={`text-2xl ${color}`} />
          <span>{name}</span>
          <span className="ml-4 text-slate-700 sm:ml-7">•</span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/[0.07] bg-[#0b111a] py-7 sm:py-9">
      <p className="mb-6 text-center font-serif text-base text-[#93b0d0] sm:text-lg">
        One workflow. Every audience. Up to 9 social platforms.
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] will-change-transform hover:[animation-play-state:paused]">
          <PlatformItems />
          <PlatformItems />
        </div>
      </div>
    </section>
  );
}
