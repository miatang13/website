import Link from 'next/link';
import { useEffect, useState } from 'react';
import { scrollToSection } from '../utils/scrollUtils';
import { Menu, X } from 'lucide-react'; // or any icon library
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
        setMenuOpen(false); // close menu on click
    };
    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
        viewport: { once: true, amount: 0.2 }, // Trigger when 30% in view, only once
    });

    return (
        <header className="py-3 lg:pt-6 border-b border-gray-200">
            <motion.nav {...fadeInProps(0.1)} className="flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-xl font-serif italic font-black text-gray-800">mia t.</h1>
                </Link>

                {/* Desktop Nav with staggered fade-in */}
                <div className="hidden md:flex space-x-6 text-sm italic">
                    <motion.a
                        href="#publications"
                        onClick={(e) => handleSectionClick(e, 'publications')}
                        {...fadeInProps(0.2)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        publications
                    </motion.a>
                    <motion.a
                        href="#rd-experiences"
                        onClick={(e) => handleSectionClick(e, 'rd-experiences')}
                        {...fadeInProps(0.3)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        r&d
                    </motion.a>
                    <motion.a
                        href="#educational-comics"
                        onClick={(e) => handleSectionClick(e, 'educational-comics')}
                        {...fadeInProps(0.4)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        comics
                    </motion.a>
                    <motion.div {...fadeInProps(0.5)}>
                        <Link
                            href="/MiaTangCV.pdf"
                            className="text-gray-600 hover:text-gray-900"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            curriculum vitae (may '25)
                        </Link>
                    </motion.div>
                </div>


                {/* Mobile Hamburger Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600 hover:text-gray-900">
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            {
                menuOpen && (
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden mt-4 flex flex-col space-y-4 text-sm"
                            >
                                <a
                                    href="#publications"
                                    onClick={(e) => handleSectionClick(e, 'publications')}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    publications
                                </a>
                                <a
                                    href="#rd-experiences"
                                    onClick={(e) => handleSectionClick(e, 'rd-experiences')}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    r&d
                                </a>
                                <a
                                    href="#educational-comics"
                                    onClick={(e) => handleSectionClick(e, 'educational-comics')}
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    comics
                                </a>
                                <Link
                                    href="/MiaTangCV.pdf"
                                    className="text-gray-600 hover:text-gray-900"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    curriculum vitae
                                </Link>
                            </motion.nav>
                        )}
                    </AnimatePresence>

                )
            }
        </header >
    );
}
