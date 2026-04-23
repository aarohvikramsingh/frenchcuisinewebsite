"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, ChefHat, ArrowUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  prepTime?: string;
  servings?: string;
  difficulty?: string;
  badge?: string;
}

export default function Card({
  title,
  description,
  image,
  href = "#",
  prepTime,
  servings,
  difficulty,
  badge,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lift hover:shadow-premium-hover transition-all duration-500 border border-[#e8e4dc]"
    >
      <Link href={href} className="block">
        {/* Image Container */}
        <div className="relative h-52 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Badge */}
          {badge && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#722f37] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              {badge}
            </div>
          )}
          
          {/* Hover Arrow Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-2xl font-semibold text-[#2d3748] group-hover:text-[#722f37] transition-colors duration-300 mb-3">
            {title}
          </h3>
          <p className="text-[#6b5b5b] text-sm leading-relaxed line-clamp-2 mb-5">
            {description}
          </p>
          
          {/* Meta Info with Premium Styling */}
          {(prepTime || servings || difficulty) && (
            <div className="flex items-center gap-4 text-xs pt-4 border-t border-[#f0ebe3]">
              {prepTime && (
                <div className="flex items-center gap-1.5 text-[#6b5b5b]">
                  <Clock className="w-3.5 h-3.5 text-[#c9a962]" />
                  <span className="font-medium">{prepTime}</span>
                </div>
              )}
              {servings && (
                <div className="flex items-center gap-1.5 text-[#6b5b5b]">
                  <Users className="w-3.5 h-3.5 text-[#c9a962]" />
                  <span className="font-medium">{servings}</span>
                </div>
              )}
              {difficulty && (
                <div className="flex items-center gap-1.5 text-[#6b5b5b]">
                  <ChefHat className="w-3.5 h-3.5 text-[#c9a962]" />
                  <span className="font-medium">{difficulty}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
