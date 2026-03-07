import Layout10Neuro from '@/components/layouts/Layout10Neuro';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme10Page() {
    const theme = getThemeBySlug('ai-ml');

    if (!theme) {
        notFound();
    }

    return <Layout10Neuro theme={theme} />;
}

export const metadata = {
    title: "Sentient AI - Next-Gen ML Solutions",
    description: "Building the neural pathways of the future. Harness the power of advanced machine learning and sentient AI for your enterprise.",
    keywords: ["AI", "machine learning", "ML solutions", "artificial intelligence", "tech startup"],
};
