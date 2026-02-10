import Layout04Minimal from '@/components/layouts/Layout04Minimal';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme04Page() {
    const theme = getThemeBySlug('theme-04-crm');

    if (!theme) {
        notFound();
    }

    return <Layout04Minimal theme={theme} />;
}

export const metadata = {
    title: 'SalesCore - Simple CRM',
    description: 'Simple CRM, powerful results for modern sales teams',
};
