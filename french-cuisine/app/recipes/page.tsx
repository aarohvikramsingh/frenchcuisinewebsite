"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ChefHat, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import SkeletonCard from "../components/SkeletonCard";
import { recipes } from "../data/recipes";
import { useLanguage } from "../context/LanguageContext";

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const filteredRecipes = useMemo(() => {
    if (!searchQuery.trim()) return recipes;
    return recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.region?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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
              <ChefHat className="w-8 h-8" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              {t("nav.recipes")}
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("recipes.subtitle")}
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#e5e0d5]">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
            <input
              type="text"
              placeholder={t("hero.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => {
                setIsLoading(true);
                setSearchQuery(e.target.value);
                setTimeout(() => setIsLoading(false), 300);
              }}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-[#faf8f3] border border-[#e5e0d5] focus:outline-none focus:ring-2 focus:ring-[#722f37] focus:border-transparent text-[#2d3748] placeholder:text-[#a0aec0]"
            />
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filteredRecipes.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredRecipes.map((recipe, index) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  title={t(`recipe.${recipe.id}.name` as keyof typeof t)}
                  description={t(`recipe.${recipe.id}.desc` as keyof typeof t)}
                  image={recipe.image}
                  href={`/recipes/${recipe.id}`}
                  prepTime={recipe.prepTime}
                  servings={recipe.servings}
                  difficulty={t(`difficulty.${recipe.difficulty.toLowerCase()}` as keyof typeof t)}
                  badge={recipe.region}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#f5f0e6] rounded-full mb-4">
              <Search className="w-8 h-8 text-[#718096]" />
            </div>
            <h3 className="font-serif text-xl text-[#2d3748] mb-2">
              {t("hero.noResults")}
            </h3>
            <p className="text-[#718096]">
              {t("hero.trySearching")}
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 bg-[#722f37] text-white rounded-lg hover:bg-[#8b3a44] transition-colors"
            >
              {t("recipes.viewAll")}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
