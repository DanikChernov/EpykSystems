"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ImageOff,
  X
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode
} from "react";

import type { Screenshot } from "@/lib/site";
import { cn } from "@/lib/utils";

type PortfolioCaseStudyCardProps = {
  title: string;
  summary: string;
  screenshots: Screenshot[];
  cardIcon: ReactNode;
  modalIcon: ReactNode;
  cardMaturity: ReactNode;
  modalMaturity: ReactNode;
  cardMeta: ReactNode;
  modalDetails: ReactNode;
  previewTags?: ReactNode;
};

const cardIntervalMs = 4200;
const hoverIntervalMs = 1700;

const focusableSelector =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function PortfolioCaseStudyCard({
  title,
  summary,
  screenshots,
  cardIcon,
  modalIcon,
  cardMaturity,
  modalMaturity,
  cardMeta,
  modalDetails,
  previewTags
}: PortfolioCaseStudyCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCardActive, setIsCardActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogId = useId();
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLElement>(null);

  const count = screenshots.length;
  const hasScreenshots = count > 0;
  const activeIndex = hasScreenshots ? Math.min(currentIndex, count - 1) : 0;
  const activeScreenshot = screenshots[activeIndex];

  const showPrevious = useCallback(() => {
    if (count < 2) {
      return;
    }

    setCurrentIndex((index) => (index === 0 ? count - 1 : index - 1));
  }, [count]);

  const showNext = useCallback(() => {
    if (count < 2) {
      return;
    }

    setCurrentIndex((index) => (index + 1) % count);
  }, [count]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (count < 2 || isOpen) {
      return;
    }

    const interval = window.setInterval(
      showNext,
      isCardActive ? hoverIntervalMs : cardIntervalMs
    );

    return () => window.clearInterval(interval);
  }, [count, isCardActive, isOpen, showNext]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
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
  }, [closeModal, isOpen, showNext, showPrevious]);

  return (
    <article className="h-full">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dialogId : undefined}
        aria-label={`Open ${title} case study`}
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsCardActive(true)}
        onBlur={() => setIsCardActive(false)}
        onPointerEnter={() => setIsCardActive(true)}
        onPointerLeave={() => setIsCardActive(false)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.03] text-left shadow-[0_24px_90px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-0.5 hover:border-[#1D6FFF]/35 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#030405]">
          <DeckImages
            title={title}
            screenshots={screenshots}
            activeIndex={activeIndex}
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
            imageClassName="object-cover object-top opacity-88 transition duration-500 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030405]/86 via-[#030405]/10 to-transparent" />
          <div className="absolute left-4 top-4">{cardIcon}</div>
          <div className="absolute right-4 top-4 max-w-[13rem]">{cardMaturity}</div>
          {count > 1 ? (
            <div
              className="absolute bottom-4 left-4 flex gap-1.5"
              aria-hidden="true"
            >
              {screenshots.map((screenshot, index) => (
                <span
                  key={screenshot.src}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-6 bg-[#F3C743]"
                      : "w-1.5 bg-white/38"
                  )}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col p-5">
          {cardMeta}
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-[#F4F7FA]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#A7B0BE]">{summary}</p>
          {previewTags ? <div className="mt-5">{previewTags}</div> : null}
          <div className="mt-auto flex items-center justify-between gap-3 pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3] transition group-hover:text-[#F4F7FA]">
              Case study
            </span>
            <span className="flex size-9 items-center justify-center rounded-sm border border-white/10 bg-[#030405]/54 text-[#DDE3EA] transition group-hover:border-[#1D6FFF]/35 group-hover:text-white">
              <ArrowUpRight aria-hidden size={17} strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] overflow-y-auto bg-[#030405]/92 p-3 backdrop-blur-sm sm:p-6"
          onPointerDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <section
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="mx-auto my-6 flex min-h-0 w-full max-w-6xl flex-col overflow-hidden rounded-md border border-white/12 bg-[#07090D] shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
          >
            <header className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-5">
              <div className="flex min-w-0 items-start gap-3">
                <div className="mt-0.5">{modalIcon}</div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C96A3]">
                    Portfolio case study
                  </p>
                  <h2
                    id={titleId}
                    className="mt-1 text-2xl font-semibold tracking-tight text-[#F4F7FA]"
                  >
                    {title}
                  </h2>
                  <div className="mt-3">{modalMaturity}</div>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="flex size-10 shrink-0 items-center justify-center rounded-sm border border-white/10 bg-[#030405]/54 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                aria-label="Close case study"
              >
                <X aria-hidden size={19} strokeWidth={1.8} />
              </button>
            </header>

            <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(22rem,0.88fr)]">
              <div className="border-b border-white/10 bg-[#030405] lg:border-b-0 lg:border-r">
                <div className="relative aspect-video overflow-hidden">
                  <DeckImages
                    title={title}
                    screenshots={screenshots}
                    activeIndex={activeIndex}
                    sizes="(min-width: 1024px) 62vw, 100vw"
                    imageClassName="object-contain"
                  />

                  {count > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={showPrevious}
                        className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-sm border border-white/10 bg-[#030405]/74 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                        aria-label="Previous screenshot"
                      >
                        <ChevronLeft aria-hidden size={22} strokeWidth={1.8} />
                      </button>
                      <button
                        type="button"
                        onClick={showNext}
                        className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-sm border border-white/10 bg-[#030405]/74 text-[#DDE3EA] transition hover:border-[#1D6FFF]/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70"
                        aria-label="Next screenshot"
                      >
                        <ChevronRight aria-hidden size={22} strokeWidth={1.8} />
                      </button>
                    </>
                  ) : null}
                </div>

                {activeScreenshot ? (
                  <p className="border-t border-white/10 px-4 py-3 text-xs leading-5 text-[#A7B0BE]">
                    {activeScreenshot.caption}
                  </p>
                ) : null}

                {count > 1 ? (
                  <div className="flex gap-2 overflow-x-auto border-t border-white/10 p-3">
                    {screenshots.map((screenshot, index) => (
                      <button
                        key={screenshot.src}
                        type="button"
                        onClick={() => setCurrentIndex(index)}
                        aria-current={
                          index === activeIndex ? "true" : undefined
                        }
                        aria-label={`View screenshot ${index + 1}`}
                        className="relative h-16 w-28 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-[#030405]/54 transition hover:border-[#1D6FFF]/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6FFF]/70 aria-current:border-[#F3C743]/60"
                      >
                        <Image
                          src={screenshot.src}
                          alt=""
                          fill
                          sizes="7rem"
                          loading="lazy"
                          className="object-cover object-top"
                        />
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="max-h-[72vh] overflow-y-auto p-5 sm:p-6">
                {modalDetails}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </article>
  );
}

type DeckImagesProps = {
  title: string;
  screenshots: Screenshot[];
  activeIndex: number;
  sizes: string;
  imageClassName?: string;
};

function DeckImages({
  title,
  screenshots,
  activeIndex,
  sizes,
  imageClassName
}: DeckImagesProps) {
  if (screenshots.length === 0) {
    return (
      <div className="flex h-full min-h-full items-center justify-center bg-[radial-gradient(circle_at_35%_20%,rgba(29,111,255,0.16),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.015))] text-[#8C96A3]">
        <ImageOff aria-hidden size={22} strokeWidth={1.7} />
      </div>
    );
  }

  return (
    <div
      className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {screenshots.map((screenshot) => (
        <div key={screenshot.src} className="relative h-full min-w-full">
          <Image
            src={screenshot.src}
            alt={screenshot.alt || `${title} screenshot`}
            fill
            sizes={sizes}
            loading="lazy"
            className={cn("h-full w-full", imageClassName)}
          />
        </div>
      ))}
    </div>
  );
}
