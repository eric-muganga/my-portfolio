import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Lora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./Provider";

const inter = Inter({
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora",
});

const jetBrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eric Muganga",
  description: "Eric Muganga Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrains_Mono.className}  ${lora.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
