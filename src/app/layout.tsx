import { type PropsWithChildren } from "react";
import type { Metadata } from "next";

// Components
import { MoseyBankHeader } from "@/components/header";
import { MoseyBankFooter } from "@/components/footer";
import { ThemeProvider, Body } from "@/components/theme";

// Styling
import { Figtree } from "next/font/google";
import "./globals.scss";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "An Optimizely website",
  keywords: "Altudo, Accelerator",
  title: {
    default: "Altudo - An Optimizely Demo",
    template: "%s - An Optimizely Demo",
  },
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://cdn.optimizely.com/js/6697360307257344.js" async></script> */}
        <script src="https://optimizely-vercel-dev.vercel.app/edge-client/v1/20979850399/6503637065662464" referrerPolicy="no-referrer-when-downgrade" async></script>      </head>
      <ThemeProvider value={{ theme: "system" }}>
        <Body>
          <div>
            {/* <MoseyBankHeader /> */}
            {children}
            {/* <MoseyBankFooter /> */}
          </div>
        </Body>
      </ThemeProvider>
    </html>
  );
}
