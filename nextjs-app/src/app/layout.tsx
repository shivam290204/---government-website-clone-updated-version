import type { Metadata } from "next";
import "./globals.css";
import I18nProvider from "@/components/I18nProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Business Support Portal | Empowering Entrepreneurs",
  description: "Startup Assistance Platform and Business Launch Hub for Bihar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="h-full antialiased"
      >
        <body className="min-h-full flex flex-col">
          <I18nProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </I18nProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
