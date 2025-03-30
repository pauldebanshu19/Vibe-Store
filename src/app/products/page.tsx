'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, Filter, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

const MOCK_PRODUCTS = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop',
    category: 'Electronics',
    brand: 'SoundMaster',
    rating: 4.8,
    reviews: 128,
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1464&auto=format&fit=crop',
    category: 'Electronics',
    brand: 'TechWear',
    rating: 4.9,
    reviews: 256,
    tag: 'New Arrival'
  },
  {
    id: '3',
    name: 'Designer Leather Handbag',
    price: 599.99,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1470&auto=format&fit=crop',
    category: 'Fashion',
    brand: 'LuxStyle',
    rating: 4.7,
    reviews: 89,
    tag: 'Trending'
  },
  {
    id: '4',
    name: 'Ultra HD Smart TV 65"',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop',
    category: 'Electronics',
    brand: 'VisionTech',
    rating: 4.6,
    reviews: 167,
    tag: 'Featured'
  },
  {
    id: '5',
    name: 'Premium Coffee Maker',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1470&auto=format&fit=crop',
    category: 'Home & Living',
    brand: 'BrewMaster',
    rating: 4.5,
    reviews: 92,
    tag: 'Best Value'
  },
  {
    id: '6',
    name: 'Wireless Gaming Mouse',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1528&auto=format&fit=crop',
    category: 'Electronics',
    brand: 'GamePro',
    rating: 4.7,
    reviews: 215,
    tag: 'Gaming'
  }
];

const CATEGORIES = ['All', 'Electronics', 'Fashion', 'Home & Living'];
const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Reviews'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart, getItemCount } = useCart();

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Rating':
        return b.rating - a.rating;
      case 'Reviews':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop"
            alt="Products Header"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Discover Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our curated collection of premium products. Each item is carefully selected
              for quality, style, and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cart Indicator */}
      <div className="fixed top-4 right-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-600 text-white px-4 py-2 rounded-full flex items-center gap-2
            hover:bg-purple-700 transition-colors cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="font-medium">{getItemCount()}</span>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-0 z-10 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg
                  text-white placeholder-gray-400 focus:outline-none focus:border-purple-500
                  transition-colors"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-white/5 border border-white/10 rounded-lg
                    text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category} className="bg-gray-900">
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none pl-4 pr-10 py-2 bg-white/5 border border-white/10 rounded-lg
                    text-white focus:outline-none focus:border-purple-500 transition-colors cursor-pointer"
                >
                  {SORT_OPTIONS.map(option => (
                    <option key={option} value={option} className="bg-gray-900">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-gray-400">
            Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden group
                hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500
                hover:scale-[1.02]"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-purple-400 mb-2">{product.brand}</div>
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
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2
                      rounded-full hover:bg-purple-700 transition-all duration-300 transform
                      hover:scale-105"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
} 