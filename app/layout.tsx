
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/utils/SmoothScroll";
import { Verdana } from "./fonts";

const APP_NAME = "KDP STUDIOS";
const APP_DESCRIPTION =
  "Event Planning and Management Services";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords:
    "Events, Artist, PR, Wedding Planner, Brand Marketing, Corporate Events, Venue & Catering",
  icons: {
    icon: [
      {
        url: "./images/logo.jpg",//Logo needs to be added
      },
    ],
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: "",
    siteName: APP_NAME,
    images: [
      {
        url: "./images/logo.jpg",//Logo needs to be added
        width: 1608,
        height: 400,
        alt: APP_NAME,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content=""
        />
      </head>
      <body
        className={`${Verdana.className} flex flex-col min-h-screen antialiased`}
      >
        <Navbar />
        <section className="flex-grow mx-auto w-full items-center justify-center pt-4">
          <SmoothScroll>{children}</SmoothScroll>
        </section>
        <Footer />
      </body>
    </html>
  );
}
