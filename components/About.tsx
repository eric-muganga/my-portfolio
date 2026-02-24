"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
      <motion.section
          ref={element}
          style={{ opacity: scrollYProgress }}
          className="py-20 h-full mt-24 mb-24"
          id="about"
          aria-labelledby="about-heading"
          itemScope
          itemType="https://schema.org/Person"
      >
        <div className="container relative mx-auto">
          <div className="w-full lg:pr-10 flex justify-center items-center">
            <article className="max-w-4xl mx-auto px-6">
              <header className="flex justify-center items-center mb-8">
                <h2
                    id="about-heading"
                    className="text-3xl lg:text-5xl font-bold mb-4 text-white"
                    itemProp="name"
                >
                  About <span className="text-blue-600"> Me</span>
                </h2>
              </header>

              <div className="prose prose-lg prose-invert max-w-none">
                {/* Professional Summary */}
                <div itemProp="description" className="space-y-6">
                  <p className="text-md md:text-xl text-gray-300 mb-4 leading-relaxed">
                    <span itemProp="jobTitle">I am a Backend Software Engineer</span> specializing in
                    <span itemProp="knowsAbout"> production-scale APIs and distributed systems</span>.
                    With <span itemProp="experienceLevel">1+ years of hands-on experience</span> building
                    <span itemProp="expertise"> financial technology systems that handle real money and serve real users</span>,
                    I focus on creating <strong>robust, scalable backend services</strong> using
                    <span itemProp="knowsAbout"> Java, Spring Boot, and microservices architecture</span>.
                  </p>

                  {/* Financial Technology Expertise */}
                  <p className="text-md md:text-xl text-gray-300 mb-4 leading-relaxed">
                    My expertise lies in <strong>financial technology and payment processing systems</strong>.
                    I&apos;ve architected and deployed <span itemProp="projectWork">distributed microservices supporting
                  thousands of concurrent users, optimized AI services by 87%, and maintained 99.99% system availability</span>
                    in production environments. My experience includes <span itemProp="methodology">PCI-compliant transaction
                  processing, Apache Kafka event streaming, and cloud-native deployments</span>.
                  </p>

                  {/* Technical Philosophy */}
                  <p className="text-md md:text-xl text-gray-300 mb-4 leading-relaxed">
                    I believe in <strong>performance-first engineering</strong> and <strong>clean architecture</strong>.
                    Whether it&apos;s reducing response times from 312 seconds to 41 seconds or building
                    <span itemProp="workStyle"> cost-efficient systems that run on $0/month infrastructure</span>,
                    I approach every problem with a focus on <span itemProp="methodology">measurable results and
                  operational excellence</span>. I thrive in <span itemProp="workStyle">Agile environments</span>
                    and believe in the power of <strong>collaboration and code reviews</strong>.
                  </p>

                  {/* Growth & Future */}
                  <p className="text-md md:text-xl text-gray-300 leading-relaxed">
                    Currently graduating with distinction (4.84 CGPA) from <span itemProp="alumniOf">Uniwersytet WSB Merito Poznan</span>,
                    I&apos;m excited to <span itemProp="learningStyle">apply my financial systems expertise to new domains and scale challenges</span>.
                    I&apos;m passionate about <span itemProp="projectFocus">building backend infrastructure that powers
                  mission-critical applications</span> and eager to contribute to teams that value
                    <strong>engineering excellence and technical innovation</strong>.
                  </p>
                </div>

                {/* Hidden structured data for AI SEO */}
                <div
                    className="sr-only"
                    itemScope
                    itemType="https://schema.org/Person"
                >
                  <span itemProp="name">Eric Muganga</span>
                  <span itemProp="jobTitle">Backend Software Engineer</span>
                  <span itemProp="description">
                  Backend software engineer specializing in financial technology systems,
                  microservices architecture, and production-scale APIs with expertise in
                  Java, Spring Boot, and distributed systems
                </span>
                  <span
                      itemProp="worksFor"
                      itemScope
                      itemType="https://schema.org/Organization"
                  >
                  <span itemProp="name">Cashfro</span>
                </span>
                  <span
                      itemProp="alumniOf"
                      itemScope
                      itemType="https://schema.org/CollegeOrUniversity"
                  >
                  <span itemProp="name">Uniwersytet WSB Merito Poznan</span>
                </span>
                  <span
                      itemProp="hasOccupation"
                      itemScope
                      itemType="https://schema.org/Occupation"
                  >
                  <span itemProp="name">Backend Software Engineer</span>
                  <span itemProp="occupationalCategory">Technology</span>
                </span>
                  <span itemProp="knowsAbout">Java</span>
                  <span itemProp="knowsAbout">Spring Boot</span>
                  <span itemProp="knowsAbout">Microservices Architecture</span>
                  <span itemProp="knowsAbout">Apache Kafka</span>
                  <span itemProp="knowsAbout">Financial Technology</span>
                  <span itemProp="knowsAbout">Payment Processing</span>
                  <span itemProp="knowsAbout">Distributed Systems</span>
                  <span itemProp="knowsAbout">PostgreSQL</span>
                  <span itemProp="knowsAbout">Docker</span>
                  <span itemProp="knowsAbout">Kubernetes</span>
                  <span itemProp="knowsAbout">Performance Optimization</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </motion.section>
  );
};

export default About;
