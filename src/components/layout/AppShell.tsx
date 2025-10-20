import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNavigation } from "./BottomNavigation";

interface AppShellProps {
  children: ReactNode;
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>
      
      <BottomNavigation />
    </div>
  );
};
