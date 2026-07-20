"use client";

import Loader from '@/components/Loader';
import { useAuth } from '@/lib/auth-context';
import { buildLoginRedirectUrl } from '@/lib/auth-redirect';
import { useTheme } from '@/lib/theme-context';
import { useToast } from '@/lib/toast-context';
import { Button, Card } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaArrowRight, FaUserCircle } from 'react-icons/fa';

export default function ProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isAuthenticated, loading, logout } = useAuth();
  const { showToast } = useToast();
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace(buildLoginRedirectUrl(pathname));
    }
  }, [loading, isAuthenticated, pathname, router]);

  const handleLogout = async () => {
    try {
      await logout();
      showToast('Logged out successfully.', 'success', 2000);
      router.push('/');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to log out right now.';
      showToast(message, 'error', 3000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen px-4 py-10">
        <Loader message="Loading your profile..." />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={`min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(80,103,245,0.24),transparent_28%),linear-gradient(135deg,#040917_0%,#0b1223_100%)] px-4 py-10 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      <div className="mx-auto max-w-6xl space-y-6">
        <Card className={`overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_rgba(2,6,23,0.28)] ${isDarkMode ? 'border-white/10 bg-slate-950/85' : 'border-slate-200 bg-white'}`}>
          <div className={`relative overflow-hidden rounded-[1.6rem] p-8 text-white sm:p-10 ${isDarkMode ? 'bg-[linear-gradient(120deg,#1e3a8a_0%,#3b82f6_45%,#06b6d4_100%)]' : 'bg-[linear-gradient(120deg,#2563eb_0%,#4f46e5_45%,#0ea5e9_100%)]'}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_28%)]" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/20 text-3xl shadow-[0_10px_30px_rgba(15,23,42,0.18)] ring-4 ring-white/10">
                  {user?.image ? (
                    <img src={user.image} alt={user.name || 'Profile'} className="h-16 w-16 rounded-full object-cover" />
                  ) : (
                    <FaUserCircle />
                  )}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-cyan-100">Profile</p>
                  <h1 className="mt-1 text-3xl font-black tracking-tight">{user?.name || 'Anonymous User'}</h1>
                  <p className="mt-1 text-sm text-cyan-50/90">{user?.email}</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button variant="secondary" className="rounded-2xl border border-white/20 bg-white/15 px-5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur hover:bg-white/25" onPress={() => router.push('/profile/update-profile')}>
                  Update Profile
                </Button>
                <Button variant="danger" className="rounded-2xl border border-white/20 bg-white/15 px-5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] backdrop-blur hover:bg-white/25" onPress={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className={`rounded-[1.75rem] border p-6 ${isDarkMode ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Account Overview</h2>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] ${isDarkMode ? 'bg-white/10 text-slate-400' : 'bg-slate-200 text-slate-600'}`}>
                  Active
                </span>
              </div>
              <div className={`mt-5 space-y-3 text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                <div className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-200 bg-white'}`}>
                  <span>Name</span>
                  <span className="font-medium">{user?.name || 'Not provided'}</span>
                </div>
                <div className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-200 bg-white'}`}>
                  <span>Email</span>
                  <span className="font-medium">{user?.email}</span>
                </div>
                <div className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${isDarkMode ? 'border-white/10 bg-slate-950/60' : 'border-slate-200 bg-white'}`}>
                  <span>Avatar</span>
                  <span className="font-medium">{user?.image ? 'Configured' : 'Not set'}</span>
                </div>
              </div>
            </div>

            <div className={`rounded-[1.75rem] border p-6 ${isDarkMode ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}>
              <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Next step</p>
              <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_100%)] p-5 text-white shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5067f5,#a144ef)] text-lg font-bold">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="font-semibold">{user?.name || 'Your account'}</p>
                    <p className="text-sm text-slate-400">Ready for the next update</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Keep your profile polished and aligned with your brand by updating your details whenever needed.
                </p>
                <Button variant="secondary" className="mt-5 rounded-2xl bg-[linear-gradient(100deg,#5067f5,#a144ef)] px-4 py-2 text-white shadow-[0_16px_35px_rgba(67,91,243,.24)]" onPress={() => router.push('/profile/update-profile')}>
                  Edit profile <FaArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
