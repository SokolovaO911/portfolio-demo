import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Olha Sokolova — UI/UX Designer",
  description:
    "Junior UI/UX designer creating socially meaningful apps and platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
