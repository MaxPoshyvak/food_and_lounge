'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';
import { m } from 'motion/react';

const products = [
    {
        id: 1,
        category: 'COCKTAILS',
        title: 'Signature Gin Fizz',
        price: '220 CZK',
        bgClass: 'bg-amber-50', // Жовтуватий фон, як на 1-й картці
        imageSrc: '/products/product1.png',
    },
    {
        id: 2,
        category: 'PREMIUM SHISHA',
        title: 'Dark Leaf Blend',
        price: '450 CZK',
        bgClass: 'bg-emerald-50', // Зеленуватий фон, як на 2-й картці
        imageSrc: '/products/product2.webp',
    },
    {
        id: 3,
        category: 'ASIAN FUSION',
        title: 'Salmon Poke Bowl',
        price: '320 CZK',
        bgClass: 'bg-stone-100', // Бежевий фон, як на 3-й картці
        imageSrc: '/products/product3.png',
    },
    {
        id: 4,
        category: 'DESSERTS',
        title: 'Matcha Cheesecake',
        price: '180 CZK',
        bgClass: 'bg-orange-50', // Рожево-помаранчевий фон, як на 4-й картці
        imageSrc: '/products/product4.png',
    },
];

export function PopularProducts() {
    // Анімація для заголовків
    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    // Анімація для контейнера карток (каскадна поява)
    const gridVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    // Анімація для кожної окремої картки
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section className="w-full bg-white py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Заголовок секції */}
                <m.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={headerVariants}
                    className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-brown-900 sm:text-5xl">Explore our favorites</h2>
                    <p className="mt-4 text-lg text-brown-800">
                        Our delectable options include signature cocktails, premium shisha blends, Asian fusion bowls,
                        and exquisite desserts.
                    </p>
                </m.div>

                {/* Сітка продуктів */}
                <m.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={gridVariants}
                    // Великий gap-y на мобільних потрібен, щоб зображення, які "вилізають" вгору, не перекривали картку вище
                    className="mt-32 grid grid-cols-1 gap-y-28 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-32 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-8">
                    {products.map((product) => (
                        <m.div
                            key={product.id}
                            variants={cardVariants}
                            className={`group relative flex flex-col rounded-3xl px-6 pb-6 pt-28 ${product.bgClass} shadow-sm hover:shadow-md transition-shadow duration-300`}>
                            {/* Зображення, що виступає за верхній край картки */}
                            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 drop-shadow-xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-5">
                                {/* ТУТ МАЮТЬ БУТИ ФОТО:
                                    PNG-зображення без фону (прозорі). Вони будуть круто "висіти" над карткою. 
                                */}
                                <Image
                                    src={product.imageSrc}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="h-full w-full object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Контент картки */}
                            <div className="text-center mt-2">
                                <span className="text-xs font-bold tracking-widest text-brown-800 uppercase">
                                    {product.category}
                                </span>
                            </div>

                            <div className="mt-6 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="text-xs text-brown-800">Title:</span>
                                    <span className="text-sm font-bold text-brown-900 truncate max-w-[140px]">
                                        {product.title}
                                    </span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs text-brown-800">Price:</span>
                                    <span className="text-sm font-bold text-brown-900">{product.price}</span>
                                </div>
                            </div>

                            {/* Кнопки "Explore" та "Like" */}
                            <div className="mt-6 flex items-center justify-between">
                                <Link
                                    href="/menu"
                                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brown-900 shadow-sm border border-transparent hover:border-coffee-200 hover:text-coffee-600 transition-all focus:outline-none">
                                    Explore
                                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
                                </Link>

                                <button
                                    type="button"
                                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm border border-transparent text-brown-900 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all focus:outline-none"
                                    aria-label="Add to favorites">
                                    <Heart
                                        className="h-5 w-5 transition-transform active:scale-75"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        </m.div>
                    ))}
                </m.div>
            </div>
        </section>
    );
}
