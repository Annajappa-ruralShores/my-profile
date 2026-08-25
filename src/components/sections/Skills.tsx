"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "React", level: 90, color: "#61DAFB" },
    { name: "Next.js", level: 85, color: "#ffffff" },
    { name: "JavaScript", level: 90, color: "#e4f530ff" },
    { name: "TypeScript", level: 82, color: "#3178C6" },
    { name: "Node.js / Express", level: 85, color: "#339933" },
    { name: "Python", level: 82, color: "#45ee50ff" },
    { name: "OpenAI / Claude / Gemini", level: 88, color: "#ed2ac0ff" },
    { name: "LangChain & RAG", level: 85, color: "#1cc7eeff" },
    { name: "Agent & Multi-Agent Systems", level: 80, color: "#a855f7" },
    { name: "PostgreSQL / Prisma", level: 80, color: "#3178C6" },
    { name: "Supabase / MongoDB", level: 78, color: "#47A248" },
    { name: "Redis", level: 75, color: "#DC382D" },
    { name: "Tailwind CSS", level: 90, color: "#38B2AC" },
    { name: "Git / GitHub", level: 90, color: "#e8277bff" },
    { name: "Docker", level: 65, color: "#2496ED" },
    { name: "System Design", level: 75, color: "#eeea1cff" },
];

const getSkillLabel = (level: number) => {
    if (level < 70) return "Beginner";
    if (level <= 90) return "Intermediate";
    return "Expert";
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative bg-black/5 dark:bg-black/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-6 rounded-2xl text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4 text-foreground">{skill.name}</h3>

                                {/* Bar Progress */}
                                <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: skill.color }}
                                    />
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                                    <span>{getSkillLabel(skill.level)}</span>
                                    <span>{skill.level}%</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
