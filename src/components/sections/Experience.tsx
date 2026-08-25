"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Executive - GenAI Developer",
        company: "RuralShores Business Services Pvt Ltd",
        period: "Nov 2025 - Present",
        description: "Own two GenAI products end-to-end. Built LeaseIQ, extracting 290 lease data points from PDFs via OpenAI SDK; fixed an 80+ page processing failure with BM25 retrieval, cutting cost ~79%. Built GramAI Catalyst, a LangChain + OpenAI RAG-based LMS assistant for 105 students, and cut chatbot latency from 15s to ~400ms with Redis caching.",
        tags: ["Next.js", "OpenAI SDK", "LangChain", "RAG", "BM25", "Redis", "PostgreSQL"],
    },
    {
        title: "Full-Stack Developer Intern",
        company: "Kajkarma Innovation Pvt. Ltd",
        period: "May 2025 - Oct 2025",
        description: "Built and deployed the frontend for Diano, a jewelry e-commerce platform, using Next.js, TypeScript, and Tailwind CSS with REST APIs and JWT authentication. Improved page load time by ~30% via image optimization, code splitting, and caching.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "JWT"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-background text-foreground relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            className="group relative rounded-2xl glass border border-border p-6 hover:border-primary/30 transition-all hover:shadow-xl"
                        >
                            <div className="flex items-center mb-4">
                                <Briefcase className="w-6 h-6 text-primary mr-2" />
                                <h3 className="text-xl font-semibold text-foreground">
                                    {exp.title} @ {exp.company}
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2 flex items-center">
                                <Calendar className="w-4 h-4 mr-1" /> {exp.period}
                            </p>
                            <p className="text-muted-foreground mb-4 line-clamp-3">{exp.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
