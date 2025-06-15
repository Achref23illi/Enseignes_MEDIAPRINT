import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }];
}
