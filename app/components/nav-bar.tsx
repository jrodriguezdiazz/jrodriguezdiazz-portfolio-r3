"use client";
import {
  Menu,
  X,
  Download,
  User,
  Briefcase,
  Code2,
  Layers,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { event } from "@/lib/gtag";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About Me", icon: User },
    { href: "#work-experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: Code2 },
    { href: "#tech-stack", label: "Tech Stack", icon: Layers },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleResumeClick = () => {
    event("resume_download", {
      event_category: "engagement",
      event_label: "navbar_resume_button",
    });
  };

  return (
    <header className='sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60 shadow-sm'>
      <div className='container mx-auto px-4 flex h-16 items-center justify-between'>
        {/* Logo/Brand */}
        <div className='flex items-center'>
          <Link href='/#' className='flex items-center space-x-3 group'>
            <div className='w-8 h-8 rounded-full flex items-center justify-center'>
              <span className='font-bold text-sm'>JRD</span>
            </div>
            <span className='hidden font-bold text-lg sm:inline-block bg-clip-text transition-all duration-300'>
              Jorge Rodríguez Díaz
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-1'>
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className='flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
              >
                <Icon className='h-4 w-4' />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side Actions */}
        <div className='flex items-center space-x-3'>
          {/* Resume Button */}
          <Button
            variant='outline'
            size='sm'
            className='hidden sm:flex items-center space-x-2 bg-white/80 hover:bg-blue-50 dark:bg-gray-800/80 dark:hover:bg-blue-900/20 border-gray-300 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-md'
          >
            <Link
              onClick={handleResumeClick}
              target='_blank'
              href='https://drive.google.com/file/d/15HpCi03e9owKfG_lAFlZ4hfKb6sdzkOb/view?usp=sharing'
              className='flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
            >
              <Download className='h-4 w-4' />
              <span>Resume</span>
            </Link>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='sm'
            className='md:hidden p-2'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? (
              <X className='h-5 w-5' />
            ) : (
              <Menu className='h-5 w-5' />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-lg'>
          <nav className='container mx-auto px-4 py-4 space-y-2'>
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
                >
                  <Icon className='h-4 w-4' />
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Resume Button */}
            <div className='pt-2 border-t border-gray-200 dark:border-gray-700'>
              <Link
                target='_blank'
                href='https://drive.google.com/file/d/15HpCi03e9owKfG_lAFlZ4hfKb6sdzkOb/view?usp=sharing'
                onClick={() => {
                  setIsMenuOpen(false);
                  handleResumeClick();
                }}
                className='flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
              >
                <Download className='h-4 w-4' />
                <span>Download Resume</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
