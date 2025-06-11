import { useTranslations } from 'next-intl';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';

export default function News() {
  const t = useTranslations('news');
  // 仮のニュースデータ
  const newsList = [
    {
      date: '2024-06-01',
      title: t('items.0.title'),
      description: t('items.0.description'),
    },
    {
      date: '2024-05-20',
      title: t('items.1.title'),
      description: t('items.1.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
          <div className="space-y-8">
            {newsList.map((news, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-6"
              >
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-700">{news.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 