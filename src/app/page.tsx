import HomeHero from '@/components/home-page/Hero';
// import HomeMenu from '@/components/home-page/Menu';
import HomeSeasons from '@/components/home-page/Seasons';
import HomeAmbience from '@/components/home-page/Ambience';
// import HomeSpecials from '@/components/home-page/Specials';
import HomeEvents from '@/components/home-page/Events';
import HomeTestimonials from '@/components/home-page/Testimonials';
import 'swiper/css';
import { Metadata } from 'next';
import { homeData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${homeData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        openGraph: { title: pageTitle },
        twitter: { title: pageTitle },
    };
}

const HomePage: React.FC = () => {
    return (
        <div>
            <HomeHero {...homeData.hero} />
           {/*  <HomeMenu {...homeData.menuSection} /> */}
            <HomeSeasons {...homeData.seasonsSection} />
            <HomeAmbience {...homeData.ambienceSection} />
           {/*  <HomeSpecials {...homeData.specialsSection}
                items={foodItemsData}
            /> */}
            <HomeEvents {...homeData.eventsSection} />
            <HomeTestimonials {...homeData.testimonialsSection} />
        </div>
    );
};

export default HomePage;
