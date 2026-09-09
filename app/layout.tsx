import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home Tutions Hyderabad - Professional Home Tuition Services",
  description: "Home Tutions Hyderabad connects expert tutors with students across Hyderabad. Personalized learning, experienced tutors, and academic excellence.",
  openGraph: {
    title: "Home Tutions Hyderabad",
    description: "Professional Home Tuition Services in Hyderabad",
    url: "https://hometutionshyderabad.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#002855" />
      </head>
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
