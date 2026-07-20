"use client";

import { motion } from "framer-motion";
import { HiPaperAirplane, HiShieldCheck, HiSparkles } from "react-icons/hi2";

const steps = [
  {
    number: "01",
    title: "Set your brand profile",
    description: "Add your brand voice, goals, and audience so every idea starts with your point of view.",
    icon: HiShieldCheck,
    iconClass: "from-[#4266eb] to-[#3548b8]",
  },
  {
    number: "02",
    title: "Create with AI",
    description: "Choose your topic and channels. PostPilot shapes polished, on-brand copy for each platform.",
    icon: HiSparkles,
    iconClass: "from-[#a44cf1] to-[#7139df]",
  },
  {
    number: "03",
    title: "Review and publish",
    description: "Fine-tune your posts, then publish with confidence when your content is ready to go.",
    icon: HiPaperAirplane,
    iconClass: "from-[#14a654] to-[#0a7e3c]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#08111c] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7184ff]">How it works</p>
          <h2 className="mt-5 text-4xl font-black uppercase italic leading-none tracking-[-0.055em] text-white sm:text-5xl">
            Three steps. Zero friction.
          </h2>
          <p className="mt-6 font-serif text-lg leading-relaxed text-slate-400">
            From a rough idea to platform-ready content in a workflow built to keep you moving.
          </p>
        </div>

        <div className="mt-16 grid gap-7 lg:grid-cols-3 lg:gap-12">
          {steps.map(({ number, title, description, icon: Icon, iconClass }, index) => (
            <motion.article
              key={number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-[0_18px_45px_rgba(0,0,0,.16)] transition-colors hover:border-white/[0.16] hover:bg-white/[0.045] sm:p-8"
            >
              {index < steps.length - 1 && <div className="absolute left-[65%] top-14 hidden h-px w-[70%] bg-gradient-to-r from-[#4e66df] to-[#9345f5] lg:block" />}
              <div className={`grid h-16 w-16 place-items-center rounded-[1.3rem] bg-gradient-to-br ${iconClass} text-3xl text-white shadow-lg`}>
                <Icon />
              </div>
              <p className="mt-8 font-mono text-sm font-bold text-slate-500">{number}</p>
              <h3 className="mt-4 font-serif text-3xl font-bold tracking-tight text-white">{title}</h3>
              <p className="mt-4 font-serif text-lg leading-relaxed text-slate-400">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
