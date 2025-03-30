'use client';

import { ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1470&auto=format&fit=crop',
    itemCount: 152,
    color: 'from-blue-600 to-purple-600'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop',
    itemCount: 324,
    color: 'from-pink-600 to-rose-600'
  },
  {
    id: 'home-decor',
    name: 'Home & Decor',
    description: 'Beautiful items for your home',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1474&auto=format&fit=crop',
    itemCount: 89,
    color: 'from-amber-600 to-yellow-600'
  },
  {
    id: 'books',
    name: 'Books',
    description: 'Books for every reader',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1470&auto=format&fit=crop',
    itemCount: 256,
    color: 'from-emerald-600 to-green-600'
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Equipment for every sport',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1470&auto=format&fit=crop',
    itemCount: 178,
    color: 'from-red-600 to-orange-600'
  },
  {
    id: 'beauty',
    name: 'Beauty & Care',
    description: 'Premium beauty products',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop',
    itemCount: 143,
    color: 'from-violet-600 to-purple-600'
  }
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-900/50 rounded-2xl mb-4 ring-1 ring-purple-500/20">
            <Sparkles className="w-6 h-6 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Shop by Category
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of premium products across various categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => (
            <Link
              href={`/categories/${category.id}`}
              key={category.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-500 
                hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-[1.02]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />
              <img
                src={category.image}
                alt={category.name}
                className="h-[400px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      {category.itemCount.toLocaleString()} Products
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-white font-medium group/link">
                    <span className="relative">
                      Browse Collection
                      <span className="absolute inset-x-0 -bottom-1 h-px bg-white transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 