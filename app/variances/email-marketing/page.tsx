import Layout03VideoHero from '@/components/layouts/Layout03VideoHero';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme03Page() {
    const theme = getThemeBySlug('email-marketing');

    if (!theme) {
        notFound();
    }

    return <Layout03VideoHero theme={theme} />;
}

export const metadata = {
    title: "InboxPulse - Intelligent Email Automation",
    description: "Automate campaigns, maximize conversions with powerful email marketing. InboxPulse: the tool for modern marketers.",
    keywords: ["email marketing", "automation", "campaign management", "marketing SaaS", "InboxPulse"],
};
