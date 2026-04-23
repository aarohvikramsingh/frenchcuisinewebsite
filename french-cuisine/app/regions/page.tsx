"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Utensils, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { regions } from "../data/recipes";
import { useLanguage } from "../context/LanguageContext";

export default function RegionsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3]">
      <Navbar />

      {/* Header */}
      <section className="bg-[#722f37] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("nav.home")}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/10 rounded-xl">
              <MapPin className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              {t("regions.title")}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("regions.discoverDesc")}
          </p>
        </div>
      </section>

      {/* Regions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((region, index) => (
            <motion.article
              key={region.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#e5e0d5] group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={region.image}
                  alt={t(`region.${region.id}.name` as keyof typeof t)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#f5f0e6]/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <h2 className="font-serif text-3xl font-bold text-[#722f37]">
                      {t(`region.${region.id}.name` as keyof typeof t)}
                    </h2>
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#4a5568] leading-relaxed mb-6">
                  {t(`region.${region.id}.desc` as keyof typeof t)}
                </p>

                {/* Signature Dishes */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="w-4 h-4 text-[#722f37]" />
                    <h3 className="font-semibold text-[#2d3748]">
                      {t("regions.signatureDishes")}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.dishes.map((dish, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 bg-[#722f37]/10 text-[#722f37] px-3 py-1.5 rounded-full text-sm font-medium"
                      >
                        <Star className="w-3 h-3" />
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Local Specialties */}
                <div className="bg-[#faf8f3] rounded-xl p-4">
                  <p className="text-sm text-[#718096] uppercase tracking-wide mb-2">
                    {t("regions.specialties")}
                  </p>
                  <p className="text-[#4a5568]">{region.specialties}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Map Tip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#722f37] rounded-2xl p-8 text-center text-white"
        >
          <MapPin className="w-10 h-10 mx-auto mb-4 opacity-80" />
          <h3 className="font-serif text-2xl mb-3">
            Did You Know?
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            France is divided into 18 administrative regions, each with its own 
            unique culinary identity. From the seafood-rich coasts of Brittany to 
            the wine valleys of Bordeaux, every region offers a distinct taste of France.
          </p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
