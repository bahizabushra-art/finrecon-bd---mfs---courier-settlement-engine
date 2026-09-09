import React, { useState } from 'react';
import { useRecon } from '../context/ReconContext';
import { 
  Lock, 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Layers, 
  Store, 
  Key, 
  Mail, 
  CheckCircle2,
  Sparkles,
  Cpu
} from 'lucide-react';

export const LoginGateway: React.FC = () => {
  const { setActivePage, setCurrentTrack } = useRecon();
  const [email, setEmail] = useState('admin@merchant.com');
  const [apiKey, setApiKey] = useState('sec_live_9a87f2e104b6c3d5e8');
  const [selectedTrack, setSelectedTrack] = useState<'track-a' | 'track-b'>('track-a');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authStep, setAuthStep] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthStep('Validating SHA-256 HMAC Token...');

    setTimeout(() => {
      setAuthStep(
        selectedTrack === 'track-a' 
          ? 'Connecting to Enterprise API Ingestion Cron & Read-Replica...' 
          : 'Mounting SME Social Merchant Workspace & IMAP Listener...'
      );
    }, 400);

    setTimeout(() => {
      setCurrentTrack(selectedTrack);
      setActivePage('orders');
      setIsAuthenticating(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col justify-between items-center p-4 sm:p-6 relative overflow-hidden font-sans">
      {/* Subtle glowing background aura in Electric Yellow & Carbon */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-yellow-400/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/3 blur-[120px] pointer-events-none rounded-full" />

      {/* Top micro-bar */}
      <div className="w-full max-w-5xl flex items-center justify-between py-2 border-b border-[#27272A]/80 text-xs font-mono text-[#A1A1AA]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#22C55E] animate-pulse"></span>
          <span>GATEWAY: PRODUCTION CLUSTER (DHAKA-01)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">256-BIT TLS ENCRYPTED</span>
          <span className="text-[#FACC15]">BST (UTC+6)</span>
        </div>
      </div>

      {/* Main Centered Login Card */}
      <div className="w-full max-w-md my-auto py-8">
        <div className="bg-[#121212] border border-[#27272A] rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black relative z-10">
          {/* Cryptographic Linked Nodes Branding Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#050505] border-2 border-[#FACC15] shadow-lg shadow-[#FACC15]/20 mb-4 text-[#FACC15] group">
              <svg 
                className="w-7 h-7 stroke-current" 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                {/* Cryptographic Linked Nodes */}
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="18" r="3" />
                <line x1="9" y1="6" x2="15" y2="6" strokeDasharray="2 2" />
                <line x1="6" y1="9" x2="6" y2="15" />
                <line x1="18" y1="9" x2="18" y2="15" />
                <line x1="9" y1="18" x2="15" y2="18" strokeDasharray="2 2" />
                <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
              </svg>
            </div>

            <h1 className="text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
              TraceID Link
            </h1>
            <p className="text-sm text-[#A1A1AA] mt-1.5 font-medium">
              Intelligent FinTech Reconciliation Middleware
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Input 1: Corporate ID / Merchant Email */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5">
                Corporate ID / Merchant Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1AA]">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="login-merchant-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="admin@merchant.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-[#050505] border border-[#27272A] rounded-lg text-sm text-[#FFFFFF] font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                />
              </div>
            </div>

            {/* Input 2: Security Token / API Key */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  Security Token / API Key
                </label>
                <span className="text-[11px] font-mono text-[#FACC15]">HMAC SHA-256</span>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1AA]">
                  <Key className="w-4 h-4" />
                </div>
                <input
                  id="login-api-key"
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  required
                  placeholder="••••••••••••••••"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-[#050505] border border-[#27272A] rounded-lg text-sm text-[#FFFFFF] font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#FACC15] focus:ring-1 focus:ring-[#FACC15] transition-all"
                />
              </div>
            </div>

            {/* Mode Quick-Select Radio Switcher */}
            <div className="pt-1">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                Operational Suite Mode
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {/* Track A Option */}
                <label 
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTrack === 'track-a'
                      ? 'bg-[#050505] border-[#FACC15] shadow-sm shadow-[#FACC15]/10'
                      : 'bg-[#050505]/60 border-[#27272A] hover:border-zinc-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="suite-track"
                    checked={selectedTrack === 'track-a'}
                    onChange={() => setSelectedTrack('track-a')}
                    className="mt-1 accent-[#FACC15]"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#FFFFFF]">Track A: Enterprise API Suite</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40">
                        CRON
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Automated midnight MFS cron ingestion & shadow read-replica cross-matching
                    </p>
                  </div>
                </label>

                {/* Track B Option */}
                <label 
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTrack === 'track-b'
                      ? 'bg-[#050505] border-[#FACC15] shadow-sm shadow-[#FACC15]/10'
                      : 'bg-[#050505]/60 border-[#27272A] hover:border-zinc-700'
                  }`}
                >
                  <input
                    type="radio"
                    name="suite-track"
                    checked={selectedTrack === 'track-b'}
                    onChange={() => setSelectedTrack('track-b')}
                    className="mt-1 accent-[#FACC15]"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#FFFFFF]">Track B: SME & F-Commerce Portal</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                        MANUAL
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A1A1AA] mt-0.5">
                      Passive IMAP email scraping & simultaneous dual-file (MFS + Courier) upload
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Authenticating Progress Indicator */}
            {isAuthenticating && (
              <div className="p-3 rounded-lg bg-[#050505] border border-[#FACC15]/60 text-xs font-mono text-[#FACC15] flex items-center gap-2.5 animate-pulse">
                <div className="w-3.5 h-3.5 border-2 border-[#FACC15] border-t-transparent rounded-full animate-spin" />
                <span className="truncate">{authStep || 'Authenticating...'}</span>
              </div>
            )}

            {/* Action Button: Bold Electric Yellow Button */}
            <button
              id="login-access-btn"
              type="submit"
              disabled={isAuthenticating}
              className="w-full py-3.5 px-4 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#050505] font-bold text-sm tracking-wide shadow-lg shadow-[#FACC15]/20 hover:shadow-[#FACC15]/30 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer font-sans disabled:opacity-50"
            >
              <span>ACCESS RECONCILIATION WORKSPACE</span>
              <ArrowRight className="w-4 h-4 text-[#050505] stroke-[2.5]" />
            </button>
          </form>

          {/* Security Compliance Micro-Footer */}
          <div className="mt-6 pt-4 border-t border-[#27272A] flex items-center justify-between text-[11px] font-mono text-[#A1A1AA]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
              <span>Zero Bank Password Storage</span>
            </div>
            <span className="text-zinc-600">•</span>
            <span>180-Day TTL Partition</span>
          </div>
        </div>

        {/* Quick Demo Helpers */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs font-mono text-[#A1A1AA]">
          <span>Quick Login:</span>
          <button
            type="button"
            onClick={ () =>() => {
              setSelectedTrack('track-a');
              setCurrentTrack('track-a');
              setActivePage('orders');
            }}
            className="text-[#FACC15] hover:underline cursor-pointer"
          >
            Launch Track A →
          </button>
          <span>|</span>
          <button
            type="button"
            onClick={ () =>() => {
              setSelectedTrack('track-b');
              setCurrentTrack('track-b');
              setActivePage('orders');
            }}
            className="text-[#FACC15] hover:underline cursor-pointer"
          >
            Launch Track B →
          </button>
        </div>
      </div>

      {/* Global Bottom Bar */}
      <footer className="w-full max-w-5xl py-3 border-t border-[#27272A]/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#A1A1AA]">
        <div>
          <span>TraceID Link &copy; 2026</span>
          <span className="mx-2 text-zinc-700">|</span>
          <span>FinTech Middleware for bKash, Nagad, Pathao & Steadfast</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#22C55E]">● Shadow DB Online</span>
          <span>Partition: Rolling 180d</span>
        </div>
      </footer>
    </div>
  );
};
