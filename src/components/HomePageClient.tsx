'use client';

import { Suspense } from 'react';
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
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading services...</div>}>
        <Services />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading projects...</div>}>
        <FeaturedProject />
      </Suspense>
      <Footer />
    </main>
  );
} 