import Layout04Minimal from '@/components/layouts/Layout04Minimal';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme04Page() {
    const theme = getThemeBySlug('crm');

    if (!theme) {
        notFound();
    }

    return <Layout04Minimal theme={theme} />;
}

export const metadata = {
    title: "RelateFlow - Building Better Customer Relationships",
    description: "Build, grow, and maintain your customer relationships with RelateFlow. The CRM built for modern sales teams.",
    keywords: ["CRM", "customer relationship management", "sales tool", "customer success", "SaaS CRM"],
};
