"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

import type { Screenshot } from "@/lib/site";

type PortfolioGalleryProps = {
  title: string;
  screenshots: Screenshot[];
};

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function PortfolioGallery({ title, screenshots }: PortfolioGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  const count = screenshots.length;
  const activeIndex = count > 0 ? Math.min(currentIndex, count - 1) : 0;
  const activeScreenshot = screenshots[activeIndex];
  const previewScreenshot = screenshots[0];

  const closeGallery = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const showPrevious = useCallback(() => {
    setCurrentIndex((index) => (index === 0 ? count - 1 : index - 1));
  }, [count]);

  const showNext = useCallback(() => {
    setCurrentIndex((index) => (index + 1) % count);
  }, [count]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (count > 1 && event.key === "ArrowLeft") {
        showPrevious();
      }

      if (count > 1 && event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "Tab") {
        const focusableElements = Array.from(
          dialogRef.current?.querySelectorAll<HTMLElement>(
            focusableSelector
          ) ?? []
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
          return;
        }

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeGallery, count, isOpen, showNext, showPrevious]);

  if (count === 0 || !activeScreenshot || !previewScreenshot) {
    return null;
  }

  return (
    <div className="mt-7 border-t border-white/10 pt-5">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        onClick={() => {
          setCurrentIndex(0);
          setIsOpen(true);
        }}
        className="group w-full overflow-hidden border border-white/10 bg-[#030405]/54 text-left transition hover:border-[#1D6FFF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
      >
        <span className="relative block aspect-video overflow-hidden bg-[#030405]">
          <Image
            src={previewScreenshot.src}
            alt=""
            width={previewScreenshot.width ?? 1920}
            height={previewScreenshot.height ?? 1080}
            sizes="(min-width: 1024px) 42vw, 100vw"
            loading="lazy"
            className="h-full w-full object-cover object-top opacity-85 transition duration-300 group-hover:scale-[1.01] group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-[#030405]/78 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-sm border border-white/12 bg-[#030405]/78 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F4F7FA]">
            <Images aria-hidden size={15} strokeWidth={1.8} />
            View gallery
          </span>
        </span>
        <span className="flex items-center justify-between gap-4 border-t border-white/10 px-4 py-3">
          <span>
            <span className="block text-sm font-semibold text-[#DDE3EA]">
              Screenshot gallery
            </span>
            <span className="mt-1 block text-xs leading-5 text-[#A7B0BE]">
              {count} approved {count === 1 ? "image" : "images"}
            </span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3] transition group-hover:text-[#F4F7FA]">
            Open
          </span>
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030405]/92 p-3 backdrop-blur-sm sm:p-6"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery();
            }
          }}
        >
          <section
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-label={`${title} screenshot gallery`}
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden border border-white/12 bg-[#07090D] shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
          >
            <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[#F4F7FA]">
                  {title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8C96A3]">
                  {activeIndex + 1} of {count}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeGallery}
                className="flex size-10 shrink-0 items-center justify-center border border-white/10 bg-[#030405]/54 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                aria-label="Close gallery"
              >
                <X aria-hidden size={19} strokeWidth={1.8} />
              </button>
            </header>

            <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="relative flex min-h-[260px] items-center justify-center bg-[#030405] sm:min-h-[420px]">
                <Image
                  key={activeScreenshot.src}
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  width={activeScreenshot.width ?? 1920}
                  height={activeScreenshot.height ?? 1080}
                  sizes="(min-width: 1024px) 72vw, 100vw"
                  className="max-h-[68vh] w-auto max-w-full object-contain"
                />

                {count > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={showPrevious}
                      className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-white/10 bg-[#030405]/74 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft aria-hidden size={22} strokeWidth={1.8} />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center border border-white/10 bg-[#030405]/74 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight aria-hidden size={22} strokeWidth={1.8} />
                    </button>
                  </>
                ) : null}
              </div>

              <aside className="flex min-h-0 flex-col border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3]">
                    Caption
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#DDE3EA]">
                    {activeScreenshot.caption}
                  </p>
                </div>

                <div className="grid max-h-48 gap-2 overflow-y-auto p-3 sm:grid-cols-3 lg:max-h-none lg:grid-cols-1">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={screenshot.src}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-current={index === activeIndex ? "true" : undefined}
                      aria-label={`View screenshot ${index + 1}`}
                      className="overflow-hidden border border-white/10 bg-[#030405]/54 transition hover:border-[#1D6FFF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 aria-current:border-[#F3C743]/60"
                    >
                      <Image
                        src={screenshot.src}
                        alt=""
                        width={screenshot.width ?? 1920}
                        height={screenshot.height ?? 1080}
                        sizes="12rem"
                        loading="lazy"
                        className="aspect-video h-auto w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}
