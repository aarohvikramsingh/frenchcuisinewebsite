import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import RecipeContent from "./RecipeContent";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { recipes } from "../../data/recipes";

// Generate static params for all recipes
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col bg-[#faf8f3]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif text-4xl text-[#2d3748] mb-4">
              Recipe Not Found
            </h1>
            <p className="text-[#718096] mb-6">
              The recipe you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/recipes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#722f37] text-white rounded-lg hover:bg-[#8b3a44] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Recipes
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return <RecipeContent recipe={recipe} />;
}
