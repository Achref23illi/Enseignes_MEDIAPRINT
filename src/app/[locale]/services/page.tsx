import { useTranslations } from 'next-intl';
import ServicesOverview from '@/components/sections/ServicesOverview';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesOverview />
    </div>
  );
} 