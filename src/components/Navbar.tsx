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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#030405]/84 shadow-[0_1px_0_rgba(140,150,163,0.08)] backdrop-blur-xl">
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
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-haspopup={"children" in item ? "menu" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-[#A7B0BE] transition hover:bg-white/[0.045] hover:text-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/60",
                    isActive &&
                      "bg-[#1D6FFF]/10 text-[#F4F7FA] shadow-[inset_0_-1px_0_rgba(29,111,255,0.55)]"
                  )}
                >
                  {item.label}
                </Link>
                {"children" in item ? (
                  <div className="invisible absolute left-0 top-full z-50 mt-3 min-w-72 border border-white/10 bg-[#080A0D]/96 p-2 opacity-0 shadow-[0_24px_90px_rgba(0,0,0,0.38)] transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    {item.children.map((child) => {
                      const childActive = pathname === child.href;

                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          aria-current={childActive ? "page" : undefined}
                          className={cn(
                            "block rounded-md px-3 py-2.5 text-sm font-medium text-[#A7B0BE] transition hover:bg-white/[0.05] hover:text-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/60",
                            childActive && "bg-[#1D6FFF]/10 text-[#F4F7FA]"
                          )}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-4 py-2 text-sm font-semibold text-white shadow-[0_0_26px_rgba(29,111,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(29,111,255,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030405]"
          >
            Discuss Your Operation
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.045] text-[#F4F7FA] transition hover:border-[#1D6FFF]/40 hover:bg-white/[0.075] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/60 lg:hidden"
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
          className="border-t border-white/10 bg-[#030405]/96 px-5 py-4 shadow-2xl lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <div key={item.href} className="grid gap-1">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-3 py-3 text-sm font-medium text-[#A7B0BE] transition hover:bg-white/[0.045] hover:text-[#F4F7FA]",
                      isActive && "bg-[#1D6FFF]/10 text-[#F4F7FA]"
                    )}
                  >
                    {item.label}
                  </Link>
                  {"children" in item ? (
                    <div className="ml-3 grid border-l border-white/10 pl-3">
                      {item.children.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            aria-current={childActive ? "page" : undefined}
                            className={cn(
                              "rounded-md px-3 py-2 text-sm text-[#8C96A3] transition hover:bg-white/[0.045] hover:text-[#F4F7FA]",
                              childActive && "bg-[#1D6FFF]/10 text-[#F4F7FA]"
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-md border border-[#1D6FFF]/45 bg-gradient-to-b from-[#1D6FFF] to-[#174FC2] px-4 py-3 text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(29,111,255,0.22)]"
            >
              Discuss Your Operation
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
