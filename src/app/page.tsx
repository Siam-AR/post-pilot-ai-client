"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export default function Home() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="space-y-6 px-4 py-8">
      <div className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface-bg)] p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-theme">Welcome to Post Pilot AI</h1>

        {isAuthenticated ? (
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <p className="text-sm font-medium text-theme">
              Welcome, {user?.name || "there"}!
            </p>
            <Button className="theme-btn-secondary px-5 py-3" onPress={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/login">
              <Button className="theme-btn-secondary px-5 py-3">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="theme-btn-primary px-5 py-3">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}