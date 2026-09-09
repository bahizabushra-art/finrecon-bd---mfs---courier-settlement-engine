import React, { createContext, useContext, useState, ReactNode } from 'react';

// ১. Context টাইপ ডিফাইন করা
interface ReconContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  [key: string]: any; // অন্যান্য প্রয়োজনীয় স্টেট যোগ করার জন্য
}

// ২. Context তৈরি করা
const ReconContext = createContext<ReconContextType | undefined>(undefined);

// ৩. Provider কম্পোনেন্ট
export const ReconProvider = ({ children }: { children: ReactNode }) => {  const [activeTab, setActiveTab] = useState<string>('dashboard');

  return (
    <ReconContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </ReconContext.Provider>
  );
};

// ৪. Custom Hook (useRecon)
export const useRecon = () => {
  const context = useContext(ReconContext);
  if (!context) {
    throw new Error('useRecon must be used within a ReconProvider');
  }
  return context;
};
