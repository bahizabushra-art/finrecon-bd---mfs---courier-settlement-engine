import React, { useState } from 'react';
import { useRecon } from '../../context/ReconContext';
import { 
  Camera, 
  Barcode, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Zap
} from 'lucide-react';

interface GlobalQuickScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalQuickScanModal: React.FC<GlobalQuickScanModalProps> = ({ isOpen, onClose }) => {
  const { 
    currentTrack, 
    scanReturnedParcel, 
    warehouseId,
    operatorId
  } = useRecon();

  const [inputCode, setInputCode] = useState('');
  const [scanResult, setScanResult] = useState<{
    success: boolean;
    message: string;
    targetStatus?: string;
    traceId?: string;
  } | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  if (!isOpen) return null;

  const targetStatusLabel = currentTrack === 'track-a' 
    ? 'RETURN_RECEIVED_AT_WAREHOUSE' 
    : 'RETURN_RECEIVED_AT_SHOP';

  const handleExecuteScan = (codeToScan?: string) => {
    const code = (codeToScan || inputCode).trim().toUpperCase();
    if (!code) return;

    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      const res = scanReturnedParcel(
        code, 
        currentTrack === 'track-a' ? 'Warehouse Dock Bay 2' : 'Shop Intake Counter 1',
        warehouseId || (currentTrack === 'track-a' ? 'WH-DHK-TEJGAON-01' : 'SHOP-DHAKA-BANANI-02'),
        operatorId || 'OP-SCANNER-409'
      );

      setIsScanning(false);
      setScanResult({
        success: res.success,
        message: res.message,
        targetStatus: targetStatusLabel,
        traceId: code
      });
      setInputCode('');
    }, 350);
  };

  const sampleReturnParcels = [
    { code: 'TR-RET-203', label: 'TR-RET-203', note: 'Ghost Return Exception' },
    { code: 'TR-RET-201', label: 'TR-RET-201', note: 'Penalty Overcharge (BDT 110)' },
    { code: 'TR-RET-202', label: 'TR-RET-202', note: '14-Day Stalled Hub' },
    { code: 'TR-COD-7701', label: 'TR-COD-7701', note: 'Track A API Inbound' },
    { code: 'TR-SME-9912', label: 'TR-SME-9912', note: 'Track B SME Token' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-fadeIn font-sans">
      <div 
        className="bg-[#121212] border border-[#27272A] rounded-2xl w-full max-w-lg shadow-2xl shadow-black max-h-[92vh] flex flex-col overflow-hidden relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-4 sm:px-5 py-3.5 border-b border-[#27272A] bg-[#050505] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#FACC15] text-[#050505] flex items-center justify-center font-bold shrink-0">
              <Camera className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#FFFFFF] tracking-tight">
                Quick Barcode Scan Terminal
              </h2>
              <p className="text-[11px] font-mono text-[#A1A1AA]">
                Target Sync: <span className="text-[#FACC15] font-semibold">{targetStatusLabel}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#FFFFFF] hover:bg-zinc-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-5 space-y-4 overflow-y-auto custom-scrollbar flex-1">
          {/* Simulated Camera Viewport with Touch to Scan */}
          <div 
            onClick={() => handleExecuteScan('TR-RET-203')}
            title="Tap viewport to simulate camera barcode detection"
            className="relative rounded-xl overflow-hidden border-2 border-dashed border-[#FACC15]/60 bg-[#050505] h-40 sm:h-44 flex flex-col items-center justify-center cursor-pointer active:scale-[0.99] transition-transform select-none group"
          >
            {/* Viewport Corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#FACC15]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FACC15]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FACC15]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#FACC15]" />

            {/* Red Laser scanning line animation */}
            <div className="absolute inset-x-4 h-0.5 bg-gradient-to-r from-transparent via-[#EF4444] to-transparent shadow-sm shadow-[#EF4444] animate-bounce" />

            <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-[#A1A1AA] mb-1.5 group-hover:text-[#FACC15] transition-colors" />
            <span className="text-xs font-mono text-[#FFFFFF] font-bold">
              Live Camera Viewport
            </span>
            <span className="text-[10px] font-mono text-[#FACC15] bg-[#FACC15]/10 px-2 py-0.5 rounded border border-[#FACC15]/30 mt-1">
              Tap screen to simulate live camera scan
            </span>

            {/* Facility pill */}
            <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] bg-[#121212]/90 px-2 py-1 rounded border border-[#27272A]">
              <span>NODE: {currentTrack === 'track-a' ? 'WH-CENTRAL-01' : 'SHOP-RETAIL-01'}</span>
              <span className="text-[#22C55E] font-bold">CAMERA READY</span>
            </div>
          </div>

          {/* Quick Input Barcode Field - Touch & Keyboard friendly */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-1.5 font-semibold">
              Type or Paste Barcode / TraceID:
            </label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#A1A1AA]">
                  <Barcode className="w-5 h-5 text-[#FACC15]" />
                </div>
                <input
                  id="modal-barcode-input"
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleExecuteScan()}
                  placeholder="e.g. TR-RET-203"
                  className="w-full pl-10 pr-3 py-3 bg-[#050505] border border-[#27272A] rounded-xl text-sm sm:text-xs text-[#FFFFFF] font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#FACC15] min-h-[48px]"
                />
              </div>

              <button
                id="modal-verify-scan-btn"
                type="button"
                onClick={() => handleExecuteScan()}
                disabled={isScanning || !inputCode.trim()}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#FACC15] hover:bg-[#EAB308] text-[#050505] font-bold text-xs font-mono tracking-wide shadow-md shadow-[#FACC15]/20 disabled:opacity-40 transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[48px] shrink-0 active:scale-[0.98]"
              >
                {isScanning ? (
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-current stroke-none" />
                    <span>VERIFY SCAN</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick-Scan Preset Buttons (Optimized for touch on phone / tab / desktop) */}
          <div>
            <span className="text-xs font-mono text-[#A1A1AA] block mb-2 font-semibold">
              📱 Tap Any Preset to Simulate Instant Physical Scan:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sampleReturnParcels.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => handleExecuteScan(item.code)}
                  className="text-left p-2.5 sm:p-3 rounded-xl bg-[#050505] hover:bg-zinc-900 border border-[#27272A] hover:border-[#FACC15] active:border-[#FACC15] active:bg-[#1a1a1a] transition-all cursor-pointer min-h-[48px] flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#FACC15]">
                      {item.code}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FACC15]/20 text-[#FACC15] border border-[#FACC15]/40 font-bold">
                      TAP SCAN
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A1A1AA] truncate mt-0.5 font-sans">
                    {item.note}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Scan Execution Feedback Notice */}
          {scanResult && (
            <div className={`p-3.5 rounded-xl border text-xs font-mono animate-fadeIn ${
              scanResult.success 
                ? 'bg-[#050505] border-[#22C55E] text-[#22C55E]' 
                : 'bg-[#050505] border-[#EF4444] text-[#EF4444]'
            }`}>
              <div className="flex items-start gap-2.5">
                {scanResult.success ? (
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-bold flex items-center gap-2 flex-wrap">
                    <span>{scanResult.success ? 'PHYSICAL RETURN VERIFIED & CHECKED-IN' : 'SCAN FAILED'}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40 font-bold">
                      VERIFIED_RETURNED
                    </span>
                  </div>
                  <p className="text-xs text-[#FFFFFF] mt-1 leading-relaxed">
                    {scanResult.message}
                  </p>
                  <div className="mt-2 text-[11px] text-[#FACC15] flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Table 5 on /returns & /reports updated in real time. Ghost return exception cleared!</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-5 py-3 border-t border-[#27272A] bg-[#050505] flex items-center justify-between text-xs font-mono text-[#A1A1AA] shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
            <span className="hidden sm:inline">Zero-latency state broadcast active</span>
            <span className="sm:hidden">Live Sync OK</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs transition-colors min-h-[40px] cursor-pointer"
          >
            Close Terminal
          </button>
        </div>
      </div>
    </div>
  );
};
