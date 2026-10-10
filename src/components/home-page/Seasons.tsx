import React from 'react';
import RichText from '@/components/RichText';
import HomePageDivider from '@/components/home-page/Divider';
import LocalImage from '@/components/LocalImage';

interface Season {
    title: string;
    subtitle?: string;
    slug: string;
    cover_image: string;
    pdf_url?: string;
}

interface Props {
    title: string;
    description: string;
    seasons: Season[];
}

const HomeSeasons: React.FC<Props> = ({ title, description, seasons }) => {
    return (
        <section id="menu">
            <div className="container">
                <div className="flex flex-col items-center mb-8 lg:mb-[88px]">
                    <div className="text-xs leading-none mb-2.5 lg:text-base lg:leading-none lg:mb-[14px]">
                        [ 1 ]
                    </div>
                    <h2 className="text-lg leading-none uppercase font-Gloock mb-4 lg:text-5xl lg:leading-none lg:mb-6">
                        {title}
                    </h2>
                    <RichText
                        html={description}
                        className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-700 uppercase max-w-[745px] mx-auto lg:text-base lg:leading-[1.3]"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {seasons.map((season, index) => (
                    <div
                        key={index}
                        className="flex relative"
                    >
                        <div className="container">
                            <div className="relative z-10 flex flex-col items-center justify-center text-center py-12 min-h-[200px] lg:aspect-[1.73]">
                                <h3 className="text-xl leading-none font-Gloock text-white uppercase lg:text-[32px] lg:leading-none">
                                    {season.title}
                                </h3>
                                {season.subtitle && (
                                    <span className="mt-2 max-w-[280px] text-xs leading-[1.2] text-white/90 lg:text-sm">
                                        ({season.subtitle})
                                    </span>
                                )}
                            </div>
                            <LocalImage
                                src={season.cover_image}
                                alt={season.title}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                            {season.pdf_url && (
                                <a
                                    href={season.pdf_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Abrir menú de ${season.title} en una nueva pestaña`}
                                    className="absolute inset-0 z-20 cursor-pointer"
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <HomePageDivider />
        </section>
    );
};

export default HomeSeasons;
