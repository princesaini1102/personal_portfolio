import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Saini - Frontend Developer",
  description: "Creative and detail-oriented Frontend Developer with experience in React.js, Next.js, Express.js. Committed to delivering intuitive user experiences and scalable solutions.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Web Development", "UI/UX"],
  authors: [{ name: "Prince Saini" }],
  creator: "Prince Saini",
  openGraph: {
    title: "Prince Saini - Frontend Developer",
    description: "Creative and detail-oriented Frontend Developer with experience in React.js, Next.js, Express.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Saini - Frontend Developer",
    description: "Creative and detail-oriented Frontend Developer with experience in React.js, Next.js, Express.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
