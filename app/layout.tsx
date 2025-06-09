import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IntervueX Pro",
  description:
    "AI-powered mock interview platform to sharpen your skills and ace every round with confidence.",
  keywords: ["AI mock interview", "interview preparation", "IntervueX", "mock interview", "job prep", "AI interview assistant"],
  metadataBase: new URL("https://intervuexpro.vercel.app/"), 
  openGraph: {
    title: "IntervueX Pro",
    description:
      "Sharpen your skills and ace every round with IntervueX Pro – the AI-powered mock interview platform.",
    url: "https://intervuexpro.vercel.app/",
    siteName: "IntervueX Pro",
    images: [
      {
        url: "/logo-new.png", 
        width: 306,
        height: 241,
        alt: "IntervueX Pro Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IntervueX Pro",
    description:
      "Sharpen your skills and ace every round with IntervueX Pro – the AI-powered mock interview platform.",
    images: ["/logo-new.png"], 
    creator: "@GojiyaAkshay", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
        
        <Toaster/>
      </body>
    </html>
  );
}
