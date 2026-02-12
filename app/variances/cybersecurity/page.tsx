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
    title: 'ShieldAI - Cybersecurity Suite',
    description: 'Next-gen protection for your business with AI-powered security',
};
