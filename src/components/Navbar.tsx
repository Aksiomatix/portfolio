"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-white px-6 py-4">
        <motion.div
            className="flex justify-center space-x-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {navLinks.map((link) => (
            <motion.div
                key={link.href}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Link
                href={link.href}
                className="text-white text-lg font-medium accent-hover transition-colors duration-200 nav-link"
                >
                {link.label}
                </Link>
            </motion.div>
            ))}
        </motion.div>
    </nav>
  );
}