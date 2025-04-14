import React from "react";
import {
  ayuredicprakruti,
  Ayurvedic,
  indianfood,
  pdfpageevenodd,
  shivaratri3,
} from "../assets/images.js";

const projects = [
  {
    title: "ayuredicprakrutitest",
    description:
      "An online Ayurvedic Prakruti test that determines body constitution based on ancient Indian medicine principles.",
    image: ayuredicprakruti,
    github: "",
    demo: "https://ayuredicprakruti.netlify.app/",
  },
  {
    title: "Ayurvedic",
    description:
      "A curated Ayurvedic remedies app showcasing herbs, treatments, and holistic practices.",
    image: Ayurvedic,
    github: "",
    demo: "https://ayurvedicproject.netlify.app/",
  },
  {
    title: "indianfood",
    description:
      "A responsive Indian food recipe app with categorized dishes and user reviews.",
    image: indianfood,
    github: "",
    demo: "https://indianprojectfood.onrender.com/",
  },
  {
    title: "pdfpageevenodd",
    description:
      "A tool to split PDF pages into even and odd pages, built with JavaScript and PDF.js.",
    image: pdfpageevenodd,
    github: "",
    demo: "https://pdfpageevenodd.netlify.app/",
  },
  {
    title: "shivaratri",
    description:
      "A themed Shivaratri festival app with mythological stories, pooja timings, and devotional music.",
    image: shivaratri3,
    github: "",
    demo: "https://shivaratri.netlify.app/",
  },
];

const ProjectComp = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
        My Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComp;
