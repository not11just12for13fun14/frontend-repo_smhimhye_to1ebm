import React from 'react';
import { Youtube, Search, Bell, User } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-red-600 text-white shadow-lg shadow-red-600/30">
              <Youtube className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-white">SentimentTube</span>
          </div>
        </div>

        <div className="hidden md:flex items-center flex-1 max-w-2xl mx-6">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search YouTube comments, channels, topics..."
              className="w-full rounded-full bg-neutral-900/80 border border-white/10 text-sm text-white placeholder:text-neutral-400 py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-red-500/60"
            />
            <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 text-neutral-200">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Notifications">
            <Bell className="w-5 h-5" />
          </button>
          <button className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center gap-2 transition-colors">
            <User className="w-4 h-4" />
            <span className="text-sm">Sign in</span>
          </button>
        </div>
      </div>
    </header>
  );
}
