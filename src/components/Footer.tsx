import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "About", href: "/about" },
  { label: "Create a post", href: "/add-project" },
];

const socials = [
  { label: "X", icon: FaXTwitter },
  { label: "Instagram", icon: FaInstagram },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Facebook", icon: FaFacebookF },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070d15] px-5 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto grid max-w-7xl gap-12 pb-12 md:grid-cols-[1.35fr_.65fr_.65fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold tracking-tight text-white">
            <img src="/post-pilot-ai-logo.png" alt="PostPilot AI" className="h-11 w-11 object-contain" />
            <span>Post<span className="text-[#7866ff]">Pilot</span></span>
          </Link>
          <p className="mt-5 max-w-sm font-serif text-lg leading-relaxed text-slate-400">
            AI-assisted social content that helps your brand show up with clarity, consistency, and confidence.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-1 hover:border-[#7184ff]/50 hover:bg-[#7184ff]/15 hover:text-white">
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Explore</h2>
          <ul className="mt-5 space-y-3 font-serif text-lg text-slate-300">
            {navLinks.map(({ label, href }) => <li key={href}><Link href={href} className="transition hover:text-white">{label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">Get started</h2>
          <p className="mt-5 max-w-xs font-serif text-lg leading-relaxed text-slate-400">Turn your next idea into content your audience wants to read.</p>
          <Link href="/register" className="mt-6 inline-flex rounded-xl bg-[#5067f5] px-5 py-3 font-bold text-white transition hover:bg-[#6278ff]">Create free account</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/[0.08] py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} PostPilot AI. Made for better social content.</p>
        <div className="flex gap-5"><a href="#" className="hover:text-slate-300">Privacy</a><a href="#" className="hover:text-slate-300">Terms</a></div>
      </div>
    </footer>
  );
}
