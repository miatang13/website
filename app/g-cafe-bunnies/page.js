// app/blog/gcafe/page.js
import Image from "next/image";
import Link from "next/link";
import HeaderBlog from "@/components/HeaderBlog";
import { linkStyle } from "@/constants/styles";
import hero_img from "@/public/assets/GCafe/thumbnail.png";
import BackToMain from "@/components/BackToMain";

const images = [
    "Elliott_Wu.png",
    "Douglas_Lanman.png",
    "Alexander_Clegg.png",
    "Dalton_Omens.png",
    "Anyi_Rao.png",
    "Karen_Liu.png",
    "Shengqu_Ca_Zhengfei_Kuang.png",
    "Takara_Truong.png",
    "Joon_Park.png",
    "Jiaman_Li.png",
    "Brennan_Shacklett.png",
    "Jiaju_Ma.png",
    "Koven_Yu.png",
    "Vishnu_Sarukkai.png",
    "Sarah_Jobalia.png",
    "Zander_Majercik.png",
];

export default function GCafe() {
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
                        <Image src={hero_img} alt="GCafe Hero" className="rounded-md shadow-sm" />
                    </div>

                    {/* Title */}
                    <h1 className="text-xl font-medium mb-4 italic">Stanford Graphics Cafe Seminar</h1>

                    {/* Overview */}
                    <div className="grid md:grid-cols-2 py-6 gap-6">
                        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
                        <p className="text-sm text-gray-700">
                            I co-organized the Stanford Graphics Cafe Seminar, a weekly event showcasing the amazing work of PhD students, faculty, and visiting speakers in the field of computer graphics.
                            <br /><br />
                            Each week, we welcome a speaker to share their research. I also design a unique bunny character for each speaker, inspired by their research interests. Here are some of the bunnies I've created :)
                            <br /><br />
                            Subscribe to our{" "}
                            <Link
                                href="https://mailman.stanford.edu/mailman/listinfo/graphics-cafe"
                                className={linkStyle}
                            >
                                mailing list
                            </Link>{" "}
                            for updates on our weekly talks!
                        </p>
                    </div>

                    {/* Gallery */}
                    <div className="mt-6 grid md:grid-cols-2 gap-6 w-5/7 mx-auto">
                        {images.map((image, idx) => (
                            <div
                                key={idx}
                                className="drop-shadow-lg rounded-md relative w-full aspect-square"
                            >
                                <Image
                                    fill
                                    className="object-contain"
                                    src={`/assets/GCafe/${image}`}
                                    alt={image.replace(".png", "").replace(/_/g, " ")}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bunnyfarm full image */}
                    <div className="mt-12 w-5/7 mx-auto">
                        <div className="drop-shadow-lg rounded-md relative w-full aspect-video">
                            <Image
                                fill
                                className="object-cover"
                                src="/assets/GCafe/Bunnyfarm_16_9.png"
                                alt="Bunny Farm"
                            />
                        </div>
                    </div>

                    {/* Footer spacer */}
                    <div className="py-6" />
                </main>
            </div>
        </div>
    );
}
