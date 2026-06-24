import { DiscoverSection, FeaturesSection, Footer, Hero, PopularProducts, SubscribeSection } from '@/components/shared';

export default function Home() {
    return (
        <>
            <Hero />
            <PopularProducts />
            <DiscoverSection />
            <FeaturesSection />
            <SubscribeSection />
        </>
    );
}
