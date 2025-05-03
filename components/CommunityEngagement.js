// components/CommunityEngagement.js
import { blogTitleStyle, sideColSubtext } from '@/constants/styles';
import Image from 'next/image';
import Link from 'next/link';

export default function CommunityEngagement() {
    const engagements = [
        {
            id: 1,
            title: "Conference Teaching Highlights",
            imagePath: "/assets/ConfTeachHighlight/thumbnail.png",
            pagePath: "/conference-teaching-highlights"
        },
        {
            id: 2,
            title: "Stanford GCafé Bunnies",
            imagePath: "/assets/GCafe/thumbnail.png",
            pagePath: "/g-cafe-bunnies"
        },
        {
            id: 3,
            title: "Self-published Comic Booklet: PixelPals",
            imagePath: "/assets/ComicBooklet/thumbnail.png",
            pagePath: "/comic-booklet"
        }
    ];

    return (
        <div>
            <h2 className="text-lg font-medium italic mb-1">Community Engagement</h2>
            <p className={sideColSubtext}>In my side quests as an artist, I explore ways to connect people through visuals. </p>

            <div className="space-y-4 mt-2">
                {engagements.map((item) => (
                    <div key={item.id} className="mb-3">
                        <div className="relative w-full mb-1 aspect-video">
                            <Image
                                src={item.imagePath}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <Link href={item.pagePath} className={blogTitleStyle}>↳{item.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}