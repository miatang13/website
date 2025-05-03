// app/blog/ml-basics/page.js
import Image from "next/image";
import blogData from "@/constants/blogs.json";
import HeaderBlog from "@/components/HeaderBlog";
import Link from "next/link";
import { linkStyle } from "@/constants/styles";
import BackToMain from "@/components/BackToMain";

export default function MLBasics() {
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
              <h1 className="text-xl italic font-bold my-4">{blogData["ml-basics"].title}</h1>
              <p className="text-sm text-gray-700">
                Here's a cheat sheet for Neural Network pipeline from data input,
                forward pass with weight adjustments & loss evaluation, to gradient
                descent via backpropagation. Gradient descent is also super useful
                in Graphics for applications such as Inverse Kinematics🦾.
              </p>
            </div>

            {/* Topics Section */}
            <div className="py-4">
              <h4 className="text-lg font-medium mb-2">Topics Covered</h4>
              <div className="ml-6">
                <ul className="list-disc text-sm text-gray-700 space-y-1">
                  {blogData["ml-basics"].covered.map((topic) => (
                    <li key={"topic-" + topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>


          </div>


          {/* Images Section */}
          <div className="py-12 border-b border-gray-200">
            <div className="space-y-12">
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ml-basics/ML-GradientDescent.png"
                  width={1280}
                  height={1280}
                  alt="Gradient Descent"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ml-basics/ML-LinearRegression.png"
                  width={1280}
                  height={1280}
                  alt="Linear Regression"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
              <div className="max-w-4xl mx-auto">
                <Image
                  src="/blog/ml-basics/ML-NN.png"
                  width={1280}
                  height={1280}
                  alt="Neural Network"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Footer with metadata */}
          <div className="py-8">
            <p className="text-sm text-gray-500">Published on {blogData["ml-basics"].date}</p>
          </div>

        </main>
      </div>
    </div>
  );
}