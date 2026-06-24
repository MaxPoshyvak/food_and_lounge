'use client';

import Image from 'next/image';
import { m } from 'motion/react';

export function SubscribeSection() {
    return (
        // 1. ПРИБРАЛИ overflow-hidden. Додали relative та z-20.
        // Також прибрали нижній padding (pb), щоб футер починався одразу під цим блоком.
        <section className="relative z-20 w-full bg-white pt-16 sm:pt-24">
            {/* 2. translate-y-1/2 зсуває весь контейнер рівно на половину його висоти вниз */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 translate-y-15">
                {/* Головний контейнер-картка */}
                <m.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    // 3. Додали сильну тінь (shadow-2xl), щоб картка візуально "відірвалася" від темного футера
                    className="relative w-full overflow-hidden rounded-3xl bg-cream-200 shadow-2xl">
                    {/* Фонове зображення */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-6 mix-blend-multiply">
                        <Image src="/bg_image.png" alt="Background pattern" fill className="object-cover" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
                        {/* Ліва частина: Заголовок */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brown-900 leading-tight">
                                Subscribe to get <br className="hidden lg:block" />
                                <span className="text-coffee-500">20% discount</span> price
                            </h2>
                            <p className="mt-4 text-brown-800 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                                Be the first to know about our new Asian fusion dishes, signature cocktails, and special
                                weekend events.
                            </p>
                        </div>

                        {/* Права частина: Форма підписки */}
                        <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0 md:ml-auto">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                // Зміна напрямку flex: колонка на мобільних, рядок на sm+
                                // Заокруглення: 2xl на мобільних, повне коло на sm+
                                className="flex flex-col sm:flex-row w-full rounded-2xl sm:rounded-full bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-coffee-400 focus-within:ring-offset-2 focus-within:ring-offset-cream-200 transition-all duration-300 gap-2 sm:gap-0">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    required
                                    // w-full для мобілки, текст по центру на мобільному і зліва на десктопі
                                    className="w-full flex-1 bg-transparent px-4 py-3 sm:py-2 text-center sm:text-left text-base text-brown-900 placeholder-brown-400 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    // w-full на мобільному. shrink-0 гарантує, що кнопка ніколи не сплюснеться, якщо email дуже довгий
                                    className="w-full sm:w-auto shrink-0 rounded-xl sm:rounded-full bg-brown-900 px-6 py-3.5 sm:px-8 sm:py-3.5 text-base font-semibold text-cream-50 hover:bg-coffee-600 active:scale-95 transition-all duration-300 focus:outline-none">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}
