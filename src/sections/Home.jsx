import React from "react";
import { photo } from "../assets/images.js";
import resumePDF from "../assets/pdf/Front-End-Resume.pdf";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto text-center md:text-left">
      {/* Text Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Hi, I'm Lokesh R
        </h1>
        <h2 className="text-2xl text-yellow-500 mt-2">Full Stack Developer</h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          I'm a passionate developer skilled in both frontend and backend
          technologies. I enjoy building modern web apps with Reactjs, Node.js
          and Tailwind CSS.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-6 py-3 rounded-full transition duration-300"
          >
            Get In Touch
          </a>
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-medium px-6 py-3 rounded-full transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1">
        <img
          src={photo} // Add your image URL here
          alt="Profile"
          className="rounded-2xl w-64 h-64 object-cover mx-auto shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
