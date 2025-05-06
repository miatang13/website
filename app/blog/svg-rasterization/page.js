// app/blog/svg-rasterization/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function SvgRasterization() {
  const key = "svg-rasterization";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
        {/* Header with navigation */}
        <HeaderBlog />

        {/* Back navigation */}
        <BackToMain />

        {/* Header Section */}
        <main className="pt-2">
          <div className="grid md:grid-cols-2 pb-4 border-b border-gray-200">
            <div>
              <h1 className="text-xl italic font-bold my-4">
                {blogData[key].title}
              </h1>
              <p className="text-sm text-gray-700">
                Vector graphic is great for web because of its scalability and
                smaller file size, but we can do more complex editing with raster
                graphic. Take a look at a simple rasterization pipeline for SVG
                files, painting <code className="bg-gray-100 px-1 rounded">&lt;polygon /&gt;</code>{' '}
                on a grid of pixels with supersampling.
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData[key].covered.map((topic) => (
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
                  src="/blog/svg-rasterization/SVG-1.png"
                  width={1280}
                  height={1280}
                  alt="SVG Rasterization 1"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/svg-rasterization/SVG-2.png"
                  width={1280}
                  height={1280}
                  alt="SVG Rasterization 2"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/svg-rasterization/SVG-3.png"
                  width={1280}
                  height={1280}
                  alt="SVG Rasterization 3"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/svg-rasterization/SVG-4.png"
                  width={1280}
                  height={1280}
                  alt="SVG Rasterization 4"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">
              Published on {blogData[key].date}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
