'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, Filter, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { toast } from 'react-hot-toast';

// Category-specific products
const CATEGORY_PRODUCTS = {
  'home & living': [
    {
      id: 'hl1',
      name: 'Modern Sofa Set',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1470&auto=format&fit=crop',
      brand: 'ComfortZone',
      rating: 4.8,
      reviews: 156,
      tag: 'Best Seller'
    },
    {
      id: 'hl2',
      name: 'Premium Coffee Maker',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1470&auto=format&fit=crop',
      brand: 'BrewMaster',
      rating: 4.7,
      reviews: 92,
      tag: 'Top Rated'
    },
    {
      id: 'hl3',
      name: 'Minimalist Dining Table',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1632&auto=format&fit=crop',
      brand: 'WoodCraft',
      rating: 4.9,
      reviews: 78,
      tag: 'New Arrival'
    },
    {
      id: 'hl4',
      name: 'Smart LED Ceiling Light',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=1470&auto=format&fit=crop',
      brand: 'LightTech',
      rating: 4.6,
      reviews: 145,
      tag: 'Smart Home'
    },
    {
      id: 'hl5',
      name: 'Luxury Bedding Set',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=1471&auto=format&fit=crop',
      brand: 'DreamComfort',
      rating: 4.8,
      reviews: 203,
      tag: 'Premium'
    },
    {
      id: 'hl6',
      name: 'Air Purifier Pro',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1470&auto=format&fit=crop',
      brand: 'PureAir',
      rating: 4.7,
      reviews: 167,
      tag: 'Best Value'
    },
    {
      id: 'hl7',
      name: 'Designer Floor Lamp',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1470&auto=format&fit=crop',
      brand: 'LightCraft',
      rating: 4.6,
      reviews: 89,
      tag: 'Trending'
    },
    {
      id: 'hl8',
      name: 'Ergonomic Office Chair',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1589384267710-7a25bc5ab784?q=80&w=1470&auto=format&fit=crop',
      brand: 'WorkComfort',
      rating: 4.8,
      reviews: 312,
      tag: 'Best Seller'
    },
    {
      id: 'hl9',
      name: 'Decorative Wall Mirror',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1469&auto=format&fit=crop',
      brand: 'HomeDecor',
      rating: 4.7,
      reviews: 143,
      tag: 'Popular'
    },
    {
      id: 'hl10',
      name: 'Kitchen Island Cart',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop',
      brand: 'KitchenPro',
      rating: 4.9,
      reviews: 178,
      tag: 'New Arrival'
    },
    {
      id: 'hl11',
      name: 'Plush Area Rug',
      price: 229.99,
      image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1470&auto=format&fit=crop',
      brand: 'ComfortHome',
      rating: 4.7,
      reviews: 156,
      tag: 'Luxury'
    },
    {
      id: 'hl12',
      name: 'Smart Thermostat',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1567769541715-8c71fe49fd43?q=80&w=1470&auto=format&fit=crop',
      brand: 'TechHome',
      rating: 4.8,
      reviews: 234,
      tag: 'Smart Home'
    },
    {
      id: 'hl13',
      name: 'Storage Ottoman',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=1470&auto=format&fit=crop',
      brand: 'StoragePro',
      rating: 4.6,
      reviews: 167,
      tag: 'Versatile'
    },
    {
      id: 'hl14',
      name: 'Ceramic Vase Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1470&auto=format&fit=crop',
      brand: 'ArtDecor',
      rating: 4.7,
      reviews: 98,
      tag: 'Handcrafted'
    },
    {
      id: 'hl15',
      name: 'Indoor Plant Stand',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1472&auto=format&fit=crop',
      brand: 'GreenHome',
      rating: 4.8,
      reviews: 145,
      tag: 'Eco-friendly'
    },
    {
      id: 'hl16',
      name: 'Modern Bathroom Vanity',
      price: 799.99,
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1469&auto=format&fit=crop',
      brand: 'BathLuxe',
      rating: 4.8,
      reviews: 167,
      tag: 'Premium'
    },
    {
      id: 'hl17',
      name: 'Stand Mixer Pro',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7e294?q=80&w=1470&auto=format&fit=crop',
      brand: 'KitchenElite',
      rating: 4.9,
      reviews: 289,
      tag: 'Best Seller'
    },
    {
      id: 'hl18',
      name: 'Floating Wall Shelves Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=1470&auto=format&fit=crop',
      brand: 'WallDecor',
      rating: 4.6,
      reviews: 145,
      tag: 'Trending'
    },
    {
      id: 'hl19',
      name: 'Luxury Shower Head',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1620628193186-e3796d2e538b?q=80&w=1374&auto=format&fit=crop',
      brand: 'AquaPro',
      rating: 4.7,
      reviews: 178,
      tag: 'Premium'
    },
    {
      id: 'hl20',
      name: 'Glass Dining Set',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1470&auto=format&fit=crop',
      brand: 'DineElegant',
      rating: 4.8,
      reviews: 156,
      tag: 'Luxury'
    },
    {
      id: 'hl21',
      name: 'Bamboo Shoe Rack',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1470&auto=format&fit=crop',
      brand: 'OrganizeWell',
      rating: 4.5,
      reviews: 123,
      tag: 'Eco-friendly'
    },
    {
      id: 'hl22',
      name: 'Pendant Light Fixture',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=1470&auto=format&fit=crop',
      brand: 'LightLuxe',
      rating: 4.7,
      reviews: 189,
      tag: 'Modern'
    },
    {
      id: 'hl23',
      name: 'Electric Wine Opener',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=1470&auto=format&fit=crop',
      brand: 'WineMaster',
      rating: 4.6,
      reviews: 134,
      tag: 'Best Value'
    },
    {
      id: 'hl24',
      name: 'Geometric Wall Art',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1582574883765-3a5d7b4ffc2e?q=80&w=1470&auto=format&fit=crop',
      brand: 'ArtHome',
      rating: 4.7,
      reviews: 167,
      tag: 'Artistic'
    },
    {
      id: 'hl25',
      name: 'Smart Door Lock',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop',
      brand: 'SecureTech',
      rating: 4.8,
      reviews: 245,
      tag: 'Smart Home'
    },
    {
      id: 'hl26',
      name: 'Velvet Accent Chair',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1374&auto=format&fit=crop',
      brand: 'ComfortPlus',
      rating: 4.7,
      reviews: 178,
      tag: 'Elegant'
    },
    {
      id: 'hl27',
      name: 'Kitchen Utensil Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=1470&auto=format&fit=crop',
      brand: 'ChefChoice',
      rating: 4.8,
      reviews: 234,
      tag: 'Essential'
    },
    {
      id: 'hl28',
      name: 'Bathroom Storage Cabinet',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop',
      brand: 'StoragePro',
      rating: 4.6,
      reviews: 156,
      tag: 'Practical'
    },
    {
      id: 'hl29',
      name: 'Macrame Wall Hanging',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?q=80&w=1470&auto=format&fit=crop',
      brand: 'ArtisanCraft',
      rating: 4.7,
      reviews: 123,
      tag: 'Handmade'
    },
    {
      id: 'hl30',
      name: 'Robot Vacuum Cleaner',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1599269571932-0a63ed154168?q=80&w=1470&auto=format&fit=crop',
      brand: 'SmartClean',
      rating: 4.9,
      reviews: 345,
      tag: 'Smart Home'
    }
  ],
  'fashion': [
    {
      id: 'f1',
      name: 'Designer Leather Jacket',
      price: 599.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1470&auto=format&fit=crop',
      brand: 'LuxStyle',
      rating: 4.8,
      reviews: 234,
      tag: 'Premium'
    },
    {
      id: 'f2',
      name: 'Classic Denim Jeans',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1374&auto=format&fit=crop',
      brand: 'DenimCo',
      rating: 4.7,
      reviews: 312,
      tag: 'Best Seller'
    },
    {
      id: 'f3',
      name: 'Cashmere Sweater',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop',
      brand: 'LuxKnit',
      rating: 4.9,
      reviews: 178,
      tag: 'Luxury'
    },
    {
      id: 'f4',
      name: 'Designer Sneakers',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1587&auto=format&fit=crop',
      brand: 'UrbanKicks',
      rating: 4.6,
      reviews: 245,
      tag: 'Trending'
    },
    {
      id: 'f5',
      name: 'Silk Evening Dress',
      price: 399.99,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1383&auto=format&fit=crop',
      brand: 'ElegantWear',
      rating: 4.8,
      reviews: 156,
      tag: 'Premium'
    },
    {
      id: 'f6',
      name: 'Classic Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1379&auto=format&fit=crop',
      brand: 'TimeStyle',
      rating: 4.7,
      reviews: 198,
      tag: 'Luxury'
    },
    {
      id: 'f7',
      name: 'Leather Handbag',
      price: 449.99,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1476&auto=format&fit=crop',
      brand: 'BagLuxe',
      rating: 4.9,
      reviews: 167,
      tag: 'Premium'
    },
    {
      id: 'f8',
      name: 'Summer Sundress',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1376&auto=format&fit=crop',
      brand: 'SummerChic',
      rating: 4.5,
      reviews: 134,
      tag: 'Best Value'
    },
    {
      id: 'f9',
      name: 'Wool Winter Coat',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1374&auto=format&fit=crop',
      brand: 'WinterStyle',
      rating: 4.8,
      reviews: 223,
      tag: 'Premium'
    },
    {
      id: 'f10',
      name: 'Designer Sunglasses',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1380&auto=format&fit=crop',
      brand: 'SunStyle',
      rating: 4.6,
      reviews: 145,
      tag: 'Trending'
    }
  ],
  'electronics': [
    {
      id: 'e1',
      name: 'Wireless Noise-Canceling Headphones',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1470&auto=format&fit=crop',
      brand: 'SoundMaster',
      rating: 4.9,
      reviews: 456,
      tag: 'Best Seller'
    },
    {
      id: 'e2',
      name: '4K Smart TV',
      price: 1299.99,
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1470&auto=format&fit=crop',
      brand: 'TechVision',
      rating: 4.8,
      reviews: 345,
      tag: 'Premium'
    },
    {
      id: 'e3',
      name: 'Gaming Laptop',
      price: 1799.99,
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1468&auto=format&fit=crop',
      brand: 'GameTech',
      rating: 4.9,
      reviews: 289,
      tag: 'High Performance'
    },
    {
      id: 'e4',
      name: 'Wireless Earbuds',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?q=80&w=1374&auto=format&fit=crop',
      brand: 'AudioPro',
      rating: 4.7,
      reviews: 567,
      tag: 'Popular'
    },
    {
      id: 'e5',
      name: 'Smart Watch',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1472&auto=format&fit=crop',
      brand: 'WearTech',
      rating: 4.6,
      reviews: 234,
      tag: 'Smart Device'
    },
    {
      id: 'e6',
      name: 'Professional Camera',
      price: 2499.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1464&auto=format&fit=crop',
      brand: 'PhotoPro',
      rating: 4.9,
      reviews: 178,
      tag: 'Professional'
    },
    {
      id: 'e7',
      name: 'Gaming Console',
      price: 499.99,
      image: 'https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1619&auto=format&fit=crop',
      brand: 'GameMaster',
      rating: 4.8,
      reviews: 456,
      tag: 'Best Seller'
    },
    {
      id: 'e8',
      name: 'Wireless Speaker',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=1470&auto=format&fit=crop',
      brand: 'SoundPro',
      rating: 4.7,
      reviews: 345,
      tag: 'Popular'
    },
    {
      id: 'e9',
      name: 'Tablet Pro',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1374&auto=format&fit=crop',
      brand: 'TabTech',
      rating: 4.8,
      reviews: 234,
      tag: 'Premium'
    },
    {
      id: 'e10',
      name: 'Smart Home Hub',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1470&auto=format&fit=crop',
      brand: 'SmartLife',
      rating: 4.6,
      reviews: 189,
      tag: 'Smart Home'
    }
  ],
  'beauty': [
    {
      id: 'b1',
      name: 'Luxury Face Cream',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=1470&auto=format&fit=crop',
      brand: 'GlowLuxe',
      rating: 4.8,
      reviews: 342,
      tag: 'Premium'
    },
    {
      id: 'b2',
      name: 'Natural Skincare Set',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1470&auto=format&fit=crop',
      brand: 'PureBeauty',
      rating: 4.7,
      reviews: 256,
      tag: 'Organic'
    },
    {
      id: 'b3',
      name: 'Professional Hair Dryer',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?q=80&w=1476&auto=format&fit=crop',
      brand: 'StylePro',
      rating: 4.9,
      reviews: 189,
      tag: 'Best Seller'
    },
    {
      id: 'b4',
      name: 'Vitamin C Serum',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1374&auto=format&fit=crop',
      brand: 'SkinScience',
      rating: 4.6,
      reviews: 423,
      tag: 'Popular'
    },
    {
      id: 'b5',
      name: 'Makeup Brush Set',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1480&auto=format&fit=crop',
      brand: 'BeautyPro',
      rating: 4.8,
      reviews: 167,
      tag: 'Essential'
    },
    {
      id: 'b6',
      name: 'Anti-Aging Night Cream',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1470&auto=format&fit=crop',
      brand: 'AgelessBeauty',
      rating: 4.7,
      reviews: 289,
      tag: 'Premium'
    },
    {
      id: 'b7',
      name: 'Hair Care Bundle',
      price: 119.99,
      image: 'https://images.unsplash.com/photo-1626015365107-476ab61db3c7?q=80&w=1470&auto=format&fit=crop',
      brand: 'HairLuxe',
      rating: 4.5,
      reviews: 178,
      tag: 'Value Pack'
    },
    {
      id: 'b8',
      name: 'Facial Cleansing Device',
      price: 169.99,
      image: 'https://images.unsplash.com/photo-1624454002302-36b824d7bd98?q=80&w=1470&auto=format&fit=crop',
      brand: 'TechBeauty',
      rating: 4.8,
      reviews: 345,
      tag: 'Smart Beauty'
    }
  ],
  'sports': [
    {
      id: 's1',
      name: 'Premium Yoga Mat',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=1470&auto=format&fit=crop',
      brand: 'YogaFlex',
      rating: 4.8,
      reviews: 456,
      tag: 'Best Seller'
    },
    {
      id: 's2',
      name: 'Smart Fitness Watch',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1557166983-5939644582a2?q=80&w=1470&auto=format&fit=crop',
      brand: 'FitTech',
      rating: 4.7,
      reviews: 389,
      tag: 'Smart Device'
    },
    {
      id: 's3',
      name: 'Adjustable Dumbbell Set',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1470&auto=format&fit=crop',
      brand: 'PowerFit',
      rating: 4.9,
      reviews: 234,
      tag: 'Premium'
    },
    {
      id: 's4',
      name: 'Basketball Pro',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1471&auto=format&fit=crop',
      brand: 'SportsPro',
      rating: 4.6,
      reviews: 178,
      tag: 'Professional'
    },
    {
      id: 's5',
      name: 'Running Shoes Elite',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop',
      brand: 'SpeedRun',
      rating: 4.8,
      reviews: 567,
      tag: 'Top Rated'
    },
    {
      id: 's6',
      name: 'Tennis Racket Pro',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1617083934555-ac7d4fee8910?q=80&w=1470&auto=format&fit=crop',
      brand: 'TennisMaster',
      rating: 4.7,
      reviews: 145,
      tag: 'Professional'
    },
    {
      id: 's7',
      name: 'Resistance Bands Set',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?q=80&w=1374&auto=format&fit=crop',
      brand: 'FitZone',
      rating: 4.5,
      reviews: 289,
      tag: 'Best Value'
    },
    {
      id: 's8',
      name: 'Cycling Helmet',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1557803175-06c9e37f0f31?q=80&w=1374&auto=format&fit=crop',
      brand: 'SafetySport',
      rating: 4.9,
      reviews: 123,
      tag: 'Safety First'
    }
  ],
  'home-decor': [
    {
      id: 'hd1',
      name: 'Modern Wall Clock',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?q=80&w=1374&auto=format&fit=crop',
      brand: 'TimeArt',
      rating: 4.7,
      reviews: 234,
      tag: 'Trending'
    },
    {
      id: 'hd2',
      name: 'Decorative Throw Pillows',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e6?q=80&w=1469&auto=format&fit=crop',
      brand: 'ComfortDecor',
      rating: 4.6,
      reviews: 178,
      tag: 'Best Seller'
    },
    {
      id: 'hd3',
      name: 'Abstract Wall Art',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1549887534-1541e9326642?q=80&w=1374&auto=format&fit=crop',
      brand: 'ArtHouse',
      rating: 4.8,
      reviews: 156,
      tag: 'Premium'
    },
    {
      id: 'hd4',
      name: 'Ceramic Vase Set',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?q=80&w=1374&auto=format&fit=crop',
      brand: 'VaseArt',
      rating: 4.7,
      reviews: 145,
      tag: 'Handcrafted'
    },
    {
      id: 'hd5',
      name: 'LED String Lights',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1470&auto=format&fit=crop',
      brand: 'LightMagic',
      rating: 4.5,
      reviews: 289,
      tag: 'Popular'
    },
    {
      id: 'hd6',
      name: 'Floating Shelves',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?q=80&w=1374&auto=format&fit=crop',
      brand: 'WallCraft',
      rating: 4.6,
      reviews: 167,
      tag: 'Versatile'
    },
    {
      id: 'hd7',
      name: 'Scented Candle Set',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=1374&auto=format&fit=crop',
      brand: 'AromaLux',
      rating: 4.8,
      reviews: 234,
      tag: 'Gift Set'
    },
    {
      id: 'hd8',
      name: 'Decorative Mirror',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1469&auto=format&fit=crop',
      brand: 'MirrorArt',
      rating: 4.9,
      reviews: 178,
      tag: 'Elegant'
    }
  ],
  'books': [
    {
      id: 'bk1',
      name: 'The Art of Mindfulness',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1374&auto=format&fit=crop',
      brand: 'MindPress',
      rating: 4.8,
      reviews: 456,
      tag: 'Bestseller'
    },
    {
      id: 'bk2',
      name: 'Modern Cooking Guide',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1476&auto=format&fit=crop',
      brand: 'CulinaryArts',
      rating: 4.7,
      reviews: 289,
      tag: 'Popular'
    },
    {
      id: 'bk3',
      name: 'Photography Masterclass',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1470&auto=format&fit=crop',
      brand: 'PhotoPress',
      rating: 4.9,
      reviews: 178,
      tag: 'Educational'
    },
    {
      id: 'bk4',
      name: 'Business Strategy',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1374&auto=format&fit=crop',
      brand: 'BizBooks',
      rating: 4.6,
      reviews: 345,
      tag: 'Professional'
    },
    {
      id: 'bk5',
      name: 'Fiction Collection Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1374&auto=format&fit=crop',
      brand: 'StoryPress',
      rating: 4.8,
      reviews: 234,
      tag: 'Collection'
    },
    {
      id: 'bk6',
      name: 'Travel Photography',
      price: 44.99,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop',
      brand: 'TravelLens',
      rating: 4.7,
      reviews: 167,
      tag: 'Art'
    },
    {
      id: 'bk7',
      name: 'Healthy Living Guide',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1374&auto=format&fit=crop',
      brand: 'HealthPress',
      rating: 4.5,
      reviews: 289,
      tag: 'Wellness'
    },
    {
      id: 'bk8',
      name: 'Classic Literature Set',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1470&auto=format&fit=crop',
      brand: 'ClassicPress',
      rating: 4.9,
      reviews: 178,
      tag: 'Premium'
    }
  ]
};

const SORT_OPTIONS = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Reviews'];

export default function CategoryPage() {
  const params = useParams();
  const category = decodeURIComponent((params.slug as string)).toLowerCase();
  const { addToCart } = useCart();
  
  const [sortBy, setSortBy] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const products = CATEGORY_PRODUCTS[category.toLowerCase() as keyof typeof CATEGORY_PRODUCTS] || [];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const categoryTitle = decodeURIComponent(category)
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1474&auto=format&fit=crop"
            alt={categoryTitle}
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
              {categoryTitle}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our premium collection of {categoryTitle.toLowerCase()} products.
              Each item is carefully selected for quality and style.
            </p>
          </motion.div>
        </div>
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