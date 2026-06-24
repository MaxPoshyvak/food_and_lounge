'use client';

import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { m } from 'motion/react';

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-soft-pink pt-32 pb-24 lg:pt-40 lg:pb-32">
            {/* Фонове зображення — LCP кандидат, тому без анімації появи та з priority */}
            <Image
                src="/bg_image.png"
                alt="Background"
                width={1920}
                height={1080}
                priority
                className="absolute inset-0 h-full w-full object-cover opacity-6"
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Ліва колонка */}
                    <div className="flex flex-col justify-center text-center lg:text-left z-10">
                        {/* Заголовок виїжджає ЗЛІВА */}
                        <m.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="text-5xl font-medium tracking-tight text-brown-900 sm:text-6xl xl:text-7xl leading-tight">
                            Enhance Your <br className="hidden lg:block" />
                            <span className="text-coffee-500">Lounge Experience</span>
                        </m.h1>

                        {/* Текст виїжджає ЗЛІВА з невеликою затримкою */}
                        <m.p
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                            className="mt-6 max-w-2xl mx-auto lg:mx-0 text-lg text-brown-800 leading-relaxed">
                            Discover the perfect balance of Asian fusion flavors, refreshing signature cocktails, and
                            premium shisha in a cozy atmosphere right in Vinohrady.
                        </m.p>

                        {/* Кнопки виїжджають ЗНИЗУ */}
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
                            <Link
                                href="/reservation"
                                className="inline-flex items-center justify-center rounded-full bg-coffee-500 px-8 py-3.5 text-base font-semibold text-cream-50 shadow-sm hover:bg-coffee-600 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:ring-offset-2 focus:ring-offset-cream-50">
                                Book a Table
                            </Link>

                            <Link
                                href="/menu"
                                className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-3.5 text-base font-semibold text-brown-900 hover:text-coffee-600 group transition-colors focus:outline-none">
                                Explore Menu
                                {/* Анімація СТРІЛОЧКИ — постійний м'який рух вправо-вліво */}
                                <m.span
                                    animate={{ x: [0, 6, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                                    <ArrowRight
                                        className="ml-2 h-5 w-5 text-brown-900 group-hover:text-coffee-600 transition-colors"
                                        aria-hidden="true"
                                    />
                                </m.span>
                            </Link>
                        </m.div>

                        {/* Блок з відгуками з'являється ЗНИЗУ */}
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                            className="mt-14 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <div className="flex -space-x-4">
                                {/* ... Ваш код аватарок залишається без змін ... */}
                                <div className="inline-block h-12 w-12 rounded-full border-2 border-cream-50 bg-cream-200 overflow-hidden">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/avatars/guest1.avif"
                                        alt="Guest"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="inline-block h-12 w-12 rounded-full border-2 border-cream-50 bg-cream-200 overflow-hidden">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/avatars/guest2.avif"
                                        alt="Guest"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="inline-block h-12 w-12 rounded-full border-2 border-cream-50 bg-cream-200 overflow-hidden">
                                    <Image
                                        width={100}
                                        height={100}
                                        src="/avatars/guest3.avif"
                                        alt="Guest"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream-50 bg-coffee-400 text-sm font-bold text-cream-50">
                                    160+
                                </div>
                            </div>

                            <div className="flex flex-col items-center sm:items-start">
                                <div className="flex items-center gap-1">
                                    <Star className="h-5 w-5 fill-coffee-500 text-coffee-500" />
                                    <span className="font-bold text-brown-900 text-lg">4.7 / 5</span>
                                </div>
                                <span className="text-sm font-medium text-brown-800">Happy Customers on Google</span>
                            </div>
                        </m.div>
                    </div>

                    {/* Права колонка */}
                    <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center items-center mt-10 lg:mt-0">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cream-200 rounded-full blur-3xl opacity-60"></div>

                        {/* Головне фото — initial={false} рятує LCP. CSS-транзиції видалені, щоб не блокувати motion */}
                        <m.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                            className="relative z-10 w-64 h-80 sm:w-80 sm:h-96">
                            <Image
                                width={700}
                                height={700}
                                src="/hero_image.webp"
                                alt="Signature Cocktail and Shisha"
                                className="w-full h-full object-contain drop-shadow-2xl"
                                priority
                            />
                        </m.div>

                        <div className="absolute top-10 right-0 sm:-right-4 lg:-right-8 z-20 hidden sm:flex flex-col gap-6">
                            {/* Бейджик 1 виїжджає СПРАВА */}
                            <m.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                                className="bg-cream-50 bg-opacity-90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-cream-200">
                                <p className="text-xl font-bold text-brown-900">+30</p>
                                <p className="text-xs font-medium text-brown-800 uppercase tracking-wider">Cocktails</p>
                            </m.div>

                            {/* Бейджик 2 виїжджає СПРАВА з більшою затримкою */}
                            <m.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                                className="bg-cream-50 bg-opacity-90 backdrop-blur-sm px-5 py-3 rounded-2xl shadow-sm border border-cream-200 ml-8">
                                <p className="text-xl font-bold text-brown-900">+50</p>
                                <p className="text-xs font-medium text-brown-800 uppercase tracking-wider">
                                    Shisha Flavors
                                </p>
                            </m.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
