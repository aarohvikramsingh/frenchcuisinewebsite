"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ChefHat, Wine, MapPin, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { recipes, cheeses, regions } from "./data/recipes";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { t } = useLanguage();

  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const featuredRecipes = recipes.slice(0, 3);
  const featuredCheeses = cheeses.slice(0, 2);
  const featuredRegions = regions.slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3]">
      <Navbar />

      {/* Premium Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
            alt="French Cuisine"
            fill
            className="object-cover"
            priority
          />
          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/70 via-[#1a1a2e]/40 to-[#faf8f3]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#722f37]/30 via-transparent to-[#722f37]/30" />
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-32 h-32 bg-[#c9a962]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-20 w-40 h-40 bg-[#722f37]/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#c9a962]" />
            <span className="text-sm text-white/90 font-medium tracking-wide">{t("hero.badge")}</span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
              <span className="block">French</span>
              <span className="block text-[#c9a962]">Cuisine</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-white/80 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Premium Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-lg mx-auto"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#c9a962] via-[#722f37] to-[#c9a962] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#722f37]" />
                <input
                  type="text"
                  placeholder={t("hero.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-5 py-5 rounded-full bg-white/95 backdrop-blur-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:ring-offset-2 focus:ring-offset-[#faf8f3]/50 shadow-2xl text-[#2d3748] placeholder:text-[#a0aec0] text-base"
                />
              </div>
            </div>

            {/* Premium Search Results Dropdown */}
            {searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-3 glass rounded-2xl shadow-2xl border border-white/50 overflow-hidden z-50"
              >
                {filteredRecipes.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto py-2">
                    <div className="px-4 py-2 text-xs text-[#718096] uppercase tracking-wider font-semibold">
                      {filteredRecipes.length} {t("hero.searchResults")}
                    </div>
                    {filteredRecipes.map((recipe, index) => (
                      <motion.div
                        key={recipe.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={`/recipes/${recipe.id}`}
                          className="flex items-center gap-4 px-4 py-3 hover:bg-[#722f37]/5 transition-colors mx-2 rounded-xl"
                        >
                          <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                            <Image
                              src={recipe.image}
                              alt={recipe.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-lg text-[#2d3748] font-medium">{recipe.name}</p>
                            <p className="text-sm text-[#6b5b5b] truncate">
                              {recipe.description}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-[#c9a962]" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="px-6 py-8 text-center">
                    <div className="w-16 h-16 bg-[#f5f0e6] rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-7 h-7 text-[#c9a962]" />
                    </div>
                    <p className="font-medium text-[#2d3748]">{t("hero.noResults")}</p>
                    <p className="text-sm text-[#6b5b5b] mt-1">{t("hero.trySearching")}</p>
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#722f37] to-[#8b3a44] rounded-2xl shadow-lg shadow-[#722f37]/20">
              <ChefHat className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2d3748]">
                {t("recipes.featured")}
              </h2>
              <p className="text-[#6b5b5b] mt-1">{t("recipes.subtitle")}</p>
            </div>
          </div>
          <Link
            href="/recipes"
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#722f37] font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-[#722f37]/10 transition-all duration-300 border border-[#e8e4dc]"
          >
            {t("recipes.viewAll")} 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRecipes.map((recipe, index) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                title={t(`recipe.${recipe.id}.name` as keyof typeof t)}
                description={t(`recipe.${recipe.id}.desc` as keyof typeof t)}
                image={recipe.image}
                href={`/recipes/${recipe.id}`}
                prepTime={recipe.prepTime}
                servings={recipe.servings}
                difficulty={t(`difficulty.${recipe.difficulty.toLowerCase()}` as keyof typeof t)}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cheese & Wine Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white via-[#faf8f3] to-white rounded-[2.5rem] p-8 md:p-12 shadow-premium border border-[#e8e4dc] relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a962]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#722f37]/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-[#c9a962] to-[#d4b978] rounded-2xl shadow-lg">
                  <Wine className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2d3748]">
                    {t("cheeseWine.title")}
                  </h2>
                  <p className="text-[#6b5b5b] mt-1">{t("cheeseWine.subtitle")}</p>
                </div>
              </div>
              <Link
                href="/cheese-wine"
                className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#722f37] to-[#8b3a44] text-white font-medium rounded-full shadow-lg shadow-[#722f37]/25 hover:shadow-xl hover:shadow-[#722f37]/30 transition-all duration-300"
              >
                {t("cheeseWine.explore")} 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredCheeses.map((cheese, index) => (
                <motion.div
                  key={cheese.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    title={t(`cheese.${cheese.id}.name` as keyof typeof t)}
                    description={t(`cheese.${cheese.id}.desc` as keyof typeof t)}
                    image={cheese.image}
                    href="/cheese-wine"
                    badge={cheese.region}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Regional Specialties Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-[#2d3748] to-[#4a5568] rounded-2xl shadow-lg">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#2d3748]">
                {t("regions.title")}
              </h2>
              <p className="text-[#6b5b5b] mt-1">{t("regions.subtitle")}</p>
            </div>
          </div>
          <Link
            href="/regions"
            className="group flex items-center gap-2 px-5 py-2.5 bg-white text-[#2d3748] font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-[#e8e4dc]"
          >
            {t("regions.discover")} 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredRegions.map((region, index) => (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                title={t(`region.${region.id}.name` as keyof typeof t)}
                description={t(`region.${region.id}.desc` as keyof typeof t)}
                image={region.image}
                href="/regions"
                badge={region.dishes[0]}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Premium Quote Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#722f37] via-[#8b3a44] to-[#1a1a2e]" />
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a962]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-6xl text-[#c9a962]/30 font-serif mb-4">&ldquo;</div>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/95 italic leading-relaxed mb-6">
              {t("quote.text")}
            </blockquote>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#c9a962] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#c9a962] font-medium tracking-wide">— {t("quote.author")}</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
