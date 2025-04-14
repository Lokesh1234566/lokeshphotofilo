import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Profile from "./sections/Profile";
import Contact from "./sections/Contact";
import Courses from "./sections/Courses";
import Education from "./sections/Education";
import ProjectComp from "./sections/ProjectComp";

function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <div className="pt-2">
        <Section id="home">
          <Home />
        </Section>
        <Section id="about">
          <About />
        </Section>
        <Section id="profile">
          <Profile />
        </Section>

        <Section id="courses">
          <Courses />
        </Section>
        <Section id="projects">
          <ProjectComp />
        </Section>
        <Section id="education">
          <Education />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
