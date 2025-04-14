import React from "react";

const educationData = [
  {
    degree:
      "Bachelor of Engineering (B.E) in Electronics and Communication Engineering",
    institution:
      "City Engineering College (Visvesvaraya Technological University), Bangalore",
    year: "2017 - 2021",
    details:
      "Graduated with a CGPA of 8.06. Studied core subjects like Digital Electronics, Signal Processing, Microcontrollers, and Communication Systems, alongside software engineering and programming electives. Developed a strong foundation in logical thinking and problem-solving, which later translated into web development projects using HTML, CSS, JavaScript, React, and Node.js. ",
  },
  {
    degree: "Pre-University Course (PUC) - PCMB",
    institution: "Vijaya Composite PU College, Bangalore",
    year: "2016 - 2017",
    details:
      "Completed PUC with a focus on Physics, Chemistry, Mathematics, and Biology. Scored 64.16%. Participated in science fairs and workshops.",
  },
  {
    degree: "SSLC (10th Grade)",
    institution: "ST Michael’s High School, Kanakapura",
    year: "2014-2015",
    details:
      "Completed 10th with a percentage of 79.78%. Awarded distinction in Mathematics and Science.",
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Education
      </h2>

      <div className="space-y-10 border-l-4 border-yellow-500 pl-6">
        {educationData.map((edu, index) => (
          <div key={index} className="relative">
            <div className="absolute w-4 h-4 bg-yellow-500 rounded-full -left-2 top-1.5"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {edu.degree}
            </h3>
            <p className="text-yellow-500 font-medium">{edu.institution}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {edu.year}
            </p>
            <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
