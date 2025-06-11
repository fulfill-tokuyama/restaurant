import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const reservationSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(1, '電話番号を入力してください'),
  date: z.string().min(1, '日付を選択してください'),
  time: z.string().min(1, '時間を選択してください'),
  guests: z.number().min(1).max(20),
  seating: z.enum(['indoor', 'terrace', 'no-preference']),
  specialRequests: z.string().optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

export default function Reservation() {
  const t = useTranslations('reservation');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ReservationFormData>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: ReservationFormData) => {
    try {
      // TODO: Implement reservation submission
      console.log(data);
    } catch (error) {
      console.error('Reservation submission failed:', error);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <h1 className="text-3xl font-bold text-center mb-8">{t('title')}</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t('form.phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    {t('form.date')}
                  </label>
                  <input
                    type="date"
                    id="date"
                    {...register('date')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    {t('form.time')}
                  </label>
                  <select
                    id="time"
                    {...register('time')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                  >
                    <option value="">{t('form.selectTime')}</option>
                    {['11:30', '12:00', '12:30', '13:00', '13:30', '14:00'].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Number of Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                  {t('form.guests')}
                </label>
                <input
                  type="number"
                  id="guests"
                  min="1"
                  max="20"
                  {...register('guests', { valueAsNumber: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
                {errors.guests && (
                  <p className="mt-1 text-sm text-red-600">{errors.guests.message}</p>
                )}
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {t('form.seating')}
                </label>
                <div className="mt-2 space-y-2">
                  {[
                    { value: 'indoor', label: t('form.seatingOptions.indoor') },
                    { value: 'terrace', label: t('form.seatingOptions.terrace') },
                    { value: 'no-preference', label: t('form.seatingOptions.noPreference') },
                  ].map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        id={option.value}
                        value={option.value}
                        {...register('seating')}
                        className="h-4 w-4 text-primary-red focus:ring-primary-red border-gray-300"
                      />
                      <label
                        htmlFor={option.value}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.seating && (
                  <p className="mt-1 text-sm text-red-600">{errors.seating.message}</p>
                )}
              </div>

              {/* Special Requests */}
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700">
                  {t('form.specialRequests')}
                </label>
                <textarea
                  id="specialRequests"
                  rows={4}
                  {...register('specialRequests')}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-red focus:ring-primary-red"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red disabled:opacity-50"
                >
                  {isSubmitting ? t('form.submitting') : t('form.submit')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 