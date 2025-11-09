import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, CheckCircle2, AlertCircle } from 'lucide-react';

export default function UploadCard({ fileName, status, onClear }) {
  const statusMap = {
    idle: { color: 'text-neutral-300', label: 'Awaiting upload' },
    uploading: { color: 'text-blue-300', label: 'Uploading...' },
    ready: { color: 'text-green-300', label: 'Ready to analyze', icon: CheckCircle2 },
    error: { color: 'text-red-300', label: 'Invalid file', icon: AlertCircle },
  };
  const current = statusMap[status] ?? statusMap.idle;
  const Icon = current.icon || FileSpreadsheet;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto mt-8 rounded-2xl bg-neutral-900/60 border border-white/10 p-5 backdrop-blur"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white/5">
          <Icon className="w-6 h-6 text-red-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-white truncate">{fileName || 'No file selected yet'}</p>
          <p className={`text-xs ${current.color}`}>{current.label}</p>
        </div>
        {fileName && (
          <button onClick={onClear} className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white">
            Clear
          </button>
        )}
      </div>
    </motion.div>
  );
}
