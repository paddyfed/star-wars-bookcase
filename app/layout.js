import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Star Wars Bookcase",
  description: "My personal Star Wars Bookcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>
              <Link href="/timeline-order">By Timeline</Link>
            </li>
            <li>
              <Link href="/release-date">By Release Date</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
