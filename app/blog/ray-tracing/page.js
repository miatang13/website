// app/blog/ray-tracing/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function RayTracing() {
  const key = "ray-tracing";

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
                {blogData[key].title}
              </h1>
              <p className="text-sm text-gray-700">
                Ray tracing is our friend when we want a realistic 3D render. This
                technique is inspired by what happens in the natural world. But why,
                and how? Here we look at some basics of ray tracing: the why, ray
                equation, forward vs backward, and an overview of the general
                algorithm.
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
                  src="/blog/ray-tracing/Raytracing.png"
                  width={1280}
                  height={1280}
                  alt="Ray Tracing Overview"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ray-tracing/Raytracing-1.png"
                  width={1280}
                  height={1280}
                  alt="Ray Tracing 1"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ray-tracing/Raytracing-2.png"
                  width={1280}
                  height={1280}
                  alt="Ray Tracing 2"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ray-tracing/Raytracing-3.png"
                  width={1280}
                  height={1280}
                  alt="Ray Tracing 3"
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
