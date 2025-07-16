// components/Bio.js
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { linkStyle, linkStyleSubtle } from "@/constants/styles";
import { motion } from 'framer-motion';
import HoverInfo from "./HoverInfo";

export default function Bio() {
    const fadeInProps = (delay = 0) => ({
        initial: { opacity: 0, scaleY: 0. },
        whileInView: { opacity: 1, scaleY: 1 },
        transition: { duration: 0.4, delay, ease: 'easeOut' },
        viewport: { once: true, amount: 0.3 },
    });

    const fadeInPropsNoY = (delay = 0) => ({
        initial: { opacity: 0, },
        whileInView: { opacity: 1, },
        transition: { duration: 0.8, delay, ease: 'easeOut' },
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
                        className='rounded-full shadow-sm'
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
                        . Previously, I earned my Bachelor of Computer Science and {" "}
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


                    <div className='mt-4 text-sm'> {/* Contact information */}
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
                    </div>{/* Contact information */}


                    {/* Upcoming News */}
                    <motion.div
                        key={3}
                        {...fadeInPropsNoY(5 * 0.1)}>
                        <div className='mt-4 border-t border-gray-200 pt-3'>
                            <h3 className='text-xs font-bold mb-2 text-gray-400'>August 2025 SIGGRAPH Updates</h3>
                            <ul className='text-sm space-y-1 ml-4 text-gray-600'>
                                <li className='relative'>
                                    <span className='absolute -left-4 text-gray-400'>•</span>
                                    We're organizing the workshop <a className={linkStyleSubtle} href="https://lines-and-minds.github.io/" target="_blank" rel="noopener noreferrer">Drawing & Sketching: Art, Psychology, and Computer Graphics</a> on Sunday, August 10th. Come explore the world of drawing with us, where we'll dive into how humans and machines can sketch, create, and collaborate together. ◡̈
                                </li>
                                <li className='relative'>
                                    <span className='absolute -left-4 text-gray-400'>•</span>
                                    We're teaching a hands-on lab course <a className={linkStyleSubtle} href="https://s2025.conference-schedule.org/presentation/?id=gensub_515&sess=sess297" target="_blank" rel="noopener noreferrer">Introduction To Generative Machine Learning</a> on Tuesday, August 12th. Join us for a fun, interactive introductory lesson to Generative AI models like Transformers, Diffusion, NeRFs and their application to Computer Graphics.
                                </li>
                                <li className='relative'>
                                    <span className='absolute -left-4 text-gray-400'>•</span>
                                    Our paper <a className={linkStyleSubtle} href="https://inklayer.github.io/" target="_blank" rel="noopener noreferrer">InkLayer</a> has been accepted to SIGGRAPH 2025 💜. Join our paper session on Wednesday, August 13th. Come see how InkLayer automatically turns your sketches into editable layers—making sketch editing  effortless!
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                    {/* Upcoming News */}

                </div>
            </div>
        </div >
    );
}
