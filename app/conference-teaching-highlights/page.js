// app/blog/conf-teaching-highlight/page.js
import Image from "next/image";
import Link from "next/link";
import HeaderBlog from "@/components/HeaderBlog";
import { linkStyle } from "@/constants/styles";
import hero_img from "@/public/assets/ConfTeachHighlight/thumbnail.png";
import BackToMain from "@/components/BackToMain";

const images = [
    "bookmark_mockup.png", "transformer_origin.png", "attention.png", "transformer_fast.png",
    "batch_norm.png", "rnn.png", "layers1.png", "layers2.png", "lost.png", "convo_watermelon.png",
    "res_connection.png", "res_connection1.png", "gen_data0.png", "gen_data1.png",
    "gen_data2.png", "gen_data3.png", "gaussian_distribution.png", "distribution.png",
    "forward_diffuse.png", "repara_motivation.png", "cfg.png"
];

export default function ConfTeachingHighlights() {
    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
                {/* Header */}
                <HeaderBlog />

                {/* Back link */}
                <BackToMain />

                {/* Page Content */}
                <main className="pt-2">
                    {/* Thumbnail + Header */}
                    <div className="w-full flex justify-center mb-6">
                        <Image src={hero_img} alt="Teaching Hero" className="rounded-md shadow-sm" />
                    </div>

                    <h1 className="text-xl font-medium mb-4 italic">Conference Teaching Highlights</h1>
                    {/* Overview */}
                    <div className="grid md:grid-cols-2 py-6 gap-6">
                        <h2 className="text-xl font-bold text-gray-900">Overview</h2>
                        <p className="text-sm text-gray-700">
                            Teaching at conferences has been one of the most rewarding experiences of my career, allowing me to connect with incredible minds and share my fascination with the topics. It all began in the summer of 2022, thanks to the invitation from{" "}
                            <Link className={linkStyle} href="https://www.linkedin.com/in/rajeshxsharma/">Rajesh Sharma</Link>, who gave me the chance to co-create teaching content for a course introducing machine learning.
                            <br /><br />
                            What started as a collaborative project evolved into a recurring and deeply rewarding teaching journey. I co-taught the course with Rajesh in-person at SIGGRAPH 2023 in LA, followed by SIGGRAPH Asia in Sydney, and SIGGRAPH 2024 in Denver, where we welcomed over 600 enthusiastic attendees. At SIGGRAPH 2024, I also had the pleasure of co-teaching another course on diffusion models for content creation with other wonderful collaborators.
                            <br /><br />
                            This page gives you a sneak peek into the materials I created, along with some merch — the bookmarks — that I made as little thank-you gifts for our audience.
                            <br /><br />
                            Teaching is more than just sharing knowledge — it's about weaving creative stories into complex concepts, and I hope that my passion shines through in every lecture, making the learning experience as inspiring and enjoyable as it's been for me.
                            <br /><br />
                            <span className="text-pink-400 font-semibold">Just a note ◡̈ — </span>
                            these are not intended to be stand-alone teaching materials (like my comics) but are meant to give you a glimpse of the visual style and content used in these lectures. I have purposefully omitted math-heavy slides to avoid any out-of-context misunderstandings.
                        </p>
                    </div>

                    {/* <FullLine /> */}

                    {/* Visuals */}
                    <div className="mt-6 flex flex-col items-center gap-y-6 md:w-5/7 mx-auto">
                        {images.map((image, idx) => (
                            <div key={idx} className="drop-shadow-lg rounded-md relative w-full mb-1 aspect-video">
                                <Image
                                    fill
                                    className="object-cover"
                                    src={`/assets/ConfTeachHighlight/${image}`}
                                    alt={image.replace(".png", "").replace(/_/g, " ")}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Footer Spacer */}
                    <div className="py-12" />
                </main>
            </div>
        </div>
    );
}
