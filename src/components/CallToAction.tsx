import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function CallToAction() {
  return (
    <section className="bg-[#08111c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#7184ff]/25 bg-[#111b35] px-6 py-16 text-center shadow-[0_24px_70px_rgba(28,46,145,.22)] sm:px-12 sm:py-20">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_20%_0%,rgba(93,114,255,.34),transparent_30%),radial-gradient(circle_at_85%_95%,rgba(154,64,235,.3),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#aeb9ff]">Ready when you are</p>
          <h2 className="mt-5 text-4xl font-black uppercase italic leading-none tracking-[-0.06em] text-white sm:text-6xl">Make every post count.</h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-relaxed text-slate-300 sm:text-xl">
            Create faster, stay on-brand, and meet your audience wherever they scroll.
          </p>
          <Link href="/register" className="group mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-bold text-[#27307c] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#e9edff]">
            Start creating for free <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
