"use client";

import { useTheme } from "@/lib/theme-context";
import React from "react";

interface LoaderProps {
  message?: string;
}

export default function Loader({ message = "Loading..." }: LoaderProps) {
  const { isDarkMode } = useTheme();

  const shellClass = isDarkMode
    ? "border-white/10 bg-slate-900/80 text-slate-200"
    : "border-slate-200 bg-white/80 text-slate-700";

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className={`flex flex-col items-center gap-4 rounded-2xl border px-6 py-5 shadow-sm backdrop-blur ${shellClass}`}>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-500 [animation-delay:-0.2s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-violet-500 [animation-delay:-0.1s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-fuchsia-500" />
        </div>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}
