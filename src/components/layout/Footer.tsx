import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

type FooterItem = {
  label: string;
  value?: string;
  href?: string;
};

type FooterSection = {
  title: string;
  items: FooterItem[];
};

export default function Footer() {
  const t = useTranslations('footer');

  const footerSections: FooterSection[] = [
    {
      title: t('sections.hours.title'),
      items: [
        { label: t('sections.hours.lunch'), value: t('sections.hours.lunchTime') },
        { label: t('sections.hours.dinner'), value: t('sections.hours.dinnerTime') },
        { label: t('sections.hours.closed'), value: t('sections.hours.closedDays') },
      ],
    },
    {
      title: t('sections.contact.title'),
      items: [
        { label: t('sections.contact.address'), value: t('sections.contact.addressValue') },
        { label: t('sections.contact.phone'), value: t('sections.contact.phoneValue') },
        { label: t('sections.contact.email'), value: t('sections.contact.emailValue') },
      ],
    },
    {
      title: t('sections.social.title'),
      items: [
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'Facebook', href: 'https://facebook.com' },
        { label: 'Twitter', href: 'https://twitter.com' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <div>
                        <span className="text-gray-400">{item.label}: </span>
                        <span className="text-gray-300">{item.value}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Trattoria Bella Vista. {t('copyright')}
            </p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {t('privacy')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  >
                    {t('terms')}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 