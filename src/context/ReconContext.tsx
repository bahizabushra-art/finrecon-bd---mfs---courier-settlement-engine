import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Context Interface
interface ReconContextType {
  activePage: string;
  setActivePage: (page: string) => void;
  currentTrack: string;
  setCurrentTrack: (track: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeLabelModalParcel: any;
  setActiveLabelModalParcel: (parcel: any) => void;
  [key: string]: any;
}

// 2. Create Context
const ReconContext = createContext<ReconContextType | undefined>(undefined);

// 3. Provider Component
export const ReconProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<string>('orders');
  const [currentTrack, setCurrentTrack] = useState<string>('track-a');
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [activeLabelModalParcel, setActiveLabelModalParcel] = useState<any>(null);

  return (
    <ReconContext.Provider
      value={{
        activePage,
        setActivePage,
        currentTrack,
        setCurrentTrack,
        activeTab,
        setActiveTab,
        activeLabelModalParcel,
        setActiveLabelModalParcel,
      }}
    >
      {children}
    </ReconContext.Provider>
  );
};

// 4. Custom Hook with Safe Fallback
export const useRecon = () => {
  const context = useContext(ReconContext);
  if (!context) {
    return {
      activePage: 'orders',
      setActivePage: () => {},
      currentTrack: 'track-a',
      setCurrentTrack: () => {},
      activeTab: 'overview',
      setActiveTab: () => {},
      activeLabelModalParcel: null,
      setActiveLabelModalParcel: () => {},
    } as ReconContextType;
  }
  return context;
};