'use client';

import Link from 'next/link';
import { m, Variants } from 'motion/react';

// Чисті SVG-компоненти для соціальних мереж
const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

export function Footer() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <footer className="w-full bg-[#181513] relative z-10  bg-dark pt-30 pb-10">
            <m.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Головна сітка: Бренд + 4 колонки посилань/інфо */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
                    {/* Колонка 1: Бренд (Ширша за інші) */}
                    <m.div variants={itemVariants} className="flex flex-col lg:col-span-2 pr-0 lg:pr-10">
                        <Link href="/" className="flex items-center focus:outline-none">
                            <span className="font-sansita text-2xl font-bold tracking-wide leading-none text-coffee-500 hover:text-coffee-600 transition-colors">
                                Food & Lounge
                            </span>
                        </Link>
                        <p className="mt-6 text-sm text-cream-200 leading-relaxed">
                            Experience premium Asian fusion, signature cocktails, and relaxing shisha delivered with
                            top-tier service. Follow us for exclusive events, new flavors, and more!
                        </p>
                    </m.div>

                    {/* Колонка 2: Навігація */}
                    <m.div variants={itemVariants} className="flex flex-col">
                        <h3 className="font-bold text-cream-50 mb-6 text-base">Quick Links</h3>
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-sm text-cream-200 hover:text-coffee-400 transition-colors w-fit">
                                Home
                            </Link>
                            <Link
                                href="/menu"
                                className="text-sm text-cream-200 hover:text-coffee-400 transition-colors w-fit">
                                Menu
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm text-cream-200 hover:text-coffee-400 transition-colors w-fit">
                                About Us
                            </Link>
                            <Link
                                href="/reservation"
                                className="text-sm text-cream-200 hover:text-coffee-400 transition-colors w-fit">
                                Reservation
                            </Link>
                        </nav>
                    </m.div>

                    {/* Колонка 3: Контакти */}
                    <m.div variants={itemVariants} className="flex flex-col">
                        <h3 className="font-bold text-cream-50 mb-6 text-base">Contact Us</h3>
                        <ul className="flex flex-col space-y-4">
                            <li className="text-sm text-cream-200 leading-relaxed">
                                Francouzská 75/4, 120 00
                                <br />
                                Praha 2-Vinohrady
                            </li>
                            <li>
                                <a
                                    href="tel:+420728964095"
                                    className="text-sm text-cream-200 hover:text-coffee-400 transition-colors">
                                    +420 728 964 095
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@foodlounge.cz"
                                    className="text-sm text-cream-200 hover:text-coffee-400 transition-colors">
                                    info@foodlounge.cz
                                </a>
                            </li>
                        </ul>
                    </m.div>

                    {/* Колонка 4: Години роботи */}
                    <m.div variants={itemVariants} className="flex flex-col">
                        <h3 className="font-bold text-cream-50 mb-6 text-base">Hours</h3>
                        <ul className="flex flex-col space-y-4">
                            <li className="flex flex-col text-sm">
                                <span className="text-cream-200/70 mb-1">Mon - Fri</span>
                                <span className="text-cream-200">10:30 - 02:00</span>
                            </li>
                            <li className="flex flex-col text-sm">
                                <span className="text-cream-200/70 mb-1">Sat - Sun</span>
                                <span className="text-cream-200">11:00 - 02:00</span>
                            </li>
                        </ul>
                    </m.div>

                    {/* Колонка 5: Соціальні мережі (У стилі макета) */}
                    <m.div variants={itemVariants} className="flex flex-col">
                        <h3 className="font-bold text-cream-50 mb-6 text-base">Social media</h3>
                        <div className="flex space-x-3">
                            <a
                                href="https://instagram.com/foodloungebyshishi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded bg-cream-50 text-brown-900 hover:bg-coffee-500 hover:text-cream-50 transition-all duration-300 focus:outline-none"
                                aria-label="Instagram">
                                <InstagramIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="#"
                                className="flex h-9 w-9 items-center justify-center rounded bg-cream-50 text-brown-900 hover:bg-coffee-500 hover:text-cream-50 transition-all duration-300 focus:outline-none"
                                aria-label="Facebook">
                                <FacebookIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </m.div>
                </div>

                {/* Нижній бар (Копірайт) */}
                <m.div variants={itemVariants} className="mt-20 pt-8 border-t border-white/10 flex justify-center">
                    <p className="text-xs text-cream-200/60 text-center">
                        Copyright © {new Date().getFullYear()} Food & Lounge by Shi-Shi
                    </p>
                </m.div>
            </m.div>
        </footer>
    );
}
