import type { Metadata } from "next";
import { SiteHeader } from "./SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olha Sokolova — Junior UI/UX Designer",
  description:
    "Junior UI/UX designer creating apps and platforms with social impact. Helping people achieve their goals without unnecessary steps.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="overflow-x-clip">
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-content flex-col gap-section px-8 pb-section pt-8 md:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
