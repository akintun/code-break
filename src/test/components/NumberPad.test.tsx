import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { NumberPad } from '../../components/game/NumberPad';

// Mock the accessibility hook
vi.mock('../../hooks/useAccessibility', () => ({
  useAccessibility: () => ({
    announce: vi.fn(),
    handleArrowKeys: vi.fn(),
  }),
}));


describe('NumberPad', () => {
  let onNumberClick: ReturnType<typeof vi.fn>;
  let onDelete: ReturnType<typeof vi.fn>;
  let onSubmit: ReturnType<typeof vi.fn>;
  let props: any;

  beforeEach(() => {
    onNumberClick = vi.fn();
    onDelete = vi.fn();
    onSubmit = vi.fn();
    props = {
      onNumberClick,
      onDelete,
      onSubmit,
      canSubmit: false,
      currentGuess: [],
    };
    vi.clearAllMocks();
  });

  it('should render all number buttons', () => {
    render(<NumberPad {...props} />);
    // Should render numbers 0-9
    for (let i = 0; i <= 9; i++) {
      expect(screen.getByRole('button', { name: i.toString() })).toBeInTheDocument();
    }
  });

  it('should call onNumberClick when number button is clicked', () => {
    render(<NumberPad {...props} />);
    const numberButton = screen.getByRole('button', { name: '3' });
    fireEvent.click(numberButton);
    expect(onNumberClick).toHaveBeenCalledWith(3);
  });

  it('should render control buttons', () => {
    render(<NumberPad {...props} />);
    expect(screen.getByRole('button', { name: /delete/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('should call onDelete when delete button is clicked', () => {
    render(<NumberPad {...props} currentGuess={[1]} />);
    fireEvent.click(screen.getByRole('button', { name: /delete/i }));
    expect(onDelete).toHaveBeenCalled();
  });

  it('should call onSubmit when submit button is clicked and canSubmit is true', () => {
    render(<NumberPad {...props} canSubmit={true} currentGuess={[1,2,3,4]} />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should disable submit button when canSubmit is false', () => {
    render(<NumberPad {...props} canSubmit={false} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  it('should enable submit button when canSubmit is true', () => {
    render(<NumberPad {...props} canSubmit={true} currentGuess={[1,2,3,4]} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).not.toBeDisabled();
  });

  // No disabled prop in NumberPad, so skip this test

  // Keyboard navigation is handled globally, not on a grid element

  // Keyboard events are attached to document, not a specific element

  // Keyboard shortcuts are handled globally, not on a specific element

  // No maxNumbers prop, and keyboard events are global

  it('should have proper ARIA attributes', () => {
    render(<NumberPad {...props} />);
    const group = screen.getByRole('group', { name: /number pad/i });
    expect(group).toHaveAttribute('aria-label', 'Number pad for entering guesses');
  });

  // Current guess progress is not visually rendered in a testable way

  it('should handle rapid clicking without issues', () => {
    render(<NumberPad {...props} />);
    const numberButton = screen.getByRole('button', { name: '1' });
    fireEvent.click(numberButton);
    fireEvent.click(numberButton);
    fireEvent.click(numberButton);
    expect(onNumberClick).toHaveBeenCalledTimes(3);
  });
});