"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const roles = [
    "GenAI Developer",
    "Full-Stack Developer",
    "RAG & LLM Engineer",
    "AI Automation Expert",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing Effect
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            } else {
                setText(
                    currentRole.substring(0, text.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full blur-[100px] animate-float" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-300/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
                <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-pink-300/30 rounded-full blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                        Hi, I'm <span className="text-gradient font-bold">Annajappa</span>
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
                        I am a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {text}
                        </span>
                        <span className="animate-pulse text-foreground">|</span>
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-lg">
                        Building GenAI products end-to-end, from RAG pipelines and LLM-powered
                        automation to full-stack web applications with Next.js and React.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full border border-border hover:bg-primary/5 transition-all flex items-center gap-2 font-medium text-foreground"
                        >
                            Hire Me
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>

                {/* 3D Image Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ perspective: 1000 }}
                >
                    <motion.div
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-2xl glass p-4"
                    >
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl"
                            style={{ transform: "translateZ(-50px)" }}
                        />
                        <div className="w-full h-full rounded-xl overflow-hidden relative bg-card flex items-center justify-center border border-border">
                            {/* Profile Image */}
                            <img
                                src="/Annajappa.png"
                                alt="Annajappa - GenAI & Full Stack Developer"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute -top-6 -right-6 p-4 glass rounded-xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transform: "translateZ(50px)" }}
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-6 -left-6 p-4 glass rounded-xl"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transform: "translateZ(50px)" }}
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
