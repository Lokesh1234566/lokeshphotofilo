import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center md:text-left">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        About Me
      </h2>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
        I'm <strong>Lokesh</strong>, a passionate Full Stack Developer from
        Bangalore, India. I specialize in building robust web apps using modern
        technologies like React.js, Node.js, MongoDB, MERN and other More. I
        love solving real-world problems and constantly learning new tools and
        frameworks.
      </p>

      {/* Info + Skills Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Personal Information
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>
              <strong>Name:</strong> Lokesh R
            </li>
            <li>
              <strong>Location:</strong> Kanakapura Bangalore Karnataka, India
            </li>
            <li>
              <strong>Email:</strong> rlokesh1233@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8618349784
            </li>
            <li>
              <strong>Languages:</strong> English, Hindi, Kannada
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
            Skills & Expertise
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li>✔️ JavaScript / TypeScript</li>
            <li>✔️ React.js, Next.js</li>
            <li>✔️ Node.js, Express</li>
            <li>✔️ MongoDB, Firebase</li>
            <li>✔️ Tailwind CSS, Bootstrap</li>
            <li>✔️ Git, GitHub, Deployment</li>
          </ul>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-6 text-center">
          My Journey
        </h3>
        <ul className="space-y-6 border-l-4 border-yellow-500 pl-6">
          <li>
            <span className="text-sm text-gray-500">2019</span>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Started learning web development during college.
            </p>
          </li>
          <li>
            <span className="text-sm text-gray-500">2021</span>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Completed several online bootcamps and built real-world projects.
            </p>
          </li>
          <li>
            <span className="text-sm text-gray-500">2022</span>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Interned at a startup and worked with React & Node.js.
            </p>
          </li>
          <li>
            <span className="text-sm text-gray-500">2023 - Present</span>
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Freelancing and contributing to open-source projects.
            </p>
          </li>
        </ul>
      </div>

      {/* Video Intro */}
      {/* <div className="text-center">
        <h3 className="text-2xl font-semibold text-yellow-500 mb-4">
          Watch My Intro
        </h3>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src=""
            title="Video Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default About;
