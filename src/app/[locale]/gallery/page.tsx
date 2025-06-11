import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type GalleryCategory = 'food' | 'interior' | 'terrace' | 'events';

const categories: GalleryCategory[] = ['food', 'interior', 'terrace', 'events'];

export default function Gallery() {
  const t = useTranslations('gallery');
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('food');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = {
    food: [
      '/images/gallery/food-1.svg',
      '/images/gallery/food-2.svg',
      '/images/gallery/food-3.svg',
      '/images/gallery/food-4.svg',
      '/images/gallery/food-5.svg',
      '/images/gallery/food-6.svg',
    ],
    interior: [
      '/images/gallery/interior-1.svg',
      '/images/gallery/interior-2.svg',
      '/images/gallery/interior-3.svg',
      '/images/gallery/interior-4.svg',
    ],
    terrace: [
      '/images/gallery/terrace-1.svg',
      '/images/gallery/terrace-2.svg',
      '/images/gallery/terrace-3.svg',
    ],
    events: [
      '/images/gallery/event-1.svg',
      '/images/gallery/event-2.svg',
      '/images/gallery/event-3.svg',
      '/images/gallery/event-4.svg',
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {images[selectedCategory].map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full aspect-[4/3]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Selected gallery image"
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
} 