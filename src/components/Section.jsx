import { motion } from "framer-motion";

const MotionSection = motion.section;

const Section = ({ id, title, children }) => {
  return (
    <MotionSection
      id={id}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-2 bg-gray-100 dark:bg-gray-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* ❌ Removed <p> wrapper to avoid hydration mismatch */}
      <div className="text-gray-700 dark:text-gray-300 max-w-4xl text-center">
        {children}
      </div>
    </MotionSection>
  );
};

export default Section;
