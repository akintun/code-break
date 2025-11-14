import { useEffect, useCallback } from "react";
import { useGameStore } from "@/store/gameStore";
import { GameState } from "@/types/game";
import { storageManager } from "@/lib/storage-utils";

const STORAGE_KEY = "chainbreaker-game-state";
// ... (rest of the file remains the same, but we get state via subscription)

export const useGamePersistence = () => {
  const { updateGameState } = useGameStore();

  const saveGameState = useCallback((state: GameState) => {
    if (state.difficulty && !state.isGameOver) {
      // ... (logic from original file)
      storageManager.setItem(STORAGE_KEY, stateToSave);
    }
  }, []);

  const loadGameState = useCallback((): boolean => {
    // ... (logic from original file)
    const savedState = storageManager.getItem<StoredGameState | null>(STORAGE_KEY, null);
    // ...
    updateGameState(gameState);
    return true;
  }, [updateGameState]);

  const clearSavedState = useCallback(() => {
    storageManager.removeItem(STORAGE_KEY);
  }, []);
  
  // Subscribe to the store to save state on changes
  useEffect(() => {
    const unsubscribe = useGameStore.subscribe(
      (state) => {
        saveGameState(state);
      }
    );
    return unsubscribe;
  }, [saveGameState]);

  // Clear saved state when the game ends
  useEffect(() => {
    const unsubscribe = useGameStore.subscribe(
      (state) => {
        if (state.isGameOver) {
          clearSavedState();
        }
      }
    );
    return unsubscribe;
  }, [clearSavedState]);


  return { loadGameState, clearSavedState };
};
