"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "@/components/shared/logo";
import { pageContainerClass } from "@/components/shared/page-container";
import { navigation } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type HomeSection = "home" | "programs" | null;

const NAV_OFFSET = 120;

function getHomeSectionFromScroll(): HomeSection {
  const programs = document.getElementById("programs");
  const top = document.getElementById("top");

  if (programs) {
    const programsTop = programs.getBoundingClientRect().top;
    if (programsTop <= NAV_OFFSET + 80) {
      return "programs";
    }
  }

  if (top) {
    const heroBottom = top.getBoundingClientRect().bottom;
    if (heroBottom > NAV_OFFSET + 40) {
      return "home";
    }
  }

  return null;
}

function scrollToSection(id: string) {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/#top");
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `/#${id}`);
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [homeSection, setHomeSection] = useState<HomeSection>("home");
  const pathname = usePathname();
  const onHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!onHomePage) {
      setHomeSection("home");
      return;
    }

    const syncHomeSection = () => {
      setHomeSection(getHomeSectionFromScroll());
    };

    syncHomeSection();

    window.addEventListener("hashchange", syncHomeSection);
    window.addEventListener("scroll", syncHomeSection, { passive: true });
    return () => {
      window.removeEventListener("hashchange", syncHomeSection);
      window.removeEventListener("scroll", syncHomeSection);
    };
  }, [onHomePage, pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleNavClick = () => setIsOpen(false);

  const handleNavItemClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    handleNavClick();

    if (!href.startsWith("/#") || pathname !== "/") {
      return;
    }

    event.preventDefault();
    const id = href.slice(2);
    scrollToSection(id);

    if (id === "top") {
      setHomeSection("home");
    } else if (id === "programs") {
      setHomeSection("programs");
    }
  };

  const isActive = (href: string) => {
    if (href === "/" || href === "/#top") {
      return onHomePage && homeSection === "home";
    }
    if (href === "/#programs") {
      return onHomePage && homeSection === "programs";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
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
      <nav
        className={cn(
          pageContainerClass,
          "flex items-center justify-between gap-3 py-2 pt-[max(0.5rem,env(safe-area-inset-top))]"
        )}
      >
        <NavbarLogo scrolled={!showHeroStyle} />

        <div className="hidden items-center gap-0.5 xl:flex xl:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavItemClick(event, item.href)}
              className={cn(
                "rounded-full px-3 py-2 text-sm transition-colors xl:px-3.5 xl:py-2.5 xl:text-base",
                showHeroStyle
                  ? cn(
                      "font-sans font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.55),0_2px_10px_rgba(0,0,0,0.35)]",
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
            className="ml-2 text-sm xl:ml-3 xl:text-base"
            asChild
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "shrink-0 rounded-lg p-2 xl:hidden",
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
            className="overflow-hidden border-t border-border bg-white xl:hidden"
          >
            <div className={cn(pageContainerClass, "space-y-1 py-4")}>
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavItemClick(event, item.href)}
                  className={cn(
                    "block rounded-xl py-3 text-base font-bold transition-colors",
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
