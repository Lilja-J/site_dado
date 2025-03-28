
import { Language } from './diceData';

// Actions that should be avoided with sensitive body parts
const uncomfortableActions: Record<Language, string[]> = {
  en: ['Bite', 'Pinch', 'Spank', 'Scratch', 'Graze teeth on'],
  pt: ['Morder', 'Beliscar', 'Dar tapa', 'Arranhar', 'Passar dentes em']
};

// Sensitive body parts that should be protected from certain actions
const sensitiveParts: Record<Language, string[]> = {
  en: ['Genitals', 'Nipples', 'Inner thighs', 'Between shoulder blades'],
  pt: ['Genitais', 'Mamilos', 'Parte interna das coxas', 'Entre as omoplatas']
};

/**
 * Checks if a combination of action and body part is allowed (comfortable)
 */
export const isSafeCombination = (
  action: string,
  bodyPart: string,
  language: Language
): boolean => {
  const isActionUncomfortable = uncomfortableActions[language].includes(action);
  const isPartSensitive = sensitiveParts[language].includes(bodyPart);
  
  return !(isActionUncomfortable && isPartSensitive);
};
