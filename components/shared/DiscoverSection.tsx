'use client';

import Image from 'next/image';
import Link from 'next/link';
import { m } from 'motion/react';

export function DiscoverSection() {
    return (
        <section className="w-full bg-white py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Ліва колонка: Текст */}
                    <m.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="max-w-xl mx-auto text-center lg:text-left lg:mx-0">
                        <h2 className=" text-4xl font-bold text-brown-900 sm:text-5xl leading-tight mb-6">
                            Discover the <br className="hidden sm:block" /> perfect fusion
                        </h2>

                        <p className="text-lg text-brown-800 leading-relaxed mb-6">
                            Food & Lounge by Shi-Shi is a place that provides you with quality Asian fusion cuisine to
                            boost your energy and signature cocktails that{' '}
                            <strong className="font-semibold text-brown-900">help set the perfect mood</strong>. Having
                            a good dinner is nice, but enjoying it with premium shisha in a relaxing atmosphere is an
                            experience you won&apos;t forget.
                        </p>

                        <p className="text-lg text-brown-800 leading-relaxed mb-10">
                            We are a{' '}
                            <strong className="font-semibold text-brown-900">
                                lounge and shisha bar that provides
                            </strong>{' '}
                            you with top-tier relaxation to help you unwind after a long day in the heart of Vinohrady.
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center rounded-full bg-coffee-500 px-8 py-3.5 text-base font-semibold text-cream-50 shadow-sm hover:bg-coffee-600 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:ring-offset-2 focus:ring-offset-cream-50">
                            Learn More
                        </Link>
                    </m.div>

                    {/* Права колонка: Композиція з трьох зображень */}
                    <m.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        className="relative w-full max-w-md mx-auto aspect-square flex justify-center items-center mt-12 lg:mt-0">
                        {/* Декоративне коло на фоні (використано emerald-50 як на референсі) */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-emerald-50 rounded-full"></div>

                        {/* Лівий об'єкт (Нахилений вліво, на задньому плані) */}
                        <m.div
                            whileHover={{ y: -10, rotate: -12 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="absolute left-2 sm:left-6 top-0 w-32 sm:w-44 -rotate-12 drop-shadow-xl z-0">
                            {/* ТУТ МАЄ БУТИ ФОТО: Прозорий PNG. Наприклад: Кальян або високий келих */}
                            <Image
                                src="/discovers/vine.webp"
                                alt="Signature Drink"
                                width={200}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </m.div>

                        {/* Правий об'єкт (Нахилений вправо, на задньому плані) */}
                        <m.div
                            whileHover={{ y: -10, rotate: 12 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="absolute right-2 sm:right-6 top-1/4 w-32 sm:w-44 rotate-12 drop-shadow-xl z-0">
                            {/* ТУТ МАЄ БУТИ ФОТО: Прозорий PNG. Наприклад: Інший коктейль */}
                            <Image
                                src="/discovers/koktail.png"
                                alt="Asian Fusion Dish"
                                width={200}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </m.div>

                        {/* Центральний об'єкт (Прямий, найбільший, перекриває інші - z-10) */}
                        <m.div
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="absolute top-2/5 left-1/2 -translate-x-1/2 w-40 sm:w-53 drop-shadow-2xl z-10">
                            {/* ТУТ МАЄ БУТИ ФОТО: Прозорий PNG. Головний продукт, наприклад, найкращий коктейль закладу */}
                            <Image
                                src="/discovers/asian_food.png"
                                alt="Premium Shisha"
                                width={350}
                                height={450}
                                className="w-full h-auto object-contain"
                            />
                        </m.div>
                    </m.div>
                </div>
            </div>
        </section>
    );
}
