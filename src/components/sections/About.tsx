"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server } from "lucide-react";

const features = [
    {
        icon: <Code className="w-8 h-8 text-green-400" />,
        title: "GenAI & LLM Engineering",
        description: "Building RAG pipelines, multi-agent systems, and LLM-powered products with OpenAI, Anthropic Claude, Gemini, and LangChain.",
    },
    {
        icon: <Layout className="w-8 h-8 text-cyan-400" />,
        title: "Frontend Development",
        description: "Building responsive and interactive UIs with React, Next.js, and Tailwind CSS.",
    },
    {
        icon: <Server className="w-8 h-8 text-purple-400" />,
        title: "Backend Development",
        description: "Creating robust APIs and servers using Node.js, Express, REST APIs, and scalable system design.",
    },
    {
        icon: <Database className="w-8 h-8 text-pink-400" />,
        title: "Databases & Vector Stores",
        description: "Designing efficient schemas with PostgreSQL, Supabase, MongoDB, and ChromaDB for semantic search.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I am an <span className="text-cyan-400 font-medium">Executive - GenAI Developer at RuralShores Business Services</span>, building GenAI products end-to-end with Next.js, React, Node.js, and LLMs from OpenAI, Anthropic Claude, and Google Gemini.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I&apos;ve shipped RAG pipelines, multi-agent systems, and document-intelligence platforms that process real production workloads — cutting AI costs by ~79% and chatbot latency by ~97% along the way. My goal is to build digital solutions that solve real-world problems efficiently.
                        </p>
                        <div className="pt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 glass rounded-xl text-center">
                                    <h3 className="text-3xl font-bold text-purple-400">1+</h3>
                                    <p className="text-sm text-muted-foreground">Years Experience</p>
                                </div>
                                <div className="p-4 glass rounded-xl text-center">
                                    <h3 className="text-3xl font-bold text-cyan-400">6+</h3>
                                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="p-6 glass rounded-xl border border-border hover:border-primary/20 transition-all group"
                            >
                                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
