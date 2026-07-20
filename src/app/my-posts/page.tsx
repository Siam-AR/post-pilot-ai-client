"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { postsAPI, type SavedPost } from "@/lib/api";
import { useToast } from "@/lib/toast-context";
import { useAuth } from "@/lib/auth-context";

export default function MyPostsPage() {
  const { isAuthenticated, loading } = useAuth();
  const { showToast } = useToast();
  const [posts, setPosts] = useState<SavedPost[] | null>(null);
  const [platform, setPlatform] = useState("All"); const [tone, setTone] = useState("All"); const [sort, setSort] = useState("newest"); const [page, setPage] = useState(1); const perPage = 8;

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    let isMounted = true;

    const loadPosts = async () => {
      try {
        const data = await postsAPI.getMine();
        if (isMounted) {
          setPosts(data);
        }
      } catch (error) {
        if (isMounted) {
          showToast(error instanceof Error ? error.message : "Unable to load your posts.", "error");
          setPosts([]);
        }
      }
    };

    loadPosts();

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, showToast]);

  const isPostsLoading = isAuthenticated && posts === null;
  const filteredPosts = (posts ?? []).filter((post) => (platform === "All" || post.platform === platform) && (tone === "All" || post.tone === tone)).sort((a, b) => sort === "newest" ? +new Date(b.createdAt) - +new Date(a.createdAt) : +new Date(a.createdAt) - +new Date(b.createdAt));
  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / perPage)); const visiblePosts = filteredPosts.slice((page - 1) * perPage, page * perPage);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#08111c] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="h-10 w-48 animate-pulse rounded-full bg-white/10" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[0, 1].map((item) => (
              <div key={item} className="h-48 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#08111c] px-5 py-16 text-center text-white sm:px-8">
        <div className="max-w-xl rounded-3xl border border-white/10 bg-white/[.03] p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8494ff]">My Posts</p>
          <h1 className="mt-3 text-3xl font-black sm:text-4xl">Sign in to view your saved posts.</h1>
          <p className="mt-4 text-base text-slate-400">
            Log in to keep track of your generated content and revisit it anytime.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/login" className="rounded-xl bg-[#5067f5] px-5 py-3 font-bold">
              Go to login
            </Link>
            <Link href="/generate" className="rounded-xl border border-white/15 px-5 py-3 font-bold text-slate-200">
              Generate a post
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08111c] px-5 py-16 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8494ff]">Your library</p>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl">My Posts</h1>
          </div>
          <Link href="/generate" className="inline-flex rounded-xl bg-[#5067f5] px-5 py-3 font-bold">
            Create new post
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3"><select value={platform} onChange={(e) => { setPlatform(e.target.value); setPage(1); }} className="rounded-xl bg-[#0b1423] p-3"><option>All</option>{[...new Set((posts ?? []).map((post) => post.platform))].map((value) => <option key={value}>{value}</option>)}</select><select value={tone} onChange={(e) => { setTone(e.target.value); setPage(1); }} className="rounded-xl bg-[#0b1423] p-3"><option>All</option>{[...new Set((posts ?? []).map((post) => post.tone))].map((value) => <option key={value}>{value}</option>)}</select><select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-xl bg-[#0b1423] p-3"><option value="newest">Newest first</option><option value="oldest">Oldest first</option></select></div>

        {isPostsLoading ? (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-48 animate-pulse rounded-3xl border border-white/10 bg-white/5" />
            ))}
          </div>
        ) : (posts ?? []).length === 0 ? (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[.03] p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold">No posts yet</h2>
            <p className="mt-3 text-slate-400">
              Generate your first post and it will appear here for quick access.
            </p>
            <Link href="/generate" className="mt-6 inline-flex rounded-xl bg-[#5067f5] px-5 py-3 font-bold">
              Start generating
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {visiblePosts.map((post) => (
              <article key={post._id} className="rounded-3xl border border-white/10 bg-white/[.03] p-6 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="rounded-full bg-[#5067f5]/20 px-3 py-1 text-[#b5bdff]">{post.platform}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{post.tone}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1">{post.length}</span>
                </div>
                <h2 className="mt-4 text-2xl font-black">{post.title}</h2>
                <p className="mt-3 line-clamp-3 text-slate-400">{post.shortDescription}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                  <Link href={`/my-posts/${post._id}`} className="font-semibold text-[#9ba8ff]">
                    Open post →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
