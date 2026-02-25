/**
 * Centralized Asset Management Header
 * Defines all external media, 3D scenes, and global constants used across the application.
 * This structure avoids hardcoding magic strings and makes content updates trivial.
 */

export const ASSETS = {
    // 3D Scene configurations
    SPLINE: {
        BACKGROUND: "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode", // The glowing, fluid background scene
        AI_NETWORK: "https://prod.spline.design/9y4Kk9BvJ4K4JgP8/scene.splinecode", // Functional abstract particle scene
    },

    // Cinematic 3D Loop Videos
    VIDEO: {
        INTRO_3D_LOOP: "https://cdn.pixabay.com/video/2020/05/26/40232-425134117_large.mp4", // Abstract 3D geometric waves
    },

    // High-Resolution Image References
    // Uses Unsplash IDs with performance optimization flags
    IMAGES: {
        ARCHIVE_SHOES: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584735174965-9828dc3d4ce4?q=80&w=1200&auto=format&fit=crop'
        ],
        // High-impact feature backgrounds
        FEATURE_AERODYNAMICS: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop',
        FEATURE_INTERACTIVE: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop',
        FEATURE_KINETICS: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1200&auto=format&fit=crop',
        DECONSTRUCT_PINNED: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop',

        // Deep-Dive Scrollytelling Materials (New)
        TECH_CARBON: 'https://images.unsplash.com/photo-1594966624536-547e682afb18?q=80&w=1200&auto=format&fit=crop',
        TECH_FOAM: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop', // Swapped to a stable, texturized Unsplash ID
        TECH_TRACTION: 'https://images.unsplash.com/photo-1510006240217-187515eb1808?q=80&w=1200&auto=format&fit=crop',
        TECH_LACES: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop',
        TECH_MESH: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop', // Swapped to stable aero texture
        TECH_ECO: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1200&auto=format&fit=crop',
        TECH_DATA: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
        TECH_COLORWAYS: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop',
        TECH_HERITAGE: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1200&auto=format&fit=crop',
    },

    // Application Constants - 18 Chapter Flow
    SCROLL_CHAPTERS: [
        { id: 'chapter-hero', label: 'Arrival' },
        { id: 'chapter-archive', label: 'Archive' },
        { id: 'chapter-speed', label: 'Speed' },
        { id: 'chapter-anatomy', label: 'Anatomy' },
        { id: 'chapter-carbon', label: 'Carbon Base' },
        { id: 'chapter-foam', label: 'React Foam' },
        { id: 'chapter-deconstruct', label: 'Deconstruct' },
        { id: 'chapter-gravity', label: 'Gravity' },
        { id: 'chapter-innovation', label: 'Innovation' },
        { id: 'chapter-traction', label: 'Traction Map' },
        { id: 'chapter-lockdown', label: 'Lockdown' },
        { id: 'chapter-hypermesh', label: 'Hypermesh' },
        { id: 'chapter-telemetry', label: 'Telemetry' },
        { id: 'chapter-eco', label: 'Zero Carbon' },
        { id: 'chapter-heritage', label: 'Heritage Line' },
        { id: 'chapter-colorways', label: 'Colorways' },
        { id: 'chapter-platform', label: 'Platform' },
        { id: 'chapter-showcase', label: 'Showcase' },
    ],

    // Performance Configuration
    PHYSICS: {
        LENIS_DURATION: 1.5,
        LENIS_MULTIPLIER: 1.1,
        GSAP_SCRUB: 2.0,
    }
};
