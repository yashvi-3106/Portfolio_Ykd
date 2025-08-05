"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("featured");

  const featuredProjects = [
    {
      id: 1,
      title: "FocusFuze",
      description:
        "A full-stack task management app where users can set personal goals, create notes, and schedule events on a calendar. Features goal tracking, task completion, and an intuitive UI.",
      image: "/placeholder.svg?height=400&width=600",
      videoUrl: "https://www.youtube.com/embed/pY5dqOt33Js", // Added video URL
      tags: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://focuss-fuze.netlify.app/",
      repoUrl: "https://github.com/codinggita/focus_fuze",
    },
    {
      id: 2,
      title: "API Explorer",
      description:
        "A React project integrating four APIs for exploring recipes, cocktails, Harry Potter info, and banking details.",
      image:
        "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-28%20144902.png?updatedAt=1754382164843",
      tags: ["React", "Axios"],
      demoUrl: "https://api-explorer-react.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/React-Route",
    },
    {
      id: 3,
      title: "To-Do List",
      description: "A simple to-do list app with add/delete features and a dark/light mode toggle.",
      image:
        "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-28%20152556.png?updatedAt=1754382231666",
      tags: ["React"],
      demoUrl: "https://todo-list-react-0.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/Todo-List-React",
    },
  ];

  const contributionProjects = [
    {
      id: 1,
      title: "Noble Bids",
      description:
        "A dynamic online bidding system built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform provides a secure and transparent environment for users to participate in live auctions, manage bids, and oversee platform activities.",
      image: "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-30%20133705.png?updatedAt=1754382340168",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      prUrl: "https://github.com/codinggita/noble_bids/issues/64",
      repoUrl: "https://github.com/codinggita/noble_bids",
      
    },
    {
      id: 2,
      title: "Borrowly",
      description:
        "🚀 Borrowly is a web platform that allows users to rent and borrow clothes, fooytwears, and accessories for various occasions. It provides a seamless experience for users to explore, rent, and track their borrowed items.",
      image: "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-30%20133520.png?updatedAt=1754382421699",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      prUrl: "https://github.com/codinggita/borrowly/issues/17",
      repoUrl: "https://github.com/codinggita/borrowly",
      
    },
    {
      id: 3,
      title: "Kofi HUb",
      description:
        "Kofi Hub is a digital platform connecting coffee lovers and small vendors. It simplifies coffee discovery, enables seamless purchases, and fosters a community for enthusiasts. Vendors can showcase their products, gain visibility, and compete with larger brands, while users explore coffee varieties and brewing techniques.",
      image:
        "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-28%20162522.png?updatedAt=1754382280141",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      prUrl: "https://github.com/codinggita/kofi_hub/issues/11",
      repoUrl: "https://github.com/codinggita/kofi_hub",
      
    },
  ];

  const cloneProjects = [
    {
      id: 1,
      title: "Freelancer Static Clone",
      description: "A static clone of Freelancer's website focusing on UI replication.",
      image: "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-30%20132703.png?updatedAt=1754382490731",
      tags: ["React"],
      demoUrl: "https://freelancer31.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/Free_lancer-clone",
    },
    {
      id: 2,
      title: "Manage Engine Static Clone",
      description: "A static landing page clone of a modern tech company.",
      image: "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-30%20132845.png?updatedAt=1754382511048",
      tags: ["HTML", "CSS"],
      demoUrl: "https://tiny-marigold-a203d3.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/ManageEngine",
    },
    {
      id: 3,
      title: "Naturals Static Clone",
      description: "A static landing page clone of the Naturals Ice Cream website built with HTML & CSS.",
      image: "https://ik.imagekit.io/viik8o1ol/Screenshot%202025-03-30%20133030.png?updatedAt=1754382529678",
      tags: ["HTML", "CSS"],
      demoUrl: "https://naturalsicecream-cg.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/Naturalsicecream",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-teal-500/5 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold inline-block bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text mb-4">
            My Projects
          </h2>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            A showcase of my work, contributions, and experimental projects.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <motion.div
            className="inline-flex bg-stone-800/50 backdrop-blur-sm rounded-full p-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { id: "featured", label: "Featured Projects" },
              { id: "contributions", label: "Contributions" },
              { id: "clones", label: "Static Clones" },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
                    : "text-stone-300 hover:text-white"
                }`}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {activeTab === "featured" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 ">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl overflow-hidden ml-14"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {project.id === 1 && project.videoUrl && (
                      <iframe
                        src={`${project.videoUrl}?autoplay=${isInView ? 1 : 0}&mute=1`}
                        title={project.title}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-stone-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-stone-800 text-stone-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoUrl}
                        className="flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>

                      <motion.a
                        href={project.repoUrl}
                        className="flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "contributions" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {contributionProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl overflow-hidden ml-14"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-stone-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-stone-800 text-stone-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.prUrl}
                          className="flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Code size={16} />
                          <span>View PR</span>
                        </motion.a>

                        <motion.a
                          href={project.repoUrl}
                          className="flex items-center gap-1 text-sm font-medium text prochains-teal-400 hover:text-teal-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={16} />
                          <span>GitHub</span>
                        </motion.a>
                      </div>

                      
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "clones" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {cloneProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-stone-900/50 backdrop-blur-sm border border-stone-800 rounded-xl overflow-hidden ml-14"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(20, 184, 166, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-stone-300 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-stone-800 text-stone-300 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <motion.a
                        href={project.demoUrl}
                        className="flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>

                      <motion.a
                        href={project.repoUrl}
                        className="flex items-center gap-1 text-sm font-medium text-teal-400 hover:text-teal-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}