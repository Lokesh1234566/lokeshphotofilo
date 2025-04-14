import React from "react";
import { photo } from "../assets/images.js";

const Profile = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        My Profile
      </h2>

      {/* Profile Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 md:flex gap-10 mb-12">
        <div className="flex-shrink-0">
          <img
            src={photo}
            alt="Profile"
            className="rounded-xl w-52 h-52 object-cover mx-auto md:mx-0"
          />
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Lokesh R
          </h3>
          <p className="text-yellow-500 text-xl mb-2">Full Stack Developer</p>
          <p className="text-gray-600 dark:text-gray-300">
            Experienced in developing full-stack web applications using the MERN
            stack. I enjoy transforming ideas into real-world solutions with
            modern technologies and clean design.
          </p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mr-2 mb-2 text-sm font-medium">
              React.js
            </span>
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mr-2 mb-2 text-sm font-medium">
              Node.js
            </span>
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mr-2 mb-2 text-sm font-medium">
              MongoDB
            </span>
            <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full mr-2 mb-2 text-sm font-medium">
              Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-12">
        <h4 className="text-2xl font-semibold text-yellow-500 mb-6">
          Achievements
        </h4>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li>🏆 Built 5+ full-stack projects with responsive UI</li>
          <li>
            📚 Completed multiple certifications in JavaScript, React, and
            Node.js
          </li>
          <li>💼 Worked with startups to build scalable applications</li>
          <li>🌐 Contributed to open-source projects on GitHub</li>
        </ul>
      </div>

      {/* Future Goals */}
      <div>
        <h4 className="text-2xl font-semibold text-yellow-500 mb-6">
          My Future Goals
        </h4>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
          <li>🚀 Become a senior full-stack developer</li>
          <li>📱 Build a SaaS platform for remote teams</li>
          <li>🎤 Speak at developer conferences and meetups</li>
          <li>🌍 Collaborate with global teams and startups</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
