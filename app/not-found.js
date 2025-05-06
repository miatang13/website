// app/not-found.js
'use client';
import Link from 'next/link';
import HeaderBlog from '@/components/HeaderBlog';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
                <HeaderBlog />

                <main className="pt-10 pb-20 text-center">
                    <h1 className="text-2xl font-medium text-gray-900 mb-4"><i>Oops!</i> This page no longer exists here... ( •_•) </h1>
                    <p className="text-sm text-gray-600 max-w-xl mx-auto">
                        Apologies — the link you followed may be broken or outdated. I recently reorganized my website,
                        so some pages might have moved. Please head back to the homepage, I promise it's somewhere. Feel  free to shoot me an email if you are looking for something that you can't find.
                    </p>

                    <div className="mt-8">
                        <Link href="/" className="text-pink-500 hover:underline text-sm">
                            ← Return to homepage
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
