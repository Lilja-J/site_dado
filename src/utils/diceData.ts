
export type Language = 'en' | 'pt';

export interface DiceData {
  actions: string[];
  bodyParts: string[];
  labels: {
    action: string;
    bodyPart: string;
    rollButton: string;
    languageSelector: string;
  };
}

export const diceContent: Record<Language, DiceData> = {
  en: {
    actions: [
      'Kiss', 'Lick', 'Suck', 'Bite', 'Caress', 'Massage', 'Pinch', 'Blow on', 
      'Spank', 'Stroke', 'Scratch', 'Tickle', 'Rub', 'Touch', 'Tease',
      'Nibble', 'Whisper into', 'Trace fingers on', 'Breathe on', 'Gently squeeze',
      'Softly pull', 'Glide fingers across', 'Press lips against', 'Circle finger around',
      'Gently press', 'Brush against', 'Slowly explore', 'Graze teeth on', 'Flutter tongue on',
      'Firmly grasp'
    ],
    bodyParts: [
      'Lips', 'Neck', 'Ears', 'Chest', 'Nipples', 'Back', 'Stomach', 'Thighs', 
      'Inner thighs', 'Buttocks', 'Genitals', 'Feet', 'Hands', 'Shoulders', 'Wrists',
      'Back of neck', 'Behind ears', 'Lower back', 'Nape of neck', 'Side of neck',
      'Collarbone', 'Inside of elbow', 'Back of knees', 'Inner wrists', 
      'Between shoulder blades', 'Small of back', 'Hips', 'Inner arms',
      'Upper chest', 'Jawline', 'Back of thighs', 'Sides of torso', 'Upper arms',
      'Sides of neck', 'Behind knees'
    ],
    labels: {
      action: 'Action',
      bodyPart: 'Body Part',
      rollButton: 'Roll Dice',
      languageSelector: 'Language'
    }
  },
  pt: {
    actions: [
      'Beijar', 'Lamber', 'Chupar', 'Morder', 'Acariciar', 'Massagear', 'Beliscar', 'Soprar', 
      'Dar tapa', 'Deslizar', 'Arranhar', 'Fazer cócegas', 'Esfregar', 'Tocar', 'Provocar',
      'Mordiscar', 'Sussurrar em', 'Traçar dedos em', 'Respirar em', 'Apertar suavemente',
      'Puxar levemente', 'Deslizar dedos por', 'Pressionar lábios contra', 'Circular dedo ao redor',
      'Pressionar suavemente', 'Roçar contra', 'Explorar lentamente', 'Passar dentes em', 'Vibrar língua em',
      'Segurar firmemente'
    ],
    bodyParts: [
      'Lábios', 'Pescoço', 'Orelhas', 'Peito', 'Mamilos', 'Costas', 'Barriga', 'Coxas', 
      'Parte interna das coxas', 'Bumbum', 'Genitais', 'Pés', 'Mãos', 'Ombros', 'Pulsos',
      'Parte de trás do pescoço', 'Atrás das orelhas', 'Lombar', 'Nuca', 'Lateral do pescoço',
      'Clavícula', 'Interior do cotovelo', 'Parte de trás dos joelhos', 'Interior dos pulsos',
      'Entre as omoplatas', 'Curva das costas', 'Quadris', 'Interior dos braços',
      'Parte superior do peito', 'Linha da mandíbula', 'Parte de trás das coxas', 'Laterais do torso',
      'Parte superior dos braços', 'Laterais do pescoço', 'Atrás dos joelhos'
    ],
    labels: {
      action: 'Ação',
      bodyPart: 'Parte do Corpo',
      rollButton: 'Rolar Dado',
      languageSelector: 'Idioma'
    }
  }
};