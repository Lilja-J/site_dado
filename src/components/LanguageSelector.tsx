
import React from 'react';
import { Language } from '../utils/diceData';

interface LanguageSelectorProps {
  currentLanguage: Language;
  onChange: (lang: Language) => void;
  label: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage, 
  onChange,
  label
}) => {
  return (
    <div className="absolute top-4 right-4 z-10">
      <label className="text-white text-sm mb-1 block">{label}</label>
      <select
        value={currentLanguage}
        onChange={(e) => onChange(e.target.value as Language)}
        className="bg-sexy-black text-white border border-sexy-red rounded px-2 py-1 outline-none focus:ring-2 focus:ring-sexy-red"
      >
        <option value="en">English</option>
        <option value="pt">Português</option>
      </select>
    </div>
  );
};

export default LanguageSelector;