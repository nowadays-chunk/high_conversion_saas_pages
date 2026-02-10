import Layout07Glass from '@/components/layouts/Layout07Glass';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme07Page() {
    const theme = getThemeBySlug('theme-07-hr-management');

    if (!theme) {
        notFound();
    }

    return <Layout07Glass theme={theme} />;
}

export const metadata = {
    title: 'PeopleFirst - HR Management',
    description: 'HR software that scales with you and your team',
};
