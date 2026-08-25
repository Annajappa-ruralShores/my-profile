"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "LeaseIQ",
        description: "Enterprise lease abstraction platform extracting 290 data points across 18 categories from commercial lease PDFs via OpenAI GPT-4o, with a three-tier human review workflow into client-ready Excel reports. Cut processing cost ~79% and fixed 80+ page documents that previously never completed.",
        tags: ["Next.js 16", "React 19", "TypeScript", "PostgreSQL", "Prisma", "OpenAI GPT-4o"],
        image: "/projects/leaseiq.png",
        github: "#",
        live: "#",
        color: "from-purple-500 to-blue-500",
    },
    {
        title: "GramAI Catalyst",
        description: "Multilingual AI-powered LMS delivering GenAI courses to 105 students across 9 courses, with course-scoped AI faculty mentors (Claude + Gemini + Sarvam AI voice), automated assignment evaluation, quiz scoring, and certificate generation.",
        tags: ["Next.js 16", "TypeScript", "Anthropic Claude", "Gemini", "Sarvam AI", "PostgreSQL"],
        image: "/projects/gramai.png",
        github: "#",
        live: "#",
        color: "from-cyan-500 to-blue-500",
    },
    {
        title: "Diano",
        description: "Frontend for a jewelry e-commerce platform built with Next.js, TypeScript, and Tailwind CSS, integrating REST APIs for product management and JWT-based authentication.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "JWT"],
        image: "/projects/diano.png",
        github: "https://github.com/Annajappa/daimondwebapp",
        live: "#",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Emotion Recognition",
        description: "Facial expression emotion recognition system using YOLOv7 with PyTorch and scikit-learn.",
        tags: ["Python", "PyTorch", "YOLOv7", "sklearn"],
        image: "/projects/emotion.png",
        github: "https://github.com/Annajappa/Emotion_Recognisation_YOLOv7",
        live: "#",
        color: "from-pink-500 to-purple-500",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative rounded-2xl overflow-hidden glass border border-border hover:border-primary/30 transition-all"
                        >
                            {/* Image area */}
                            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                                ></div>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.github !== "#" && (
                                            <a href={project.github} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.live !== "#" && (
                                            <a href={project.live} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

