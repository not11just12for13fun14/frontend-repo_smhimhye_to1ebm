import React, { useState } from 'react';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import UploadCard from './components/UploadCard';
import FeatureGrid from './components/FeatureGrid';

function App() {
  const [fileName, setFileName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | uploading | ready | error

  const handleSelectFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.csv')) {
      setStatus('error');
      setFileName(file.name);
      return;
    }

    setStatus('uploading');
    setFileName(file.name);

    // Simulate quick validation/processing for now
    setTimeout(() => {
      setStatus('ready');
    }, 800);
  };

  const clearFile = () => {
    setFileName('');
    setStatus('idle');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />

      <main>
        <HeroSection onSelectFile={handleSelectFile} />

        <div className="px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <UploadCard fileName={fileName} status={status} onClear={clearFile} />
        </div>

        <FeatureGrid />

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-8 backdrop-blur text-center">
              <h3 className="text-2xl font-semibold">Bring your audience’s voice to life</h3>
              <p className="text-neutral-300 mt-2 max-w-2xl mx-auto">
                Once your CSV is uploaded, you’ll be able to run a full sentiment pass, visualize trends, and export insights — all with a YouTube-inspired look and feel.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-6 text-center text-neutral-400 bg-neutral-950/60">
        Built with love for creators • SentimentTube © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
