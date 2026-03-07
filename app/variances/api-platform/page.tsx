import Layout06DarkMode from '@/components/layouts/Layout06DarkMode';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme06Page() {
    const theme = getThemeBySlug('api-platform');

    if (!theme) {
        notFound();
    }

    return <Layout06DarkMode theme={theme} />;
}

export const metadata = {
    title: "Connectify - The Developer-First API Hub",
    description: "Integrate, scale, and manage your APIs with ease. Connectify is the platform built for developers, by developers.",
    keywords: ["API platform", "API management", "developer tools", "SaaS integration", "API hub"],
};
