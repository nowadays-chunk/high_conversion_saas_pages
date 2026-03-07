import Layout09Parallax from '@/components/layouts/Layout09Parallax';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme09Page() {
    const theme = getThemeBySlug('cybersecurity');

    if (!theme) {
        notFound();
    }

    return <Layout09Parallax theme={theme} />;
}

export const metadata = {
    title: "ShieldGuard - Enterprise-Grade Security",
    description: "Next-gen protection for your business with AI-powered security. Secure your infrastructure with ShieldGuard.",
    keywords: ["cybersecurity", "security suite", "AI security", "enterprise protection", "SaaS security"],
};
