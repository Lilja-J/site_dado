import React, { useState } from 'react';
import { Language, diceContent } from '../utils/diceData';
import LanguageSelector from './LanguageSelector';
import { isSafeCombination } from '../utils/combinationUtils';

const DiceGame: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [action, setAction] = useState<string>('');
  const [bodyPart, setBodyPart] = useState<string>('');
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [checkSensitiveParts, setCheckSensitiveParts] = useState<boolean>(true); // Novo estado

  const data = diceContent[language];

  const getRandomItem = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const rollDice = () => {
    if (isRolling) return;

    setIsRolling(true);
    setAction('');
    setBodyPart('');

    // Simulate rolling animation with timeout
    setTimeout(() => {
      let newAction, newBodyPart;
      let safeCombo = false;

      // Keep trying until we get a valid combination
      while (!safeCombo) {
        newAction = getRandomItem(data.actions);
        newBodyPart = getRandomItem(data.bodyParts);

        // Verifica a combinação com base no estado de checkSensitiveParts
        safeCombo = checkSensitiveParts
          ? isSafeCombination(newAction, newBodyPart, language)
          : true; // Ignora a verificação se checkSensitiveParts for false
      }

      setAction(newAction);
      setBodyPart(newBodyPart);
      setIsRolling(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <LanguageSelector 
        currentLanguage={language} 
        onChange={setLanguage} 
        label={data.labels.languageSelector}
      />
      
      <h1 className="text-4xl font-bold text-sexy-red mb-8">Sexy Dice</h1>
      
      <div className="w-full max-w-md space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-center text-white mb-2">{data.labels.action}</label>
            <div className={`dice-container ${isRolling ? 'animate-dice-roll' : ''}`}>
              <span className="text-xl font-bold text-sexy-red text-center w-full">{action}</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-center text-white mb-2">{data.labels.bodyPart}</label>
            <div className={`dice-container ${isRolling ? 'animate-dice-roll' : ''}`}>
              <span className="text-xl font-bold text-sexy-red">{bodyPart}</span>
            </div>
          </div>
        </div>

        {/* Radio Buttons for Sensitive Parts */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Verificar ações sensíveis:</p>
          <label className="block">
            <input
              type="radio"
              name="sensitiveCheck"
              value="true"
              checked={checkSensitiveParts === true}
              onChange={() => setCheckSensitiveParts(true)}
              className="mr-2"
            />
            Habilitar
          </label>
          <label className="block">
            <input
              type="radio"
              name="sensitiveCheck"
              value="false"
              checked={checkSensitiveParts === false}
              onChange={() => setCheckSensitiveParts(false)}
              className="mr-2"
            />
            Desabilitar
          </label>
        </div>
        
        <button 
          onClick={rollDice}
          disabled={isRolling}
          className="w-full bg-sexy-red hover:bg-red-700 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 disabled:opacity-70"
        >
          {isRolling ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {data.labels.rollButton}...
            </div>
          ) : (
            data.labels.rollButton
          )}
        </button>
      </div>
    </div>
  );
};

export default DiceGame;