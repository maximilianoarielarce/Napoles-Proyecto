import 'swiper/css';
import { Metadata } from 'next';
import MenuMeals from '@/components/menu-page/Meals';
import { Suspense } from 'react';
import { foodItemsData, menuData, siteName } from '@/data/content';

export async function generateMetadata(): Promise<Metadata> {
    const pageTitle = `${menuData.seo.title} - ${siteName}`;

    return {
        title: pageTitle,
        openGraph: { title: pageTitle },
        twitter: { title: pageTitle },
    };
}

const MenuPage: React.FC = () => {
    return (
        <div>
            <Suspense>
                <MenuMeals
                    title={menuData.title}
                    meals={menuData.meals}
                    foodItems={foodItemsData}
                />
            </Suspense>
        </div>
    );
};

export default MenuPage;
