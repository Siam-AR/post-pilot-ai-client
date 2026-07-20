import Link from "next/link";
import { HiArrowRight, HiBolt, HiChartBarSquare, HiHeart, HiSparkles } from "react-icons/hi2";

const principles = [
  { icon: HiSparkles, title: "Creative momentum", text: "AI should remove the blank-page moment, not replace your perspective." },
  { icon: HiHeart, title: "Brand-first by design", text: "The best social content feels recognizably yours on every channel." },
  { icon: HiBolt, title: "Built for the real workflow", text: "Fast drafts, thoughtful review, and less context-switching for busy teams." },
];

export default function About() {
  return (
    <main className="bg-[#08111c] text-white">
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_16%_15%,rgba(83,106,245,.22),transparent_27%),radial-gradient(circle_at_85%_75%,rgba(143,61,237,.18),transparent_31%)]" />
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#8494ff]">About PostPilot</p>
          <h1 className="mx-auto mt-5 max-w-5xl text-5xl font-black uppercase italic leading-[.92] tracking-[-.07em] sm:text-7xl">More signal. Less social noise.</h1>
          <p className="mx-auto mt-8 max-w-3xl font-serif text-xl leading-relaxed text-slate-400 sm:text-2xl">PostPilot AI gives creators and teams a clearer path from a good idea to content that feels useful, on-brand, and ready to share.</p>
          <Link href="/register" className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-[#5067f5] px-7 py-4 text-lg font-bold shadow-[0_16px_35px_rgba(67,91,243,.35)] transition hover:-translate-y-1 hover:bg-[#6278ff]">Build your next post <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <section className="border-y border-white/[.07] bg-white/[.02] px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-3">
          {[['9', 'social platforms in one workflow'], ['Minutes', 'from first idea to polished draft'], ['100%', 'your voice, your final say']].map(([value, label]) => <div key={value}><p className="text-4xl font-black italic text-[#a394ff] sm:text-5xl">{value}</p><p className="mt-2 font-serif text-lg text-slate-400">{label}</p></div>)}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[.2em] text-[#8494ff]">Our mission</p><h2 className="mt-5 text-4xl font-black uppercase italic leading-none tracking-[-.055em] sm:text-5xl">Make great social content feel possible every day.</h2></div>
          <div className="space-y-5 font-serif text-xl leading-relaxed text-slate-400"><p>Social media moves quickly, but creating content that sounds like your brand takes time. PostPilot brings structure to that work without flattening your personality.</p><p>We believe good AI gives people more room to think, experiment, and connect—while they stay in control of every word they publish.</p></div>
        </div>
      </section>

      <section className="bg-[#0b1423] px-5 py-24 sm:px-8 sm:py-32"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#8494ff]">Why PostPilot</p><h2 className="mt-5 text-4xl font-black uppercase italic leading-none tracking-[-.055em] sm:text-5xl">Designed to keep your brand moving.</h2></div><div className="mt-14 grid gap-6 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-white/[.08] bg-white/[.03] p-7"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#536af5]/20 text-3xl text-[#9ba8ff]"><Icon /></div><h3 className="mt-7 font-serif text-2xl font-bold">{title}</h3><p className="mt-3 font-serif text-lg leading-relaxed text-slate-400">{text}</p></article>)}</div></div></section>

      <section className="px-5 py-24 text-center sm:px-8"><div className="mx-auto max-w-3xl"><HiChartBarSquare className="mx-auto text-5xl text-[#8b7cff]" /><h2 className="mt-6 text-4xl font-black uppercase italic leading-none tracking-[-.055em] sm:text-5xl">Your next idea deserves a runway.</h2><p className="mt-5 font-serif text-xl leading-relaxed text-slate-400">Create clearer, more consistent content for the places your audience already lives.</p><Link href="/register" className="mt-9 inline-flex rounded-2xl bg-white px-7 py-4 text-lg font-bold text-[#27307c] transition hover:bg-[#e9edff]">Start creating for free</Link></div></section>
    </main>
  );
}
