// app/blog/mipmap/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function MipMap() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with navigation */}
        <HeaderBlog />

        {/* Back navigation */}
        <BackToMain />

        {/* Header Section */}
        <main className="pt-2">
          <div className="grid md:grid-cols-2 pb-4 border-b border-gray-200">
            <div>
              <h1 className="text-xl italic font-bold my-4">
                {blogData["mipmap"].title}
              </h1>
              <p className="text-sm text-gray-700">
                Mipmap textures are used frequently in graphics to reduce aliasing
                in images. Today we take a look at what is mipmap, why we need
                mipmap, and how we generate mipmap.
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData["mipmap"].covered.map((topic) => (
                    <li key={"topic-" + topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="py-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/blog/mipmap/mipmap.png"
                width={1280}
                height={1280}
                alt="Mipmap Overview"
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">
              Published on {blogData["mipmap"].date}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
