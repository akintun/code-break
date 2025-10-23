# Architecture & Design

This document explains the architecture of ChainBreaker, including custom hooks, state management, and performance optimizations.

## Custom Hooks
- useGameState: Central game state
- useGameTimer: Timer logic
- useGameLogic: Game orchestration
- useGamePersistence: Save/load
- useAccessibility: ARIA, keyboard, screen reader

## State Management
- React state, context, and localStorage

## Performance
- Memoization, cleanup, efficient re-renders

## Architecture Diagram

```
[User]
   |
[UI Components] <-> [Custom Hooks]
   |                    |
[Game Logic] <-> [State Management]
   |                    |
[Persistence] <-> [Accessibility]
```

## API Reference: Custom Hooks

### useGameState
```ts
const {
  currentGuess,
  guesses,
  feedback,
  gameStatus,
  difficulty,
  maxGuesses,
  codeLength,
  secretCode,
  guessesRemaining,
  isGameOver,
  canSubmitGuess,
  addToGuess,
  removeFromGuess,
  clearGuess,
  submitGuess,
  startNewGame,
  score,
} = useGameState();
```

### useGameTimer
```ts
const {
  elapsedTime,
  formattedTime,
  isRunning,
  start,
  pause,
  stop,
} = useGameTimer(timeLimit, onTimeUp);
```
