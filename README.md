# Vibes Store - Modern E-commerce Platform

A modern, feature-rich e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. The application offers a sleek dark theme design with smooth animations and a responsive layout.

## Features

### Categories
- **Home & Living**: Furniture, appliances, decor items (30 products)
- **Fashion**: Clothing, accessories, footwear (10 products)
- **Electronics**: Gadgets, devices, accessories (10 products)
- **Beauty**: Skincare, makeup, hair care (8 products)
- **Sports**: Fitness equipment, sportswear (8 products)
- **Home Decor**: Wall art, lighting, decorative items (8 products)
- **Books**: Various genres and collections (8 products)

### Product Features
- High-quality product images
- Detailed product information
- Rating and review system
- Price filtering and sorting
- Search functionality
- Category-specific browsing
- Add to cart functionality
- Toast notifications

### UI/UX Features
- Dark theme design
- Responsive layout
- Smooth animations using Framer Motion
- Dynamic image loading
- Interactive product cards
- Search and filter capabilities
- Sorting options
- Loading states
- Error handling

## Tech Stack

- **Frontend Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context (CartContext)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Image Optimization**: Next.js Image Component

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/vibes-store.git
cd vibes
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
vibes/
├── src/
│   ├── app/
│   │   ├── categories/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── cart/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── (component files)
│   ├── context/
│   │   └── CartContext.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── (static files)
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```

3. Make your changes and commit:
```bash
git commit -m "Add your commit message"
```

4. Push to your fork:
```bash
git push origin feature/your-feature-name
```

5. Create a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Update documentation for significant changes
- Add comments for complex logic
- Test your changes thoroughly

## Available Scripts

- `npm run dev`: Starts development server
- `npm run build`: Creates production build
- `npm start`: Runs production server
- `npm run lint`: Runs linter
- `npm run test`: Runs tests (when implemented)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
# Add other environment variables as needed
```

## Features to be Implemented

- User authentication
- Payment integration
- Order management
- User profiles
- Wishlist functionality
- Product reviews and ratings
- Admin dashboard
- Analytics integration
- SEO optimization
- Performance monitoring

## Known Issues

- Some image loading issues with Unsplash URLs
- Cart persistence between sessions
- Mobile responsiveness improvements needed

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- UI inspiration from modern e-commerce platforms

## Contact

For any queries or suggestions, please open an issue in the repository.

---

Happy coding! 🚀
