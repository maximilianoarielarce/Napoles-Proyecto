import 'swiper/css';
import { Metadata } from 'next';
import AboutHero from '@/components/about-page/Hero';
import AboutTextImage from '@/components/about-page/TextImage';
import { aboutData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${aboutData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        openGraph: { title: pageTitle },
        twitter: { title: pageTitle },
    };
}

const AboutUsPage: React.FC = () => {
    return (
        <div>
            <AboutHero {...aboutData.hero} />
            <AboutTextImage sections={aboutData.sections} />
        </div>
    );
};

export default AboutUsPage;
