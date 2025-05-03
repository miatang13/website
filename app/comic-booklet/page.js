// app/blog/comic-booklet/page.js
import Image from "next/image";
import Link from "next/link";
import HeaderBlog from "@/components/HeaderBlog";
import { linkStyle } from "@/constants/styles";
import hero_img from "@/public/assets/ComicBooklet/cover_onspread.jpg";
import BackToMain from "@/components/BackToMain";

const images = [
    "cover+1spread.png",
    "landscape_1.png",
    "2-3.png",
    "4-5.png",
    "6-7.png",
    "8-9.png",
    "10-11.png",
    "12-13.png",
    "14-15.png",
    "16-17.png",
    "18-19.png",
    "20-21.png",
    "22-23.png",
    "24-25.png",
    "26-27.png",
    "28-29.png",
    "30-31.png",
    "32-33.png",
    "34-35.png",
    "36-37.png",
    "realistic-mock.jpg",
];

export default function ComicBooklet() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <HeaderBlog />

                {/* Back link */}
                <BackToMain />

                {/* Page Content */}
                <main className="pt-2">
                    {/* Thumbnail */}
                    <div className="w-full flex justify-center mb-6">
                        <Image src={hero_img} alt="Comic Booklet Cover" className="rounded-md shadow-sm" />
                    </div>

                    {/* Title */}
                    <h1 className="text-xl font-medium mb-4 italic">Pixel Pals Comic Booklet</h1>

                    {/* Overview */}
                    <div className="grid md:grid-cols-2 py-6 gap-6">
                        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
                        <p className="text-sm text-gray-700">
                            Upon my graduation from CMU, I self-published this booklet compiling
                            my educational illustrations as a gift to the professors who have
                            taught me throughout my college career and the Twitter community who
                            have supported me along the way.
                        </p>
                    </div>

                    {/* Image Spreads */}
                    <div className="mt-6 flex flex-col items-center gap-y-8 w-full">
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className="w-full md:w-5/6 relative drop-shadow-md rounded-md aspect-[3/2]"
                            >
                                <Image
                                    fill
                                    className="object-contain"
                                    src={`/assets/ComicBooklet/spreads_fullres/${image}`}
                                    alt={`Comic spread ${image}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Footer spacer */}
                    <div className="py-6" />
                </main>
            </div>
        </div>
    );
}
