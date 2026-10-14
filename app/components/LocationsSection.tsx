"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { memo, useMemo, useState, useEffect } from "react";
import { Globe } from "@/components/ui/globe";

export interface DatacenterLocation {
    name: string;
    region: string;
    continent: "asia" | "europe-americas";
    flag: string;
    ping: string;
    status: "active";
    lat: number;
    lng: number;
}

const locations: DatacenterLocation[] = [
    {
        name: "India (Noida & Delhi NCR)",
        region: "Asia South Primary Cluster",
        continent: "asia",
        flag: "/flags/india.png",
        ping: "< 8ms",
        status: "active",
        lat: 28.6139,
        lng: 77.2090,
    },
    {
        name: "India (Mumbai)",
        region: "West Coast Direct Edge Hub",
        continent: "asia",
        flag: "/flags/india.png",
        ping: "< 12ms",
        status: "active",
        lat: 19.0760,
        lng: 72.8777,
    },
    {
        name: "Singapore",
        region: "Equinix SG1 / Southeast Asia",
        continent: "asia",
        flag: "/flags/singapore.png",
        ping: "< 28ms",
        status: "active",
        lat: 1.3521,
        lng: 103.8198,
    },
    {
        name: "Dubai (UAE)",
        region: "Middle East Direct Gateway",
        continent: "asia",
        flag: "/flags/dubai.png",
        ping: "< 35ms",
        status: "active",
        lat: 25.2048,
        lng: 55.2708,
    },
    {
        name: "Pakistan (Lahore)",
        region: "Asia South Regional Node",
        continent: "asia",
        flag: "/flags/pakistan.png",
        ping: "< 14ms",
        status: "active",
        lat: 31.5204,
        lng: 74.3587,
    },
    {
        name: "Germany (Frankfurt)",
        region: "DE-CIX Europe Central Hub",
        continent: "europe-americas",
        flag: "/flags/germany.png",
        ping: "< 115ms",
        status: "active",
        lat: 50.1109,
        lng: 8.6821,
    },
    {
        name: "United States (Ashburn, VA)",
        region: "US East (Data Alley Hub)",
        continent: "europe-americas",
        flag: "/flags/usa.png",
        ping: "< 160ms",
        status: "active",
        lat: 39.0438,
        lng: -77.4874,
    },
    {
        name: "Canada (Montreal)",
        region: "North America BHS Complex",
        continent: "europe-americas",
        flag: "/flags/canada.png",
        ping: "< 165ms",
        status: "active",
        lat: 45.3129,
        lng: -73.8767,
    },
];

const LocationItem = memo(({ location, index }: { location: DatacenterLocation, index: number }) => {
    return (
        <motion.div
            className="flex items-center justify-between gap-2 sm:gap-3 py-2 sm:py-2.5 px-3 rounded-xl bg-gray-100/60 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] hover:border-primary/40 dark:hover:border-primary/40 transition-colors"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-gray-300/60 dark:border-white/10 flex-shrink-0">
                    <Image
                        src={location.flag}
                        alt={`${location.name} flag`}
                        fill
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 dark:text-white font-semibold text-xs sm:text-sm truncate">
                        {location.name}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs truncate">
                        {location.region}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-[11px] font-mono shrink-0 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{location.ping}</span>
            </div>
        </motion.div>
    );
});

LocationItem.displayName = 'LocationItem';

export default function LocationsSection() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        return () => observer.disconnect();
    }, []);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    }), []);

    const globeConfig = useMemo(() => ({
        width: 900,
        height: 900,
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 0.4,
        mapSamples: 16000,
        mapBrightness: 3,
        baseColor: [0.1, 0.2, 0.3] as [number, number, number], 
        markerColor: [0.231, 0.510, 0.965] as [number, number, number], 
        glowColor: [0.1, 0.2, 0.3] as [number, number, number], 
        markers: locations
            .filter(loc => loc.status === "active")
            .map(location => ({
                location: [location.lat, location.lng] as [number, number],
                size: 0.08,
            })),
        onRender: () => { },
    }), []);

    return (
        <div className="relative px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="pointer-events-none relative mx-auto h-[30rem] sm:h-[40rem] lg:h-[50rem] overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_50%)] my-[-12rem] sm:my-[-15rem] lg:my-[-18.8rem] before:absolute before:inset-0 before:h-full before:w-full before:opacity-40 before:[background-image:radial-gradient(circle_at_bottom_center,var(--color),transparent_70%)] after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[50%] after:border-t after:border-secondary after:bg-primary"></div>
            <div className="absolute top-1/2 left-1/2 opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full max-w-[100vw] overflow-hidden">
                <svg className="w-full h-auto max-w-[1463px] max-h-[926px]" width="1463" height="926" viewBox="0 0 1463 926" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_f_0_1)">
                        <ellipse cx="887.5" cy="402.5" rx="275.5" ry="102.5" className="svg-gradient-fill" fillOpacity={isDark ? 0.47 : 0.25} />
                    </g>
                    <g filter="url(#filter1_f_0_1)">
                        <ellipse cx="575.5" cy="523.5" rx="275.5" ry="102.5" className="svg-gradient-fill" fillOpacity={isDark ? 0.47 : 0.25} />
                    </g>
                    <defs>
                        <filter id="filter0_f_0_1" x="312" y="0" width="1151" height="805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1" />
                        </filter>
                        <filter id="filter1_f_0_1" x="0" y="121" width="1151" height="805" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_0_1" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto py-8 sm:py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl orbitron-font font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                            Global Presence,
                            <br />
                            <span className="icon-text-primary">Local Performance</span>
                        </h2>

                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 leading-relaxed max-w-xl">
                            Our rapidly expanding datacenter network spans across Asia, Europe, and the Americas, delivering ultra-low tick latency, multi-terabit DDoS mitigation, and lightning-fast connections wherever your community plays.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            <div>
                                <h3 className="icon-text-primary orbitron-font text-sm sm:text-base mb-3 font-semibold flex items-center gap-2">
                                    <span>Asia & Middle East</span>
                                </h3>
                                <div className="space-y-2">
                                    {locations
                                        .filter(loc => loc.continent === "asia")
                                        .map((location, index) => (
                                            <LocationItem key={location.name} location={location} index={index} />
                                        ))
                                    }
                                </div>
                            </div>

                            <div>
                                <h3 className="icon-text-primary orbitron-font text-sm sm:text-base mb-3 font-semibold flex items-center gap-2">
                                    <span>Europe & Americas</span>
                                </h3>
                                <div className="space-y-2">
                                    {locations
                                        .filter(loc => loc.continent === "europe-americas")
                                        .map((location, index) => (
                                            <LocationItem key={location.name} location={location} index={index + 4} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div
                        className="relative hidden lg:block lg:h-[600px]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Globe config={globeConfig} />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
                <div
                    className="h-full w-full bottom-border-gradient"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
                    }}
                />
            </div>
        </div>
    );
}
