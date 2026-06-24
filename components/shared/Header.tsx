'use client';

import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import Link from 'next/link';
import { m, AnimatePresence } from 'motion/react';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Блокування скролу сторінки, коли мобільне меню відкрите
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Варіанти анімації для батьківського контейнера меню (Десктоп)
    const navContainerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: 'easeOut' },
        },
    };

    // Варіанти анімації для повноекранного мобільного меню
    const mobileMenuVariants = {
        hidden: { opacity: 0, y: '-100%' },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1, delayChildren: 0.2 },
        },
        exit: {
            opacity: 0,
            y: '-10%',
            transition: { duration: 0.4, ease: 'easeIn' },
        },
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    // Функція для закриття меню при кліку на посилання
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            {/* Головний Header (залишається незмінним, z-40 щоб мобільне меню його перекривало) */}
            <header className="fixed top-0 z-40 w-full bg-transparent bg-opacity-90 backdrop-blur-sm transition-colors">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Логотип */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="flex items-center">
                        <Link href="/" className="flex items-center focus:outline-none" onClick={closeMobileMenu}>
                            <span className="font-sansita text-2xl font-bold tracking-wide leading-none text-coffee-500 hover:text-coffee-600 transition-colors">
                                Food & <br /> Lounge
                            </span>
                        </Link>
                    </m.div>

                    {/* Центральна навігація (Десктоп) */}
                    <m.nav
                        variants={navContainerVariants}
                        initial="hidden"
                        animate="show"
                        className="hidden md:flex items-center space-x-10 lg:space-x-14">
                        <m.div variants={navItemVariants}>
                            <Link
                                href="/"
                                className="text-base font-medium text-brown-900 hover:text-coffee-500 transition-colors">
                                Home
                            </Link>
                        </m.div>

                        <m.div variants={navItemVariants}>
                            <Link
                                href="/menu"
                                className="text-base font-medium text-brown-900 hover:text-coffee-500 transition-colors">
                                Menu
                            </Link>
                        </m.div>

                        <m.div variants={navItemVariants}>
                            <Link
                                href="/about"
                                className="text-base font-medium text-brown-900 hover:text-coffee-500 transition-colors">
                                About Us
                            </Link>
                        </m.div>
                    </m.nav>

                    {/* Права частина: Кнопка та Гамбургер */}
                    <div className="flex items-center justify-end">
                        <m.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
                            <Link
                                href="/reservation"
                                className="hidden md:inline-flex items-center justify-center rounded-full bg-coffee-500 px-7 py-2.5 text-sm font-semibold tracking-wide text-cream-50 shadow-sm hover:bg-coffee-600 hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:ring-offset-2 focus:ring-offset-cream-50">
                                Book a Table
                            </Link>
                        </m.div>

                        {/* Кнопка Гамбургера */}
                        <m.button
                            initial={{ opacity: 0, rotate: -90 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            type="button"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="md:hidden p-2 -mr-2 text-brown-900 hover:text-coffee-500 transition-colors focus:outline-none"
                            aria-label="Відкрити меню">
                            <MenuIcon className="h-7 w-7" aria-hidden="true" />
                        </m.button>
                    </div>
                </div>
            </header>

            {/* Повноекранне мобільне меню */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <m.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="fixed inset-0 z-50 flex flex-col bg-cream-50 px-4 py-6 sm:px-6">
                        {/* Верхня панель мобільного меню (Логотип та кнопка закриття) */}
                        <div className="flex items-center justify-between">
                            <Link href="/" className="flex items-center focus:outline-none" onClick={closeMobileMenu}>
                                <span className="font-sansita text-2xl font-bold tracking-wide leading-none text-coffee-500 hover:text-coffee-600 transition-colors">
                                    Food & <br /> Lounge
                                </span>
                            </Link>

                            <button
                                type="button"
                                onClick={closeMobileMenu}
                                className="p-2 -mr-2 text-brown-900 hover:text-coffee-500 transition-colors focus:outline-none"
                                aria-label="Закрити меню">
                                <X className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>

                        {/* Список посилань */}
                        <div className="mt-20 flex flex-1 flex-col items-center justify-center space-y-10">
                            <m.div variants={mobileLinkVariants}>
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className=" text-4xl font-bold text-brown-900 hover:text-coffee-500 transition-colors">
                                    Home
                                </Link>
                            </m.div>

                            <m.div variants={mobileLinkVariants}>
                                <Link
                                    href="/menu"
                                    onClick={closeMobileMenu}
                                    className=" text-4xl font-bold text-brown-900 hover:text-coffee-500 transition-colors">
                                    Menu
                                </Link>
                            </m.div>

                            <m.div variants={mobileLinkVariants}>
                                <Link
                                    href="/about"
                                    onClick={closeMobileMenu}
                                    className="text-4xl font-bold text-brown-900 hover:text-coffee-500 transition-colors">
                                    About Us
                                </Link>
                            </m.div>

                            {/* Кнопка "Book a Table" у мобільному меню */}
                            <m.div variants={mobileLinkVariants} className="pt-8">
                                <Link
                                    href="/reservation"
                                    onClick={closeMobileMenu}
                                    className="inline-flex w-full items-center justify-center rounded-full bg-coffee-500 px-10 py-4 text-lg font-semibold tracking-wide text-cream-50 shadow-md hover:bg-coffee-600 transition-all focus:outline-none">
                                    Book a Table
                                </Link>
                            </m.div>
                        </div>

                        {/* Нижній колонтитул мобільного меню (опціонально для краси) */}
                        <m.div
                            variants={mobileLinkVariants}
                            className="mt-auto pb-8 text-center text-sm text-brown-800">
                            Francouzská 75/4, Praha 2 <br />
                            <a href="tel:+420728964095" className="text-coffee-500 font-semibold mt-2 inline-block">
                                +420 728 964 095
                            </a>
                        </m.div>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
