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
const HERO_NAV_THRESHOLD = 72;

function isInHeroViewport(): boolean {
  const top = document.getElementById("top");
  if (!top) return false;
  return top.getBoundingClientRect().bottom > HERO_NAV_THRESHOLD;
}

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
  const [inHeroViewport, setInHeroViewport] = useState(true);
  const [homeSection, setHomeSection] = useState<HomeSection>("home");
  const pathname = usePathname();
  const onHomePage = pathname === "/";

  useEffect(() => {
    const syncNavState = () => {
      if (!onHomePage) {
        setInHeroViewport(false);
        setHomeSection("home");
        return;
      }

      setInHeroViewport(isInHeroViewport());
      setHomeSection(getHomeSectionFromScroll());
    };

    syncNavState();

    window.addEventListener("scroll", syncNavState, { passive: true });
    window.addEventListener("resize", syncNavState, { passive: true });
    window.addEventListener("hashchange", syncNavState);
    return () => {
      window.removeEventListener("scroll", syncNavState);
      window.removeEventListener("resize", syncNavState);
      window.removeEventListener("hashchange", syncNavState);
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

  const showHeroWhiteNav = onHomePage && inHeroViewport;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        showHeroWhiteNav
          ? "bg-white/95 shadow-sm backdrop-blur-sm"
          : "bg-primary shadow-sm"
      )}
    >
      <nav
        className={cn(
          pageContainerClass,
          "flex min-h-[3.5rem] items-center justify-between gap-2 py-2 pt-[max(0.5rem,env(safe-area-inset-top))] sm:min-h-[4rem] sm:gap-3 sm:py-2.5 sm:pt-[max(0.5rem,env(safe-area-inset-top))]"
        )}
      >
        <NavbarLogo scrolled={showHeroWhiteNav} />

        <div className="hidden items-center gap-0.5 lg:flex xl:gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavItemClick(event, item.href)}
              className={cn(
                "rounded-full px-2.5 py-2 text-sm transition-colors xl:px-3.5 xl:py-2.5 xl:text-base",
                showHeroWhiteNav
                  ? cn(
                      "font-bold",
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:text-primary"
                    )
                  : cn(
                      "font-sans font-semibold text-white",
                      isActive(item.href)
                        ? "bg-white/20"
                        : "hover:bg-white/10"
                    )
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant={showHeroWhiteNav ? "default" : "white"}
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
            "shrink-0 rounded-lg p-1.5 sm:p-2 lg:hidden",
            showHeroWhiteNav ? "text-foreground" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
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
