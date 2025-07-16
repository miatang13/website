"use client";
import { useEffect } from 'react';
import { motion } from "framer-motion";

import Header from '../components/Header';
import Bio from '../components/Bio';
import Publications from '../components/Publications';
import News from '../components/News';
import ConferenceWorkshops from '../components/ConferenceWorkshops';
import Teaching from '../components/Teaching';
import CommunityEngagement from '../components/CommunityEngagement';
import RDExperiences from '../components/RDExperiences';
import EducationalComics from '../components/EducationalComics';
import { sectionTitleStyle } from '@/constants/styles';

export default function Home() {
  useEffect(() => {
    const { initScrollToHashElement } = require('../utils/scrollUtils');
    initScrollToHashElement();
  }, []);

  const main_section_style = "mt-4 border-t border-gray-200 py-5";
  const side_section_style = "mt-4 border-t border-gray-200 pt-3";

  const fadeInProps = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
    viewport: { once: true, amount: 0.15 }, // Trigger when 30% in view, only once
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-6xl">
        <Header />

        <main className="pt-2">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">

              <motion.div {...fadeInProps(0)}>
                <Bio />
              </motion.div>
              <motion.div {...fadeInProps(0.1)} className={main_section_style}>
                <h2 className={sectionTitleStyle}>Publications</h2>
                <Publications />
              </motion.div>

              <motion.div {...fadeInProps(0.2)} className={main_section_style}>
                <RDExperiences />
              </motion.div>

              <motion.div {...fadeInProps(0.3)} className={main_section_style}>
                <EducationalComics />
              </motion.div>
            </div>

            <div className="lg:col-span-1 lg:border-l border-gray-200 lg:pl-5">
              <motion.div {...fadeInProps(0.4)} className="lg:mt-2">
                <News />
              </motion.div>

              <motion.div {...fadeInProps(0.5)} className={side_section_style}>
                <ConferenceWorkshops />
              </motion.div>

              <motion.div {...fadeInProps(0.6)} className={side_section_style}>
                <Teaching />
              </motion.div>

              <motion.div {...fadeInProps(0.7)} className={side_section_style}>
                <CommunityEngagement />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
