// components/ConferenceWorkshops.js
import { sectionTitleStyle, sideColSubtext } from "@/constants/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faLink, faPager } from "@fortawesome/free-solid-svg-icons";
import HoverInfo from "./HoverInfo";

export default function ConferenceWorkshops() {
    // No ids needed — just add/remove/reorder objects freely.
    // One `runs` entry per time the thing actually ran, as conference + year.
    // The display groups everything by year, so a recurring series lives in a
    // single object here and shows up under each year it ran.
    const conferences = [
        {
            text: "Lines and Minds: Visual Abstraction in Art, Psychology, and Computer Graphics",
            type: "Workshop",
            runs: [
                { conf: "SIGGRAPH", year: 2026, website: "https://lines-and-minds.github.io" },
            ],
        },
        {
            text: "Drawing & Sketching: Art, Psychology, and Computer Graphics",
            type: "Workshop",
            runs: [
                { conf: "SIGGRAPH", year: 2025, website: "https://lines-and-minds.github.io/2025" },
            ],
        },
         {
            text: "AI for Creative Visual Content Generation Editing and Understanding",
            type: "Course",
            runs: [
                { conf: "SIGGRAPH", year: 2026, website: "https://cveu.github.io/event/sig2026.html" },
            ],
        },
        {
            text: "AI for Creative Visual Content Generation Editing and Understanding",
            type: "Workshop",
            runs: [
                { conf: "CVPR", year: 2025, website: "https://cveu.github.io/event/cvpr2025.html" },
            ],
        },
        {
            text: "Introduction to Generative Machine Learning",
            type: "Course",
            runs: [
                { conf: "SIGGRAPH", year: 2025 },
                { conf: "SIGGRAPH Asia", year: 2024, notes: "https://dl.acm.org/doi/10.1145/3680532.3689591" },
                { conf: "SIGGRAPH", year: 2024 },
                { conf: "SIGGRAPH Asia", year: 2023, notes: "https://dl.acm.org/doi/abs/10.1145/3610538.3614646" },
                { conf: "SIGGRAPH", year: 2023 },
            ],
        },
        {
            text: "Generative Models for Visual Content Creation",
            type: "Course",
            runs: [
                {
                    conf: "SIGGRAPH",
                    year: 2024,
                    website: "https://cveu.github.io/event/sig2024.html",
                    notes: "https://dl.acm.org/doi/abs/10.1145/3664475.3664553",
                },
            ],
        },
        {
            text: "The Future of Generative Visual Art",
            type: "Workshop",
            runs: [
                { conf: "CVPR", year: 2024, website: "https://cveu.github.io/event/cvpr2024.html" },
            ],
        },
    ];

    // Flatten series -> runs and regroup by year, newest first. A series that
    // ran at two conferences in the same year (e.g. SIGGRAPH and SIGGRAPH Asia)
    // collapses into one line listing both. Within a year, entries keep the
    // order they appear in `conferences` above.
    const byYear = new Map();
    conferences.forEach(({ text, type, runs }) => {
        runs.forEach(({ year, ...run }) => {
            if (!byYear.has(year)) byYear.set(year, new Map());
            const entries = byYear.get(year);
            if (!entries.has(text)) entries.set(text, { text, type, venues: [] });
            entries.get(text).venues.push(run);
        });
    });
    const years = [...byYear.keys()].sort((a, b) => b - a);

    return (
        <div>

            <HoverInfo
                tooltip={
                    <span>
                        Thanks to the wonderful co-instructors and co-organizers who've made these workshops possible. Always up for new ideas, so feel free to reach out if you're cooking up something interesting.
                    </span>
                }
            > <h2 className={sectionTitleStyle}>
                    Conference Involvements
                </h2>
            </HoverInfo>

            <div className='space-y-2 text-xs'>
                {years.map((year) => (
                    <div key={year}>
                        <p className="font-bold">{year}</p>
                        <ul className="ml-4 mt-1 space-y-1">
                            {[...byYear.get(year).values()].map((entry) => (
                                <li key={entry.text}>
                                    <b>
                                        {entry.type}
                                        :
                                    </b>{" "}
                                    {entry.text}{" "}
                                    <span className={sideColSubtext}>
                                        {"— "}
                                        {entry.venues.map((venue, idx) => (
                                            <span key={venue.conf} className="whitespace-nowrap">
                                                {idx > 0 && ", "}
                                                {venue.conf}
                                                {venue.website && (
                                                    <a
                                                        href={venue.website}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={`${venue.conf} ${year} webpage`}
                                                        className="ml-1 p-1 text-gray-400 rounded-md shadow-xs hover:shadow-sm hover:text-black transition duration-200"
                                                    >
                                                        <FontAwesomeIcon icon={faPager} />
                                                    </a>
                                                )}
                                                {venue.notes && (
                                                    <a
                                                        href={venue.notes}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title={`${venue.conf} ${year} notes`}
                                                        className="ml-1 p-1 text-gray-400 rounded-md shadow-xs hover:shadow-sm hover:text-black transition duration-200"
                                                    >
                                                        <FontAwesomeIcon icon={faFileAlt} />
                                                    </a>
                                                )}
                                            </span>
                                        ))}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
