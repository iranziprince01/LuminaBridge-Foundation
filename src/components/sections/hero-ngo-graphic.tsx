"use client";

import {
  Brush,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Sun,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";
import { motionEase } from "@/components/motion/motion-presets";

const missionIcons = [
  { Icon: UsersRound, x: 52, y: 88, delay: 0.55 },
  { Icon: GraduationCap, x: 318, y: 96, delay: 0.62 },
  { Icon: Brush, x: 72, y: 248, delay: 0.68 },
  { Icon: Handshake, x: 328, y: 260, delay: 0.74 },
  { Icon: Sun, x: 200, y: 56, delay: 0.8 },
] as const;

const communityNodes = [
  { cx: 88, cy: 318, r: 18 },
  { cx: 148, cy: 292, r: 16 },
  { cx: 200, cy: 276, r: 20 },
  { cx: 252, cy: 292, r: 16 },
  { cx: 312, cy: 318, r: 18 },
] as const;

export function HeroNgoGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 0.2, y: 0, scale: 1 }}
      transition={{ delay: 0.45, duration: 0.9, ease: motionEase }}
      className="relative mx-auto w-full max-w-[min(100%,22rem)] xl:max-w-[26rem]"
      aria-hidden
    >
      <svg
        viewBox="0 0 400 400"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-ngo-glow" cx="50%" cy="42%" r="55%">
            <stop offset="0%" stopColor="#0f766e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0f766e" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="200" cy="170" r="150" fill="url(#hero-ngo-glow)" />

        {missionIcons.map(({ Icon, x, y, delay }) => (
          <motion.g
            key={`${x}-${y}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay, duration: 0.6, ease: motionEase }}
          >
            <circle cx={x} cy={y} r="26" className="fill-white/10 stroke-white/25" strokeWidth="1" />
            <foreignObject x={x - 12} y={y - 12} width="24" height="24">
              <div className="flex h-6 w-6 items-center justify-center text-white/80">
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden />
              </div>
            </foreignObject>
          </motion.g>
        ))}

        <path
          d="M36 332 C108 228 292 228 364 332"
          className="stroke-secondary"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M68 332 C132 268 268 268 332 332"
          className="stroke-white/45"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path d="M28 332 H372" className="stroke-white/30" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M28 332 V348 H372 V332" className="fill-white/8 stroke-white/20" strokeWidth="1" />

        {communityNodes.map(({ cx, cy, r }, index) => (
          <g key={cx}>
            <circle cx={cx} cy={cy} r={r} className="fill-white/12 stroke-white/35" strokeWidth="1.25" />
            <circle cx={cx} cy={cy - 4} r={r * 0.38} className="fill-white/25" />
            <path
              d={`M${cx - r * 0.55} ${cy + r * 0.45} Q${cx} ${cy + r * 0.9} ${cx + r * 0.55} ${cy + r * 0.45}`}
              className="stroke-white/35"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            {index < communityNodes.length - 1 ? (
              <path
                d={`M${cx} ${cy} L${communityNodes[index + 1].cx} ${communityNodes[index + 1].cy}`}
                className="stroke-[#ffe600]/35"
                strokeWidth="1"
                strokeDasharray="4 5"
              />
            ) : null}
          </g>
        ))}

        <motion.g
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: motionEase }}
        >
          <circle cx="200" cy="168" r="42" className="fill-secondary/20 stroke-secondary/50" strokeWidth="1.5" />
          <foreignObject x="176" y="144" width="48" height="48">
            <div className="flex h-12 w-12 items-center justify-center text-[#ffe600]">
              <HeartHandshake className="h-7 w-7" strokeWidth={1.5} aria-hidden />
            </div>
          </foreignObject>
        </motion.g>

        <path
          d="M200 210 V248"
          className="stroke-[#ffe600]/40"
          strokeWidth="1.5"
          strokeDasharray="3 4"
        />

        <g className="fill-[#fab500]">
          <path d="M200 118 L206.5 131.5 L221 133.5 L210.5 143.5 L213.5 158 L200 151 L186.5 158 L189.5 143.5 L179 133.5 L193.5 131.5 Z" />
        </g>
      </svg>
    </motion.div>
  );
}
