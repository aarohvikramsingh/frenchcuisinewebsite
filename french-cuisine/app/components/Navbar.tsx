"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChefHat, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/recipes", label: t("nav.recipes") },
    { href: "/cheese-wine", label: t("nav.cheeseWine") },
    { href: "/regions", label: t("nav.regions") },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#722f37]/20 rounded-full blur-lg" />
              <ChefHat className="w-9 h-9 text-[#722f37] relative z-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-[#2d3748] group-hover:text-[#722f37] transition-colors duration-300">
                French Cuisine
              </span>
              <span className="text-[10px] text-[#c9a962] uppercase tracking-[0.2em] font-medium">
                {t("nav.tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    pathname === link.href
                      ? "bg-[#722f37] text-white shadow-lg shadow-[#722f37]/25"
                      : "text-[#4a5568] hover:text-[#722f37]"
                  }`}
                >
                  {pathname === link.href && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-[#722f37] rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </motion.div>
            ))}

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 ml-2 rounded-full bg-gradient-to-r from-[#722f37] to-[#8b3a44] text-white text-sm font-medium shadow-lg shadow-[#722f37]/25 hover:shadow-xl hover:shadow-[#722f37]/30 transition-all duration-300"
            >
              <Languages className="w-4 h-4" />
              <span className="uppercase tracking-wider">{language}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-full bg-[#f5f0e6] text-[#722f37] hover:bg-[#722f37] hover:text-white transition-all duration-300"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden glass border-t border-white/40 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? "bg-[#722f37] text-white shadow-lg"
                        : "text-[#4a5568] hover:bg-[#f5f0e6] hover:text-[#722f37]"
                    }`}
                  >
                    {pathname === link.href && (
                      <motion.div
                        layoutId="mobile-active"
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    )}
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Language Toggle */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4 border-t border-[#e5e0d5] mt-4"
              >
                <button
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-3 w-full px-5 py-4 rounded-xl text-base font-medium bg-gradient-to-r from-[#722f37] to-[#8b3a44] text-white shadow-lg"
                >
                  <Languages className="w-5 h-5" />
                  <span>{language === "en" ? "Français" : "English"}</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
