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
    title: "CanvasSync - Creative Collaboration Reimagined",
    description: "Where creativity meets collaboration. DesignSync is the platform for modern design teams to build together.",
    keywords: ["design collaboration", "creative tools", "team collaboration", "design workflow", "SaaS design"],
};
