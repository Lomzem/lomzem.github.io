import "@/styles/globals.css";
import type { Metadata } from "next";
import TopNav from "./_components/TopNav";

export const metadata: Metadata = {
  title: "Lomzem Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
