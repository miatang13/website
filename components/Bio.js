// components/Bio.js
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { linkStyle } from "@/constants/styles";
import { motion } from 'framer-motion';
import HoverInfo from "./HoverInfo";

export default function Bio() {
    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, scaleY: 0. },
        whileInView: { opacity: 1, scaleY: 1 },
        transition: { duration: 0.4, delay, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 },
    });


    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8'>
            {/* Profile photo - 1 column */}
            <div className='col-span-1'>
                <div className='relative h-42 w-42 my-4 lg:my-8 mx-auto'>
                    <Image
                        src='/assets/personal/bio_stanford_sqr_sm.png'
                        alt='Mia Tang'
                        className='rounded-full'
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <h2 className='text-xl font-black mb-1 text-center italic'>Mia Tang</h2>
                <p className='text-xs text-gray-600 mb-2 text-center'>
                    Master's Student,
                    <br />
                    Computer Science Department
                    <br />
                    Stanford University
                </p>
            </div>

            {/* Bio information - 3 columns */}
            <div className='md:col-span-3'>
                <div className='lg:mt-3'>
                    <span className='lg:text-base text-sm'>
                        I am an incoming CS Ph.D. student at Stanford University. I have been fortunate to work closely with Professor{" "}
                        <a
                            href='https://graphics.stanford.edu/~maneesh/'
                            className={linkStyle}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Maneesh Agrawala
                        </a>. During my Master’s at Stanford, I have also had the privilege of being part of the{" "}
                        <a
                            href='https://svl.stanford.edu/'
                            className={linkStyle}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Stanford Vision and Learning Lab
                        </a>
                        . Previously, I earned Bachelor of Computer Science and {" "}
                        <><HoverInfo tooltip={
                            <span>
                                My arts concentration was in communications design at CMU School of Design—so I’ve always loved making things visual, from websites and brochures to brand systems and experimental interactive media.
                            </span>
                        }>Arts</HoverInfo></> {" "}
                        at Carnegie Mellon University, where I was grateful to be
                        advised by Professor{" "}<a
                            href='https://www.cs.cmu.edu/~junyanz/'
                            className={linkStyle}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Jun-Yan Zhu
                        </a> on generative systems and Professor{" "}
                        <a
                            href='https://kyuhashim.com/'
                            className={linkStyle}
                            target='_blank'
                            rel='noopener noreferrer'
                        >Kyuha Shim
                        </a>  on computational design.
                    </span>

                    <p className='my-2 lg:text-base text-sm'>
                        My research explores the intersection of computer graphics, vision,
                        and AI, with a focus on developing{" "}
                        <strong>
                            interactive, controllable AI systems for visual expression
                        </strong>{" "}
                        by aligning machine capabilities with natural creative processes.
                    </p>

                    <div className='mt-4 text-sm'>
                        <motion.div
                            key={0}
                            {...fadeInProps(0 * 0.1)}>
                            <p>
                                <strong>Email:</strong> miatang at cs.stanford.edu
                            </p>
                        </motion.div>
                        <motion.div
                            key={1}
                            {...fadeInProps(1 * 0.1)}>
                            <p>
                                <strong>Links:</strong>{" "}
                                <a
                                    href='https://scholar.google.com/citations?user=4uGB3NsAAAAJ'
                                    className={linkStyle}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Google Scholar
                                </a>{" "}
                                |{" "}
                                <a
                                    href='https://x.com/Miamiamia0103'
                                    className={linkStyle}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <FontAwesomeIcon icon={faTwitter} className='fa-fw' />
                                </a>
                            </p>
                        </motion.div>
                        <motion.div
                            key={2}
                            {...fadeInProps(2 * 0.1)}>
                            <p>
                                <strong>Office:</strong> Stanford CoDa Building Room E368
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
