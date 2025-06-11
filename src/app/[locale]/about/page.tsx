import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh]">
          <Image
            src="/images/restaurant-exterior.svg"
            alt="Trattoria Bella Vista Exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white text-center"
            >
              {t('title')}
            </motion.h1>
          </div>
        </section>

        {/* Restaurant Info */}
        <section className="py-16 bg-cream-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold">{t('info.title')}</h2>
                <p className="text-gray-600">{t('info.description')}</p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{t('info.address.title')}</h3>
                    <p className="text-gray-600">{t('info.address.value')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('info.hours.title')}</h3>
                    <div className="text-gray-600">
                      <p>{t('info.hours.lunch')}</p>
                      <p>{t('info.hours.dinner')}</p>
                      <p>{t('info.hours.closed')}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('info.capacity.title')}</h3>
                    <p className="text-gray-600">{t('info.capacity.value')}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden"
              >
                <Image
                  src="/images/restaurant-interior.svg"
                  alt="Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.7479754683817!2d139.74324421525877!3d35.65858053757899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bbd9009ec09%3A0x481a93f0d2a409dd!2z5p2x5Lqs6YO95riv5Yy66KW_5Y-w5YyX!5e0!3m2!1sja!2sjp!4v1647881234567!5m2!1sja!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </section>

        {/* Parking Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-8">{t('parking.title')}</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-gray-600 mb-4">{t('parking.description')}</p>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-2">{t('parking.details.title')}</h3>
                  <p className="text-gray-600">{t('parking.details.value')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 