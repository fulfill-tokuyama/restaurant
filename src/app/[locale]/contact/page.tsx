import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function Contact() {
  const t = useTranslations('contact');

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-primary-red text-white rounded-md font-semibold hover:bg-red-700 transition-colors"
              >
                {t('form.submit')}
              </button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 