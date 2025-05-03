// app/blog/graphics-valentines/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";

export default function GraphicsValentines() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with navigation */}
        <HeaderBlog />

        {/* Back navigation */}
        <div className="my-4">
          <Link href="/" className={linkStyle}>
            ← Back to all main page
          </Link>
        </div>

        {/* Header Section */}
        <main className="pt-2">
          <div className="grid md:grid-cols-2 pb-4 border-b border-gray-200">
            <div>
              <h1 className="text-xl italic font-bold my-4">
                {blogData["graphics-valentines"].title}
              </h1>
              <p className="text-sm text-gray-700">
                Happy Valentine's♥️! Celebrate the day with some lighthearted
                graphics jokes to share with your graphics friends 💌
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData["graphics-valentines"].covered.map((topic) => (
                    <li key={"topic-" + topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="py-12 border-b border-gray-200">
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/graphics-valentines/GPU.png"
                  width={1280}
                  height={1280}
                  alt="GPU Valentine"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/graphics-valentines/Halfedge.png"
                  width={1280}
                  height={1280}
                  alt="Halfedge Valentine"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/graphics-valentines/World.png"
                  width={1280}
                  height={1280}
                  alt="World Valentine"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/graphics-valentines/NURBS.png"
                  width={1280}
                  height={1280}
                  alt="NURBS Valentine"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">
              Published on {blogData["graphics-valentines"].date}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
