import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display, Sansita_Swashed } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/shared';
import { domAnimation, LazyMotion } from 'motion/react';

// Налаштування шрифтів
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const sansita = Sansita_Swashed({ subsets: ['latin'], variable: '--font-sansita' });

// Ідеальні налаштування Viewport для mobile-first
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5, // Дозволяємо зум для accessibility (доступності)
    themeColor: '#FFFBF7', // Колір cream-50, щоб статус-бар браузера зливався з фоном
    colorScheme: 'light',
};

// Максимально розширена SEO Метадата
export const metadata: Metadata = {
    metadataBase: new URL('https://foodlounge.cz'), // Базовий URL для правильних відносних посилань
    title: {
        default: 'Food & Lounge by Shi-Shi | Asian Fusion & Shisha Bar in Prague',
        template: '%s | Food & Lounge by Shi-Shi',
    },
    description:
        'Discover a unique Asian fusion restaurant and relaxing shisha lounge at Francouzská 75/4, Vinohrady, Prague. Enjoy refreshing cocktails, delicious food, and premium hookah in a cozy atmosphere.',
    keywords: [
        'Asian fusion Prague',
        'Shisha bar Vinohrady',
        'Cocktail bar Prague',
        'Hookah lounge Prague',
        'Food & Lounge by Shi-Shi',
        'Prague restaurant',
        'Lounge bar Francouzská',
    ],
    authors: [{ name: 'Max Poshyvak', url: 'https://github.com/MaxPoshyvak' }],
    creator: 'Max Poshyvak',
    publisher: 'Food & Lounge by Shi-Shi',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US', // Можна додати cs_CZ для чеської версії пізніше
        url: 'https://foodlounge.cz',
        title: 'Food & Lounge by Shi-Shi | Asian Fusion & Shisha Bar',
        description:
            'Unique Asian fusion restaurant and relaxing shisha lounge in Vinohrady, Prague. Refreshing cocktails, delicious food, and premium hookah.',
        siteName: 'Food & Lounge by Shi-Shi',
        // Тут в майбутньому варто додати посилання на красиве OG-зображення
        // images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Food & Lounge Interior' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Food & Lounge by Shi-Shi | Prague',
        description: 'Asian fusion restaurant and relaxing shisha lounge in Vinohrady, Prague.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://foodlounge.cz',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <LazyMotion features={domAnimation} strict>
            <html lang="en" className={`${inter.variable} ${playfair.variable} ${sansita.variable}`}>
                <body className="min-h-screen bg-white text-brown-900 font-sans antialiased selection:bg-coffee-200 selection:text-brown-900 flex flex-col">
                    <Header />
                    <main className="grow w-full">{children}</main>
                    <Footer />
                </body>
            </html>
        </LazyMotion>
    );
}
