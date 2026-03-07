import Layout07Glass from '@/components/layouts/Layout07Glass';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme07Page() {
    const theme = getThemeBySlug('hr-management');

    if (!theme) {
        notFound();
    }

    return <Layout07Glass theme={theme} />;
}

export const metadata = {
    title: "PeopleLink - Empowering Your Workforce",
    description: "HR software that scales with you and your team. Manage your workforce with clarity and purpose using PeopleLink.",
    keywords: ["HR management", "workforce management", "people management", "HR SaaS", "PeopleLink"],
};
