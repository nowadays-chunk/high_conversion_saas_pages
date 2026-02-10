import Layout10Neuro from '@/components/layouts/Layout10Neuro';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme10Page() {
    const theme = getThemeBySlug('theme-10-ai-ml');

    if (!theme) {
        notFound();
    }

    return <Layout10Neuro theme={theme} />;
}

export const metadata = {
    title: 'MindForge AI - AI/ML Platform',
    description: 'Intelligent automation for modern teams powered by AI',
};
