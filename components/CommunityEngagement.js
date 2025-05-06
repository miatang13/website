'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { blogTitleStyle, sideColSubtext } from '@/constants/styles';


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

    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
        viewport: { once: true, amount: 0.3 },
    });


    return (
        <div>
            <h2 className="text-lg font-medium italic mb-1">Community Engagement</h2>
            <p className={sideColSubtext}>In my side quests as an artist, I explore ways to connect people through visuals. </p>

            <div className="space-y-4 mt-2">
                {engagements.map((item, index) => {
                    return (
                        <motion.div
                            key={item.id}
                            {...fadeInProps(index * 0.1)}
                            className="mb-3"
                        >
                            <div className="relative w-full mb-1 aspect-video">
                                <Image
                                    src={item.imagePath}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <Link href={item.pagePath} className={blogTitleStyle}>
                                ↳{item.title}
                            </Link>
                        </motion.div>)
                })}
            </div>

            <motion.div key={engagements.length + 1} {...fadeInProps(0.4)} className="mt-4">
                <p className={sideColSubtext}>Or sometimes, just for fun. (˶ᵔ ᵕ ᵔ˶) </p>
                <div className="relative w-full aspect-video mt-2">
                    <Image
                        src="/assets/personal/painting-tea.png"
                        alt="Tea Painting"
                        width={1200} // or your preferred max width
                        height={800} // or let it scale naturally with Tailwind
                        className="w-full h-auto"
                    />
                </div>
                <span className="text-xs text-gray-500 italic">
                    Father's Tea Set, oil on canvas, 2017
                </span>
            </motion.div>
        </div>
    );
}