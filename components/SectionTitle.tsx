import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon?: React.ElementType;
  label: string;
  kicker?: string;
  align?: "left" | "center"; // flexibility
}

const SectionTitle: React.FC<Props> = ({
  icon: Icon,
  label,
  kicker,
  align = "left",
}) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className={`flex ${
      align === "center" ? "justify-center text-center" : ""
    } items-center gap-3 mb-8`}
  >
    {Icon && (
      <div className="p-2 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-inner border border-zinc-800 flex items-center justify-center transition-colors hover:border-fuchsia-400/40">
        <Icon className="h-5 w-5 text-zinc-300" />
      </div>
    )}
    <div>
      {kicker && (
        <p className="text-xs uppercase tracking-wider text-zinc-400 mb-1">
          {kicker}
        </p>
      )}
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
        {label}
      </h2>
    </div>
  </motion.div>
);

export default SectionTitle;
