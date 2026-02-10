import Layout03VideoHero from '@/components/layouts/Layout03VideoHero';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme03Page() {
    const theme = getThemeBySlug('theme-03-email-marketing');

    if (!theme) {
        notFound();
    }

    return <Layout03VideoHero theme={theme} />;
}

export const metadata = {
    title: 'MailMaster - Email Marketing',
    description: 'Automate campaigns, maximize conversions with powerful email marketing',
};
