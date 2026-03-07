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
    title: "DataSight - Powering Business Intelligence",
    description: "Transform raw data into actionable insights. DataSight provides the analytics and intelligence your business needs to grow.",
    keywords: ["analytics", "business intelligence", "BI tool", "data visualization", "SaaS analytics"],
};
