import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Vibes Store - Premium Shopping Experience',
  description: 'Discover our curated collection of premium products across fashion, electronics, home & living, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-sans bg-black text-white min-h-screen`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <footer className="bg-neutral-900 py-8 mt-auto">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About Vibes</h3>
                    <p className="text-gray-400">Premium shopping experience with curated products for the modern lifestyle.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
                      <li><a href="/categories" className="hover:text-white transition-colors">Categories</a></li>
                      <li><a href="/cart" className="hover:text-white transition-colors">Cart</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="/categories/fashion" className="hover:text-white transition-colors">Fashion</a></li>
                      <li><a href="/categories/electronics" className="hover:text-white transition-colors">Electronics</a></li>
                      <li><a href="/categories/home-decor" className="hover:text-white transition-colors">Home Decor</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>Email: pauldebanshu73@gmail.com</li>
                      <li>Phone: +91 7250274994</li>
                      <li>Hours: Mon-Fri 9am-6pm</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-gray-400">
                  <p>&copy; 2024 Vibes Store. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
                border: '1px solid #444',
              },
              success: {
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </CartProvider>
      </body>
    </html>
  );
}
