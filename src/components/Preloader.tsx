import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        // Lock background scrolling during preloader
        document.body.style.overflow = 'hidden';

        // Smooth, dynamic loading acceleration
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const delta = prev < 35 ? 3 : prev < 75 ? 2 : prev < 92 ? 3 : 1;
                return Math.min(100, prev + delta);
            });
        }, 28);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const exitTimer = setTimeout(() => {
                setIsFinished(true);
                if (onComplete) onComplete();
                setTimeout(() => {
                    document.body.style.overflow = '';
                }, 1100);
            }, 400);

            return () => clearTimeout(exitTimer);
        }
    }, [progress, onComplete]);

    // SVG circle geometry for dynamic stroke drawing
    const radius = 72;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <AnimatePresence>
            {!isFinished && (
                <div className="fixed inset-0 z-[9999] pointer-events-auto select-none overflow-hidden">
                    {/* 6-Column Staggered Architectural Shutter Louvers for Showstopper Exit */}
                    <div className="absolute inset-0 flex pointer-events-none z-10">
                        {[0, 1, 2, 3, 4, 5].map((col) => (
                            <motion.div
                                key={col}
                                initial={{ y: 0 }}
                                exit={{
                                    y: '-100%',
                                    transition: {
                                        duration: 0.95,
                                        delay: col * 0.07,
                                        ease: [0.77, 0, 0.175, 1], // Architectural deceleration curve
                                    },
                                }}
                                className="relative w-1/6 h-full bg-[#0a0a0a] border-r border-white/[0.04] overflow-hidden"
                            >
                                {/* Luminous Gold Trailing Laser Edge on Shutter Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent shadow-[0_0_18px_#c5a880]" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Visual Animation Stage */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 0.94,
                            filter: 'blur(8px)',
                            transition: { duration: 0.45, ease: 'easeOut' },
                        }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-[#f7f5ef]"
                    >
                        {/* Animated Ambient Radial Glow Background */}
                        <motion.div
                            animate={{
                                scale: [1, 1.25, 1],
                                opacity: [0.15, 0.35, 0.15],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#c5a880]/20 via-[#c5a880]/10 to-transparent blur-3xl pointer-events-none"
                        />

                        {/* Precision Caliper Drafting Crosshairs in 4 Corners */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-8 sm:inset-14 pointer-events-none"
                        >
                            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#c5a880]/40" />
                            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#c5a880]/40" />
                            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#c5a880]/40" />
                            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#c5a880]/40" />
                        </motion.div>

                        {/* Central Animated Gyroscope & Emblem Container */}
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                            {/* Expanding Sonar / Architectural Ripple Waves */}
                            {[0, 0.7, 1.4].map((delay, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0.4 }}
                                    animate={{
                                        scale: [0.8, 1.75, 2.3],
                                        opacity: [0.35, 0.15, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: delay,
                                        ease: 'easeOut',
                                    }}
                                    className="absolute inset-0 rounded-full border border-[#c5a880]/40 pointer-events-none"
                                />
                            ))}

                            {/* Layer 1: Outer Dashed Gear Ring (Clockwise Rotation) */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full border border-dashed border-white/20"
                            />

                            {/* Layer 2: Orbiting Satellite Beacon */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <div className="w-2.5 h-2.5 rounded-full bg-[#c5a880] shadow-[0_0_12px_#c5a880] absolute -top-1.5 left-1/2 -translate-x-1/2" />
                            </motion.div>

                            {/* Layer 3: Counter-Clockwise Precision Compass Ring */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-3 rounded-full border border-white/10"
                            >
                                {/* 4 Cardinal Nodes */}
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white/40" />
                            </motion.div>

                            {/* Layer 4: Real-time SVG Stroke Drawing Arc */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 160 160">
                                <circle
                                    cx="80"
                                    cy="80"
                                    r={radius}
                                    stroke="rgba(255,255,255,0.06)"
                                    strokeWidth="2"
                                    fill="none"
                                />
                                <circle
                                    cx="80"
                                    cy="80"
                                    r={radius}
                                    stroke="#c5a880"
                                    strokeWidth="2.5"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="round"
                                    fill="none"
                                    className="transition-all duration-100 ease-out"
                                    style={{ filter: 'drop-shadow(0 0 6px rgba(197,168,128,0.7))' }}
                                />
                            </svg>

                            {/* Layer 5: Logo Insignia with Dynamic Shimmer Light Sweep */}
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1.5 bg-[#141414] border border-white/25 shadow-[0_0_40px_rgba(0,0,0,0.95)]"
                            >
                                <img
                                    src="/logo.png"
                                    alt="Nedunthatchan Architects"
                                    className="w-full h-full object-cover rounded-full"
                                />

                                {/* Diagonal Light Sweep Sheen Across Logo */}
                                <motion.div
                                    initial={{ x: '-150%' }}
                                    animate={{ x: '150%' }}
                                    transition={{
                                        duration: 2.2,
                                        repeat: Infinity,
                                        repeatDelay: 1.2,
                                        ease: 'easeInOut',
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                                />
                            </motion.div>
                        </div>

                        {/* Minimal Brand Mark (No extra text) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25, duration: 0.7 }}
                            className="mt-8 text-center space-y-1"
                        >
                            <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.24em] font-light uppercase text-white">
                                Nedunthatchan
                            </h1>
                            <p className="text-[10px] tracking-[0.45em] uppercase text-[#c5a880] font-light">
                                Architects
                            </p>
                        </motion.div>

                        {/* Kinetic Progress Bar & Mechanical Numbers */}
                        <div className="w-56 sm:w-64 space-y-2.5 mt-8">
                            {/* Hairline Progress Track with Glowing Traveling Head */}
                            <div className="w-full h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#8c7b6d] via-[#c5a880] to-white shadow-[0_0_12px_#c5a880]"
                                    style={{ width: `${progress}%` }}
                                    transition={{ ease: 'easeOut', duration: 0.08 }}
                                />
                            </div>

                            {/* Numeric Percentage - Minimal & Pure */}
                            <div className="flex justify-between items-center text-[10px] text-white/40 tracking-[0.25em] font-mono">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] animate-ping" />
                                <span className="text-[#c5a880] text-xs font-serif tabular-nums tracking-wider">
                                    {progress.toString().padStart(2, '0')}%
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
