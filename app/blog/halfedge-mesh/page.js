// app/blog/halfedge-mesh/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function HalfedgeMesh() {
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
                {blogData["halfedge-mesh"].title}
              </h1>
              <p className="text-sm text-gray-700">
                To operate on large and complex meshes, we need data structures
                that are efficient and compact. Halfedge data structure is great
                for traversing the mesh by bringing in a new entity named
                halfedge. Here we look at some basics about the data structure.
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData["halfedge-mesh"].covered.map((topic) => (
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
                  src="/blog/halfedge-mesh/Halfedge1.png"
                  width={1280}
                  height={1280}
                  alt="Halfedge 1"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/halfedge-mesh/Halfedge2.png"
                  width={1280}
                  height={1280}
                  alt="Halfedge 2"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/halfedge-mesh/Halfedge3.png"
                  width={1280}
                  height={1280}
                  alt="Halfedge 3"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/halfedge-mesh/Halfedge4.png"
                  width={1280}
                  height={1280}
                  alt="Halfedge 4"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">
              Published on {blogData["halfedge-mesh"].date}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
