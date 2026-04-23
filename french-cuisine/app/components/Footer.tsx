"use client";

import { Heart, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2d3748] to-[#722f37]/80" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#c9a962]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-[#722f37]/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
              <ChefHat className="w-6 h-6 text-[#c9a962]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-white">French Cuisine</span>
              <span className="text-[10px] text-[#c9a962] uppercase tracking-[0.2em]">{t("nav.tagline")}</span>
            </div>
            <span className="text-2xl ml-2">🇫🇷</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-sm flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            {t("footer.crafted")}{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-[#c9a962] fill-[#c9a962]" />
            </motion.span>
            {" "}{t("footer.for")}
          </motion.p>
        </div>
        
        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} French Cuisine. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-2 italic">
            &ldquo;La gastronomie est l&apos;art d&apos;utiliser la nourriture pour créer le bonheur.&rdquo;
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
