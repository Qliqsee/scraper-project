import type { Metadata } from "next";
import "../styles/globals.css";
import { GlobalContextProvider } from "../context/GlobalContext";

export const metadata: Metadata = {
  title: "Scraper Webapp demo tool",
  description: "This is a scraper Webapp demo tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
