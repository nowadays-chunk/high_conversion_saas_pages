import Layout06DarkMode from '@/components/layouts/Layout06DarkMode';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme06Page() {
    const theme = getThemeBySlug('theme-06-api-platform');

    if (!theme) {
        notFound();
    }

    return <Layout06DarkMode theme={theme} />;
}

export const metadata = {
    title: 'APIHub - Developer API Platform',
    description: 'Build faster with powerful APIs for developers',
};
