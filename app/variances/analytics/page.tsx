import Layout01Classic from '@/components/layouts/Layout01Classic';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme01Page() {
    const theme = getThemeBySlug('analytics');

    if (!theme) {
        notFound();
    }

    return <Layout01Classic theme={theme} />;
}

export const metadata = {
    title: 'DataViz Pro - Analytics Platform',
    description: 'Transform data into actionable insights with our powerful analytics platform',
};
