import { getLocaleOnServer } from '@/i18n/server';
import './styles/globals.css';
import './styles/markdown.scss';
import React from 'react';

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const locale = getLocaleOnServer();
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full bg-gray-100 text-gray-900">
        {/* Header Section */}
        <header className="bg-blue-500 text-white p-4 shadow-md">
        </header>

        {/* Main Content Section */}
        <main className="overflow-x-auto flex-1">
          <div className="w-screen h-screen min-w-[300px]">{children}</div>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white p-4 mt-auto">
          <div className="container mx-auto text-center">
          </div>
        </footer>
      </body>
    </html>
  );
};

export default LocaleLayout;