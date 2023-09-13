"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
export default function About() {
  return (
    <motion.section
      //ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Starting off with over a{" "}
        <span className="font-medium">
          decade of experience in the hotel and restaurant industry
        </span>
        , I transitioned into the tech realm driven by my enthusiasm for
        programming. My academic pursuit at{" "}
        <span className="font-medium">IT-HÖGSKOLAN</span> equipped me with the
        ins and outs of{" "}
        <span className="font-medium">JavaScript development</span>. The{" "}
        <span className="italic">joy of coding</span> for me is intertwined with
        problem-solving. The <span className="underline">thrill</span> of
        cracking a complex challenge is unparalleled. My core expertise lies in{" "}
        <span className="font-medium">
          React.js, Node.js, Vue.js, and SQL/NoSQL
        </span>
        . Additionally, I have dabbled with TypeScript, Next.js, and other
        modern web technologies. Currently, I am on the lookout for a{" "}
        <span className="font-medium">prominent role</span> where I can blend my
        tech prowess with my interpersonal skills, cultivated from years in
        hospitality.
      </p>

      <p>
        <span className="italic">Away from the keyboard</span>, I cherish the
        memories and skills from my time in the fast-paced hospitality world.
        I've cultivated a knack for{" "}
        <span className="font-medium">
          interacting with diverse individuals
        </span>{" "}
        and handling multifaceted scenarios. Continual learning is a part of my
        ethos; I am forever intrigued by the{" "}
        <span className="font-medium">
          intersection of technology and human-centric services
        </span>
        , and how they can be synergized for a brighter, more efficient future.
      </p>
    </motion.section>
  );
}
