import { PropsWithChildren } from 'react';
import '@/styles/_main.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Gloock } from 'next/font/google';
import { Metadata } from 'next';
import { siteName } from '@/data/content';

const gloock = Gloock({
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-gloock',
});

const metaTitle = siteName;
const metaDescription =
    'Nápoles Cucina Italiana — cocina italiana en Berazategui. Pastas artesanales, pizza napolitana y un ambiente cálido en Zona Sur.';
const metaImage = '/thumbnail.jpg';

export const metadata: Metadata = {
    alternates: {
        canonical: '/',
    },
    title: metaTitle,
    description: metaDescription,
    openGraph: {
        title: metaTitle,
        description: metaDescription,
        type: 'website',
        images: [metaImage],
        siteName: metaTitle,
    },
    twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        images: [metaImage],
    },
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="es">
            <body
                className={`${gloock.variable} font-Helvetica overflow-x-hidden bg-appBody text-appText`}
            >
                <div className="overflow-hidden flex flex-col min-h-screen">
                    <Header />
                    <main className="flex flex-col flex-1">{children}</main>
                    <Footer />
                    <WhatsAppFloat />
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
