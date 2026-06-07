"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navItems } from "@/lib/brand";
import { cn } from "@/lib/utils";

import { Logo } from "./Logo";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070B]/82 shadow-[0_1px_0_rgba(45,124,255,0.08)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="hidden sm:block">
          <Logo variant="full" />
        </div>
        <div className="sm:hidden">
          <Logo variant="mark" />
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-[#A7B0BE] transition hover:bg-white/[0.045] hover:text-[#F4F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/60",
                  isActive &&
                    "bg-[#2D7CFF]/10 text-[#F4F7FB] shadow-[inset_0_-1px_0_rgba(45,124,255,0.55)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_26px_rgba(45,124,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(45,124,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
          >
            Request Consultation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.045] text-[#F4F7FB] transition hover:border-[#2D7CFF]/40 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D7CFF]/60 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#05070B]/96 px-5 py-4 shadow-2xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-md px-3 py-3 text-sm font-medium text-[#A7B0BE] transition hover:bg-white/[0.045] hover:text-[#F4F7FB]",
                    isActive && "bg-[#2D7CFF]/10 text-[#F4F7FB]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md border border-[#3B82F6]/45 bg-gradient-to-b from-[#2D7CFF] to-[#1E6BFF] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(45,124,255,0.22)]"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
