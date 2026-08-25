"use client";

import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { sendEmail } from "@/app/actions";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = {
    success: false,
    message: "",
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
            {pending ? (
                <>
                    <Loader2 className="animate-spin" />
                    Sending...
                </>
            ) : (
                <>
                    <Send size={20} />
                    Send Message
                </>
            )}
        </button>
    );
}

export default function Contact() {
    const [state, formAction] = useActionState(sendEmail, initialState);

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-muted-foreground">Have a project in mind? Let's work together.</p>
                </motion.div>

                <div className="glass p-8 md:p-12 rounded-2xl border border-border relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -z-10" />

                    {state?.success ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-12"
                        >
                            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="mt-6 px-6 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                            >
                                Send Another
                            </button>
                        </motion.div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all peer placeholder-transparent"
                                    placeholder="Name"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Name
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all peer placeholder-transparent"
                                    placeholder="Email"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Email
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={5}
                                    required
                                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all peer placeholder-transparent resize-none"
                                    placeholder="Message"
                                />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-primary"
                                >
                                    Message
                                </label>
                            </div>

                            <SubmitButton />

                            {state?.success === false && state?.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-center font-medium"
                                >
                                    {state.message}
                                </motion.p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
