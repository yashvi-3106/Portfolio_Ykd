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
        "https://media-hosting.imagekit.io/62748a046db94715/Screenshot%202025-03-28%20144902.png?Expires=1837761617&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QrTcNWoQSDMhP1grxkvytcAxaVi6ZK9gsRig1ew8rFaJp~MwHCnSwupvifPRI2KJAZCrlkrBkFzE12Fc56mwxiPc99eFcloj9rgxXCQqRQnPs7dqPDa3LmFJvg1ZHiPQqqf8CO5w8lpOzxXub9Od7XRbZg5zH~DfgWo3HyZBzI3TJ1ZEK2itganb4V8Jj1x4yaRHr2al1KjCc6gcuUyWusQe9I-zwCqJS3ZaI8QBddkifY00f~FnNdY2S7YUTDVC6K0AgfQPtpZmC1ErKPhWO71Ipvx5B7g-htc6IB0LsqLlNKvwjdAsRLkjvAVZ4QsSuyY08nSJP~ypkpS7RGnbOw__",
      tags: ["React", "Axios"],
      demoUrl: "https://api-explorer-react.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/React-Route",
    },
    {
      id: 3,
      title: "To-Do List",
      description: "A simple to-do list app with add/delete features and a dark/light mode toggle.",
      image:
        "https://media-hosting.imagekit.io/2fc6e8696b044b7a/Screenshot%202025-03-28%20152556.png?Expires=1837765862&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WlWsN5-xnzU5UDd7IUqbC~PEcNfc2XMhZOiNrmJKpxA90DmLjnlyDp8-gQYtNN7OkEdbH7klglD8Y7xzEQX-j146nRcQQizMFQ-ZgW-FePYOnRzFbIkuYuF0cb3cDaROnruwA9VR5LWJeFw3zZK23f9SyTejUsPBEZIntoIkMfMGxcqJD79jKTrzXrhClt41A7W~dDjG2L4BRaXctwxRKsPeceJDigzTkOVZqQmaSvizIw7rLmPFb6qsskPu93e3KdKD71MHBPZrIp-4Fz8JN-wDVdZnn6-HMsNzVq6V3sLz9gaMWw993WaBd6FUl0sNg9waJhNGQ81PbAdL-qvcZA__",
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
      image: "https://media-hosting.imagekit.io/35b0994e505341e4/Screenshot%202025-03-30%20133705.png?Expires=1837930163&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YBpJ05QcDJ1R1jYr5q798H5gOFF~pzybAFoSluCt5WwTHsH1TkLhCvmhVHis0CC8jfC3kISeu2n0AjPztGqgUuO91eMMgd4MdCQkZ-B4pFwRHY3pBNt792yoMEkoN08mMvImC-PHTuwjtjfh9jouNLaqXHkxCF1M9AfvZf9VkIQ9Dw2AWDe2pPeiMYdbBuq-dkzLsHP78hbSl9P4U9GMJ~Gp9ync6iXgrSFesayN6AXDDCqhXk2QbfsRqLXXmFo-z~aUpWG7daDg8m7-4JPVDngJNdfczSgK3wcIa6AtDlrWemkZtbLGwsg9FyPd322WHbZ-fax3rDfRHF3IPfDeLw__",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      prUrl: "https://github.com/codinggita/noble_bids/issues/64",
      repoUrl: "https://github.com/codinggita/noble_bids",
      
    },
    {
      id: 2,
      title: "Borrowly",
      description:
        "🚀 Borrowly is a web platform that allows users to rent and borrow clothes, fooytwears, and accessories for various occasions. It provides a seamless experience for users to explore, rent, and track their borrowed items.",
      image: "https://media-hosting.imagekit.io/4e1e217a01be42de/Screenshot%202025-03-30%20133520.png?Expires=1837930043&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=24Bxctfk4oE2GYDQAzXeaeNdsK6QKTzIaIdcH8DI5LhAkUzVqoPP4KoYXuNfNiixBBp4abjizFR4oaT-Oc15FIC-5u9ZfEd--ERDtQDYjdQB3HzN6qRBTVm08~a8o-0UdjEpd2Gpf4XtraaG9WUdPitO~v6hMmw~x1v-bWZ8A3zEpnFTLUk7H64So-u6V6YQDpPbAvDV9hDOkLuFMGw0hnnhcWR9f0qUdNDxKeXvxuDWxraWHeNhP7mUmFtdEhn~ubIp2-ZPJEZKhFRJswzgNk~sVBCJsmGC2RaOuiTBxIexQXqbLLVqK5nebAnL407cozqMaQQk7Jm2gPuJ-tI2hg__",
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
        "https://media-hosting.imagekit.io/8803c74eb75440d8/Screenshot%202025-03-28%20162522.png?Expires=1837767333&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0KR2~X~4ADtmkptAtwm0Eqvx0Lcf8P5HeWw9ppJiE4AmSS16hC1ovQEcdtN2XLpqH7L73Kr~hkZwZQDzJrDnH9BxVyYK2Sb3AIX3Vq8Y5VHXqOVmBcXMDSkgsyQSStrbgWoS1mIFO-lIvX3K6Kob3Ka3N~xPpBPKtZzfX31SAYJRrYjtD1IJX3K1lHjunDDAQ7BYVWJnxn2chFXOfj3gHfgdLX5bNUei~ys2WrEfSq4V3UNQrEt8jo2UnLcgYSWBUQq2whiGsaOwdC~tLJOjvXhe-Ug5h5VbEJbst5BaJPcW-GWF0RRCO05twp~xh-WIRXPGp7OwInm2eDe4Om1ExQ__",
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
      image: "https://media-hosting.imagekit.io/3d91b9c3da284074/Screenshot%202025-03-30%20132703.png?Expires=1837929493&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nIoMLaxLFwErNGVbw29wbQjHWQlzJflGAovAZULlR2jZIkSXNbF82IYQy7y6hR3XzShFSWH3tnegHtAMqZFDvn1qWjUeskpeoBr3PbkBWQBlhuGUCgy1cxKbxn-Ni2jLlhslVGMd~iBBRFkwZ65PKzg6GtnzTWV5dzw0oJr7XrByK2VBwxjOi8znNeB6Bremotmd2sbgQnIMfRe1UqeZ~LTk7WgJjqvsgaULbxfaWuePHxST0oVtV96Hdjy5zhXpGLPUCSyTuQzTvydoGwfNVzJMd0T3t6MwVOvouxbuy55zbDoBpLQDt0KFjPdvvZ7zVqDbauQYAXgmhsMErrx67A__",
      tags: ["React"],
      demoUrl: "https://freelancer31.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/Free_lancer-clone",
    },
    {
      id: 2,
      title: "Manage Engine Static Clone",
      description: "A static landing page clone of a modern tech company.",
      image: "https://media-hosting.imagekit.io/cf2d74663a37433e/Screenshot%202025-03-30%20132845.png?Expires=1837929553&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gnDfwOWoniEwHXTTumAAa6RY8-SQYIFry2ABHmQ2OzHAjA-Ets5S6yJrIY9fnOZjBz4cN2NAAeCjopea2IHuQVrKX3UCgugmIMpvl85jP1Lim5MvxAEzBTCIPi3H5arXTruHekEkJEuCB-uej8vFKKh1F1wlDFwJ9IbaqhXocihAtNs-G6wr8Znwe-2j5DARzd98-eRRDlAVb4j6bNylmBXjuQVcytkTHIrobNwFDML-uZ12DoHGKKUml4gMQmb78O9Q9aMKny7uAiP-tZzDqrtzBzSqAo0ezgPr4-pTrvjZ3EIMaRTlnLJc29Nv1hFjWpx4McSKLVBcLN1iS45hQQ__",
      tags: ["HTML", "CSS"],
      demoUrl: "https://tiny-marigold-a203d3.netlify.app/",
      repoUrl: "https://github.com/yashvi-3106/ManageEngine",
    },
    {
      id: 3,
      title: "Naturals Static Clone",
      description: "A static landing page clone of the Naturals Ice Cream website built with HTML & CSS.",
      image: "https://media-hosting.imagekit.io/9bbdc60a5aa64ab8/Screenshot%202025-03-30%20133030.png?Expires=1837929645&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NqEhYEd9RI0Vr0spPH2rwZBuGHkvKb1WBeNi5GhKJaZkMaM52HzE5lqd-8pkGvJ0vqtGswbNU1Bhf2L1QLA-NUvO3RWsvcX0xNyWs786~HSFfkVAMdx0hfAojS205yJTW--lc1eo4JxQMoajpp665cbG-9YtZeoNhPb1NQl6nHMQ0kA6xscIuhaSsPV36UUpxqAgCQ53srBnz4uC~6j2dtPHLvSXmdgmuPa5rLxtsStf81nVaMDDoSB~rOg7vQXIhhWo~jGJm96hUQYuFC0OlCD2DCu9xRKwv3arhvsSEZrh14bW8KvvSJc4zhWj7V5rYs82M-srwAgP4fXfuo7G~w__",
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