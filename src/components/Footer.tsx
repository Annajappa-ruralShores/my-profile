"use client";

import { motion } from "framer-motion";
import { Github as GitHubIcon, Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/annajappa712/", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/annajappa-gadige", label: "LinkedIn" },
    { icon: <GitHubIcon size={20} />, href: "https://github.com/Annajappa", label: "GitHub" },
    { icon: <MessageCircle size={20} />, href: "https://wa.me/916304883173", label: "WhatsApp" },
];

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border bg-black/5 dark:bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <h3 className="text-xl font-bold text-gradient mb-1">Annajappa</h3>
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex space-x-6"
                >
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            aria-label={link.label}
                            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
                        >
                            {link.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </footer>
    );
}
