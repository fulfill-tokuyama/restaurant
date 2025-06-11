import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

type MenuCategory = 'lunch' | 'dinner' | 'drinks';

export default function Menu() {
  const t = useTranslations('menu');
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('lunch');

  const categories: MenuCategory[] = ['lunch', 'dinner', 'drinks'];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Category Tabs */}
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeCategory === category
                      ? 'border-primary-red text-primary-red'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {t(category)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeCategory === 'lunch' && (
              <div className="space-y-12">
                {['antipasto', 'primo', 'secondo', 'dolce'].map((section) => (
                  <div key={section}>
                    <h2 className="text-2xl font-bold mb-6">{t(`categories.${section}`)}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="flex justify-between items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div>
                            <h3 className="font-semibold">
                              {t(`${activeCategory}.${section}.${item}.name`)}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {t(`${activeCategory}.${section}.${item}.description`)}
                            </p>
                          </div>
                          <span className="font-medium">
                            ¥{t(`${activeCategory}.${section}.${item}.price`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'dinner' && (
              <div className="space-y-12">
                {['antipasto', 'primo', 'secondo', 'dolce'].map((section) => (
                  <div key={section}>
                    <h2 className="text-2xl font-bold mb-6">{t(`categories.${section}`)}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="flex justify-between items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div>
                            <h3 className="font-semibold">
                              {t(`${activeCategory}.${section}.${item}.name`)}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {t(`${activeCategory}.${section}.${item}.description`)}
                            </p>
                          </div>
                          <span className="font-medium">
                            ¥{t(`${activeCategory}.${section}.${item}.price`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeCategory === 'drinks' && (
              <div className="space-y-12">
                {['wine', 'beer', 'soft', 'cocktail'].map((section) => (
                  <div key={section}>
                    <h2 className="text-2xl font-bold mb-6">{t(`drinks.${section}.title`)}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1, 2, 3, 4].map((item) => (
                        <div
                          key={item}
                          className="flex justify-between items-start p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div>
                            <h3 className="font-semibold">
                              {t(`drinks.${section}.${item}.name`)}
                            </h3>
                            <p className="text-gray-600 text-sm mt-1">
                              {t(`drinks.${section}.${item}.description`)}
                            </p>
                          </div>
                          <span className="font-medium">
                            ¥{t(`drinks.${section}.${item}.price`)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 