import { useCallback, useEffect } from "react";
import { useGameStore } from "@/store/gameStore";
import { useGameTimer } from "./useGameTimer";
import { useGamePersistence } from "./useGamePersistence";
import { Difficulty, DIFFICULTY_SETTINGS } from "@/types/game";

export const useGameLogic = () => {
  // Select state and actions from the Zustand store
  const gameState = useGameStore((state) => state);
  const { 
    startNewGame, 
    addNumberToGuess, 
    removeLastNumber, 
    submitGuess,
    updateGameState,
    resetGame
  } = useGameStore();
  
  const { loadGameState, clearSavedState } = useGamePersistence();

  const handleTimeUp = useCallback(() => {
    updateGameState({ isGameOver: true, isWon: false });
  }, [updateGameState]);

  const updateElapsedTime = useCallback((time: number) => {
    updateGameState({ elapsedTime: time });
  }, [updateGameState]);
  
  const timer = useGameTimer({
    gameState,
    onTimeUp: handleTimeUp,
    updateElapsedTime,
  });

  // Derived state (selectors)
  const codeLength = gameState.difficulty ? DIFFICULTY_SETTINGS[gameState.difficulty].codeLength : 0;
  const canSubmitGuess = gameState.currentGuess.length === codeLength && !gameState.isGameOver;
  const isGameActive = !gameState.isGameOver && gameState.difficulty !== null;

  const handlePlayAgain = useCallback((difficulty: Difficulty) => {
    clearSavedState();
    startNewGame(difficulty);
  }, [startNewGame, clearSavedState]);

  const handleResetGame = useCallback(() => {
    clearSavedState();
    resetGame();
    timer.clearTimer();
  }, [resetGame, timer, clearSavedState]);

  useEffect(() => {
    const wasLoaded = loadGameState();
    if (wasLoaded) {
      console.log("Restored saved game state");
    }
  }, [loadGameState]);

  return {
    gameState,
    handleNumberClick: addNumberToGuess,
    handleDelete: removeLastNumber,
    handleSubmit: submitGuess,
    handlePlayAgain,
    handleResetGame,
    startNewGame,
    formatTime: timer.formatTime,
    getRemainingTime: timer.getRemainingTime,
    canSubmitGuess,
    isGameActive,
    clearSavedState,
    codeLength,
  };
};
