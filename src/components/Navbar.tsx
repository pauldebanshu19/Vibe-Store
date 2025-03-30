'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Vibes Store
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-gray-800">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-gray-800">
              Categories
            </Link>
            <Link href="/cart" className="relative text-gray-600 hover:text-gray-800">
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 