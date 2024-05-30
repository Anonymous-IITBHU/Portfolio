// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      {/* Display a paragraph with information about the user's background and interests. */}
      <p className="mb-3">
      I am Mayank Pratap Singh, currently, Graduated in <b className="font-medium">Mechanical Engineering</b> from
      <b className="font-medium"> IIT(BHU) </b>
       I am a competitive programmer and I have been doing competitive programming for the past 2.5 years.
        I have good proficiency in data structures and algorithms, I have solved over 1800 problems on different
         coding platforms (like <b className="font-medium">code forces, Codechef, and leetcode</b>), and I actively participate in all the coding contests.

        Apart from competitive programming, I am a <b className="font-medium">full stack developer</b>. I have experience with <b className="font-medium">HTML, CSS, JS,ReactJS and bootstrap </b>
        as a frontend library and <b className="font-medium">Django, NodeJs </b> as the backend framework. 
        I have skills in <b className="font-medium"> C/C++, Python, and Java(basic)</b> programming languages.
      </p>

      {/* Display another paragraph about the user's interests and hobbies. */}
      <p>
        <i className="italic">When I'm not coding</i>, I enjoy playing video
        games, watching movies, and playing with my dog. I also enjoy{" "}
        <b className="font-medium">learning new things</b>. I am currently
        learning about <b className="font-medium">history and philosophy</b>.
        I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
