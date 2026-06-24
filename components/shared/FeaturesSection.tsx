'use client';

import Image from 'next/image';
import { m } from 'motion/react';
import { MapPin, Wine, Wind, Sparkles } from 'lucide-react';

export function FeaturesSection() {
    return (
        <section className="w-full bg-cream-50 py-20 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок (Точно як "Coffee made easy") */}
                <m.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 lg:mb-24">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-brown-900">Lounge made easy</h2>
                </m.div>

                {/* Головна сітка: Лівий блок - Центр (Фото) - Правий блок */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-center">
                    {/* Ліва колонка (2 елементи, текст строго по центру) */}
                    <div className="flex flex-col gap-12 sm:gap-16 order-2 lg:order-1">
                        <m.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col items-center text-center">
                            <MapPin className="w-10 h-10 text-brown-900 mb-4" strokeWidth={1.5} />
                            <h3 className="text-lg font-bold text-brown-900 mb-2">Central Location</h3>
                            <p className="text-sm text-brown-800 max-w-xs leading-relaxed">
                                Located in the heart of Vinohrady, making it the perfect spot to drop by and relax.
                            </p>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center text-center">
                            <Wind className="w-10 h-10 text-brown-900 mb-4" strokeWidth={1.5} />
                            <h3 className="text-lg font-bold text-brown-900 mb-2">Premium Shisha</h3>
                            <p className="text-sm text-brown-800 max-w-xs leading-relaxed">
                                Thick, flavorful smoke with top-tier blends served in high-quality hookahs.
                            </p>
                        </m.div>
                    </div>

                    {/* Центральна колонка (Фото з м'яким кругом на фоні) */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="relative flex justify-center items-center order-1 lg:order-2 py-10">
                        {/* Той самий світло-рожевий/кремовий круг на фоні */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-rose-50 rounded-full z-0"></div>

                        {/* Левітуюче зображення */}
                        <div className="relative z-10 w-52 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-96 drop-shadow-xl hover:-translate-y-2 transition-transform duration-500">
                            {/* ТУТ МАЄ БУТИ ФОТО: PNG коктейлю, кальяну або страви */}
                            <Image
                                src="/discovers/asian_food.png"
                                alt="Signature Lounge Product"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </m.div>

                    {/* Права колонка (2 елементи, текст строго по центру) */}
                    <div className="flex flex-col gap-12 sm:gap-16 order-3">
                        <m.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col items-center text-center">
                            <Wine className="w-10 h-10 text-brown-900 mb-4" strokeWidth={1.5} />
                            <h3 className="text-lg font-bold text-brown-900 mb-2">Signature Drinks</h3>
                            <p className="text-sm text-brown-800 max-w-xs leading-relaxed">
                                Handcrafted cocktails made by professional mixologists using fresh ingredients.
                            </p>
                        </m.div>

                        <m.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-center text-center">
                            <Sparkles className="w-10 h-10 text-brown-900 mb-4" strokeWidth={1.5} />
                            <h3 className="text-lg font-bold text-brown-900 mb-2">Cozy Vibe</h3>
                            <p className="text-sm text-brown-800 max-w-xs leading-relaxed">
                                A relaxing atmosphere with comfortable seating to help you unwind and recharge.
                            </p>
                        </m.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
