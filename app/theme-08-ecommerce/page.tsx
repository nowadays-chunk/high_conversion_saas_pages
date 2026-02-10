import Layout08Brutalist from '@/components/layouts/Layout08Brutalist';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme08Page() {
    const theme = getThemeBySlug('theme-08-ecommerce');

    if (!theme) {
        notFound();
    }

    return <Layout08Brutalist theme={theme} />;
}

export const metadata = {
    title: 'ShopZero - E-commerce Platform',
    description: 'E-commerce without the complexity for modern brands',
};
