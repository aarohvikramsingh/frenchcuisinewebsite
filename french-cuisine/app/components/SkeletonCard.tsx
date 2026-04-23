"use client";

import { motion } from "framer-motion";

export default function SkeletonCard() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lift border border-[#e8e4dc]"
    >
      <div className="h-52 skeleton relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
      <div className="p-6 space-y-4">
        <div className="h-7 w-3/4 skeleton rounded-lg" />
        <div className="space-y-2">
          <div className="h-4 w-full skeleton rounded" />
          <div className="h-4 w-5/6 skeleton rounded" />
        </div>
        <div className="pt-3 border-t border-[#f0ebe3]">
          <div className="flex gap-4">
            <div className="h-3.5 w-20 skeleton rounded" />
            <div className="h-3.5 w-20 skeleton rounded" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
