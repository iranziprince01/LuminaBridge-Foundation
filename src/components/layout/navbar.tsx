"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "@/components/shared/logo";
import { navigation } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const showHeroStyle = !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        showHeroStyle
          ? "bg-primary/25 backdrop-blur-xl"
          : "bg-white/90 shadow-sm backdrop-blur-lg"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <NavbarLogo scrolled={!showHeroStyle} />

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3.5 py-2.5 text-base transition-colors",
                showHeroStyle
                  ? cn(
                      "font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55),0_2px_10px_rgba(0,0,0,0.35)]",
                      isActive(item.href)
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                    )
                  : cn(
                      "font-bold",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant={showHeroStyle ? "white" : "default"}
            size="default"
            className="ml-3 text-base"
            asChild
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "rounded-lg p-2 lg:hidden",
            showHeroStyle
              ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
              : "text-foreground"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-bold transition-colors",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-2 w-full text-base" asChild>
                <Link href="/donate" onClick={handleNavClick}>
                  Donate
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
