"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-10 h-10" />; // Placeholder to avoid layout shift
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center overflow-hidden hover:bg-white/20 transition-colors"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? -20 : 0,
                    opacity: theme === "dark" ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === "dark" ? 0 : 20,
                    opacity: theme === "dark" ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute"
            >
                <Moon className="w-5 h-5 text-purple-400" />
            </motion.div>
        </motion.button>
    );
}
