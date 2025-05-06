// app/blog/super-sampling/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function SuperSampling() {
  const key = "super-sampling";

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
                Supersampling is one of the most straightforward solutions to
                combatting aliasing in renders. Here we have a short comic on how
                Supersampling can be used to smooth out the jaggies in an image via
                box filter.
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

          {/* Image Section */}
          <div className="py-12 border-b border-gray-200">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/blog/super-sampling/anti-aliasing.png"
                width={1280}
                height={1280}
                alt="Supersampling Comic"
                className="w-full h-auto rounded-lg shadow-sm"
              />
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
