import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wallet, Moon, Sun } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleWalletConnect = () => {
    // Mock wallet connection - will be replaced with actual Web3 integration
    if (walletAddress) {
      setWalletAddress(null);
    } else {
      setWalletAddress("0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb");
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-lg glow-primary">
              CB
            </div>
            <span className="hidden sm:inline text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ChainBreaker
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <Button
            onClick={handleWalletConnect}
            variant={walletAddress ? "secondary" : "default"}
            className={`${walletAddress ? "" : "gradient-primary glow-primary"} px-3 sm:px-4`}
          >
            <Wallet className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">
              {walletAddress ? formatAddress(walletAddress) : "Connect Wallet"}
            </span>
            <span className="sm:hidden">
              {walletAddress ? formatAddress(walletAddress) : "Connect"}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
