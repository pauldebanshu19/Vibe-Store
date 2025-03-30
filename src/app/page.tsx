'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, ArrowRight, Star, Truck, Shield, Clock, CreditCard, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const TRENDING_CATEGORIES = [
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop',
    count: '1.2k+ Products'
  },
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1470&auto=format&fit=crop',
    count: '800+ Products'
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1474&auto=format&fit=crop',
    count: '500+ Products'
  }
];

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop',
    rating: 4.8,
    reviews: 128,
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1464&auto=format&fit=crop',
    rating: 4.9,
    reviews: 256,
    tag: 'New Arrival'
  },
  {
    id: '3',
    name: 'Designer Handbag',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&auto=format&fit=crop',
    rating: 4.7,
    reviews: 89,
    tag: 'Trending'
  }
];

const BENEFITS = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure payment processing'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated support anytime you need'
  },
  {
    icon: CreditCard,
    title: 'Easy Returns',
    description: '30-day money-back guarantee'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 font-medium">Trending Products Available Now</span>
            </div>
            <h1 className="text-7xl font-bold text-white mb-8 leading-tight">
              Discover the Latest in
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                Fashion & Technology
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Experience premium quality and innovative design. Shop our curated collection
              of trending products that define modern lifestyle.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Link
                href="/products"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium
                  hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105
                  hover:shadow-lg hover:shadow-purple-500/20"
              >
                Explore Collection
              </Link>
              <Link
                href="/categories"
                className="bg-white/10 text-white px-8 py-4 rounded-full font-medium backdrop-blur-sm
                  hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                View Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trending Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Trending Categories</h2>
            <p className="text-gray-400">Explore our most popular collections</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRENDING_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 mb-4">{category.count}</p>
                <Link
                  href={`/categories/${category.name.toLowerCase()}`}
                  className="inline-flex items-center gap-2 text-white font-medium group/link"
                >
                  <span className="relative">
                    Browse Collection
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-white transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300" />
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400">Handpicked selections just for you</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden group hover:shadow-2xl 
                hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-white">${product.price}</p>
                  <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full
                    hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-800/30 backdrop-blur-sm py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center p-4 bg-purple-600/20 rounded-2xl mb-4
                  group-hover:bg-purple-600/30 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=1470&auto=format&fit=crop"
              alt="Newsletter Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm" />
          </div>
          <div className="relative p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive offers, new product alerts, and insider-only discounts.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-l-full bg-white/10 text-white placeholder-gray-400
                  border border-white/20 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
              />
              <button className="px-8 py-4 bg-purple-600 text-white rounded-r-full font-medium
                hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
