export interface Theme {
    id: number;
    name: string;
    slug: string;
    description: string;
    ideology: string;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
        muted: string;
    };
    layout: string;
    product: {
        name: string;
        tagline: string;
        category: string;
    };
}

export const themes: Theme[] = [
    {
        id: 1,
        name: "Classic Professional",
        slug: "analytics",
        description: "Trust-building design with traditional Z-pattern hero",
        ideology: "Growth Design, CRO, Trust-Building",
        colors: {
            primary: "#2563eb", // Blue
            secondary: "#1e40af",
            accent: "#3b82f6",
            background: "#ffffff",
            text: "#1f2937",
            muted: "#6b7280"
        },
        layout: "Layout01Classic",
        product: {
            name: "DataViz Pro",
            tagline: "Transform data into actionable insights",
            category: "Analytics Platform"
        }
    },
    {
        id: 2,
        name: "Modern Vibrant",
        slug: "project-mgmt",
        description: "Split-screen design with bold purple tones",
        ideology: "Innovation, Collaboration, Energy",
        colors: {
            primary: "#7c3aed", // Purple
            secondary: "#6d28d9",
            accent: "#a78bfa",
            background: "#fafafa",
            text: "#111827",
            muted: "#9ca3af"
        },
        layout: "Layout02SplitScreen",
        product: {
            name: "TeamFlow",
            tagline: "Streamline projects, empower teams",
            category: "Project Management"
        }
    },
    {
        id: 3,
        name: "Dark Premium",
        slug: "email-marketing",
        description: "Video hero with dark luxury aesthetics",
        ideology: "Premium, Emotion-Driven, Storytelling",
        colors: {
            primary: "#f97316", // Orange accent
            secondary: "#ea580c",
            accent: "#fb923c",
            background: "#0f172a",
            text: "#f8fafc",
            muted: "#94a3b8"
        },
        layout: "Layout03VideoHero",
        product: {
            name: "MailMaster",
            tagline: "Automate campaigns, maximize conversions",
            category: "Email Marketing"
        }
    },
    {
        id: 4,
        name: "Minimal Swiss",
        slug: "crm",
        description: "Maximum white space, bold typography, minimal color",
        ideology: "Swiss Design, Clarity, Simplicity",
        colors: {
            primary: "#000000",
            secondary: "#171717",
            accent: "#404040",
            background: "#ffffff",
            text: "#0a0a0a",
            muted: "#737373"
        },
        layout: "Layout04Minimal",
        product: {
            name: "SalesCore",
            tagline: "Simple CRM, powerful results",
            category: "CRM Solution"
        }
    },
    {
        id: 5,
        name: "Bold Gradient",
        slug: "design-collab",
        description: "High-energy gradients with vibrant multi-color palette",
        ideology: "Creative, Dynamic, Design-Forward",
        colors: {
            primary: "#ec4899", // Pink to purple gradient base
            secondary: "#a855f7",
            accent: "#f472b6",
            background: "#ffffff",
            text: "#18181b",
            muted: "#71717a"
        },
        layout: "Layout05Gradient",
        product: {
            name: "DesignSync",
            tagline: "Where creativity meets collaboration",
            category: "Design Tool"
        }
    },
    {
        id: 6,
        name: "Nature Organic",
        slug: "api-platform",
        description: "Dark mode with code snippets and technical focus",
        ideology: "Developer-First, Technical, Growth",
        colors: {
            primary: "#10b981", // Green
            secondary: "#059669",
            accent: "#34d399",
            background: "#111827",
            text: "#f9fafb",
            muted: "#9ca3af"
        },
        layout: "Layout06DarkMode",
        product: {
            name: "APIHub",
            tagline: "Build faster with powerful APIs",
            category: "API Platform"
        }
    },
    {
        id: 7,
        name: "Glassmorphism Premium",
        slug: "hr-management",
        description: "Frosted glass effects with translucent overlays",
        ideology: "Premium, Human-Centric, Modern",
        colors: {
            primary: "#06b6d4", // Cyan
            secondary: "#0891b2",
            accent: "#22d3ee",
            background: "#f0f9ff",
            text: "#0c4a6e",
            muted: "#64748b"
        },
        layout: "Layout07Glass",
        product: {
            name: "PeopleFirst",
            tagline: "HR software that scales with you",
            category: "HR Management"
        }
    },
    {
        id: 8,
        name: "Brutalist Statement",
        slug: "ecommerce",
        description: "Raw, bold, asymmetric with high contrast",
        ideology: "Bold, Unconventional, Statement",
        colors: {
            primary: "#dc2626", // Red
            secondary: "#b91c1c",
            accent: "#ef4444",
            background: "#fef2f2",
            text: "#000000",
            muted: "#525252"
        },
        layout: "Layout08Brutalist",
        product: {
            name: "ShopZero",
            tagline: "E-commerce without the complexity",
            category: "E-commerce Platform"
        }
    },
    {
        id: 9,
        name: "Sunset Warm",
        slug: "cybersecurity",
        description: "Parallax depth with warm orange tones",
        ideology: "Security, Trust, Depth",
        colors: {
            primary: "#f59e0b", // Amber
            secondary: "#d97706",
            accent: "#fbbf24",
            background: "#fffbeb",
            text: "#78350f",
            muted: "#92400e"
        },
        layout: "Layout09Parallax",
        product: {
            name: "ShieldAI",
            tagline: "Next-gen protection for your business",
            category: "Cybersecurity"
        }
    },
    {
        id: 10,
        name: "Neumorphism Soft",
        slug: "ai-ml",
        description: "Soft shadows with embossed, tactile elements",
        ideology: "Futuristic, Intelligent, Soft",
        colors: {
            primary: "#8b5cf6", // Violet
            secondary: "#7c3aed",
            accent: "#a78bfa",
            background: "#e0e7ff",
            text: "#3730a3",
            muted: "#6366f1"
        },
        layout: "Layout10Neuro",
        product: {
            name: "MindForge AI",
            tagline: "Intelligent automation for modern teams",
            category: "AI/ML Platform"
        }
    }
];

export function getThemeBySlug(slug: string): Theme | undefined {
    return themes.find(theme => theme.slug === slug);
}

export function getThemeById(id: number): Theme | undefined {
    return themes.find(theme => theme.id === id);
}
