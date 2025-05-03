// components/Header.js
import Link from 'next/link';

export default function HeaderBlog() {

    return (
        <header className="py-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-baseline">
                <div className="mb-4 md:mb-0">
                    <Link href="/">
                        <h1 className="text-xl font-serif italic font-medium text-gray-800">mia t.</h1>
                    </Link>
                </div>
            </div>
        </header>
    );
}