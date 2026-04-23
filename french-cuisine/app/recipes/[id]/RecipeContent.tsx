"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, ChefHat, MapPin, CheckCircle2 } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Recipe } from "../../data/recipes";
import { useLanguage } from "../../context/LanguageContext";

interface RecipeContentProps {
  recipe: Recipe;
}

export default function RecipeContent({ recipe }: RecipeContentProps) {
  const { t, language } = useLanguage();

  // Get translated ingredients and steps
  const translatedIngredients = recipe.ingredients.map((_, index) =>
    t(`recipe.${recipe.id}.ingredient.${index}` as keyof typeof t) || recipe.ingredients[index]
  );

  const translatedSteps = recipe.steps.map((_, index) =>
    t(`recipe.${recipe.id}.step.${index}` as keyof typeof t) || recipe.steps[index]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f3]">
      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> {t("recipe.backToRecipes")}
            </Link>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t(`recipe.${recipe.id}.name` as keyof typeof t) || recipe.name}
            </h1>
            {recipe.region && (
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">{t(`region.${recipe.region.toLowerCase().replace(/\s+/g, "-")}.name` as keyof typeof t) || recipe.region}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        >
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#e5e0d5]">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#722f37]/10 rounded-lg">
                <Clock className="w-5 h-5 text-[#722f37]" />
              </div>
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide">
                  {t("recipe.prepTime")}
                </p>
                <p className="font-medium text-[#2d3748]">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#722f37]/10 rounded-lg">
                <Users className="w-5 h-5 text-[#722f37]" />
              </div>
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide">
                  {t("recipe.servings")}
                </p>
                <p className="font-medium text-[#2d3748]">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#722f37]/10 rounded-lg">
                <ChefHat className="w-5 h-5 text-[#722f37]" />
              </div>
              <div>
                <p className="text-xs text-[#718096] uppercase tracking-wide">
                  {t("recipe.difficulty")}
                </p>
                <p className="font-medium text-[#2d3748]">{t(`difficulty.${recipe.difficulty.toLowerCase()}` as keyof typeof t) || recipe.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-[#4a5568] leading-relaxed mb-8">
            {t(`recipe.${recipe.id}.desc` as keyof typeof t) || recipe.description}
          </p>
        </motion.div>

        {/* Ingredients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-6"
        >
          <h2 className="font-serif text-2xl font-semibold text-[#2d3748] mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#722f37] text-white rounded-full flex items-center justify-center text-sm">
              1
            </span>
            {t("recipe.ingredients")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {translatedIngredients.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-[#faf8f3] rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-[#722f37] flex-shrink-0 mt-0.5" />
                <span className="text-[#4a5568]">{ingredient}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-6"
        >
          <h2 className="font-serif text-2xl font-semibold text-[#2d3748] mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-[#722f37] text-white rounded-full flex items-center justify-center text-sm">
              2
            </span>
            {t("recipe.instructions")}
          </h2>
          <div className="space-y-6">
            {translatedSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#f5f0e6] rounded-full flex items-center justify-center font-semibold text-[#722f37]">
                  {index + 1}
                </div>
                <p className="text-[#4a5568] leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back Button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#722f37] text-white rounded-lg hover:bg-[#8b3a44] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("recipe.backToAllRecipes")}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
