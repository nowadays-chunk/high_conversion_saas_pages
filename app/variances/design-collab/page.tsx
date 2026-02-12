import Layout05Gradient from '@/components/layouts/Layout05Gradient';
import { getThemeBySlug } from '@/lib/themes';
import { notFound } from 'next/navigation';

export default function Theme05Page() {
    const theme = getThemeBySlug('design-collab');

    if (!theme) {
        notFound();
    }

    return <Layout05Gradient theme={theme} />;
}

export const metadata = {
    title: 'DesignSync - Design Collaboration',
    description: 'Where creativity meets collaboration for modern design teams',
};
