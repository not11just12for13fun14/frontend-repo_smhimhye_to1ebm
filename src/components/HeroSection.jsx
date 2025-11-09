import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { UploadCloud, PlayCircle } from 'lucide-react';

export default function HeroSection({ onSelectFile }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/1qO0qkJf1fPjKcCk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-600/40 text-red-200 text-xs font-medium">
              <PlayCircle className="w-4 h-4" /> YouTube-inspired interface
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              Understand the emotion behind your audience
            </h1>
            <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
              Upload a CSV of YouTube comments and uncover trends, sentiment, and insights—presented with the familiar YouTube vibe and cinematic motion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <label className="group relative cursor-pointer inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white backdrop-blur-md transition-all shadow-xl">
              <UploadCloud className="w-5 h-5" />
              <span className="text-sm font-medium">Upload your CSV file</span>
              <input type="file" accept=".csv" className="absolute inset-0 opacity-0 cursor-pointer" onChange={onSelectFile} />
              <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-600/0 via-red-600/30 to-red-600/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </label>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
      </div>
    </section>
  );
}
