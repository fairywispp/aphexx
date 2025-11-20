import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Search, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import aphexLogo from "/aphex_logo.png";

export function Header() {
  const [isDark, setIsDark] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dining Halls", path: "/dining-halls" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={aphexLogo} alt="Aphex Logo" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold gradient-brand">
              Aphex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {!isHome && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="rounded-full"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowMenu(!showMenu)}
              className="rounded-full md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="border-t border-border bg-background md:hidden">
            <nav className="container flex flex-col px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setShowMenu(false)}
                  className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-accent/10 ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Search Overlay */}
      {showSearch && !isHome && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur animate-in fade-in">
          <div className="container px-4 pt-20">
            <div className="relative mx-auto max-w-2xl">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(false)}
                className="absolute -top-12 right-0 rounded-full"
              >
                <X className="h-6 w-6" />
              </Button>
              <SearchBar
                placeholder="Search for dining locations..."
                onSearch={() => setShowSearch(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
