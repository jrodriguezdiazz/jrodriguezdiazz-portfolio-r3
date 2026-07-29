"use client";
import { Menu, X, Download, Languages } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { NAV_ITEMS, RESUME_LINK } from "@/lib/constants";
import { event } from "@/lib/gtag";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/locales";
import en from "@/i18n/translations/en";
import es from "@/i18n/translations/es";

export interface NavBarProps {
  locale: Locale;
}

export default function NavBar({ locale }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentDictionary = locale === "en" ? en : es;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleResumeClick = () => {
    event("resume_download", {
      event_category: "engagement",
      event_label: "navbar_resume_button",
    });
  };

  const handleNavClick = (href: string, closeMenu = false) => {
    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (closeMenu) setIsMenuOpen(false);
  };

  if (!currentDictionary) {
    return null;
  }

  const otherLocale = locale === "en" ? "es" : "en";
  const otherLocaleLabel = otherLocale === "en" ? "EN" : "ES";

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm'>
      <div className='container mx-auto px-4 flex h-16 items-center justify-between'>
        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-1'>
          {NAV_ITEMS.map(item => {
            const Icon = item.icon;
            const translationKey =
              item.labelKey as keyof typeof currentDictionary;
            const label =
              currentDictionary.navigation[
                translationKey.replace(
                  "navigation.",
                  ""
                ) as keyof typeof currentDictionary.navigation
              ];
            return (
              <button
                key={item.href}
                type='button'
                onClick={() => handleNavClick(item.href)}
                className='flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
              >
                <Icon className='h-4 w-4' />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className='flex items-center space-x-3'>
          <Link
            href={`/${otherLocale}`}
            className='hidden sm:flex items-center gap-2 rounded-lg border border-gray-300 px-2.5 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-300'
            aria-label={`Switch to ${otherLocaleLabel}`}
          >
            <Languages className='h-4 w-4' />
            <span>{otherLocaleLabel}</span>
          </Link>

          {/* Resume Button */}
          <Button
            variant='outline'
            size='sm'
            className='hidden sm:flex items-center space-x-2 bg-white/80 hover:bg-blue-50 dark:bg-gray-800/80 dark:hover:bg-blue-900/20 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md'
          >
            <Link
              onClick={handleResumeClick}
              target='_blank'
              href={RESUME_LINK}
              className='flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
            >
              <Download className='h-4 w-4' />
              <span>{currentDictionary.navigation.resume}</span>
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='md:hidden p-2'
            onClick={toggleMenu}
            aria-label={currentDictionary.navigation.toggleMenu}
          >
            {isMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-lg'>
          <nav className='container mx-auto px-4 py-4 space-y-2'>
            {NAV_ITEMS.map(item => {
              const Icon = item.icon;
              const translationKey =
                item.labelKey as keyof typeof currentDictionary;
              const label =
                currentDictionary.navigation[
                  translationKey.replace(
                    "navigation.",
                    ""
                  ) as keyof typeof currentDictionary.navigation
                ];
              return (
                <button
                  key={item.href}
                  type='button'
                  onClick={() => handleNavClick(item.href, true)}
                  className='flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
                >
                  <Icon className='h-4 w-4' />
                  <span>{label}</span>
                </button>
              );
            })}

            {/* Mobile Language Switcher */}
            <Link
              href={`/${otherLocale}`}
              onClick={() => setIsMenuOpen(false)}
              className='flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
            >
              <Languages className='h-4 w-4' />
              <span>{otherLocaleLabel}</span>
            </Link>

            {/* Mobile Resume Button */}
            <div className='pt-2 border-t border-gray-200 dark:border-gray-700'>
              <Link
                target='_blank'
                href={RESUME_LINK}
                onClick={() => {
                  setIsMenuOpen(false);
                  handleResumeClick();
                }}
                className='flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
              >
                <Download className='h-4 w-4' />
                <span>{currentDictionary.navigation.downloadResume}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
