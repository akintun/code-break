import { create } from 'zustand';
import { GameState, Difficulty, DIFFICULTY_SETTINGS, GameFeedback, GameGuess } from '@/types/game';

interface GameActions {
  startNewGame: (difficulty: Difficulty) => void;
  addNumberToGuess: (num: number) => void;
  removeLastNumber: () => void;
  submitGuess: () => boolean; // Returns true if game is over
  updateGameState: (updates: Partial<GameState>) => void;
  resetGame: () => void;
}

const generateSecretCode = (length: number, allowDuplicates: boolean): number[] => {
  const code: number[] = [];
  while (code.length < length) {
    const num = Math.floor(Math.random() * 10);
    if (allowDuplicates || !code.includes(num)) {
      code.push(num);
    }
  }
  return code;
};

const calculateFeedback = (guess: readonly number[], secret: readonly number[]): GameFeedback => {
    let correct = 0;
    let partial = 0;
    const secretCopy = [...secret];
    const guessCopy = [...guess];

    for (let i = 0; i < guess.length; i++) {
      if (guessCopy[i] === secretCopy[i]) {
        correct++;
        secretCopy[i] = -1;
        guessCopy[i] = -2;
      }
    }

    for (let i = 0; i < guess.length; i++) {
      if (guessCopy[i] !== -2) {
        const index = secretCopy.indexOf(guessCopy[i]);
        if (index !== -1) {
          partial++;
          secretCopy[index] = -1;
        }
      }
    }

    return { correct, partial };
};

const initialGameState: GameState = {
  secretCode: [],
  guesses: [],
  currentGuess: [],
  attemptsLeft: 0,
  maxAttempts: 0,
  difficulty: null,
  isGameOver: false,
  isWon: false,
  startTime: null,
  elapsedTime: 0,
};

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialGameState,

  startNewGame: (difficulty) => {
    const settings = DIFFICULTY_SETTINGS[difficulty];
    set({
      difficulty,
      secretCode: generateSecretCode(settings.codeLength, settings.allowDuplicates),
      maxAttempts: settings.maxAttempts,
      attemptsLeft: settings.maxAttempts,
      guesses: [],
      currentGuess: [],
      isGameOver: false,
      isWon: false,
      startTime: Date.now(),
      elapsedTime: 0,
    });
  },

  addNumberToGuess: (num) => {
    const { currentGuess, difficulty } = get();
    if (!difficulty) return;
    const { codeLength } = DIFFICULTY_SETTINGS[difficulty];

    if (currentGuess.length < codeLength) {
      set((state) => ({ currentGuess: [...state.currentGuess, num] }));
    }
  },

  removeLastNumber: () => {
    set((state) => ({
      currentGuess: state.currentGuess.slice(0, -1),
    }));
  },

  submitGuess: () => {
    const { currentGuess, secretCode, guesses, attemptsLeft, difficulty } = get();
    if (!difficulty || currentGuess.length !== DIFFICULTY_SETTINGS[difficulty].codeLength) {
      return false;
    }

    const feedback = calculateFeedback(currentGuess, secretCode);
    const newGuess: GameGuess = { guess: currentGuess, feedback };
    const isWon = feedback.correct === secretCode.length;
    const newAttemptsLeft = attemptsLeft - 1;
    const isGameOver = isWon || newAttemptsLeft === 0;

    set({
      guesses: [...guesses, newGuess],
      currentGuess: [],
      attemptsLeft: newAttemptsLeft,
      isGameOver,
      isWon,
    });

    return isGameOver;
  },
  
  updateGameState: (updates) => {
    set(updates);
  },

  resetGame: () => {
    set(initialGameState);
  },
}));
