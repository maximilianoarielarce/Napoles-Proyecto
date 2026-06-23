import React from 'react';
import RichText from '@/components/RichText';
import LocalImage from '@/components/LocalImage';

interface EventCardData {
    title: string;
    description: string;
    date: string;
    cover_image: string;
}

interface Props {
    card: EventCardData;
}

export const EventCard: React.FC<Props> = ({ card }) => {
    return (
        <article className="px-6 py-8 rounded-2xl bg-[#EDEBE1]">
            <LocalImage
                src={card.cover_image}
                alt={card.title}
                className="object-cover aspect-[1.25] w-full rounded-2xl overflow-hidden mb-4 lg:aspect-[1.77] lg:mb-6"
            />
            <div className="text-xs leading-none tracking-[-0.41px] text-appGray-600 uppercase mb-2 lg:text-base lg:leading-none lg:mb-3">
                {card.date}
            </div>
            <h3 className="leading-none font-Gloock mb-[14px] lg:text-[32px] lg:leading-none lg:mb-6">
                {card.title}
            </h3>
            <RichText
                html={card.description}
                className="text-sm leading-[1.3] tracking-[-0.41px] text-appGray-300 lg:text-xl lg:leading-none"
            />
        </article>
    );
};
