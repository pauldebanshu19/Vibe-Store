'use client';

import Image from 'next/image';
import { ShoppingCart, Heart, Star, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const { addToCart } = useCart();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleAddToCart = () => {
    addToCart(product);
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-3xl pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Image
                className="h-10 w-10 rounded-full object-cover"
                src={product.image}
                alt={product.name}
                width={40}
                height={40}
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Added to cart!
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {product.name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-purple-600 hover:text-purple-500 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div 
      className="group relative perspective-2000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`
          bg-white rounded-3xl shadow-lg overflow-hidden transform-gpu transition-all duration-300
          ${isHovered ? 'shadow-2xl shadow-purple-200/50 scale-[1.02]' : ''}
        `}
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : 'rotateX(0) rotateY(0)',
        }}
      >
        <div className="relative h-80 overflow-hidden bg-gray-100">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 filter saturate-[1.1]' : 'scale-100'
            }`}
          />
          <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
                toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
              }}
              className={`
                p-3 rounded-2xl backdrop-blur-md transition-all duration-300
                ${isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/80 hover:bg-white text-gray-600 hover:text-red-500'
                }
                transform hover:scale-110 hover:shadow-lg
              `}
            >
              <Heart 
                className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`}
                strokeWidth={2.5}
              />
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-1 text-white mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 transition-colors duration-300 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-400'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-medium">({product.reviews})</span>
            </div>
            <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-sm font-medium text-white inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              {product.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-purple-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                Free Shipping
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-2xl
                hover:bg-purple-600 transition-all duration-300 transform hover:scale-105
                hover:shadow-lg hover:shadow-purple-200/50 active:scale-95"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-medium">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 