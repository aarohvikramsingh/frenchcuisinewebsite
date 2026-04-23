"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Wine, Milk, Grape, Clock, MapPin } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cheeses, wineRegions } from "../data/recipes";
import { useLanguage } from "../context/LanguageContext";

const cheeseMakingSteps = [
  {
    icon: Milk,
    title: "Milk Collection",
    titleKey: "step1",
    description: "Fresh milk is collected from cows, goats, or sheep, depending on the cheese type."
  },
  {
    icon: Clock,
    title: "Curdling",
    titleKey: "step2",
    description: "Rennet and starter cultures are added to curdle the milk into solid curds."
  },
  {
    icon: MapPin,
    title: "Cutting & Draining",
    titleKey: "step3",
    description: "Curds are cut and whey is drained, shaping the final cheese texture."
  },
  {
    icon: Clock,
    title: "Aging",
    titleKey: "step4",
    description: "Cheeses are aged in controlled environments to develop flavor and character."
  }
];

export default function CheeseWinePage() {
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
              <Wine className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              {t("cheeseWine.title")}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("cheeseWine.subtitle")}
          </p>
        </div>
      </section>

      {/* Cheese Making Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-[#722f37]/10 rounded-xl">
            <Milk className="w-6 h-6 text-[#722f37]" />
          </div>
          <h2 className="font-serif text-3xl font-semibold text-[#2d3748]">
            {t("cheeseWine.cheeseMaking")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cheeseMakingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-sm border border-[#e5e0d5] hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-[#722f37]/10 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-[#722f37]" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-[#2d3748] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#4a5568]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Popular Cheeses */}
        <h3 className="font-serif text-2xl font-semibold text-[#2d3748] mb-6">
          {t("cheeseWine.popularCheeses")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cheeses.map((cheese, index) => (
            <motion.div
              key={cheese.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e0d5] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cheese.image}
                  alt={t(`cheese.${cheese.id}.name` as keyof typeof t)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-[#722f37] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {cheese.region}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-serif text-xl font-semibold text-[#2d3748] mb-2">
                  {t(`cheese.${cheese.id}.name` as keyof typeof t)}
                </h4>
                <p className="text-sm text-[#4a5568] mb-4">{t(`cheese.${cheese.id}.desc` as keyof typeof t)}</p>
                <div className="flex flex-wrap gap-2">
                  {cheese.characteristics.map((char, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#f5f0e6] text-[#4a5568] px-2 py-1 rounded-full"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#722f37]/10 rounded-xl">
              <Grape className="w-6 h-6 text-[#722f37]" />
            </div>
            <h2 className="font-serif text-3xl font-semibold text-[#2d3748]">
              {t("cheeseWine.wineRegions")}
            </h2>
          </div>

          <div className="mb-8">
            <p className="text-lg text-[#4a5568] max-w-3xl">
              France is one of the world&apos;s most renowned wine-producing countries. 
              Each region has its own unique climate, soil (terroir), and grape varieties 
              that create distinctive wines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wineRegions.map((region, index) => (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#faf8f3] rounded-xl overflow-hidden shadow-sm border border-[#e5e0d5] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={region.image}
                    alt={t(`wine.${region.id}.name` as keyof typeof t)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-serif text-xl font-semibold text-[#2d3748] mb-2">
                    {t(`wine.${region.id}.name` as keyof typeof t)}
                  </h4>
                  <p className="text-sm text-[#4a5568] mb-4">{t(`wine.${region.id}.desc` as keyof typeof t)}</p>
                  <div className="mb-3">
                    <p className="text-xs text-[#718096] uppercase tracking-wide mb-1">
                      Main Grapes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {region.grapes.map((grape, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white text-[#722f37] px-2 py-1 rounded-full border border-[#e5e0d5]"
                        >
                          {grape}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#4a5568] italic">
                    {region.characteristics}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pairing Tip */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#722f37]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Wine className="w-12 h-12 text-white/80 mx-auto mb-4" />
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">
              Classic Pairing Tip
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              {t("cheeseWine.pairingTip")}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
