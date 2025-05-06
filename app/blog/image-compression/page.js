// app/blog/image-compression/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function ImageCompression() {
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
                {blogData["image-compression"].title}
              </h1>
              <p className="text-sm text-gray-700">
                Billions of images are shared online daily. Image compression is key
                for fast transmission and efficient storage. We take a look at the
                difference between lossy &amp; lossless compression, and 3 specific
                lossy compression techniques: Color Quantization, Chroma
                Subsampling, and DCT.
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData["image-compression"].covered.map((topic) => (
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
                  src="/blog/image-compression/img-compression1.png"
                  width={1280}
                  height={1280}
                  alt="Compression Visual 1"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/image-compression/img-compression2.png"
                  width={1280}
                  height={1280}
                  alt="Compression Visual 2"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/image-compression/img-compression3.png"
                  width={1280}
                  height={1280}
                  alt="Compression Visual 3"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/image-compression/img-compression4.png"
                  width={1280}
                  height={1280}
                  alt="Compression Visual 4"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">
              Published on {blogData["image-compression"].date}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
