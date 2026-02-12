import Layout02SplitScreen from '@/components/layouts/Layout02SplitScreen';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme02Page() {
    const theme = getThemeBySlug('project-mgmt');

    if (!theme) {
        notFound();
    }

    return <Layout02SplitScreen theme={theme} />;
}

export const metadata = {
    title: 'TeamFlow - Project Management',
    description: 'Streamline projects, empower teams with modern collaboration tools',
};
