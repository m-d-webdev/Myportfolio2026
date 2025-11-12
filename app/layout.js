import GreatCursor from "@/Client/Main-page/GreatCursor";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title: {
    default: "Mustapha Iderkaoui – Full Stack Developer",
    template: "%s | Mustapha Iderkaoui",
  },
  description:
    "Mustapha Iderkaoui is a full stack developer building fast, inclusive, and visually refined web applications using the MERN stack and Next.js.",
  keywords: [
    "Mustapha Iderkaoui",
    "Full Stack Developer",
    "MERN Stack",
    "Next.js",
    "React",
    "Node.js",
    "Web Developer",
    "Portfolio",
  ],
  metadataBase: new URL("https://www.iderkaoui.site"),
  authors: [{ name: "Mustapha Iderkaoui", url: "https://www.iderkaoui.site" }],
  creator: "Mustapha Iderkaoui",
  publisher: "Mustapha Iderkaoui",
  openGraph: {
    title: "Mustapha Iderkaoui – Full Stack Developer",
    description:
      "Building fast, inclusive, and visually refined web applications using the MERN stack and Next.js.",
    url: "https://www.iderkaoui.site",
    siteName: "Mustapha Iderkaoui Portfolio",
    images: [
      {
        url: "https://www.iderkaoui.site/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mustapha Iderkaoui Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustapha Iderkaoui – Full Stack Developer",
    description:
      "Building fast, inclusive, and visually refined web applications using the MERN stack and Next.js.",
    creator: "@iderkaoui", 
    images: ["https://www.iderkaoui.site/og-image.png"],
  },
  alternates: {
    canonical: "https://www.iderkaoui.site",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GreatCursor>
        {children}
      </GreatCursor>
    </html>
  );
}
