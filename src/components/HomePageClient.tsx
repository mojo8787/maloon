'use client';

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";

export default function HomePageClient() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <FeaturedProject />
      <Footer />
    </main>
  );
} 