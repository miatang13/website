// components/Header.js
import Link from 'next/link';

export default function HeaderBlog() {

    return (
        <header className="py-3 lg:pt-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-xl font-serif italic font-medium text-gray-800">mia t.</h1>
                </Link>

            </div>
        </header>
    );
}