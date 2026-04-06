# elfima-digitalhub-website
npx create-next-app@latest elfima-neurolabs --typescript --tailwind --eslint
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 255, 255, 255;
  --background-start-rgb: 0, 0, 0;
  --background-end-rgb: 10, 10, 10;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ELFIMA NEUROLABS | Future Tech Hub",
  description: "Advanced digital products and neural solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false); // Ubah ke true untuk simulasi admin

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter text-blue-500">
          ELFIMA <span className="text-white">NEUROLABS</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 text-xs font-bold tracking-widest uppercase">
          <Link href="/" className="hover:text-blue-500 transition">Beranda</Link>
          <Link href="/products" className="hover:text-blue-500 transition">Katalog</Link>
          <Link href="/about" className="hover:text-blue-500 transition">Visi</Link>
          {isAdmin && <Link href="/admin" className="text-red-500">Command Center</Link>}
        </div>

        <Link href="/login" className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full text-xs font-bold hover:bg-blue-500 hover:text-white transition">
          {isAdmin ? "DASHBOARD" : "ADMIN LOGIN"}
        </Link>
      </div>
    </nav>
  );
}
export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="group bg-[#0A0A0A] border border-white/5 rounded-2xl p-4 hover:border-blue-500/50 transition-all duration-500">
      <div className="relative h-48 mb-6 overflow-hidden rounded-xl">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
        <div className="absolute top-2 right-2 bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">
          {product.category}
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
      <p className="text-2xl font-black text-blue-400 mb-6">{product.price}</p>
      
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(product.links).map(([platform, url]) => (
          <a key={platform} href={url as string} className="bg-white/5 hover:bg-white/10 border border-white/10 py-2 rounded-lg text-[10px] font-bold text-center uppercase tracking-widest transition">
            {platform}
          </a>
        ))}
      </div>
    </div>
  );
}
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Neural Analytics 1.0",
    category: "Software",
    price: "Rp 850.000",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=500",
    links: { shopee: "#", tokopedia: "#", linkid: "#" }
  },
  {
    name: "Cyber Interface Kit",
    category: "Design",
    price: "Rp 350.000",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500",
    links: { tiktok: "#", shopee: "#" }
  }
];

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-black tracking-tighter mb-2">NEURAL <span className="text-blue-500">INVENTORY</span></h1>
        <p className="text-gray-500 text-sm font-mono tracking-widest uppercase">Available Digital Assets</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </div>
  );
}
