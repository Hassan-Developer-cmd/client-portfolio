"use client"
import { motion } from "framer-motion";

export default function SmoothWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Neechay se upar
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // Jab screen par aaye tabhi chale
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}