## Crack the Code with ChainBreaker: A Modern Twist on a Classic Game

**Challenge your intellect and deduction skills with ChainBreaker, a web-based, Mastermind-style code-breaking game.** Your mission is to decipher a secret code within a limited number of guesses and time. Featuring a sleek, contemporary design and adjustable difficulty levels, ChainBreaker provides a stimulating experience for players of all abilities.
Built on a robust and modern technology stack, this project showcases a responsive, mobile-first design that ensures seamless gameplay on any device. It is engineered with a strong emphasis on accessibility, thorough error handling, and persistent game state, allowing you to pick up right where you left off. The codebase is a testament to TypeScript best practices, complete with extensive testing for reliability.

### Key Features

#### Immersive Gameplay

*   **Classic Code-Breaking Fun**: Employ logic and deduction to unravel the hidden code.
*   **Variable Difficulty Levels**:
    *   **Easy**: 3-digit code from numbers 1-6, with 12 attempts.
    *   **Medium**: 4-digit code from numbers 1-6, with 10 attempts.
    *   **Hard**: 5-digit code from numbers 1-8, with 8 attempts.
*   **Intuitive Feedback System**: Receive visual cues indicating correct numbers and positions with each guess.
*   **Integrated Timer**: Keep track of your solving speed with a persistent timer.

#### Enhanced User Experience

*   **Universal Accessibility**: Designed with ARIA labels, keyboard navigation, and screen reader support for all users.
*   **Responsive by Design**: Enjoy an optimized experience with touch-friendly targets and layouts on any device.
*   **Persistent Game State**: Your game is automatically saved via localStorage, so you'll never lose your progress.
*   **Robust Error Handling**: Encounter user-friendly error messages and graceful fallbacks.
*   **Track Your Progress**: Review your game history and recent activities.

#### Advanced Technical Specifications

*   **TypeScript Strict Mode**: Benefit from full type safety and enhanced code intelligence.
*   **Optimized for Performance**: Experience smooth gameplay with memoized computations and efficient rendering.
*   **Leak-Proof Memory Management**: Ensures stability through proper cleanup and resource management.
*   **Comprehensive Testing**: A full suite of unit, component, and integration tests guarantees reliability.
*   **Modern Development Environment**: Utilizes ESLint, Prettier, and Vite for an exceptional developer experience.

### Technology Stack

ChainBreaker is crafted with a cutting-edge front-end stack that prioritizes performance, accessibility, and a superior developer experience.

#### Core Technologies

*   **Framework**: React 19.1.1, utilizing a hooks-based architecture.
*   **Build Tool**: Vite 5.4.19 with the SWC plugin for lightning-fast compilation.
*   **Language**: TypeScript 5.8.3, with strict mode enabled for code quality.
*   **Styling**: Tailwind CSS 3.4.17, featuring custom responsive utilities for a polished look.

#### UI and Component Libraries

*   **Component Library**: shadcn-ui, built upon Radix UI primitives for robust and accessible components.
*   **Routing**: React Router DOM for seamless client-side navigation.
*   **Icons**: Lucide React for a consistent and clean iconography.
*   **Animations**: Smooth and performant animations powered by CSS transitions and Tailwind animations.

#### Development and Testing

*   **Testing Framework**: Vitest 1.4.0, complete with coverage reporting.
*   **Testing Utilities**: Testing Library for comprehensive component testing.
*   **Linting**: ESLint 9.17.0, fully integrated with TypeScript for code consistency.
*   **Package Manager**: Compatible with npm, pnpm, and bun.

#### State and Data Management

*   **State Management**: Efficient state handling with custom hooks and React's native state management.
*   **Data Persistence**: Advanced localStorage integration with data compression and quota monitoring.
*   **Performance**: Optimized re-renders through the strategic use of `useMemo` and `useCallback`.
*   **Error Handling**: A global error boundary provides graceful fallbacks and a stable user experience.

### Getting Started

To get a local copy of ChainBreaker up and running, follow these simple steps.

#### Prerequisites

Ensure you have Node.js (version 18.x or later recommended) and npm installed on your machine.

#### Installation

1.  **Clone the repository:**
    ```sh
    git clone <YOUR_GIT_URL>
    ```2.  **Navigate to the project directory:**
    ```sh
    cd akintun-code-breaker-layout
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

After installing the dependencies, you can start the development server:

```sh
npm run dev
```

This command will launch the Vite development server. You can then access the application at `http://localhost:5173`.

### Running Tests

To execute the test suite, run:

```sh
npm run test
```

For a detailed test coverage report, use:

```sh
npm run test:coverage
```

For an interactive testing experience with a user interface, run:

```sh
npm run test:ui
```

### Available Scripts

The following scripts are available in the project directory:

#### Development

*   `npm run dev`: Starts the application in development mode.
*   `npm run build`: Creates a production-ready build of the application.
*   `npm run build:dev`: Creates a development build for debugging purposes.
*   `npm run preview`: Serves the production build locally for preview.
*   `npm run lint`: Analyzes the code for quality and potential errors.

#### Testing

*   `npm run test`: Executes all tests using Vitest.
*   `npm run test:ui`: Launches the Vitest UI for interactive testing.
*   `npm run test:coverage`: Generates a comprehensive test coverage report.
*   `npm run test:watch`: Runs tests in watch mode, ideal for development.

### Project Architecture

The project is organized into a clean and scalable structure that promotes a clear separation of concerns. A detailed breakdown of the project's file structure is available in the original documentation.

### Architectural and Design Principles

#### Custom Hooks for Scalability

The application's logic is modularized through custom hooks, ensuring a clean separation of concerns:

*   **`useGameState`**: Manages the core game state with memoized computations for efficiency.
*   **`useGameTimer`**: Handles all timing-related functionality with proper memory management.
*   **`useGameLogic`**: Orchestrates the overall game flow by integrating various game-related hooks.
*   **`useGamePersistence`**: Manages the saving and loading of the game state with data compression.
*   **`useAccessibility`**: Provides a suite of features to ensure the game is accessible to all players.

#### A Focus on Performance

*   **Memoization**: Strategic use of `useMemo` and `useCallback` to optimize expensive calculations.
*   **Efficient Rendering**: Minimized state updates and a well-structured component hierarchy lead to faster re-renders.
*   **Memory Management**: Proper cleanup of intervals, event listeners, and side effects to prevent memory leaks.
*   **Bundle Optimization**: Vite's tree-shaking and code-splitting capabilities ensure an optimized bundle size.

#### Commitment to Accessibility

*   **ARIA Support**: Comprehensive use of ARIA labels, roles, and live regions for screen reader compatibility.
*   **Keyboard Navigation**: Full keyboard accessibility, including arrow key navigation.
*   **Screen Reader Announcements**: Important game state changes and feedback are announced to screen readers.
*   **Focus Management**: Intelligent focus trapping and restoration for a seamless navigation experience.
*   **Optimized Touch Targets**: Minimum 44px touch targets for an improved experience on mobile devices.

#### Robust Error Handling

*   **Global Error Boundary**: Catches and gracefully handles React component errors.
*   **User-Friendly Fallbacks**: Provides clear error messages and recovery options.
*   **Structured Error Logging**: Facilitates easier debugging through structured error reporting.
*   **Input Validation**: Comprehensive validation of user input with helpful and immediate feedback.

### Recent Enhancements

The project has undergone several phases of improvement to enhance its foundation, performance, user experience, and reliability. These phases have focused on developing custom hooks, refactoring components, enforcing strict TypeScript, optimizing performance, overhauling the timer system, implementing advanced game state persistence, ensuring full accessibility compliance, creating a mobile-first responsive design, and establishing a comprehensive testing infrastructure.

### Development Guidelines

#### Code Quality Standards

*   **TypeScript Strict**: All code is required to pass strict TypeScript checks.
*   **ESLint Enforcement**: Adherence to consistent code style and best practices is enforced.
*   **Comprehensive Testing**: All components and custom hooks must be accompanied by thorough tests.

#### Accessibility Commitment

*   **WCAG 2.1 AA Compliance**: The target accessibility standard for all features.
*   **Keyboard Accessibility**: All interactive elements must be fully operable via the keyboard.
*   **Screen Reader Compatibility**: All important state changes must be clearly communicated to screen readers.
*   **Sufficient Color Contrast**: Adherence to color contrast ratios for readability.

#### Performance Goals

*   **Bundle Size**: The initial bundle size is targeted to be under 500KB.
*   **First Paint**: Aiming for a first paint of under 1.5 seconds on a 3G connection.
*   **Memory Usage**: Proactive prevention of memory leaks during extended gameplay sessions.
*   **Responsiveness**: Maintaining a consistent 60fps during all user interactions.

### How to Contribute

1.  **Fork** the repository.
2.  **Create** a new feature branch (`git checkout -b feature/your-amazing-feature`).
3.  **Add** tests for any new functionality.
4.  **Run** the entire test suite (`npm run test`).
5.  **Commit** your changes (`git commit -m 'Add your amazing feature'`).
6.  **Push** your changes to the branch (`git push origin feature/your-amazing-feature`).
7.  **Open** a Pull Request.

### License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

