import React from "react";
import { frontend, backend, fullstack, cloud } from "../assets/images";

const courseList = [
  {
    title: "Frontend Development",
    description: "Learn HTML, CSS, JavaScript, React, and Tailwind CSS.",
    image: frontend,
  },
  {
    title: "Backend Development",
    description: "Master Node.js, Express.js, MongoDB, and REST APIs.",
    image: backend,
  },
  {
    title: "Full Stack Projects",
    description:
      "Build real-world full stack applications integrating frontend and backend.",
    image: fullstack,
  },
  {
    title: "Database & Cloud",
    description: "Understand MongoDB, SQL, Firebase, and cloud hosting basics.",
    image: cloud,
  },
];

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Courses I've Completed
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseList.map((course, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
