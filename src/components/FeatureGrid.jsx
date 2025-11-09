import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, BarChart3, Smile, Shield } from 'lucide-react';

const items = [
  {
    icon: Gauge,
    title: 'Fast & Scalable',
    desc: 'Optimized pipeline to process thousands of comments in seconds.',
    color: 'from-red-500/30 to-red-600/30',
  },
  {
    icon: BarChart3,
    title: 'Rich Insights',
    desc: 'Visualize polarity, subjectivity, and trending themes with clarity.',
    color: 'from-blue-500/30 to-cyan-500/30',
  },
  {
    icon: Smile,
    title: 'Emotion Aware',
    desc: 'Goes beyond positive/negative to capture nuanced emotions.',
    color: 'from-amber-500/30 to-pink-500/30',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'Your data stays secure and is never shared without consent.',
    color: 'from-emerald-500/30 to-green-600/30',
  },
];

export default function FeatureGrid() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
              <div className="relative p-5 border border-white/10 bg-neutral-900/60 backdrop-blur rounded-2xl h-full">
                <div className="p-2.5 rounded-xl bg-white/10 w-fit mb-3">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-neutral-300 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
