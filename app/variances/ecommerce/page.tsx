import Layout08Brutalist from '@/components/layouts/Layout08Brutalist';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme08Page() {
    const theme = getThemeBySlug('ecommerce');

    if (!theme) {
        notFound();
    }

    return <Layout08Brutalist theme={theme} />;
}

export const metadata = {
    title: "ScaleUp Commerce - The Future of Online Retail",
    description: "E-commerce without the complexity for modern brands. Scale your business with the ShopZero platform.",
    keywords: ["ecommerce platform", "online shop", "shopping cart", "retail SaaS", "ScaleUp Commerce"],
};
