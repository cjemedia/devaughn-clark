import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeVaughn Clark | Inspirational Speaker",
  description: "Chicago-based inspirational speaker focused on growth, mindset, and taking action. Book DeVaughn for your next event.",
  keywords: ["inspirational speaker", "motivational speaker", "Chicago speaker", "keynote speaker", "growth mindset"],
  authors: [{ name: "DeVaughn Clark" }],
  openGraph: {
    title: "DeVaughn Clark | Inspirational Speaker",
    description: "Inspiring Growth. One Room at a Time.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
