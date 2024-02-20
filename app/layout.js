import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const revalidate = 3600;

export const metadata = {
  title: {
    template: "Star Wars Bookcase - %s",
    default: "Star Wars Bookcase",
  },
  description: "My personal Star Wars Bookcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <nav>
          <h1>
            <Link href="/">Star Wars Bookcase</Link>
          </h1>
          <ul>
            <li className="menu legendsMenu">
              Legends
              <ul>
                <li>
                  <Link href="/legends/timeline-order">By Timeline</Link>
                </li>
                <li>
                  <Link href="/legends/release-date">By Release Date</Link>
                </li>
                <li>
                  <Link href="/legends/by-author">By Author</Link>
                </li>
                <li>
                  <Link href="/legends/by-series">By Series</Link>
                </li>
              </ul>
            </li>
            <li className="menu canonMenu">
              Canon
              <ul>
                <li>
                  <Link href="/canon/timeline-order">By Timeline</Link>
                </li>
                <li>
                  <Link href="/canon/release-date">By Release Date</Link>
                </li>
                <li>
                  <Link href="/canon/by-author">By Author</Link>
                </li>
                <li>
                  <Link href="/canon/by-series">By Series</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
