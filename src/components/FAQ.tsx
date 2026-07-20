"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const questions = [
  ["What is PostPilot AI?", "PostPilot AI helps you turn a single idea into tailored social media copy for the platforms where your audience spends time."],
  ["Which social platforms can I create posts for?", "You can create content designed for up to nine major social platforms, with messaging shaped for each platform’s style and audience."],
  ["Can I make the generated content sound like my brand?", "Yes. Your brand profile gives PostPilot context about your tone, audience, and goals so generated posts feel more like you."],
  ["Can I edit posts before publishing?", "Absolutely. Every post is yours to review, revise, and refine before you use it or share it with your audience."],
  ["Do I need social media experience to use it?", "No. Start with a topic or campaign idea and PostPilot will help you shape it into a clear, ready-to-use post."],
  ["How quickly can I generate a post?", "Most drafts are ready in moments, so you can spend less time staring at a blank page and more time improving your message."],
  ["Is my brand information kept private?", "Your profile information is used to personalize your workspace and content generation. Never share credentials or sensitive business information in prompts."],
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0a121e] px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7184ff]">FAQ</p>
          <h2 className="mt-5 text-4xl font-black uppercase italic leading-none tracking-[-0.055em] text-white sm:text-5xl">Questions, answered.</h2>
          <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-slate-400">
            Everything you need to know before you create your first smarter social post.
          </p>
        </div>
        <div className="divide-y divide-white/[0.08] rounded-3xl border border-white/[0.08] bg-white/[0.025] px-6 sm:px-8">
          {questions.map(([question, answer], index) => {
            const isOpen = openIndex === index;
            return (
              <div key={question} className="py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-6 text-left font-serif text-xl font-bold text-white sm:text-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {question}
                  <HiChevronDown className={`shrink-0 text-2xl text-[#8996ff] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
                      <p className="max-w-2xl pb-6 font-serif text-lg leading-relaxed text-slate-400">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
