"use client";

import { useAuth } from '@/lib/auth-context';
import { buildLoginRedirectUrl } from '@/lib/auth-redirect';
import { useTheme } from '@/lib/theme-context';
import { useToast } from '@/lib/toast-context';
import { Button, Card, Input } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type FormEvent } from 'react';

export default function UpdateProfilePage() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, updateProfile, isAuthenticated, loading } = useAuth();
  const { showToast } = useToast();
  const { isDarkMode } = useTheme();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.replace(buildLoginRedirectUrl(pathname));
    }
  }, [loading, isAuthenticated, pathname, router]);

  const validateImageUrl = (url: string) => {
    if (!url.trim()) {
      return true;
    }

    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
      return false;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const trimmedName = nameRef.current?.value.trim() ?? '';
    const trimmedImage = imageRef.current?.value.trim() ?? '';

    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters.');
      showToast('Name must be at least 2 characters.', 'error', 3000);
      return;
    }

    if (!validateImageUrl(trimmedImage)) {
      setError('Please provide a valid image URL.');
      showToast('Please provide a valid image URL.', 'error', 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      await updateProfile({
        name: trimmedName,
        image: trimmedImage,
      });

      showToast('Profile updated successfully.', 'success', 2500);
      router.push('/profile');
      router.refresh();
    } catch (updateError) {
      const message = updateError instanceof Error ? updateError.message : 'Unable to update user information.';
      setError(message);
      showToast(message, 'error', 3500);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={`flex min-h-screen items-center justify-center px-4 py-10 ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>
        <p className="text-sm">Loading profile editor...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={`min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(80,103,245,0.25),transparent_30%),linear-gradient(135deg,#040917_0%,#0b1223_100%)] px-4 py-10 ${isDarkMode ? 'text-slate-100' : 'text-slate-900'}`}>
      <Card className={`mx-auto max-w-3xl overflow-hidden rounded-[2rem] border shadow-[0_24px_80px_rgba(2,6,23,0.28)] ${isDarkMode ? 'border-white/10 bg-slate-950/85' : 'border-slate-200 bg-white'}`}>
        <div className="bg-[linear-gradient(110deg,#5067f5_0%,#7b58ff_45%,#24a8e7_100%)] p-8 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-50">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
            Profile
          </div>
          <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Update your identity</h1>
          <p className="mt-3 max-w-2xl text-sm text-cyan-50/90 sm:text-base">
            Keep your profile details polished and consistent with your brand across every touchpoint.
          </p>
        </div>

        <div className="grid gap-6 p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {error && (
              <div className={`mb-5 rounded-2xl border p-3 text-sm ${isDarkMode ? 'border-rose-500/30 bg-rose-500/10 text-rose-200' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="space-y-2">
                <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Display name</label>
                <Input
                  ref={nameRef}
                  defaultValue={user?.name || ''}
                  placeholder="Enter your name"
                  className={`w-full rounded-2xl border-0 ${isDarkMode ? 'bg-slate-900/70 text-white' : 'bg-slate-50 text-slate-900'}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`text-sm font-semibold ${isDarkMode ? 'text-slate-200' : 'text-slate-700'}`}>Image URL</label>
                <Input
                  ref={imageRef}
                  defaultValue={user?.image || ''}
                  placeholder="https://example.com/image.jpg"
                  className={`w-full rounded-2xl border-0 ${isDarkMode ? 'bg-slate-900/70 text-white' : 'bg-slate-50 text-slate-900'}`}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button type="submit" className="rounded-2xl bg-[linear-gradient(100deg,#5067f5,#a144ef)] px-5 py-2.5 font-semibold text-white shadow-[0_16px_35px_rgba(67,91,243,.24)]" isDisabled={isSubmitting}>
                  {isSubmitting ? 'Updating...' : 'Update Information'}
                </Button>
                <Button type="button" variant="secondary" className={`rounded-2xl ${isDarkMode ? 'bg-white/10 text-slate-100' : 'bg-slate-100 text-slate-700'}`} onPress={() => router.push('/profile')}>
                  Back to profile
                </Button>
              </div>
            </form>
          </div>

          <div className={`rounded-[1.5rem] border p-6 ${isDarkMode ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-slate-50'}`}>
            <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Preview</p>
            <div className="mt-4 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(135deg,#0f172a_0%,#111827_100%)] p-5 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5067f5,#a144ef)] text-lg font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div>
                  <p className="font-semibold">{user?.name || 'Your name'}</p>
                  <p className="text-sm text-slate-400">{user?.email || 'your@email.com'}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Your profile card will stay consistent with the rest of the experience once your details are saved.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
